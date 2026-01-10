"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { X } from "lucide-react";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const getLinkClassName = (href: string, isRoute = false) => {
    let isActive = false;

    if (isRoute) {
      isActive = pathname === href;
    } else {
      // For hash links, we'll check on click
      isActive = false;
    }

    return `block px-4 py-3.5 text-base font-medium transition-colors rounded-lg ${
      isActive
        ? "text-primary bg-primary/10 font-semibold"
        : "text-foreground hover:text-primary hover:bg-accent"
    }`;
  };

  const handleLinkClick = (href: string) => {
    // Close the menu when a link is clicked
    setOpen(false);
    
    // If it's a hash link, handle navigation properly
    if (href.startsWith("#")) {
      // If we're not on the home page, navigate to home first, then scroll
      if (pathname !== "/") {
        window.location.href = `/${href}`;
      } else {
        // We're already on home page, just scroll
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    }
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent 
        side="right" 
        className="w-screen sm:w-[90vw] sm:max-w-[420px] p-0 bg-background overflow-hidden"
      >
        <div className="flex flex-col h-full">
          <SheetHeader className="flex-shrink-0 px-5 pt-5 pb-4 border-b border-border bg-background">
            <div className="flex items-center justify-between">
              <SheetTitle className="text-lg font-semibold text-foreground">Menu</SheetTitle>
              <SheetClose asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-full hover:bg-accent"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </Button>
              </SheetClose>
            </div>
          </SheetHeader>
          <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
            <nav className="flex-1 overflow-y-auto px-5 py-4 space-y-0.5 bg-background">
              <Link
                href={pathname === "/" ? "#features" : "/#features"}
                onClick={() => handleLinkClick("#features")}
                className={getLinkClassName("#features")}
              >
                Features
              </Link>
              <Link
                href={pathname === "/" ? "#pricing" : "/#pricing"}
                onClick={() => handleLinkClick("#pricing")}
                className={getLinkClassName("#pricing")}
              >
                Pricing
              </Link>
              <Link
                href="/documentation"
                onClick={() => handleLinkClick("/documentation")}
                className={getLinkClassName("/documentation", true)}
              >
                Documentation
              </Link>
              <Link
                href="/help"
                onClick={() => handleLinkClick("/help")}
                className={getLinkClassName("/help", true)}
              >
                Help
              </Link>
            </nav>
            <div className="flex-shrink-0 pt-4 border-t border-border space-y-3 pb-5 px-5 bg-background">
              <Button
                variant="outline"
                size="lg"
                className="w-full rounded-full font-medium h-11"
                asChild
              >
                <Link
                  href="https://dashboard.cave.ng/auth/login"
                  target="_blank"
                  onClick={() => setOpen(false)}
                >
                  Sign In
                </Link>
              </Button>
              <Button
                size="lg"
                className="w-full rounded-full font-semibold bg-primary text-primary-foreground hover:bg-primary/90 h-11"
                asChild
              >
                <Link
                  href="https://dashboard.cave.ng/auth/register"
                  target="_blank"
                  onClick={() => setOpen(false)}
                >
                  Try It Free
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
