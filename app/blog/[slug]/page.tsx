"use client";

import Link from "next/link";
import { use } from "react";
import { Logo } from "@/components/marketing/logo";
import { NavLinks } from "@/components/marketing/nav-links";
import { MobileNav } from "@/components/marketing/mobile-nav";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { getPostBySlug, blogPosts } from "@/lib/blog-data";
import { Calendar, Clock, ArrowLeft, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = use(params);
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="flex min-h-screen flex-col bg-background items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-6">The blog post you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/blog">Back to Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Product: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
      Research: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
      News: "bg-green-500/10 text-green-600 dark:text-green-400",
      Company: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
    };
    return colors[category] || "bg-muted text-muted-foreground";
  };

  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

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
        {/* Back to Blog */}
        <section className="border-b border-border bg-muted/30 py-4">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="container mx-auto px-4 py-12 md:px-6 md:py-16">
          <div className="mx-auto max-w-4xl">
            {/* Article Header */}
            <header className="mb-8">
              <div className="mb-4">
                <span className={cn("inline-block rounded-lg px-3 py-1.5 text-sm font-semibold", getCategoryColor(post.category))}>
                  {post.category}
                </span>
              </div>
              <h1 className="mb-4 text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
                {post.title}
              </h1>
              <p className="mb-6 text-xl leading-relaxed text-muted-foreground md:text-2xl">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span className="font-medium text-foreground">{post.author}</span>
                  <span className="text-muted-foreground">· {post.authorRole}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {formatDate(post.publishedAt)}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {post.readTime} min read
                </div>
              </div>
            </header>

            {/* Article Body */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="border-l-4 border-primary/20 pl-6 mb-8">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
              </div>
              
              <div className="space-y-6 text-base leading-relaxed text-foreground">
                <p>
                  {post.content || "This is a placeholder for the full blog post content. In a real implementation, this would contain the full article text, formatted with proper headings, paragraphs, lists, and other content elements."}
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                  Key Takeaways
                </h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Important point about CAVE ERP features</li>
                  <li>Best practices for implementation</li>
                  <li>Tips for maximizing productivity</li>
                </ul>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="border-t border-border bg-muted/30 py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6">
              <div className="mx-auto max-w-6xl">
                <h2 className="mb-8 text-2xl font-bold text-foreground md:text-3xl">
                  Related Articles
                </h2>
                <div className="grid gap-6 md:grid-cols-3">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      href={`/blog/${relatedPost.id}`}
                      className="group block"
                    >
                      <article className="h-full overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-md">
                        <div className="p-6">
                          <div className="mb-3">
                            <span className={cn("inline-block rounded-lg px-2.5 py-1 text-xs font-semibold", getCategoryColor(relatedPost.category))}>
                              {relatedPost.category}
                            </span>
                          </div>
                          <h3 className="mb-2 text-lg font-bold leading-tight text-foreground transition-colors group-hover:text-primary">
                            {relatedPost.title}
                          </h3>
                          <p className="mb-4 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                            {relatedPost.excerpt}
                          </p>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1.5">
                              <Calendar className="h-3.5 w-3.5" />
                              {new Date(relatedPost.publishedAt).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Clock className="h-3.5 w-3.5" />
                              {relatedPost.readTime} min
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
