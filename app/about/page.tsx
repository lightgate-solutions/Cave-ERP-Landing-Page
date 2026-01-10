"use client";

import Link from "next/link";
import { Logo } from "@/components/marketing/logo";
import { NavLinks } from "@/components/marketing/nav-links";
import { MobileNav } from "@/components/marketing/mobile-nav";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Building2,
  Users,
  Target,
  Award,
  Lightbulb,
  Heart,
  ExternalLink,
  Globe,
  Mail,
  MapPin,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "Continuously improving and innovating to meet evolving organizational needs",
    },
    {
      icon: Heart,
      title: "Customer Focus",
      description: "Putting our customers at the center of everything we do",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Delivering enterprise-grade solutions with uncompromising quality",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Building strong partnerships with our customers and community",
    },
  ];

  const milestones = [
    {
      year: "2024",
      title: "CAVE ERP Launch",
      description: "Official launch of CAVE ERP, bringing comprehensive ERP solutions to organizations worldwide",
    },
    {
      year: "2023",
      title: "Product Development",
      description: "Intensive development phase building the core modules and features",
    },
    {
      year: "2022",
      title: "Company Founded",
      description: "CAVE ERP was conceived as part of LightGate Solutions' vision for enterprise software",
    },
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
        <section className="border-b border-border bg-gradient-to-b from-background to-muted/30 py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
                About CAVE ERP
              </h1>
              <p className="mb-6 text-lg text-muted-foreground leading-relaxed md:text-xl">
                Empowering organizations with intelligent, all-in-one enterprise resource planning solutions
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="container mx-auto px-4 py-16 md:px-6 md:py-20">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                Our Story
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  CAVE ERP was born from a vision to simplify enterprise resource planning. We recognized that organizations were struggling with multiple disconnected systems, each with its own subscription, learning curve, and integration challenges.
                </p>
                <p>
                  As a product of <strong className="text-foreground">LightGate Solutions (LGS)</strong>, CAVE ERP brings together decades of enterprise software expertise to deliver a comprehensive, integrated solution that combines Finance, HR, Payroll, Projects, and more into a single, powerful platform.
                </p>
                <p>
                  Today, CAVE ERP serves organizations across 20+ countries, helping them streamline operations, reduce costs, and achieve greater efficiency through intelligent automation and seamless integration.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Parent Company */}
        <section className="border-t border-border bg-muted/30 py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              <Card className="border-border bg-card p-8 md:p-12">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Building2 className="h-8 w-8" />
                  </div>
                  <div>
                    <h2 className="mb-2 text-2xl font-bold text-foreground md:text-3xl">
                      Powered by LightGate Solutions
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      CAVE ERP is a product of LightGate Solutions (LGS)
                    </p>
                  </div>
                </div>
                <div className="mb-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                  <p>
                    LightGate Solutions is a leading technology company specializing in enterprise software solutions. With a commitment to innovation and excellence, LGS develops cutting-edge software products that help organizations worldwide achieve their operational goals.
                  </p>
                  <p>
                    CAVE ERP represents LGS's dedication to creating comprehensive, user-friendly enterprise solutions that transform how organizations manage their resources, operations, and growth.
                  </p>
                </div>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto"
                  asChild
                >
                  <Link href="https://www.lightgatesolutions.com" target="_blank" rel="noopener noreferrer">
                    Visit LightGate Solutions
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="container mx-auto px-4 py-16 md:px-6 md:py-20">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To democratize enterprise resource planning by making powerful, integrated solutions accessible to organizations of all sizes
              </p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="border-t border-border bg-muted/30 py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-6xl">
              <div className="mb-12 text-center">
                <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
                  Our Values
                </h2>
                <p className="text-lg text-muted-foreground">
                  The principles that guide everything we do
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {values.map((value) => (
                  <Card
                    key={value.title}
                    className="flex h-full flex-col border-border bg-card p-6 text-center transition-all duration-300 hover:border-primary/50 hover:shadow-md"
                  >
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mx-auto">
                      <value.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {value.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Milestones */}
        <section className="container mx-auto px-4 py-16 md:px-6 md:py-20">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
                Our Journey
              </h2>
              <p className="text-lg text-muted-foreground">
                Key milestones in our growth
              </p>
            </div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="relative flex gap-6">
                  <div className="flex shrink-0 flex-col items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                      {milestone.year}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="mt-2 h-full w-0.5 bg-border" />
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="mb-2 text-xl font-bold text-foreground">
                      {milestone.title}
                    </h3>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="border-t border-border bg-muted/30 py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              <Card className="border-border bg-card p-8 md:p-12 text-center">
                <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
                  Get in Touch
                </h2>
                <p className="mb-8 text-base leading-relaxed text-muted-foreground">
                  Have questions about CAVE ERP or want to learn more? We'd love to hear from you.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <Button size="lg" asChild>
                    <Link href="/help">Contact Support</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="mailto:contact@lightgatesolutions.com">
                      <Mail className="mr-2 h-4 w-4" />
                      Email Us
                    </Link>
                  </Button>
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
