"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Shield, Zap, Database } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-[128px] animate-pulse" />
        <div className="absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-violet-500/10 blur-[128px] animate-pulse delay-700" />
        <div className="absolute bottom-1/4 left-1/3 h-64 w-64 rounded-full bg-blue-500/10 blur-[100px] animate-pulse delay-1000" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />

        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 mb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-muted-foreground shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Production-ready authentication starter
            </div>
          </div>

          {/* Headline */}
          <h1 className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            Build secure apps{" "}
            <span className="relative">
              <span className="relative z-10 bg-gradient-to-r from-primary via-violet-600 to-primary bg-clip-text text-transparent dark:from-white dark:via-violet-400 dark:to-white">
                faster than ever
              </span>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            A modern, production-ready starter kit with Next.js 16, Better Auth,
            Prisma 7, and TanStack Query. Authentication, role-based access, and
            beautiful UI components — all pre-configured and ready to go.
          </p>

          {/* CTA Buttons */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 mt-10 flex flex-col sm:flex-row items-center gap-4">
            <Button size="lg" asChild className="w-full sm:w-auto shadow-lg shadow-primary/25">
              <Link href="/register">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View on GitHub
              </Link>
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500 mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <FeaturePill
              icon={<Shield className="h-4 w-4" />}
              text="Enterprise-grade security"
            />
            <FeaturePill
              icon={<Zap className="h-4 w-4" />}
              text="Lightning fast performance"
            />
            <FeaturePill
              icon={<Database className="h-4 w-4" />}
              text="Type-safe database layer"
            />
          </div>

          {/* Preview Window */}
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700 mt-20 w-full max-w-5xl">
            <div className="relative rounded-xl border border-border bg-card/50 backdrop-blur-sm shadow-2xl shadow-black/10 dark:shadow-black/30 overflow-hidden">
              {/* Window Header */}
              <div className="flex items-center gap-2 border-b border-border bg-muted/30 px-4 py-3">
                <div className="flex items-center gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-xs text-muted-foreground font-medium">localhost:3000</span>
                </div>
                <div className="w-12" />
              </div>

              {/* Window Content - Code Preview */}
              <div className="p-6 sm:p-8 font-mono text-xs sm:text-sm overflow-x-auto">
                <pre className="text-left">
                  <code>
                    <span className="text-violet-600 dark:text-violet-400">import</span>
                    <span className="text-foreground"> {"{ "}</span>
                    <span className="text-emerald-600 dark:text-emerald-400">auth</span>
                    <span className="text-foreground">{" }"} </span>
                    <span className="text-violet-600 dark:text-violet-400">from</span>
                    <span className="text-amber-600 dark:text-amber-400"> &quot;@/lib/auth&quot;</span>
                    <span className="text-muted-foreground">;</span>
                    {"\n\n"}
                    <span className="text-muted-foreground">{"// Protect your routes with one line"}</span>
                    {"\n"}
                    <span className="text-violet-600 dark:text-violet-400">export const</span>
                    <span className="text-blue-600 dark:text-blue-400"> session </span>
                    <span className="text-foreground">= </span>
                    <span className="text-violet-600 dark:text-violet-400">await</span>
                    <span className="text-blue-600 dark:text-blue-400"> requireAuth</span>
                    <span className="text-foreground">()</span>
                    <span className="text-muted-foreground">;</span>
                    {"\n\n"}
                    <span className="text-muted-foreground">{"// Role-based access control"}</span>
                    {"\n"}
                    <span className="text-violet-600 dark:text-violet-400">export const</span>
                    <span className="text-blue-600 dark:text-blue-400"> admin </span>
                    <span className="text-foreground">= </span>
                    <span className="text-violet-600 dark:text-violet-400">await</span>
                    <span className="text-blue-600 dark:text-blue-400"> requireRole</span>
                    <span className="text-foreground">(</span>
                    <span className="text-amber-600 dark:text-amber-400">&quot;ADMIN&quot;</span>
                    <span className="text-foreground">)</span>
                    <span className="text-muted-foreground">;</span>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturePill({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center justify-center gap-2 rounded-full border border-border bg-background/50 backdrop-blur-sm px-4 py-2 text-sm text-muted-foreground">
      <span className="text-primary">{icon}</span>
      <span>{text}</span>
    </div>
  );
}
