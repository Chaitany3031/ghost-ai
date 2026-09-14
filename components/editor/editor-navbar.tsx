"use client";

import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

interface EditorNavbarProps {
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
}

export function EditorNavbar({ sidebarOpen, onToggleSidebar }: EditorNavbarProps) {
  return (
    <header className="flex h-14 w-full shrink-0 items-center justify-between border-b border-border bg-background px-4">
      {/* Left section — sidebar toggle */}
      <div className="flex items-center">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={onToggleSidebar}
          aria-label="Toggle project sidebar"
        >
          {sidebarOpen ? (
            <PanelLeftClose className="h-5 w-5" />
          ) : (
            <PanelLeftOpen className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Center section — empty for now */}
      <div className="flex items-center" />

      {/* Right section — user menu */}
      <div className="flex items-center">
        <UserButton />
      </div>
    </header>
  );
}