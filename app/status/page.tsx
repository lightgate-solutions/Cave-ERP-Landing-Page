"use client";

import Link from "next/link";
import { Logo } from "@/components/marketing/logo";
import { NavLinks } from "@/components/marketing/nav-links";
import { MobileNav } from "@/components/marketing/mobile-nav";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  AlertCircle,
  XCircle,
  Clock,
  Activity,
  Server,
  Database,
  Globe,
  Zap,
  Shield,
  RefreshCw,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

type ServiceStatus = "operational" | "degraded" | "down" | "maintenance";

interface Service {
  name: string;
  status: ServiceStatus;
  description: string;
  uptime: string;
  icon: React.ElementType;
}

interface Incident {
  id: string;
  title: string;
  status: "resolved" | "monitoring" | "investigating";
  severity: "minor" | "major" | "critical";
  startedAt: string;
  resolvedAt?: string;
  description: string;
}

export default function StatusPage() {
  const [lastUpdated] = useState(new Date());

  const overallStatus: ServiceStatus = "operational";

  const services: Service[] = [
    {
      name: "API",
      status: "operational",
      description: "REST API and GraphQL endpoints",
      uptime: "99.98%",
      icon: Zap,
    },
    {
      name: "Dashboard",
      status: "operational",
      description: "Web application and user interface",
      uptime: "99.99%",
      icon: Globe,
    },
    {
      name: "Database",
      status: "operational",
      description: "Primary database and data storage",
      uptime: "99.97%",
      icon: Database,
    },
    {
      name: "Authentication",
      status: "operational",
      description: "User authentication and authorization",
      uptime: "99.99%",
      icon: Shield,
    },
    {
      name: "File Storage",
      status: "operational",
      description: "Document and media storage",
      uptime: "99.95%",
      icon: Server,
    },
    {
      name: "Email Service",
      status: "operational",
      description: "Email notifications and delivery",
      uptime: "99.92%",
      icon: Activity,
    },
  ];

  const recentIncidents: Incident[] = [
    {
      id: "inc-001",
      title: "Scheduled maintenance window completed",
      status: "resolved",
      severity: "minor",
      startedAt: "2025-01-10T02:00:00Z",
      resolvedAt: "2025-01-10T04:00:00Z",
      description: "Routine maintenance performed successfully. All systems operational.",
    },
    {
      id: "inc-002",
      title: "Database performance optimization",
      status: "resolved",
      severity: "minor",
      startedAt: "2025-01-05T10:00:00Z",
      resolvedAt: "2025-01-05T11:30:00Z",
      description: "Completed database optimization. Performance improvements implemented.",
    },
  ];

  const getStatusColor = (status: ServiceStatus) => {
    const colors = {
      operational: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
      degraded: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20",
      down: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
      maintenance: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    };
    return colors[status];
  };

  const getStatusIcon = (status: ServiceStatus) => {
    switch (status) {
      case "operational":
        return CheckCircle;
      case "degraded":
        return AlertCircle;
      case "down":
        return XCircle;
      case "maintenance":
        return Clock;
      default:
        return CheckCircle;
    }
  };

  const getIncidentStatusColor = (status: Incident["status"]) => {
    const colors = {
      resolved: "bg-green-500/10 text-green-600 dark:text-green-400",
      monitoring: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
      investigating: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
    };
    return colors[status];
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatUptime = (uptime: string) => {
    return `${uptime} uptime (last 30 days)`;
  };

  const OverallStatusIcon = getStatusIcon(overallStatus);

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
        <section className="border-b border-border bg-gradient-to-b from-background to-muted/30 py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h1 className="mb-2 text-4xl font-bold text-foreground md:text-5xl">
                    System Status
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    Real-time status of CAVE ERP services and infrastructure
                  </p>
                </div>
              </div>

              {/* Overall Status */}
              <Card className="border-border bg-card p-6 md:p-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={cn("flex h-12 w-12 items-center justify-center rounded-xl border", getStatusColor(overallStatus))}>
                      <OverallStatusIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-foreground md:text-2xl">
                        All Systems Operational
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        Last updated: {lastUpdated.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className={cn("border px-3 py-1 text-sm font-semibold capitalize", getStatusColor(overallStatus))}
                  >
                    {overallStatus}
                  </Badge>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Status */}
        <section className="container mx-auto px-4 py-12 md:px-6 md:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8">
              <h2 className="mb-2 text-2xl font-bold text-foreground md:text-3xl">
                Service Status
              </h2>
              <p className="text-base text-muted-foreground">
                Current status of all CAVE ERP services and components
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const StatusIcon = getStatusIcon(service.status);
                return (
                  <Card
                    key={service.name}
                    className="border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-md"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={cn("flex h-10 w-10 items-center justify-center rounded-lg", getStatusColor(service.status))}>
                          <service.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-foreground">
                            {service.name}
                          </h3>
                          <p className="text-xs text-muted-foreground">
                            {service.description}
                          </p>
                        </div>
                      </div>
                      <StatusIcon className={cn("h-5 w-5 shrink-0", getStatusColor(service.status).split(" ")[1])} />
                    </div>
                    <div className="flex items-center justify-between border-t border-border pt-4">
                      <span className="text-xs font-medium text-muted-foreground">
                        {formatUptime(service.uptime)}
                      </span>
                      <Badge
                        variant="outline"
                        className={cn("border text-xs font-semibold capitalize", getStatusColor(service.status))}
                      >
                        {service.status}
                      </Badge>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Recent Incidents */}
        <section className="border-t border-border bg-muted/30 py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              <div className="mb-8">
                <h2 className="mb-2 text-2xl font-bold text-foreground md:text-3xl">
                  Recent Incidents
                </h2>
                <p className="text-base text-muted-foreground">
                  Historical incidents and maintenance activities
                </p>
              </div>

              {recentIncidents.length > 0 ? (
                <div className="space-y-4">
                  {recentIncidents.map((incident) => (
                    <Card
                      key={incident.id}
                      className="border-border bg-card p-6 transition-all duration-300 hover:shadow-md"
                    >
                      <div className="mb-4 flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="mb-2 flex items-center gap-3">
                            <h3 className="text-lg font-bold text-foreground">
                              {incident.title}
                            </h3>
                            <Badge
                              variant="outline"
                              className={cn("text-xs font-semibold capitalize", getIncidentStatusColor(incident.status))}
                            >
                              {incident.status}
                            </Badge>
                            {incident.severity && (
                              <Badge
                                variant="outline"
                                className={cn(
                                  "text-xs font-semibold capitalize",
                                  incident.severity === "critical"
                                    ? "bg-red-500/10 text-red-600 dark:text-red-400"
                                    : incident.severity === "major"
                                    ? "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400"
                                    : "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                                )}
                              >
                                {incident.severity}
                              </Badge>
                            )}
                          </div>
                          <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
                            {incident.description}
                          </p>
                          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                            <span>
                              Started: {formatDate(incident.startedAt)}
                            </span>
                            {incident.resolvedAt && (
                              <span>
                                Resolved: {formatDate(incident.resolvedAt)}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="border-border bg-card p-8 text-center">
                  <CheckCircle className="mx-auto mb-4 h-12 w-12 text-green-600 dark:text-green-400" />
                  <h3 className="mb-2 text-lg font-bold text-foreground">
                    No Recent Incidents
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    All systems have been operating normally. No incidents reported in the last 30 days.
                  </p>
                </Card>
              )}
            </div>
          </div>
        </section>

        {/* System Metrics */}
        <section className="container mx-auto px-4 py-12 md:px-6 md:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8">
              <h2 className="mb-2 text-2xl font-bold text-foreground md:text-3xl">
                System Metrics
              </h2>
              <p className="text-base text-muted-foreground">
                Performance and availability metrics for the past 30 days
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="border-border bg-card p-6">
                <div className="mb-2 flex items-center gap-2">
                  <Activity className="h-5 w-5 text-primary" />
                  <h3 className="text-sm font-semibold text-muted-foreground">
                    Average Uptime
                  </h3>
                </div>
                <div className="text-3xl font-bold text-foreground">
                  99.97%
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  Last 30 days
                </p>
              </Card>

              <Card className="border-border bg-card p-6">
                <div className="mb-2 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <h3 className="text-sm font-semibold text-muted-foreground">
                    Average Response Time
                  </h3>
                </div>
                <div className="text-3xl font-bold text-foreground">
                  145ms
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  API response time
                </p>
              </Card>

              <Card className="border-border bg-card p-6">
                <div className="mb-2 flex items-center gap-2">
                  <RefreshCw className="h-5 w-5 text-primary" />
                  <h3 className="text-sm font-semibold text-muted-foreground">
                    Last Incident
                  </h3>
                </div>
                <div className="text-3xl font-bold text-foreground">
                  12 days
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  Days ago
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Subscribe Section */}
        <section className="border-t border-border bg-muted/30 py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              <Card className="border-border bg-card p-8 text-center">
                <Activity className="mx-auto mb-4 h-12 w-12 text-primary" />
                <h2 className="mb-2 text-2xl font-bold text-foreground md:text-3xl">
                  Stay Updated
                </h2>
                <p className="mb-6 text-base leading-relaxed text-muted-foreground">
                  Subscribe to status updates and receive notifications about incidents, maintenance, and service changes
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                  <Button size="lg" className="w-full sm:w-auto">
                    Subscribe to Updates
                  </Button>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                    <Link href="/help">Contact Support</Link>
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
