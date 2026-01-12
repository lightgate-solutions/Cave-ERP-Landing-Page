"use client";

import Link from "next/link";
import { Logo } from "@/components/marketing/logo";
import { NavLinks } from "@/components/marketing/nav-links";
import { MobileNav } from "@/components/marketing/mobile-nav";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  MessageCircle,
  Users,
  Github,
  ExternalLink,
  Heart,
  Star,
  HelpCircle,
  Code,
  BookOpen,
  MessageSquare,
  Award,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function CommunityPage() {
  const communityStats = [
    { label: "Active Members", value: "12,500+", icon: Users },
    { label: "Discussions", value: "8,200+", icon: MessageCircle },
    { label: "Solutions", value: "15,800+", icon: HelpCircle },
    { label: "Contributors", value: "450+", icon: Code },
  ];

  const communityPlatforms = [
    {
      name: "Discord",
      description: "Join real-time conversations with CAVE ERP users and developers",
      icon: MessageCircle,
      href: "#",
      members: "8,500+ members",
      color: "hover:from-indigo-500/10 hover:to-purple-500/10",
      badgeColor: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
    },
    {
      name: "GitHub Discussions",
      description: "Technical discussions, feature requests, and bug reports",
      icon: Github,
      href: "#",
      members: "2,300+ discussions",
      color: "hover:from-gray-500/10 hover:to-slate-500/10",
      badgeColor: "bg-gray-500/10 text-gray-600 dark:text-gray-400",
    },
    {
      name: "Community Forum",
      description: "Ask questions, share knowledge, and help others",
      icon: MessageSquare,
      href: "#",
      members: "5,200+ topics",
      color: "hover:from-blue-500/10 hover:to-cyan-500/10",
      badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    },
    {
      name: "X (Twitter)",
      description: "Stay updated with latest news, tips, and announcements",
      icon: ExternalLink,
      href: "#",
      members: "Follow @CAVEERP",
      color: "hover:from-sky-500/10 hover:to-blue-500/10",
      badgeColor: "bg-sky-500/10 text-sky-600 dark:text-sky-400",
    },
  ];

  const waysToContribute = [
    {
      title: "Share Your Experience",
      description: "Write guides, tutorials, or share how CAVE ERP has transformed your organization",
      icon: BookOpen,
      action: "Write a Post",
    },
    {
      title: "Help Others",
      description: "Answer questions in forums and Discord to help fellow users succeed",
      icon: Heart,
      action: "Start Helping",
    },
    {
      title: "Report Issues",
      description: "Found a bug or have a feature idea? Let us know on GitHub",
      icon: Code,
      action: "Contribute",
    },
    {
      title: "Spread the Word",
      description: "Share CAVE ERP with others who might benefit from it",
      icon: Star,
      action: "Share",
    },
  ];

  const communityGuidelines = [
    "Be respectful and inclusive in all interactions",
    "Help others learn and grow with constructive feedback",
    "Share knowledge and experiences generously",
    "Respect intellectual property and give credit where due",
    "Keep discussions relevant and professional",
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
                Join the CAVE ERP Community
              </h1>
              <p className="mb-8 text-lg text-muted-foreground leading-relaxed md:text-xl">
                Connect with users, share knowledge, get help, and help shape the future of enterprise resource planning
              </p>
              
              {/* Community Stats */}
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mt-12">
                {communityStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg border border-border bg-card p-4 text-center"
                  >
                    <stat.icon className="mx-auto mb-2 h-6 w-6 text-primary" />
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Community Platforms */}
        <section className="container mx-auto px-4 py-16 md:px-6 md:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
                Connect With Us
              </h2>
              <p className="text-lg text-muted-foreground">
                Choose your preferred platform to engage with the community
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {communityPlatforms.map((platform) => (
                <Link
                  key={platform.name}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <Card className="h-full border-border bg-gradient-to-br from-card to-card/50 p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                      <div className={cn("flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors", platform.badgeColor)}>
                        <platform.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="mb-2 flex items-center gap-2">
                          <h3 className="text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                            {platform.name}
                          </h3>
                          <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                        <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
                          {platform.description}
                        </p>
                        <div className="text-xs font-medium text-muted-foreground">
                          {platform.members}
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Ways to Contribute */}
        <section className="border-t border-border bg-muted/30 py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-6xl">
              <div className="mb-12 text-center">
                <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
                  Ways to Contribute
                </h2>
                <p className="text-lg text-muted-foreground">
                  Help us build a thriving community together
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {waysToContribute.map((way, index) => (
                  <Card
                    key={way.title}
                    className="flex h-full flex-col border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-md"
                  >
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <way.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-foreground">
                      {way.title}
                    </h3>
                    <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {way.description}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-between group"
                    >
                      <span>{way.action}</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Community Guidelines */}
        <section className="container mx-auto px-4 py-16 md:px-6 md:py-20">
          <div className="mx-auto max-w-4xl">
            <Card className="border-border bg-card p-8 md:p-12">
              <div className="mb-6 flex items-center gap-3">
                <Award className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                  Community Guidelines
                </h2>
              </div>
              <p className="mb-6 text-base leading-relaxed text-muted-foreground">
                To ensure a positive and productive environment for everyone, we ask all community members to follow these guidelines:
              </p>
              <ul className="space-y-3">
                {communityGuidelines.map((guideline, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-sm leading-relaxed text-foreground">
                      {guideline}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
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
          </div>
        </div>
      </footer>
    </div>
  );
}
