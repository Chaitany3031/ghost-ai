import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ui } from "@clerk/ui";
import { dark } from "@clerk/ui/themes";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ghost AI",
  description: "Diagram, design, and ship with Ghost AI.",
};

// Clerk appearance overridden with the app's existing CSS variables (no hardcoded colors).
// `dark` is the base theme; `variables` map Clerk's tokens to our --color-* tokens.
const clerkAppearance = {
  theme: dark,
  variables: {
    colorBackground: "var(--color-background)",
    colorForeground: "var(--color-foreground)",
    colorPrimary: "var(--color-primary)",
    colorPrimaryForeground: "var(--color-primary-foreground)",
    colorInput: "var(--color-input)",
    colorInputForeground: "var(--color-foreground)",
    colorBorder: "var(--color-border)",
    colorMuted: "var(--color-muted)",
    colorMutedForeground: "var(--color-muted-foreground)",
    colorNeutral: "var(--color-foreground)",
  },
} as const;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <ClerkProvider ui={ui} appearance={clerkAppearance}>
      <html
        lang="en"
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
        <body className="min-h-full flex flex-col">{children}</body>
      </html>
    </ClerkProvider>
  );
}