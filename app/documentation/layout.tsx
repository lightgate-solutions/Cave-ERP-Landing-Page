"use client";

import { DocumentationSidebar } from "@/components/marketing/documentation-sidebar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function DocumentationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Sidebar Layout with Mobile Menu */}
      <SidebarProvider>
        <DocumentationSidebar />
        <SidebarInset>
          <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-2 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/95 px-4 md:px-6">
            <SidebarTrigger className="-ml-1" />
          </header>
          <main className="flex-1 bg-background">{children}</main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
