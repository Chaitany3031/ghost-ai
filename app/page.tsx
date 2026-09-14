import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <span>ghost AI</span>
      <Link
        href="/editor"
        className="rounded-md border border-border bg-background px-4 py-2 text-sm text-foreground hover:bg-accent"
      >
        Open Editor
      </Link>
    </div>
  );
}