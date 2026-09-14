import type { ReactNode } from "react";
import { Boxes } from "lucide-react";

const FEATURES = [
  "Real-time collaborative diagram canvas",
  "Visualize architecture, flows, and systems",
  "Design specs and scaffolds with Ghost AI",
];

interface AuthLayoutProps {
  heading: string;
  tagline: string;
  children: ReactNode;
}

/**
 * Minimal two-panel auth layout: a compact branding/feature panel on the left
 * (hidden on small screens) and the centered Clerk form on the right.
 * No gradients, no hero sections, no feature cards — text only.
 */
export function AuthLayout({ heading, tagline, children }: AuthLayoutProps) {
  return (
    <div className="flex min-h-dvh w-full">
      {/* Left branding panel — large screens only */}
      <div className="hidden w-1/2 flex-col justify-between border-r border-border bg-accent-ai/5 p-10 lg:flex">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-accent-ai/30 bg-accent-ai/10">
            <Boxes className="h-5 w-5 text-accent-ai-text" />
          </span>
          <span className="text-lg font-semibold text-foreground">Ghost AI</span>
        </div>

        <div className="max-w-md">
          <h2 className="text-2xl font-semibold text-foreground">{heading}</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{tagline}</p>
        </div>

        {/* Text-only feature list — no cards */}
        <ul className="space-y-3">
          {FEATURES.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-ai" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Right form panel */}
      <div className="flex w-full flex-1 items-center justify-center px-4 py-10 lg:w-1/2">
        <div className="w-full max-w-sm">{children}</div>
      </div>
    </div>
  );
}