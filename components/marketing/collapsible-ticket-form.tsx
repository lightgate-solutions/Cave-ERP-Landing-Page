"use client";

import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { SupportTicketForm } from "./support-ticket-form";
import { MessageCircle, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function CollapsibleTicketForm() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
      <CollapsibleTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-full justify-between border p-6 h-auto text-left hover:bg-accent",
            isOpen && "border-primary",
          )}
        >
          <div className="flex items-center gap-4 flex-1 min-w-0">
            <MessageCircle className="h-5 w-5 shrink-0 text-muted-foreground" />
            <div className="flex flex-col gap-1 flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-foreground">
                Submit a Support Ticket
              </h3>
              <p className="text-sm text-muted-foreground">
                {isOpen
                  ? "Fill out the form below and our support team will get back to you within 24 hours"
                  : "Need personalized help? Open a support ticket and we'll assist you promptly"}
              </p>
            </div>
          </div>
          <ChevronDown
            className={cn(
              "h-5 w-5 shrink-0 text-muted-foreground transition-transform",
              isOpen && "rotate-180",
            )}
          />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="overflow-hidden">
        <div className="mt-6">
          <SupportTicketForm />
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
