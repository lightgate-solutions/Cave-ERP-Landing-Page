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
  Shield,
  Lock,
  Eye,
  Database,
  User,
  Mail,
  ExternalLink,
  Building2,
} from "lucide-react";

export default function PrivacyPage() {
  const lastUpdated = "January 15, 2025";

  const tableOfContents = [
    { id: "introduction", title: "Introduction" },
    { id: "information-we-collect", title: "Information We Collect" },
    { id: "how-we-use-information", title: "How We Use Your Information" },
    { id: "data-sharing", title: "Data Sharing and Disclosure" },
    { id: "data-security", title: "Data Security" },
    { id: "your-rights", title: "Your Rights" },
    { id: "data-retention", title: "Data Retention" },
    { id: "cookies", title: "Cookies and Tracking" },
    { id: "children-privacy", title: "Children's Privacy" },
    { id: "international-transfers", title: "International Data Transfers" },
    { id: "enterprise-customers", title: "Enterprise Customers" },
    { id: "changes", title: "Changes to This Policy" },
    { id: "contact", title: "Contact Us" },
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
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <h1 className="mb-2 text-4xl font-bold text-foreground md:text-5xl">
                    Privacy Policy
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    Last updated: {lastUpdated}
                  </p>
                </div>
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground">
                At CAVE ERP, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services. Please read this policy carefully to understand our practices regarding your data.
              </p>
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
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-24 pb-10">
                  <h2 className="mb-5 text-2xl font-bold text-foreground md:text-3xl">
                    Introduction
                  </h2>
                  <div className="space-y-5 text-base leading-relaxed text-foreground">
                    <p>
                      CAVE ERP ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy describes how we collect, use, and share your personal information when you use our enterprise resource planning platform and related services (collectively, the "Service").
                    </p>
                    <p>
                      By using our Service, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our Service.
                    </p>
                    <p>
                      <strong className="text-foreground">Note:</strong> This Privacy Policy is currently being finalized by our legal team. The content below represents a draft structure and will be updated with complete legal text upon finalization.
                    </p>
                  </div>
                </section>

                {/* Information We Collect */}
                <section id="information-we-collect" className="scroll-mt-24 border-t border-border pt-10 pb-10">
                  <h2 className="mb-5 text-2xl font-bold text-foreground md:text-3xl">
                    Information We Collect
                  </h2>
                  <div className="space-y-6 text-base leading-relaxed text-foreground">
                    <div>
                      <h3 className="mb-3 text-xl font-semibold text-foreground">
                        Information You Provide
                      </h3>
                      <p className="mb-3 text-base leading-relaxed text-foreground">
                        We collect information that you provide directly to us when you:
                      </p>
                      <ul className="ml-6 list-disc space-y-2 text-base leading-relaxed text-muted-foreground">
                        <li>Create an account or register for our Service</li>
                        <li>Complete forms or provide information within the Service</li>
                        <li>Contact us for support or inquiries</li>
                        <li>Subscribe to newsletters or communications</li>
                        <li>Participate in surveys or feedback programs</li>
                      </ul>
                      <p className="mt-4 text-base leading-relaxed text-foreground">
                        This information may include your name, email address, organization name, phone number, billing information, and any other information you choose to provide.
                      </p>
                    </div>

                    <div>
                      <h3 className="mb-3 text-xl font-semibold text-foreground">
                        Automatically Collected Information
                      </h3>
                      <p className="mb-3 text-base leading-relaxed text-foreground">
                        When you use our Service, we automatically collect certain information, including:
                      </p>
                      <ul className="ml-6 list-disc space-y-2 text-base leading-relaxed text-muted-foreground">
                        <li>Usage data and activity logs</li>
                        <li>Device information and identifiers</li>
                        <li>IP address and location data</li>
                        <li>Browser type and version</li>
                        <li>Pages visited and time spent on pages</li>
                        <li>Cookies and similar tracking technologies</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="mb-3 text-xl font-semibold text-foreground">
                        Organizational Data
                      </h3>
                      <p className="text-base leading-relaxed text-foreground">
                        As an enterprise resource planning platform, we process data related to your organization's operations, including financial records, employee information, project data, and other business data that you or your organization uploads or creates within the Service.
                      </p>
                    </div>
                  </div>
                </section>

                {/* How We Use Information */}
                <section id="how-we-use-information" className="scroll-mt-24 border-t border-border pt-10 pb-10">
                  <h2 className="mb-5 text-2xl font-bold text-foreground md:text-3xl">
                    How We Use Your Information
                  </h2>
                  <div className="space-y-5 text-base leading-relaxed text-foreground">
                    <p>We use the information we collect to:</p>
                    <ul className="ml-6 list-disc space-y-2 text-base leading-relaxed text-muted-foreground">
                      <li>Provide, maintain, and improve our Service</li>
                      <li>Process transactions and manage your account</li>
                      <li>Send you technical notices, updates, and support messages</li>
                      <li>Respond to your comments, questions, and requests</li>
                      <li>Monitor and analyze usage patterns and trends</li>
                      <li>Detect, prevent, and address technical issues and security threats</li>
                      <li>Comply with legal obligations and enforce our terms</li>
                      <li>Provide customer support and training</li>
                    </ul>
                  </div>
                </section>

                {/* Data Sharing */}
                <section id="data-sharing" className="scroll-mt-24 border-t border-border pt-10 pb-10">
                  <h2 className="mb-5 text-2xl font-bold text-foreground md:text-3xl">
                    Data Sharing and Disclosure
                  </h2>
                  <div className="space-y-5 text-base leading-relaxed text-foreground">
                    <p>We do not sell your personal information. We may share your information in the following circumstances:</p>
                    <ul className="ml-6 list-disc space-y-2 text-base leading-relaxed text-muted-foreground">
                      <li>With service providers who perform services on our behalf</li>
                      <li>In response to legal requests or to comply with applicable laws</li>
                      <li>To protect our rights, property, or safety, or that of our users</li>
                      <li>In connection with a business transfer or merger</li>
                      <li>With your consent or at your direction</li>
                    </ul>
                  </div>
                </section>

                {/* Data Security */}
                <section id="data-security" className="scroll-mt-24 border-t border-border pt-10 pb-10">
                  <h2 className="mb-5 text-2xl font-bold text-foreground md:text-3xl">
                    Data Security
                  </h2>
                  <div className="space-y-5 text-base leading-relaxed text-foreground">
                    <p>
                      We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
                    </p>
                    <p>
                      Our security measures include encryption, access controls, regular security assessments, and employee training on data protection.
                    </p>
                  </div>
                </section>

                {/* Your Rights */}
                <section id="your-rights" className="scroll-mt-24 border-t border-border pt-10 pb-10">
                  <h2 className="mb-5 text-2xl font-bold text-foreground md:text-3xl">
                    Your Rights
                  </h2>
                  <div className="space-y-5 text-base leading-relaxed text-foreground">
                    <p>Depending on your location, you may have the following rights regarding your personal information:</p>
                    <ul className="ml-6 list-disc space-y-2 text-base leading-relaxed text-muted-foreground">
                      <li>Right to access your personal information</li>
                      <li>Right to rectify inaccurate or incomplete data</li>
                      <li>Right to erasure ("right to be forgotten")</li>
                      <li>Right to restrict processing</li>
                      <li>Right to data portability</li>
                      <li>Right to object to processing</li>
                      <li>Right to withdraw consent</li>
                    </ul>
                    <p className="mt-4">
                      To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
                    </p>
                  </div>
                </section>

                {/* Data Retention */}
                <section id="data-retention" className="scroll-mt-24 border-t border-border pt-10 pb-10">
                  <h2 className="mb-5 text-2xl font-bold text-foreground md:text-3xl">
                    Data Retention
                  </h2>
                  <div className="space-y-5 text-base leading-relaxed text-foreground">
                    <p>
                      We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
                    </p>
                  </div>
                </section>

                {/* Cookies */}
                <section id="cookies" className="scroll-mt-24 border-t border-border pt-10 pb-10">
                  <h2 className="mb-5 text-2xl font-bold text-foreground md:text-3xl">
                    Cookies and Tracking Technologies
                  </h2>
                  <div className="space-y-5 text-base leading-relaxed text-foreground">
                    <p>
                      We use cookies and similar tracking technologies to track activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
                    </p>
                    <p>
                      For more information about our use of cookies, please refer to our Cookie Policy, which will be available separately.
                    </p>
                  </div>
                </section>

                {/* Children's Privacy */}
                <section id="children-privacy" className="scroll-mt-24 border-t border-border pt-10 pb-10">
                  <h2 className="mb-5 text-2xl font-bold text-foreground md:text-3xl">
                    Children's Privacy
                  </h2>
                  <div className="space-y-5 text-base leading-relaxed text-foreground">
                    <p>
                      Our Service is not intended for children under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have collected personal information from a child under 18, we will take steps to delete such information.
                    </p>
                  </div>
                </section>

                {/* International Transfers */}
                <section id="international-transfers" className="scroll-mt-24 border-t border-border pt-10 pb-10">
                  <h2 className="mb-5 text-2xl font-bold text-foreground md:text-3xl">
                    International Data Transfers
                  </h2>
                  <div className="space-y-5 text-base leading-relaxed text-foreground">
                    <p>
                      Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from those in your country. We take appropriate safeguards to ensure that your information receives an adequate level of protection.
                    </p>
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
                        Custom Privacy Agreements
                      </p>
                      <p className="text-base leading-relaxed text-muted-foreground">
                        Enterprise customers with custom subscription agreements may have additional privacy terms, data processing agreements, and security provisions that supplement or modify this Privacy Policy. These custom terms take precedence over this general policy where they apply.
                      </p>
                    </div>

                    <div>
                      <h3 className="mb-3 text-xl font-semibold text-foreground">
                        Data Processing Agreements (DPA)
                      </h3>
                      <p className="mb-3 text-base leading-relaxed text-foreground">
                        Enterprise customers may enter into separate Data Processing Agreements (DPAs) with us that govern:
                      </p>
                      <ul className="ml-6 list-disc space-y-2 text-base leading-relaxed text-muted-foreground">
                        <li>Specific data processing instructions and purposes</li>
                        <li>Data retention schedules and deletion requirements</li>
                        <li>Technical and organizational security measures</li>
                        <li>International data transfer mechanisms and safeguards</li>
                        <li>Data subject rights and request handling procedures</li>
                        <li>Sub-processor management and notification requirements</li>
                        <li>Audit rights and compliance certifications</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="mb-3 text-xl font-semibold text-foreground">
                        Enhanced Security Measures
                      </h3>
                      <p className="mb-3 text-base leading-relaxed text-foreground">
                        Enterprise customers may have access to enhanced security features, including:
                      </p>
                      <ul className="ml-6 list-disc space-y-2 text-base leading-relaxed text-muted-foreground">
                        <li>Advanced encryption and key management options</li>
                        <li>Dedicated infrastructure and data isolation</li>
                        <li>Enhanced access controls and authentication methods</li>
                        <li>Custom backup and disaster recovery configurations</li>
                        <li>Enhanced logging and monitoring capabilities</li>
                        <li>Compliance with industry-specific standards (SOC 2, ISO 27001, etc.)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="mb-3 text-xl font-semibold text-foreground">
                        Data Residency and Geographic Restrictions
                      </h3>
                      <p className="text-base leading-relaxed text-foreground">
                        Enterprise customers may request specific data residency requirements or geographic restrictions for data processing and storage. These requirements will be specified in your enterprise agreement and associated DPA.
                      </p>
                    </div>

                    <div>
                      <h3 className="mb-3 text-xl font-semibold text-foreground">
                        Custom Compliance Requirements
                      </h3>
                      <p className="mb-3 text-base leading-relaxed text-foreground">
                        Enterprise customers with specific regulatory or industry compliance requirements (such as HIPAA, GDPR, PCI-DSS, or industry-specific standards) may have additional privacy and security provisions outlined in their custom agreements.
                      </p>
                      <p className="text-base leading-relaxed text-foreground">
                        If you are an enterprise customer and have questions about your specific privacy terms, please contact your account manager or our enterprise support team.
                      </p>
                    </div>

                    <div className="rounded-lg border border-border bg-muted/30 p-6">
                      <p className="mb-2 text-sm font-semibold text-foreground">
                        Enterprise Customer Support
                      </p>
                      <p className="mb-2 text-sm text-muted-foreground">
                        For enterprise-specific privacy inquiries, please contact:
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Email: <a href="mailto:enterprise-privacy@lightgatesolutions.com" className="text-primary hover:underline">enterprise-privacy@lightgatesolutions.com</a>
                      </p>
                    </div>
                  </div>
                </section>

                {/* Changes */}
                <section id="changes" className="scroll-mt-24 border-t border-border pt-10 pb-10">
                  <h2 className="mb-5 text-2xl font-bold text-foreground md:text-3xl">
                    Changes to This Privacy Policy
                  </h2>
                  <div className="space-y-5 text-base leading-relaxed text-foreground">
                    <p>
                      We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
                    </p>
                    <p>
                      Changes to this Privacy Policy are effective when they are posted on this page.
                    </p>
                  </div>
                </section>

                {/* Contact */}
                <section id="contact" className="scroll-mt-24 border-t border-border pt-10 pb-10">
                  <h2 className="mb-5 text-2xl font-bold text-foreground md:text-3xl">
                    Contact Us
                  </h2>
                  <div className="space-y-5 text-base leading-relaxed text-foreground">
                    <p>
                      If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                    </p>
                    <div className="rounded-lg border border-border bg-muted/30 p-6">
                      <p className="mb-2 font-semibold text-foreground">CAVE ERP</p>
                      <p className="mb-2 text-base text-muted-foreground">
                        A product of LightGate Solutions (LGS)
                      </p>
                      <p className="mb-2 text-base text-muted-foreground">
                        Email: <a href="mailto:privacy@lightgatesolutions.com" className="text-primary hover:underline">privacy@lightgatesolutions.com</a>
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
          </div>
        </div>
      </footer>
    </div>
  );
}
