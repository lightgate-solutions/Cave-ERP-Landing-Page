"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/marketing/logo";
import { NavLinks } from "@/components/marketing/nav-links";
import { MobileNav } from "@/components/marketing/mobile-nav";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  getPostsByCategory,
  getFeaturedPosts,
  type BlogCategory,
  type BlogPost,
} from "@/lib/blog-data";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const POSTS_PER_PAGE = 6;

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory>("All Posts");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = getPostsByCategory(selectedCategory);
  const featuredPosts = getFeaturedPosts();
  
  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  // Reset to page 1 when category changes
  const handleCategoryChange = (category: BlogCategory) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const categories: BlogCategory[] = ["All Posts", "Product", "Research", "News", "Company"];

  const getCategoryColor = (category: BlogPost["category"]) => {
    const colors = {
      Product: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
      Research: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
      News: "bg-green-500/10 text-green-600 dark:text-green-400",
      Company: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
    };
    return colors[category];
  };

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
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
                CAVE ERP Blog
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed md:text-xl">
                Insights, updates, and stories about enterprise resource planning, productivity, and organizational excellence
              </p>
            </div>
          </div>
        </section>

        {/* Featured Posts Section */}
        {currentPage === 1 && selectedCategory === "All Posts" && featuredPosts.length > 0 && (
          <section className="border-b border-border bg-background py-8 md:py-12">
            <div className="container mx-auto px-4 md:px-6">
              <div className="mx-auto max-w-6xl">
                <h2 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">
                  Featured Articles
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {featuredPosts.slice(0, 2).map((post) => (
                    <Link
                      key={post.id}
                      href={`/blog/${post.id}`}
                      className="group block"
                    >
                      <article className="h-full overflow-hidden rounded-xl border border-border bg-gradient-to-br from-card via-card to-primary/5 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1">
                        <div className="p-6 md:p-8">
                          <div className="mb-4">
                            <span className={cn("inline-block rounded-lg px-3 py-1.5 text-xs font-semibold", getCategoryColor(post.category))}>
                              {post.category}
                            </span>
                          </div>
                          <h3 className="mb-3 text-xl font-bold text-foreground transition-colors group-hover:text-primary md:text-2xl">
                            {post.title}
                          </h3>
                          <p className="mb-4 text-sm leading-relaxed text-muted-foreground md:text-base line-clamp-3">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground border-t border-border/50 pt-4">
                            <span className="flex items-center gap-1.5">
                              <Calendar className="h-3.5 w-3.5" />
                              {formatDate(post.publishedAt)}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Clock className="h-3.5 w-3.5" />
                              {post.readTime} min read
                            </span>
                          </div>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Main Content */}
        <section className="container mx-auto px-4 py-12 md:px-6 md:py-16">
          <div className="mx-auto max-w-6xl">
            {/* Category Filter */}
            <div className="mb-8 flex flex-wrap items-center gap-3 border-b border-border pb-6">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={cn(
                    "rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200",
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Blog Posts Grid */}
            <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {currentPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="group block"
                >
                  <article className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-gradient-to-br from-card to-card/50 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1">
                    <div className="flex flex-1 flex-col p-6">
                      <div className="mb-4 flex items-center justify-between">
                        <span className={cn("inline-block rounded-lg px-3 py-1 text-xs font-semibold", getCategoryColor(post.category))}>
                          {post.category}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {post.readTime} min
                        </span>
                      </div>
                      <h3 className="mb-3 text-lg font-bold leading-tight text-foreground transition-colors group-hover:text-primary md:text-xl">
                        {post.title}
                      </h3>
                      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground border-t border-border pt-4">
                        <Calendar className="h-3.5 w-3.5 shrink-0" />
                        <span>{formatDate(post.publishedAt)}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border pt-8">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 h-12 px-6"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <div className="flex flex-col items-start">
                    <span className="font-medium">Previous</span>
                    <span className="text-xs text-muted-foreground font-normal">
                      {currentPage > 1 ? `Page ${currentPage - 1}` : "No more pages"}
                    </span>
                  </div>
                </Button>

                <div className="text-sm text-muted-foreground order-first sm:order-none">
                  Page {currentPage} of {totalPages}
                </div>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 h-12 px-6"
                >
                  <div className="flex flex-col items-end">
                    <span className="font-medium">Next</span>
                    <span className="text-xs text-muted-foreground font-normal">
                      {currentPage < totalPages ? `Page ${currentPage + 1}` : "No more posts"}
                    </span>
                  </div>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            )}
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
                    href="#features"
                    className="text-muted-foreground hover:text-foreground font-medium transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#pricing"
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
