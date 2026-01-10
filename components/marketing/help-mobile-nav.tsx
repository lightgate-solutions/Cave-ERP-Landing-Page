"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HelpMobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleHashClick = (hash: string) => {
    setIsOpen(false);
    if (pathname !== "/") {
      window.location.href = `/${hash}`;
    } else {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <>
      {/* Hamburger Button */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
      >
        <Menu className="h-6 w-6" />
      </Button>

      {/* Full Screen Overlay Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] md:hidden"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu Panel - Full Width */}
          <div className="fixed right-0 top-0 h-full w-full bg-background shadow-2xl z-[101] md:hidden overflow-hidden">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex-shrink-0 flex items-center justify-between px-5 pt-5 pb-4 border-b border-border bg-background">
                <h2 className="text-lg font-semibold text-foreground">Menu</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-full hover:bg-accent"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Navigation Links - Scrollable Section */}
              <nav className="flex-1 overflow-y-auto min-h-0 px-5 py-6 space-y-2 bg-background">
                <Link
                  href={pathname === "/" ? "#features" : "/#features"}
                  onClick={() => handleHashClick("#features")}
                  className="block w-full px-4 py-4 text-base font-medium text-foreground hover:text-primary hover:bg-accent rounded-lg transition-colors active:bg-accent"
                >
                  Features
                </Link>
                <Link
                  href={pathname === "/" ? "#pricing" : "/#pricing"}
                  onClick={() => handleHashClick("#pricing")}
                  className="block w-full px-4 py-4 text-base font-medium text-foreground hover:text-primary hover:bg-accent rounded-lg transition-colors active:bg-accent"
                >
                  Pricing
                </Link>
                <Link
                  href="/documentation"
                  onClick={handleLinkClick}
                  className={`block w-full px-4 py-4 text-base font-medium rounded-lg transition-colors active:bg-accent ${
                    pathname === "/documentation"
                      ? "text-primary bg-primary/10 font-semibold"
                      : "text-foreground hover:text-primary hover:bg-accent"
                  }`}
                >
                  Documentation
                </Link>
                <Link
                  href="/help"
                  onClick={handleLinkClick}
                  className={`block w-full px-4 py-4 text-base font-medium rounded-lg transition-colors active:bg-accent ${
                    pathname === "/help"
                      ? "text-primary bg-primary/10 font-semibold"
                      : "text-foreground hover:text-primary hover:bg-accent"
                  }`}
                >
                  Help
                </Link>
              </nav>

              {/* Action Buttons - Always Visible at Bottom */}
              <div className="flex-shrink-0 pt-5 border-t border-border space-y-3 pb-6 px-5 bg-background">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full rounded-full font-medium h-12 text-base"
                  asChild
                >
                  <Link
                    href="https://dashboard.cave.ng/auth/login"
                    target="_blank"
                    onClick={handleLinkClick}
                  >
                    Sign In
                  </Link>
                </Button>
                <Button
                  size="lg"
                  className="w-full rounded-full font-semibold bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base"
                  asChild
                >
                  <Link
                    href="https://dashboard.cave.ng/auth/register"
                    target="_blank"
                    onClick={handleLinkClick}
                  >
                    Try It Free
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
