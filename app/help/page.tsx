import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AnchorLink } from "@/components/marketing/anchor-link";
import { HelpSearch } from "@/components/marketing/help-search";
import { Logo } from "@/components/marketing/logo";
import { MobileNav } from "@/components/marketing/mobile-nav";
import { CollapsibleTicketForm } from "@/components/marketing/collapsible-ticket-form";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  MessageCircle,
  Book,
  Mail,
  Phone,
  Clock,
  HelpCircle,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function HelpPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/95 shadow-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Logo />

          <nav className="hidden items-center space-x-6 md:flex">
            <AnchorLink
              href="/#features"
              className="text-sm font-medium text-foreground transition-all duration-300 px-3 py-1.5 rounded-md relative bg-transparent hover:shadow-md hover:text-primary"
            >
              Features
            </AnchorLink>
            <AnchorLink
              href="/#pricing"
              className="text-sm font-medium text-foreground transition-all duration-300 px-3 py-1.5 rounded-md relative bg-transparent hover:shadow-md hover:text-primary"
            >
              Pricing
            </AnchorLink>
            <Link
              href="/documentation"
              className="text-sm font-medium text-foreground transition-all duration-300 px-3 py-1.5 rounded-md relative bg-transparent hover:shadow-md hover:text-primary"
            >
              Documentation
            </Link>
            <Link
              href="/help"
              className="text-sm font-medium text-primary font-semibold transition-all duration-300 px-3 py-1.5 rounded-md relative bg-transparent hover:shadow-md"
            >
              Help
            </Link>
          </nav>

          <div className="flex items-center space-x-3">
            <ThemeToggle />
            <Button
              variant="outline"
              size="sm"
              className="hidden md:flex rounded-full font-medium px-6 h-10 bg-card border-border text-card-foreground hover:bg-accent hover:text-accent-foreground shadow-sm"
            >
              <Link href="https://dashboard.cave.ng/auth/login" target="_blank" prefetch={true}>
                Sign In
              </Link>
            </Button>
            <Button
              size="sm"
              asChild
              className="hidden md:flex rounded-full font-semibold px-6 h-10 bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg transition-all"
            >
              <Link href="https://dashboard.cave.ng/auth/register" target="_blank" prefetch={true}>
                Try It Free
              </Link>
            </Button>
            <MobileNav />
          </div>
        </div>
      </header>

      <main className="flex-1 bg-background">
        {/* Hero Section */}
        <section className="relative border-b border-border bg-gradient-to-b from-background via-background to-muted/30 py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl transition-opacity duration-700 ease-out">
                How can we help you?
              </h1>
              <p className="mb-10 text-lg text-muted-foreground leading-relaxed md:text-xl transition-opacity duration-700 ease-out delay-75">
                Find answers, get support, and discover everything you need to
                succeed with CAVE ERP
              </p>

              {/* Enhanced Search Bar */}
              <div className="mx-auto max-w-2xl transition-opacity duration-700 ease-out delay-150">
                <HelpSearch />
              </div>
            </div>
          </div>
        </section>

        {/* Help Categories - Enhanced */}
        <section
          id="categories"
          className="container mx-auto px-4 py-16 md:px-6 md:py-20"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
                Browse by Category
              </h2>
              <p className="text-lg text-muted-foreground">
                Explore our organized knowledge base
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Book,
                  title: "Getting Started",
                  description:
                    "Learn the basics of CAVE ERP and get up and running quickly",
                  href: "/documentation/getting-started",
                },
                {
                  icon: CheckCircle,
                  title: "Features & Modules",
                  description:
                    "Explore all CAVE ERP capabilities and powerful features",
                  href: "/documentation/modules",
                },
                {
                  icon: HelpCircle,
                  title: "Account & Billing",
                  description:
                    "Manage your subscription, payments, and account settings",
                  href: "/documentation",
                },
                {
                  icon: MessageCircle,
                  title: "Troubleshooting",
                  description: "Find solutions to common issues and problems",
                  href: "#faqs",
                },
                {
                  icon: Phone,
                  title: "Integrations",
                  description:
                    "Connect CAVE ERP with your favorite tools and services",
                  href: "/documentation/api",
                },
                {
                  icon: Clock,
                  title: "Best Practices",
                  description: "Learn tips, tricks, and optimal usage patterns",
                  href: "/documentation/tutorials",
                },
              ].map((category, index) => {
                // Assign subtle color lights for each category icon
                const iconColors = [
                  { bg: "bg-blue-500/10", text: "text-blue-600 dark:text-blue-400" }, // Getting Started
                  { bg: "bg-purple-500/10", text: "text-purple-600 dark:text-purple-400" }, // Features & Modules
                  { bg: "bg-green-500/10", text: "text-green-600 dark:text-green-400" }, // Account & Billing
                  { bg: "bg-orange-500/10", text: "text-orange-600 dark:text-orange-400" }, // Troubleshooting
                  { bg: "bg-indigo-500/10", text: "text-indigo-600 dark:text-indigo-400" }, // Integrations
                  { bg: "bg-teal-500/10", text: "text-teal-600 dark:text-teal-400" }, // Best Practices
                ];
                const iconColor = iconColors[index] || iconColors[0];

                return (
                  <Link key={category.title} href={category.href}>
                    <Card className="group flex h-full flex-col border-border bg-gradient-to-br from-card to-muted/20 p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-sm hover:-translate-y-0.5">
                      <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${iconColor.bg} ${iconColor.text} transition-all duration-300`}>
                        <category.icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-105" />
                      </div>
                      <h3 className="mb-2 text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                        {category.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {category.description}
                      </p>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQs - Enhanced */}
        <section
          id="faqs"
          className="border-t border-border bg-background py-12 md:py-16"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              <div className="mb-10 text-center">
                <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-muted-foreground">
                  Quick answers to common questions
                </p>
              </div>

              <Accordion type="single" collapsible className="w-full space-y-2">
                <AccordionItem
                  value="item-1"
                  className="rounded-lg border border-border bg-card px-4 transition-all hover:border-primary"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                    How do I get started with CAVE ERP?
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-muted-foreground">
                    Getting started is easy! Sign up for a free trial, create
                    your organization profile, and follow our quick setup
                    wizard. You'll be up and running in less than 10 minutes.
                    Our onboarding team is also available to help you with the
                    initial setup.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  id="faq-2"
                  value="item-2"
                  className="rounded-lg border border-border bg-card px-4 transition-all hover:border-primary"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                    What payment methods do you accept?
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-muted-foreground">
                    We accept all major credit cards (Visa, Mastercard, American
                    Express), bank transfers, and PayPal. For enterprise
                    customers, we also offer invoice-based billing with NET 30
                    terms.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  id="faq-3"
                  value="item-3"
                  className="rounded-lg border border-border bg-card px-4 transition-all hover:border-primary"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                    Can I migrate data from my current system?
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-muted-foreground">
                    Yes! CAVE ERP supports data migration from most major ERP
                    systems. Our migration specialists will work with you to
                    ensure a smooth transition with zero data loss. We provide
                    dedicated migration tools and support for enterprise
                    customers.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  id="faq-4"
                  value="item-4"
                  className="rounded-lg border border-border bg-card px-4 transition-all hover:border-primary"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                    Is my data secure?
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-muted-foreground">
                    Absolutely. We use bank-grade 256-bit SSL encryption for all
                    data transmission and storage. Our infrastructure is SOC 2
                    Type II certified, GDPR compliant, and ISO 27001 certified.
                    We perform regular security audits and maintain 99.9% uptime
                    SLA.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  id="faq-5"
                  value="item-5"
                  className="rounded-lg border border-border bg-card px-4 transition-all hover:border-primary"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                    Can I customize CAVE ERP for my organization?
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-muted-foreground">
                    Yes! CAVE ERP is highly customizable. You can create custom
                    fields, workflows, reports, and integrations. Enterprise
                    customers can also request custom modules developed
                    specifically for their needs.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  id="faq-6"
                  value="item-6"
                  className="rounded-lg border border-border bg-card px-4 transition-all hover:border-primary"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                    What kind of support do you offer?
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-muted-foreground">
                    We offer email support for all plans, priority support for
                    Professional plans, and 24/7 phone support with dedicated
                    account managers for Enterprise customers. We also provide
                    extensive documentation, video tutorials, and a community
                    forum.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  id="faq-7"
                  value="item-7"
                  className="rounded-lg border border-border bg-card px-4 transition-all hover:border-primary"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                    Do you offer training for my team?
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-muted-foreground">
                    Yes! We offer comprehensive training programs including live
                    webinars, on-site training for enterprise customers, video
                    tutorials, and a self-paced learning platform. Training can
                    be customized to your organization's specific needs.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  id="faq-8"
                  value="item-8"
                  className="rounded-lg border border-border bg-card px-4 transition-all hover:border-primary"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                    Can I cancel my subscription anytime?
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-muted-foreground">
                    Yes, you can cancel your subscription at any time with no
                    cancellation fees. If you cancel, you'll have access to your
                    data for 30 days, and we can provide a full data export upon
                    request.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Support Ticket Form - Collapsible */}
        <section
          id="submit-ticket"
          className="border-t border-border bg-background py-12 md:py-16"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              <div className="mb-8 text-center">
                <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
                  Still Need Help?
                </h2>
                <p className="text-lg text-muted-foreground">
                  Can't find what you're looking for? Submit a support ticket
                  and we'll assist you
                </p>
              </div>
              <CollapsibleTicketForm />
            </div>
          </div>
        </section>

        {/* Additional Contact Options - Simplified */}
        <section className="border-t border-border bg-background py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <div className="mb-8 text-center">
                <h2 className="mb-3 text-2xl font-bold text-foreground md:text-3xl">
                  Other Ways to Reach Us
                </h2>
                <p className="text-muted-foreground">
                  Prefer a different contact method? We're here for you.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <Card className="group border-border/50 p-6 text-center transition-all hover:border-primary hover:shadow-lg">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10 text-green-600 dark:text-green-400">
                    <Mail className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">
                    Email Us
                  </h3>
                  <p className="mb-3 text-sm text-muted-foreground">
                    Get help via email within 24 hours
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="mailto:contact@lightgatesolutions.com">
                      Send Email
                    </Link>
                  </Button>
                </Card>

                <Card className="group border-border/50 p-6 text-center transition-all hover:border-primary hover:shadow-lg">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/10 text-orange-600 dark:text-orange-400">
                    <Phone className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">
                    Call Us
                  </h3>
                  <p className="mb-3 text-sm text-muted-foreground">
                    Monday - Friday, 8:00 AM - 8:00 PM (EST)
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="tel:+2347046705211">Call Now</Link>
                  </Button>
                </Card>
              </div>

              {/* Support Hours - Compact */}
              <Card className="mt-6 border-border/50 bg-muted/30 p-6">
                <div className="flex items-center justify-center gap-4 text-center">
                  <Clock className="h-5 w-5 text-primary" />
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">
                      Support Hours:
                    </span>{" "}
                    Mon-Fri 8AM-8PM EST | Sat 10AM-6PM EST |{" "}
                    <span className="font-medium text-primary">
                      24/7 for Enterprise
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/50">
        <div className="container mx-auto px-4 py-16 md:px-6">
          <div className="grid gap-10 md:grid-cols-4">
            <div>
              <div className="mb-6">
                <Logo />
              </div>
              <p className="text-base leading-relaxed text-foreground/80">
                The complete operating system for your organization
              </p>
            </div>

            <div>
              <h3 className="mb-6 text-base font-bold tracking-tight">
                Product
              </h3>
              <ul className="space-y-3 text-base">
                <li>
                  <Link
                    href="/#features"
                    className="text-muted-foreground hover:text-foreground font-medium transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#pricing"
                    className="text-muted-foreground hover:text-foreground font-medium transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/documentation"
                    className="text-muted-foreground hover:text-foreground font-medium transition-colors"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground font-medium transition-colors"
                  >
                    API
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-6 text-base font-bold tracking-tight">
                Support
              </h3>
              <ul className="space-y-3 text-base">
                <li>
                  <Link
                    href="/help"
                    className="text-muted-foreground hover:text-foreground font-medium transition-colors"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground font-medium transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/community"
                    className="text-muted-foreground hover:text-foreground font-medium transition-colors"
                  >
                    Community
                  </Link>
                </li>
                <li>
                  <Link
                    href="/status"
                    className="text-muted-foreground hover:text-foreground font-medium transition-colors"
                  >
                    Status
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-6 text-base font-bold tracking-tight">
                Company
              </h3>
              <ul className="space-y-3 text-base">
                <li>
                  <Link
                    href="/about"
                    className="text-muted-foreground hover:text-foreground font-medium transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-muted-foreground hover:text-foreground font-medium transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-muted-foreground hover:text-foreground font-medium transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-muted-foreground hover:text-foreground font-medium transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-border pt-8 text-center">
            <p className="text-base font-medium text-muted-foreground">
              &copy; 2025 CAVE ERP. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
