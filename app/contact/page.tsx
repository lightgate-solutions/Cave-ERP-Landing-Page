"use client";

import Link from "next/link";
import { Logo } from "@/components/marketing/logo";
import { NavLinks } from "@/components/marketing/nav-links";
import { MobileNav } from "@/components/marketing/mobile-nav";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Mail,
  Phone,
  MessageCircle,
  Clock,
  MapPin,
  HelpCircle,
  Building2,
  ExternalLink,
  Send,
  Globe,
} from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/95 shadow-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Logo />
          <NavLinks />
          <div className="flex items-center space-x-3">
            <ThemeToggle />
            <Button
              variant="outline"
              size="sm"
              className="hidden md:flex rounded-full font-medium px-6 h-10 bg-card border-border text-card-foreground hover:bg-accent hover:text-accent-foreground shadow-sm"
              asChild
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
        <section className="border-b border-border bg-background py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-8 flex items-center justify-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <h1 className="text-4xl font-bold text-foreground md:text-5xl">
                  Contact Us
                </h1>
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground">
                We're here to help! Get in touch with our team for support, sales inquiries, or general questions about CAVE ERP.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
          <div className="mx-auto max-w-6xl">
            {/* Contact Methods Grid */}
            <div className="mb-16 grid gap-6 md:grid-cols-3">
              {/* General Support */}
              <Card className="flex flex-col border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  <HelpCircle className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  General Support
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  For technical support, account questions, or general inquiries
                </p>
                <div className="mt-auto space-y-2">
                  <a
                    href="mailto:support@lightgatesolutions.com"
                    className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    <Mail className="h-4 w-4" />
                    support@lightgatesolutions.com
                  </a>
                  <p className="text-xs text-muted-foreground">
                    <Clock className="mr-1 inline h-3 w-3" />
                    Response within 24 hours
                  </p>
                </div>
              </Card>

              {/* Sales Inquiries */}
              <Card className="flex flex-col border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10 text-green-600 dark:text-green-400">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  Sales & Partnerships
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  Interested in our plans, pricing, or partnership opportunities
                </p>
                <div className="mt-auto space-y-2">
                  <a
                    href="mailto:sales@lightgatesolutions.com"
                    className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    <Mail className="h-4 w-4" />
                    sales@lightgatesolutions.com
                  </a>
                  <p className="text-xs text-muted-foreground">
                    <Clock className="mr-1 inline h-3 w-3" />
                    Response within 48 hours
                  </p>
                </div>
              </Card>

              {/* Enterprise */}
              <Card className="flex flex-col border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400">
                  <Building2 className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  Enterprise Customers
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  For enterprise inquiries, custom agreements, and dedicated support
                </p>
                <div className="mt-auto space-y-2">
                  <a
                    href="mailto:enterprise@lightgatesolutions.com"
                    className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    <Mail className="h-4 w-4" />
                    enterprise@lightgatesolutions.com
                  </a>
                  <p className="text-xs text-muted-foreground">
                    <Clock className="mr-1 inline h-3 w-3" />
                    Dedicated account manager
                  </p>
                </div>
              </Card>
            </div>

            {/* Additional Information */}
            <div className="grid gap-8 md:grid-cols-2">
              {/* Company Information */}
              <Card className="border-border bg-card p-6">
                <h3 className="mb-4 text-xl font-semibold text-foreground">
                  Company Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Building2 className="mt-1 h-5 w-5 shrink-0 text-muted-foreground" />
                    <div>
                      <p className="font-medium text-foreground">CAVE ERP</p>
                      <p className="text-sm text-muted-foreground">
                        A product of LightGate Solutions (LGS)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="mt-1 h-5 w-5 shrink-0 text-muted-foreground" />
                    <div>
                      <p className="font-medium text-foreground">Website</p>
                      <Link
                        href="https://www.lightgatesolutions.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                      >
                        www.lightgatesolutions.com
                        <ExternalLink className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Helpful Resources */}
              <Card className="border-border bg-card p-6">
                <h3 className="mb-4 text-xl font-semibold text-foreground">
                  Helpful Resources
                </h3>
                <div className="space-y-3">
                  <Link
                    href="/help"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <HelpCircle className="h-4 w-4" />
                    Help Center & Documentation
                  </Link>
                  <Link
                    href="/community"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Community Forums
                  </Link>
                  <Link
                    href="/status"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Clock className="h-4 w-4" />
                    System Status
                  </Link>
                  <Link
                    href="/blog"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Blog & Updates
                  </Link>
                </div>
              </Card>
            </div>

            {/* Support Ticket CTA */}
            <Card className="mt-8 border-primary/20 bg-primary/5 p-8 text-center">
              <h3 className="mb-3 text-2xl font-semibold text-foreground">
                Need Immediate Assistance?
              </h3>
              <p className="mb-6 text-base leading-relaxed text-muted-foreground">
                Submit a support ticket through our Help Center for faster response times
              </p>
              <Button asChild size="lg" className="rounded-full">
                <Link href="/help#submit-ticket">
                  <Send className="mr-2 h-4 w-4" />
                  Submit Support Ticket
                </Link>
              </Button>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/50">
        <div className="container mx-auto px-4 py-16 md:px-6">
          <div className="grid gap-10 md:grid-cols-4">
            <div>
              <div className="mb-6">
                <Logo />
              </div>
              <p className="text-base leading-relaxed text-muted-foreground">
                The complete operating system for your organization
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                A product of{" "}
                <Link
                  href="https://www.lightgatesolutions.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary hover:underline"
                >
                  LightGate Solutions
                </Link>
              </p>
            </div>
            <div>
              <h3 className="mb-6 text-base font-bold tracking-tight">Product</h3>
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
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-base font-bold tracking-tight">Support</h3>
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
                    href="/contact"
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
              <h3 className="mb-6 text-base font-bold tracking-tight">Company</h3>
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
              &copy; {new Date().getFullYear()} CAVE ERP. All rights reserved.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              CAVE ERP is a product of{" "}
              <Link
                href="https://www.lightgatesolutions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary hover:underline"
              >
                LightGate Solutions
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
