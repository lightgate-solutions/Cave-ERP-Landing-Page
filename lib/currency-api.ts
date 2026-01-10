/**
 * Currency Exchange Rate API Service
 * Uses ExchangeRate-API (free tier: 1,500 requests/month)
 * API Documentation: https://www.exchangerate-api.com/docs/free
 */

export interface ExchangeRates {
  base: string;
  date: string;
  rates: Record<string, number>;
}

const EXCHANGE_RATE_API_URL = "https://api.exchangerate-api.com/v4/latest/USD";
const CACHE_KEY = "exchange-rates-cache";
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

/**
 * Fetches latest exchange rates from ExchangeRate-API
 * Falls back to cached rates if API fails or rate limit is hit
 */
export async function fetchExchangeRates(): Promise<ExchangeRates | null> {
  try {
    // Check cache first
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      const { data, timestamp } = JSON.parse(cached);
      const now = Date.now();
      
      // Use cached data if it's less than 24 hours old
      if (now - timestamp < CACHE_DURATION) {
        return data;
      }
    }

    // Fetch from API
    const response = await fetch(EXCHANGE_RATE_API_URL, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data: ExchangeRates = await response.json();

    // Cache the response
    localStorage.setItem(
      CACHE_KEY,
      JSON.stringify({
        data,
        timestamp: Date.now(),
      })
    );

    return data;
  } catch (error) {
    console.warn("Failed to fetch exchange rates:", error);
    
    // Return cached data even if expired, or return null to use fallback rates
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      const { data } = JSON.parse(cached);
      return data;
    }

    return null;
  }
}

/**
 * Get exchange rate for a specific currency from USD
 * Returns the rate or null if not available
 */
export async function getExchangeRate(targetCurrency: string): Promise<number | null> {
  const rates = await fetchExchangeRates();
  
  if (!rates || !rates.rates[targetCurrency]) {
    return null;
  }

  return rates.rates[targetCurrency];
}

/**
 * Convert USD amount to target currency
 */
export async function convertFromUSD(
  usdAmount: number,
  targetCurrency: string
): Promise<number | null> {
  if (targetCurrency === "USD") {
    return usdAmount;
  }

  const rate = await getExchangeRate(targetCurrency);
  
  if (rate === null) {
    return null;
  }

  return usdAmount * rate;
}

/**
 * Fallback exchange rates (updated periodically, used if API fails)
 * Based on approximate rates as of 2024
 */
export const FALLBACK_RATES: Record<string, number> = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  NGN: 1500, // Approximately 1 USD = 1,500 NGN
  CAD: 1.35,
  AUD: 1.52,
  JPY: 150, // Approximately 1 USD = 150 JPY
  INR: 83,
  ZAR: 18.5,
  KES: 130,
  GHS: 12.5,
};

/**
 * Get exchange rate with fallback
 */
export async function getExchangeRateWithFallback(
  targetCurrency: string
): Promise<number> {
  const rate = await getExchangeRate(targetCurrency);
  return rate ?? FALLBACK_RATES[targetCurrency] ?? 1;
}
