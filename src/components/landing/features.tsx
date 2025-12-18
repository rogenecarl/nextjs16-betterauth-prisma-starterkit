"use client";

import {
  Shield,
  Users,
  Lock,
  Palette,
  Zap,
  Code2,
  Globe,
  KeyRound,
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Better Auth Integration",
    description:
      "Production-ready authentication with email/password and OAuth providers. Includes rate limiting, session management, and CSRF protection out of the box.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "Role-Based Access Control",
    description:
      "Built-in support for multiple user roles (Admin, Provider, User). Protect routes and components with simple, declarative guards.",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: Lock,
    title: "Type-Safe Database",
    description:
      "Prisma 7 with PostgreSQL provides fully type-safe database queries. Schema-driven development with automatic migrations.",
    gradient: "from-emerald-500 to-green-500",
  },
  {
    icon: Palette,
    title: "Beautiful UI Components",
    description:
      "Pre-configured shadcn/ui components with Tailwind CSS 4. Dark mode support, accessible by default, and fully customizable.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Zap,
    title: "Server Actions",
    description:
      "Leverage Next.js 16 server actions for secure form handling. Consistent response types and built-in validation with Zod.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Code2,
    title: "TanStack Query",
    description:
      "Efficient client-side data fetching with automatic caching, background refetching, and optimistic updates.",
    gradient: "from-red-500 to-pink-500",
  },
  {
    icon: Globe,
    title: "Social OAuth Providers",
    description:
      "One-click authentication with Google OAuth. Easily extend to add more providers like GitHub, Discord, or Microsoft.",
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    icon: KeyRound,
    title: "Session Management",
    description:
      "Secure session handling with cross-tab synchronization. Automatic token refresh and secure cookie management.",
    gradient: "from-teal-500 to-emerald-500",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32 bg-muted/30">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-violet-500/5 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-primary via-violet-600 to-primary bg-clip-text text-transparent dark:from-white dark:via-violet-400 dark:to-white">
              ship faster
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Stop wasting time on boilerplate. Focus on what makes your app
            unique while we handle authentication, database, and UI
            infrastructure.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const Icon = feature.icon;

  return (
    <div
      className="group relative rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-6 transition-all duration-300 hover:border-border/80 hover:bg-card hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/20 hover:-translate-y-1"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Icon */}
      <div
        className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} text-white shadow-lg shadow-black/10 mb-4 transition-transform group-hover:scale-110`}
      >
        <Icon className="h-6 w-6" />
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {feature.description}
      </p>

      {/* Hover Gradient */}
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity pointer-events-none`}
      />
    </div>
  );
}
