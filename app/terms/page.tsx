"use client";

import Link from "next/link";
import { Logo } from "@/components/marketing/logo";
import { NavLinks } from "@/components/marketing/nav-links";
import { MobileNav } from "@/components/marketing/mobile-nav";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { AnchorLink } from "@/components/marketing/anchor-link";
import {
  FileText,
  Scale,
  AlertCircle,
  Shield,
  CreditCard,
  XCircle,
  ExternalLink,
  Building2,
} from "lucide-react";

export default function TermsPage() {
  const lastUpdated = "January 15, 2025";
  const effectiveDate = "January 1, 2025";

  const tableOfContents = [
    { id: "acceptance", title: "Acceptance of Terms" },
    { id: "description", title: "Description of Service" },
    { id: "accounts", title: "User Accounts" },
    { id: "subscription", title: "Subscription and Billing" },
    { id: "usage", title: "Acceptable Use" },
    { id: "intellectual-property", title: "Intellectual Property" },
    { id: "user-content", title: "User Content" },
    { id: "termination", title: "Termination" },
    { id: "disclaimers", title: "Disclaimers" },
    { id: "limitation", title: "Limitation of Liability" },
    { id: "indemnification", title: "Indemnification" },
    { id: "enterprise-customers", title: "Enterprise Customers" },
    { id: "governing-law", title: "Governing Law" },
    { id: "changes", title: "Changes to Terms" },
    { id: "contact", title: "Contact Information" },
  ];

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
            <div className="mx-auto max-w-4xl">
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Scale className="h-6 w-6" />
                </div>
                <div>
                  <h1 className="mb-2 text-4xl font-bold text-foreground md:text-5xl">
                    Terms of Service
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    Last updated: {lastUpdated} · Effective: {effectiveDate}
                  </p>
                </div>
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground">
                These Terms of Service ("Terms") govern your access to and use of CAVE ERP's services. Please read these Terms carefully before using our Service. By accessing or using our Service, you agree to be bound by these Terms.
              </p>
              <div className="mt-6 rounded-lg border border-yellow-500/20 bg-yellow-500/10 p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 shrink-0 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                  <p className="text-sm leading-relaxed text-yellow-900 dark:text-yellow-200">
                    <strong className="font-semibold">Note:</strong> These Terms of Service are currently being finalized by our legal team. The content below represents a draft structure and will be updated with complete legal text upon finalization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
          <div className="mx-auto max-w-5xl">
            {/* Table of Contents - Mobile */}
            <aside className="mb-8 lg:hidden">
              <details className="rounded-lg border border-border bg-muted/30">
                <summary className="cursor-pointer p-4 font-semibold text-foreground">
                  Table of Contents
                </summary>
                <nav className="border-t border-border p-4 space-y-2">
                  {tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1.5"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </details>
            </aside>

            <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
              {/* Table of Contents - Desktop */}
              <aside className="hidden lg:block">
                <div className="sticky top-24">
                  <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Contents
                  </h2>
                  <nav className="space-y-2">
                    {tableOfContents.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1.5 rounded-md hover:bg-muted/50 px-2 -mx-2"
                      >
                        {item.title}
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>

              {/* Content */}
              <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-p:text-foreground prose-li:text-muted-foreground">
                {/* Acceptance */}
                <section id="acceptance" className="scroll-mt-24 pb-10">
                  <h2 className="mb-5 text-2xl font-bold text-foreground md:text-3xl">
                    Acceptance of Terms
                  </h2>
                  <div className="space-y-5 text-base leading-relaxed text-foreground">
                    <p>
                      These Terms of Service ("Terms") are entered into between you ("User," "you," or "your") and CAVE ERP, a product of LightGate Solutions (LGS) ("Company," "we," "us," or "our"). These Terms govern your access to and use of the CAVE ERP platform, including all related websites, services, applications, and tools (collectively, the "Service").
                    </p>
                    <p>
                      By accessing or using our Service, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not access or use the Service.
                    </p>
                    <p>
                      These Terms apply to all users of the Service, including without limitation users who are browsers, vendors, customers, merchants, and contributors of content.
                    </p>
                  </div>
                </section>

                {/* Description */}
                <section id="description" className="scroll-mt-24 border-t border-border pt-10 pb-10">
                  <h2 className="mb-5 text-2xl font-bold text-foreground md:text-3xl">
                    Description of Service
                  </h2>
                  <div className="space-y-5 text-base leading-relaxed text-foreground">
                    <p>
                      CAVE ERP is a comprehensive enterprise resource planning (ERP) platform that provides organizations with integrated solutions for finance, human resources, payroll, project management, document management, and related business operations.
                    </p>
                    <p>
                      The Service is provided through a software-as-a-service (SaaS) model, accessible via web browsers and mobile applications. We reserve the right to modify, suspend, or discontinue any part of the Service at any time, with or without notice.
                    </p>
                  </div>
                </section>

                {/* Accounts */}
                <section id="accounts" className="scroll-mt-24 border-t border-border pt-10 pb-10">
                  <h2 className="mb-5 text-2xl font-bold text-foreground md:text-3xl">
                    User Accounts
                  </h2>
                  <div className="space-y-5 text-base leading-relaxed text-foreground">
                    <p>
                      To access certain features of the Service, you must register for an account. When you create an account, you agree to:
                    </p>
                    <ul className="ml-6 list-disc space-y-2 text-base leading-relaxed text-muted-foreground">
                      <li>Provide accurate, current, and complete information</li>
                      <li>Maintain and promptly update your account information</li>
                      <li>Maintain the security of your password and account</li>
                      <li>Accept responsibility for all activities that occur under your account</li>
                      <li>Notify us immediately of any unauthorized use of your account</li>
                    </ul>
                    <p>
                      You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                    </p>
                  </div>
                </section>

                {/* Subscription */}
                <section id="subscription" className="scroll-mt-24 border-t border-border pt-10 pb-10">
                  <h2 className="mb-5 text-2xl font-bold text-foreground md:text-3xl">
                    Subscription and Billing
                  </h2>
                  <div className="space-y-6 text-base leading-relaxed text-foreground">
                    <div>
                      <h3 className="mb-3 text-xl font-semibold text-foreground">
                        Subscription Plans
                      </h3>
                      <p className="mb-3 text-base leading-relaxed text-foreground">
                        We offer various subscription plans with different features and pricing. By subscribing to a paid plan, you agree to pay all fees associated with your selected plan.
                      </p>
                      <ul className="ml-6 list-disc space-y-2 text-base leading-relaxed text-muted-foreground">
                        <li>Subscription fees are billed in advance on a monthly or annual basis</li>
                        <li>Fees are non-refundable except as required by law or as otherwise stated in these Terms</li>
                        <li>All fees are exclusive of applicable taxes, which you are responsible for paying</li>
                        <li>We reserve the right to change our pricing with 30 days' notice</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="mb-3 text-xl font-semibold text-foreground">
                        Automatic Renewal
                      </h3>
                      <p className="text-base leading-relaxed text-foreground">
                        Your subscription will automatically renew at the end of each billing period unless you cancel it before the renewal date. You may cancel your subscription at any time through your account settings.
                      </p>
                    </div>

                    <div>
                      <h3 className="mb-3 text-xl font-semibold text-foreground">
                        Refunds
                      </h3>
                      <p className="text-base leading-relaxed text-foreground">
                        Refund policies vary by subscription plan. Please refer to your specific plan details for refund information. Generally, we do not provide refunds for partial billing periods after cancellation.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Acceptable Use */}
                <section id="usage" className="scroll-mt-24 border-t border-border pt-10 pb-10">
                  <h2 className="mb-5 text-2xl font-bold text-foreground md:text-3xl">
                    Acceptable Use
                  </h2>
                  <div className="space-y-5 text-base leading-relaxed text-foreground">
                    <p>You agree not to use the Service to:</p>
                    <ul className="ml-6 list-disc space-y-2 text-base leading-relaxed text-muted-foreground">
                      <li>Violate any applicable laws or regulations</li>
                      <li>Infringe upon the rights of others, including intellectual property rights</li>
                      <li>Transmit any malicious code, viruses, or harmful software</li>
                      <li>Attempt to gain unauthorized access to the Service or related systems</li>
                      <li>Interfere with or disrupt the integrity or performance of the Service</li>
                      <li>Use the Service for any illegal, fraudulent, or unauthorized purpose</li>
                      <li>Reverse engineer, decompile, or disassemble any part of the Service</li>
                      <li>Resell, sublicense, or otherwise distribute the Service without authorization</li>
                    </ul>
                    <p>
                      We reserve the right to suspend or terminate your access to the Service if we determine that you have violated these acceptable use provisions.
                    </p>
                  </div>
                </section>

                {/* Intellectual Property */}
                <section id="intellectual-property" className="scroll-mt-24 border-t border-border pt-10 pb-10">
                  <h2 className="mb-5 text-2xl font-bold text-foreground md:text-3xl">
                    Intellectual Property Rights
                  </h2>
                  <div className="space-y-5 text-base leading-relaxed text-foreground">
                    <p>
                      The Service, including its original content, features, and functionality, is and will remain the exclusive property of CAVE ERP, LightGate Solutions, and its licensors. The Service is protected by copyright, trademark, and other laws.
                    </p>
                    <p>
                      Our trademarks, service marks, and logos may not be used in connection with any product or service without our prior written consent.
                    </p>
                    <p>
                      You retain ownership of any intellectual property rights that you hold in User Content (as defined below) that you submit, post, or display on or through the Service.
                    </p>
                  </div>
                </section>

                {/* User Content */}
                <section id="user-content" className="scroll-mt-24 border-t border-border pt-10 pb-10">
                  <h2 className="mb-5 text-2xl font-bold text-foreground md:text-3xl">
                    User Content
                  </h2>
                  <div className="space-y-5 text-base leading-relaxed text-foreground">
                    <p>
                      The Service allows you to upload, store, and process data, including organizational data, documents, and other content ("User Content"). You retain all rights in your User Content.
                    </p>
                    <p>
                      By using the Service, you grant us a worldwide, non-exclusive, royalty-free license to use, host, store, reproduce, modify, and create derivative works of your User Content solely to provide, maintain, and improve the Service.
                    </p>
                    <p>
                      You are solely responsible for your User Content and represent and warrant that:
                    </p>
                    <ul className="ml-6 list-disc space-y-2 text-base leading-relaxed text-muted-foreground">
                      <li>You have all necessary rights to upload and use your User Content</li>
                      <li>Your User Content does not violate any third-party rights</li>
                      <li>Your User Content complies with all applicable laws and regulations</li>
                      <li>Your User Content is not harmful, offensive, or illegal</li>
                    </ul>
                  </div>
                </section>

                {/* Termination */}
                <section id="termination" className="scroll-mt-24 border-t border-border pt-10 pb-10">
                  <h2 className="mb-5 text-2xl font-bold text-foreground md:text-3xl">
                    Termination
                  </h2>
                  <div className="space-y-5 text-base leading-relaxed text-foreground">
                    <p>
                      You may terminate your account at any time by canceling your subscription through your account settings or by contacting us. Upon termination, your right to use the Service will immediately cease.
                    </p>
                    <p>
                      We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason, including if you breach these Terms.
                    </p>
                    <p>
                      Upon termination, we may delete your account information and User Content. We recommend that you export your data before terminating your account.
                    </p>
                  </div>
                </section>

                {/* Disclaimers */}
                <section id="disclaimers" className="scroll-mt-24 border-t border-border pt-10 pb-10">
                  <h2 className="mb-5 text-2xl font-bold text-foreground md:text-3xl">
                    Disclaimers
                  </h2>
                  <div className="space-y-5 text-base leading-relaxed text-foreground">
                    <p>
                      THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMISSIBLE PURSUANT TO APPLICABLE LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                    </p>
                    <p>
                      We do not warrant that the Service will be uninterrupted, secure, or error-free, or that defects will be corrected. We do not warrant or make any representations regarding the use or results of the use of the Service in terms of correctness, accuracy, reliability, or otherwise.
                    </p>
                  </div>
                </section>

                {/* Limitation of Liability */}
                <section id="limitation" className="scroll-mt-24 border-t border-border pt-10 pb-10">
                  <h2 className="mb-5 text-2xl font-bold text-foreground md:text-3xl">
                    Limitation of Liability
                  </h2>
                  <div className="space-y-5 text-base leading-relaxed text-foreground">
                    <p>
                      TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL CAVE ERP, LIGHTGATE SOLUTIONS, ITS AFFILIATES, AGENTS, DIRECTORS, EMPLOYEES, OR LICENSORS BE LIABLE FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATING TO THE USE OF, OR INABILITY TO USE, THE SERVICE.
                    </p>
                    <p>
                      OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING FROM OR RELATED TO THE SERVICE SHALL NOT EXCEED THE AMOUNT YOU PAID TO US IN THE TWELVE (12) MONTHS PRIOR TO THE EVENT GIVING RISE TO THE LIABILITY.
                    </p>
                  </div>
                </section>

                {/* Indemnification */}
                <section id="indemnification" className="scroll-mt-24 border-t border-border pt-10 pb-10">
                  <h2 className="mb-5 text-2xl font-bold text-foreground md:text-3xl">
                    Indemnification
                  </h2>
                  <div className="space-y-5 text-base leading-relaxed text-foreground">
                    <p>
                      You agree to indemnify, defend, and hold harmless CAVE ERP, LightGate Solutions, its affiliates, officers, directors, employees, and agents from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including but not limited to attorney's fees) arising from:
                    </p>
                    <ul className="ml-6 list-disc space-y-2 text-base leading-relaxed text-muted-foreground">
                      <li>Your use of and access to the Service</li>
                      <li>Your violation of any term of these Terms</li>
                      <li>Your violation of any third-party right, including without limitation any copyright, property, or privacy right</li>
                      <li>Any claim that your User Content caused damage to a third party</li>
                    </ul>
                  </div>
                </section>

                {/* Enterprise Customers */}
                <section id="enterprise-customers" className="scroll-mt-24 border-t border-border pt-10 pb-10">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                      Enterprise Customers
                    </h2>
                  </div>
                  <div className="space-y-6 text-base leading-relaxed text-foreground">
                    <div className="rounded-lg border border-primary/20 bg-primary/5 p-6">
                      <p className="mb-3 font-semibold text-foreground">
                        Custom Enterprise Agreements
                      </p>
                      <p className="text-base leading-relaxed text-muted-foreground">
                        Enterprise customers with custom subscription agreements may have additional terms and conditions, service level agreements (SLAs), and provisions that supplement or modify these Terms of Service. These custom agreements take precedence over this general policy where they apply.
                      </p>
                    </div>

                    <div>
                      <h3 className="mb-3 text-xl font-semibold text-foreground">
                        Service Level Agreements (SLA)
                      </h3>
                      <p className="mb-3 text-base leading-relaxed text-foreground">
                        Enterprise customers may have access to enhanced service level agreements that include:
                      </p>
                      <ul className="ml-6 list-disc space-y-2 text-base leading-relaxed text-muted-foreground">
                        <li>Guaranteed uptime and availability metrics</li>
                        <li>Performance benchmarks and response time commitments</li>
                        <li>Escalation procedures and priority support channels</li>
                        <li>Maintenance windows and advance notification requirements</li>
                        <li>Service credits or remedies for SLA breaches</li>
                        <li>Custom monitoring and reporting requirements</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="mb-3 text-xl font-semibold text-foreground">
                        Custom Billing and Payment Terms
                      </h3>
                      <p className="mb-3 text-base leading-relaxed text-foreground">
                        Enterprise agreements may include:
                      </p>
                      <ul className="ml-6 list-disc space-y-2 text-base leading-relaxed text-muted-foreground">
                        <li>Custom pricing structures and volume discounts</li>
                        <li>Invoice-based billing and payment terms (net 30, net 60, etc.)</li>
                        <li>Multi-year contracts with renewal options</li>
                        <li>Payment methods and currency arrangements</li>
                        <li>Purchase order requirements and approval processes</li>
                        <li>Custom refund and cancellation policies</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="mb-3 text-xl font-semibold text-foreground">
                        Enhanced Support and Account Management
                      </h3>
                      <p className="mb-3 text-base leading-relaxed text-foreground">
                        Enterprise customers typically receive:
                      </p>
                      <ul className="ml-6 list-disc space-y-2 text-base leading-relaxed text-muted-foreground">
                        <li>Dedicated account manager and support team</li>
                        <li>Priority technical support with guaranteed response times</li>
                        <li>24/7 support availability (depending on agreement tier)</li>
                        <li>Custom training and onboarding programs</li>
                        <li>Regular business reviews and strategic planning sessions</li>
                        <li>Direct access to product and engineering teams</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="mb-3 text-xl font-semibold text-foreground">
                        Custom Development and Integration Services
                      </h3>
                      <p className="text-base leading-relaxed text-foreground">
                        Enterprise agreements may include provisions for custom development work, API integrations, data migration services, and white-label options. These services are typically governed by separate statements of work (SOWs) and professional services agreements.
                      </p>
                    </div>

                    <div>
                      <h3 className="mb-3 text-xl font-semibold text-foreground">
                        On-Premise and Hybrid Deployment Options
                      </h3>
                      <p className="mb-3 text-base leading-relaxed text-foreground">
                        Enterprise customers may have access to on-premise or hybrid deployment options with different terms regarding:
                      </p>
                      <ul className="ml-6 list-disc space-y-2 text-base leading-relaxed text-muted-foreground">
                        <li>Software licensing and installation rights</li>
                        <li>Data sovereignty and residency requirements</li>
                        <li>Infrastructure and hosting responsibilities</li>
                        <li>Updates, patches, and maintenance obligations</li>
                        <li>Security and compliance configurations</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="mb-3 text-xl font-semibold text-foreground">
                        Compliance and Audit Rights
                      </h3>
                      <p className="text-base leading-relaxed text-foreground">
                        Enterprise agreements may include provisions for compliance certifications, security audits, penetration testing, and regulatory assessments. Custom audit rights and reporting requirements will be specified in your enterprise agreement.
                      </p>
                    </div>

                    <div>
                      <h3 className="mb-3 text-xl font-semibold text-foreground">
                        Data Processing and Privacy
                      </h3>
                      <p className="text-base leading-relaxed text-foreground">
                        Enterprise customers typically enter into separate Data Processing Agreements (DPAs) that govern data handling, privacy, and security obligations. These DPAs supplement our Privacy Policy and provide enterprise-specific privacy and security terms.
                      </p>
                    </div>

                    <div className="rounded-lg border border-border bg-muted/30 p-6">
                      <p className="mb-2 text-sm font-semibold text-foreground">
                        Enterprise Customer Support
                      </p>
                      <p className="mb-2 text-sm text-muted-foreground">
                        For enterprise-specific terms and agreements, please contact:
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Email: <a href="mailto:enterprise@lightgatesolutions.com" className="text-primary hover:underline">enterprise@lightgatesolutions.com</a>
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        For existing enterprise customers, please contact your dedicated account manager.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Governing Law */}
                <section id="governing-law" className="scroll-mt-24 border-t border-border pt-10 pb-10">
                  <h2 className="mb-5 text-2xl font-bold text-foreground md:text-3xl">
                    Governing Law and Jurisdiction
                  </h2>
                  <div className="space-y-5 text-base leading-relaxed text-foreground">
                    <p>
                      These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law provisions.
                    </p>
                    <p>
                      Any disputes arising out of or relating to these Terms or the Service shall be subject to the exclusive jurisdiction of the courts located in [Jurisdiction].
                    </p>
                    <p className="text-sm text-muted-foreground italic">
                      Note: Specific jurisdiction details will be finalized by our legal team.
                    </p>
                  </div>
                </section>

                {/* Changes */}
                <section id="changes" className="scroll-mt-24 border-t border-border pt-10 pb-10">
                  <h2 className="mb-5 text-2xl font-bold text-foreground md:text-3xl">
                    Changes to Terms
                  </h2>
                  <div className="space-y-5 text-base leading-relaxed text-foreground">
                    <p>
                      We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.
                    </p>
                    <p>
                      What constitutes a material change will be determined at our sole discretion. Continued use of the Service after any changes to these Terms constitutes your acceptance of the new Terms.
                    </p>
                    <p>
                      If you do not agree to the modified Terms, you must stop using the Service and cancel your account.
                    </p>
                  </div>
                </section>

                {/* Contact */}
                <section id="contact" className="scroll-mt-24 border-t border-border pt-10 pb-10">
                  <h2 className="mb-5 text-2xl font-bold text-foreground md:text-3xl">
                    Contact Information
                  </h2>
                  <div className="space-y-5 text-base leading-relaxed text-foreground">
                    <p>
                      If you have any questions about these Terms of Service, please contact us:
                    </p>
                    <div className="rounded-lg border border-border bg-muted/30 p-6">
                      <p className="mb-2 font-semibold text-foreground">CAVE ERP</p>
                      <p className="mb-2 text-base text-muted-foreground">
                        A product of LightGate Solutions (LGS)
                      </p>
                      <p className="mb-2 text-base text-muted-foreground">
                        Email: <a href="mailto:legal@lightgatesolutions.com" className="text-primary hover:underline">legal@lightgatesolutions.com</a>
                      </p>
                      <p className="text-base text-muted-foreground">
                        Website: <Link href="https://www.lightgatesolutions.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">www.lightgatesolutions.com <ExternalLink className="h-3 w-3" /></Link>
                      </p>
                    </div>
                  </div>
                </section>
              </article>
            </div>
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
                    href="/community"
                    className="text-muted-foreground hover:text-foreground font-medium transition-colors"
                  >
                    Community
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
