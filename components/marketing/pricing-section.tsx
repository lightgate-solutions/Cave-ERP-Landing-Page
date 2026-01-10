"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { PricingCard } from "./pricing-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  CurrencySelector,
  type Currency,
  CURRENCIES,
} from "./currency-selector";
import { convertPrice, parseNGNPrice } from "@/lib/currency-utils";
import { convertFromUSD, getExchangeRateWithFallback } from "@/lib/currency-api";

interface Plan {
  name: string;
  nameSubtext?: string;
  description?: string;
  price?: string | null; // Legacy support
  priceUSD?: number; // Base price in USD
  priceNGN?: number; // Fixed price in NGN
  buttonText: string;
  buttonHref?: string;
  features: string[];
  recommended: boolean;
  isEnterprise?: boolean;
}

interface PricingSectionProps {
  plans: Plan[];
}

type BillingPeriod = "monthly" | "yearly";

export function PricingSection({ plans }: PricingSectionProps) {
  // Default to USD (first in array) for global recognition
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>(
    CURRENCIES[0], // USD is now first
  );
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("monthly");
  const [mounted, setMounted] = useState(false);
  const [exchangeRates, setExchangeRates] = useState<Record<string, number>>({});
  const [loadingRates, setLoadingRates] = useState(true);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Load saved currency preference, default to USD if not set
    const savedCurrency = localStorage.getItem("preferred-currency");
    if (savedCurrency) {
      const currency = CURRENCIES.find((c) => c.code === savedCurrency);
      if (currency) {
        setSelectedCurrency(currency);
      } else {
        // If saved currency not found, default to USD
        setSelectedCurrency(CURRENCIES[0]); // USD is now first
      }
    } else {
      // No saved preference, default to USD
      setSelectedCurrency(CURRENCIES[0]); // USD is now first
    }
    // Load saved billing period preference
    const savedBillingPeriod = localStorage.getItem("preferred-billing-period") as BillingPeriod | null;
    if (savedBillingPeriod && (savedBillingPeriod === "monthly" || savedBillingPeriod === "yearly")) {
      setBillingPeriod(savedBillingPeriod);
    }

    // Fetch exchange rates
    const fetchRates = async () => {
      setLoadingRates(true);
      try {
        // Import fallback rates for immediate use
        const { FALLBACK_RATES } = await import("@/lib/currency-api");
        const { fetchExchangeRates } = await import("@/lib/currency-api");
        
        // Start with fallback rates
        const rates: Record<string, number> = { ...FALLBACK_RATES };
        setExchangeRates(rates);
        
        // Try to fetch live rates (non-blocking)
        try {
          const liveRates = await fetchExchangeRates();
          if (liveRates && liveRates.rates) {
            // Update with live rates where available
            Object.keys(liveRates.rates).forEach((code) => {
              if (liveRates.rates[code]) {
                rates[code] = liveRates.rates[code];
              }
            });
            // Ensure USD is always 1
            rates["USD"] = 1;
            setExchangeRates({ ...rates });
          }
        } catch (apiError) {
          console.warn("Using fallback exchange rates:", apiError);
          // Keep using fallback rates
        }
      } catch (error) {
        console.error("Error initializing exchange rates:", error);
        // Use static fallback from currency selector
        // currency.rate is: 1 NGN = currency.rate * target_currency
        // So 1 USD = 1500 NGN = 1500 * currency.rate * target_currency
        const fallbackRates: Record<string, number> = {};
        const USD_TO_NGN = 1500; // Approximate rate
        CURRENCIES.forEach((currency) => {
          if (currency.code === "USD") {
            fallbackRates["USD"] = 1;
          } else {
            // Convert: 1 USD = USD_TO_NGN * currency.rate in target currency
            fallbackRates[currency.code] = USD_TO_NGN * currency.rate;
          }
        });
        setExchangeRates(fallbackRates);
      } finally {
        setLoadingRates(false);
        setMounted(true);
      }
    };

    fetchRates();
  }, []);

  const formatPrice = (plan: Plan): string => {
    // Handle legacy pricing structure
    if (plan.price !== undefined) {
      if (!plan.price || plan.price === "₦0") {
        return `${selectedCurrency.symbol}0`;
      }
      const ngnPrice = parseNGNPrice(plan.price);
      const finalPrice = billingPeriod === "yearly" ? ngnPrice * 11 : ngnPrice;
      return convertPrice(finalPrice, selectedCurrency);
    }

    // Handle new pricing structure with priceUSD and priceNGN
    if (plan.priceUSD === undefined && plan.priceNGN === undefined) {
      return "";
    }

    // For NGN, use fixed price
    if (selectedCurrency.code === "NGN" && plan.priceNGN !== undefined) {
      const finalPrice = billingPeriod === "yearly" ? plan.priceNGN * 11 : plan.priceNGN;
      return `₦${finalPrice.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
    }

    // For other currencies, convert from USD
    if (plan.priceUSD !== undefined && plan.priceUSD !== null) {
      const basePrice = plan.priceUSD;
      const finalPrice = billingPeriod === "yearly" ? basePrice * 11 : basePrice;
      
      // Get exchange rate for selected currency
      let rate = exchangeRates[selectedCurrency.code];
      
      // If rate not available, calculate from currency selector fallback
      if (!rate) {
        const currency = CURRENCIES.find((c) => c.code === selectedCurrency.code);
        if (currency && currency.code === "USD") {
          rate = 1;
        } else if (currency) {
          // Convert from NGN rate to USD rate (currency.rate is NGN to currency, we need currency to USD)
          // If 1 NGN = currency.rate of target, then 1 USD = 1500 NGN = 1500 * currency.rate of target
          // So 1 USD = 1 / (1500 * currency.rate) in target currency? No, let's use a simpler approach
          // If rate is relative to NGN: 1 NGN = rate * target, then 1 USD = 1500 NGN = 1500 * rate * target
          // So 1 USD = 1500 * rate in target currency
          rate = 1500 * currency.rate;
        } else {
          rate = 1;
        }
      }
      
      const convertedPrice = finalPrice * rate;

      // Format based on currency type
      if (selectedCurrency.code === "JPY" || selectedCurrency.code === "KRW") {
        // Japanese Yen and Korean Won don't use decimals
        return `${selectedCurrency.symbol}${Math.round(convertedPrice).toLocaleString("en-US")}`;
      }

      // For other currencies, show 2 decimal places
      const formatted = new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(convertedPrice);

      return `${selectedCurrency.symbol}${formatted}`;
    }

    return "";
  };

  const handleBillingPeriodChange = (period: BillingPeriod) => {
    setBillingPeriod(period);
    localStorage.setItem("preferred-billing-period", period);
  };

  const renderPlanFeatures = (plan: Plan, isMobile: boolean = false) => (
    <>
      {/* Description - only show if not shown in trigger */}
      {plan.description && isMobile && (
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          {plan.description}
        </p>
      )}
      {plan.description && !isMobile && (
        <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
          {plan.description}
        </p>
      )}

      {/* Price Section - only for desktop */}
      {((plan.priceUSD !== undefined && plan.priceUSD !== null) || plan.price) && !isMobile && (
        <div className="mb-6 pb-6 border-b">
          <div className="flex flex-col gap-1">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold tracking-tight">
                {formatPrice(plan)}
              </span>
              <span className="text-base text-muted-foreground font-medium">
                / user / {billingPeriod === "yearly" ? "year" : "month"}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Features List */}
      <ul className={`space-y-3.5 ${isMobile ? 'mb-6' : 'mb-8 flex-1'}`}>
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <span className="text-sm leading-relaxed text-foreground">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <div className={`pt-4 ${!isMobile ? 'mt-auto' : ''}`}>
        {plan.isEnterprise ? (
          <Button
            size="lg"
            className="w-full text-base font-semibold h-12"
            variant="outline"
            asChild
          >
            <Link href={plan.buttonHref || "/help"} onClick={(e) => e.stopPropagation()}>
              {plan.buttonText}
            </Link>
          </Button>
        ) : (
          <Button
            size="lg"
            className={`w-full text-base font-semibold h-12 transition-all ${
              plan.recommended
                ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl"
                : "hover:bg-primary hover:text-primary-foreground"
            }`}
            variant={plan.recommended ? "default" : "outline"}
            asChild
          >
            <Link href="/auth/register" onClick={(e) => e.stopPropagation()}>
              {plan.buttonText}
            </Link>
          </Button>
        )}
      </div>
    </>
  );

  const renderDesktopCard = (plan: Plan) => {
    const pricingCardContent = (
      <PricingCard
        key={plan.name}
        isRecommended={plan.recommended}
        isEnterprise={plan.isEnterprise}
      >
        <div className="flex flex-col h-full p-8">
          {/* Header Section */}
          <div className="mb-6">
            <div className="flex items-center gap-3 flex-wrap">
              <h3 className="text-2xl font-bold tracking-tight">
                {plan.name}
              </h3>
              {plan.recommended && (
                <span className="text-lg font-semibold text-orange-600">
                  Recommended
                </span>
              )}
            </div>
            {plan.nameSubtext && (
              <p className="mt-2 text-base font-medium text-muted-foreground">
                {plan.nameSubtext}
              </p>
            )}
          </div>

          {renderPlanFeatures(plan, false)}
        </div>
      </PricingCard>
    );

    return plan.isEnterprise ? (
      <div key={plan.name} className="group">
        {pricingCardContent}
      </div>
    ) : (
      <Link key={plan.name} href="/auth/register" className="group">
        {pricingCardContent}
      </Link>
    );
  };

  return (
    <section
      id="pricing"
      className="border-y border-border bg-background py-20 md:py-32"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Choose Your Path to Organizational Excellence
            </h2>
            <p className="text-lg text-muted-foreground">
              From startup agility to enterprise power—select the perfect CAVE
              plan that scales with your ambition and transforms your operations
            </p>
            {/* VAT Disclaimer */}
            <p className="mt-2 text-sm text-muted-foreground/80">
              VAT will be added at checkout based on your location.
            </p>
            {/* Billing Period Toggle and Currency Selector */}
            <div className="mt-8 flex flex-col items-center justify-center gap-6">
              {/* Billing Period Toggle */}
              <div className="flex flex-col items-center gap-2">
                <div className="inline-flex items-center rounded-lg border border-border bg-muted/50 p-1">
                  <button
                    type="button"
                    onClick={() => handleBillingPeriodChange("monthly")}
                    className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${
                      billingPeriod === "monthly"
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    type="button"
                    onClick={() => handleBillingPeriodChange("yearly")}
                    className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${
                      billingPeriod === "yearly"
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Yearly
                  </button>
                </div>
                {/* Subtle discount indicator - only show when yearly is selected */}
                {billingPeriod === "yearly" && (
                  <p className="text-xs text-muted-foreground/80 italic">
                    1 month free (pay for 11 months)
                  </p>
                )}
              </div>
              {/* Currency Selector - positioned below */}
              <CurrencySelector onCurrencyChange={setSelectedCurrency} />
            </div>
          </div>

          {/* Mobile Accordion Layout - Show accordion on mobile after mount */}
          {mounted && isMobile ? (
            <Accordion type="single" collapsible className="w-full space-y-4">
              {plans.map((plan) => (
                <AccordionItem
                  key={plan.name}
                  value={plan.name}
                  className="rounded-xl border border-border bg-card px-4 data-[state=open]:border-primary/30 data-[state=open]:shadow-lg"
                >
                  <AccordionTrigger className="py-6 hover:no-underline">
                    <div className="flex flex-col items-start gap-2 text-left w-full pr-4">
                      <div className="flex items-center gap-3 flex-wrap w-full">
                        <h3 className="text-xl font-bold tracking-tight">
                          {plan.name}
                        </h3>
                        {plan.recommended && (
                          <span className="text-sm font-semibold text-orange-600">
                            Recommended
                          </span>
                        )}
                      </div>
                      {plan.nameSubtext && (
                        <p className="text-sm font-medium text-muted-foreground">
                          {plan.nameSubtext}
                        </p>
                      )}
                      {((plan.priceUSD !== undefined && plan.priceUSD !== null) || plan.price) && (
                        <div className="flex flex-col gap-1 mt-2">
                          <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold tracking-tight">
                              {formatPrice(plan)}
                            </span>
                            <span className="text-sm text-muted-foreground font-medium">
                              / user / {billingPeriod === "yearly" ? "year" : "month"}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pt-2">
                    {renderPlanFeatures(plan, true)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            /* Desktop Grid Layout */
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {plans.map((plan) => renderDesktopCard(plan))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
