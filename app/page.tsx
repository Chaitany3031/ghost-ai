import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { Boxes, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const FEATURES = [
  "Real-time collaborative diagram canvas",
  "Visualize architecture, flows, and systems",
  "Design specs and scaffolds with Ghost AI",
];

export default async function Home() {
  const { userId } = await auth();

  if (userId) {
    redirect("/editor");
  }

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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">
            Collaborative System Architecture Design
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Map systems in real-time, generate architectures with AI, and produce technical specifications together with your team.
          </p>
        </div>

        {/* Text-only feature list */}
        <ul className="space-y-3">
          {FEATURES.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-ai" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Right form/action panel */}
      <div className="flex w-full flex-1 flex-col items-center justify-center px-4 py-10 lg:w-1/2">
        <div className="w-full max-w-sm space-y-6 text-center lg:text-left">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold tracking-tight text-foreground">
              Get Started with Ghost AI
            </h1>
            <p className="text-sm text-muted-foreground">
              Sign in to your account or create a new one to start diagramming immediately.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <Button asChild className="w-full">
              <Link href="/sign-in" className="flex items-center justify-center gap-2">
                Sign In
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>

            <Button asChild variant="outline" className="w-full">
              <Link href="/sign-up">
                Create Account
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}