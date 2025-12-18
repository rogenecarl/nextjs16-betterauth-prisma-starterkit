"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    content:
      "This starter kit saved us weeks of development time. The authentication setup is rock-solid and the code quality is exceptional. We shipped our MVP in record time.",
    author: "Sarah Chen",
    role: "CTO at TechFlow",
    avatar: "SC",
    rating: 5,
  },
  {
    content:
      "Finally, a starter kit that actually follows best practices. The TypeScript integration is flawless, and the Prisma setup with Better Auth is exactly what we needed.",
    author: "Marcus Rodriguez",
    role: "Senior Developer at DevStudio",
    avatar: "MR",
    rating: 5,
  },
  {
    content:
      "The role-based access control saved us from reinventing the wheel. Clean architecture, great documentation, and production-ready from day one.",
    author: "Emily Watson",
    role: "Founder at StartupLab",
    avatar: "EW",
    rating: 5,
  },
  {
    content:
      "We evaluated multiple auth solutions and this was by far the most complete. The server actions pattern and form validation setup is elegant.",
    author: "David Kim",
    role: "Lead Engineer at BuildCo",
    avatar: "DK",
    rating: 5,
  },
  {
    content:
      "Impressive attention to detail. From the rate limiting to the session management, everything is well thought out and production-ready.",
    author: "Lisa Thompson",
    role: "Tech Lead at ScaleUp",
    avatar: "LT",
    rating: 5,
  },
  {
    content:
      "The shadcn/ui integration is beautiful. Dark mode, responsive design, accessible components - all working perfectly out of the box.",
    author: "James Mitchell",
    role: "Product Designer at DesignHub",
    avatar: "JM",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32 bg-muted/30">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-violet-500/5 blur-[128px]" />
        <div className="absolute bottom-1/4 left-0 h-96 w-96 rounded-full bg-primary/5 blur-[128px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Loved by{" "}
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent dark:from-amber-400 dark:to-orange-400">
              developers
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join hundreds of developers who have shipped faster with our starter
            kit.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.author}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-8 sm:grid-cols-4">
          <Stat value="500+" label="Developers" />
          <Stat value="100+" label="Projects shipped" />
          <Stat value="4.9/5" label="Average rating" />
          <Stat value="24/7" label="Support" />
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
}) {
  return (
    <div
      className="group relative rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-6 transition-all duration-300 hover:border-border/80 hover:bg-card hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/20"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Quote Icon */}
      <Quote className="absolute top-4 right-4 h-8 w-8 text-muted-foreground/10" />

      {/* Rating */}
      <div className="flex items-center gap-0.5 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            className="h-4 w-4 fill-amber-400 text-amber-400"
          />
        ))}
      </div>

      {/* Content */}
      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
        &ldquo;{testimonial.content}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-violet-500/20 text-sm font-semibold">
          {testimonial.avatar}
        </div>
        <div>
          <p className="text-sm font-medium">{testimonial.author}</p>
          <p className="text-xs text-muted-foreground">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-primary to-violet-600 bg-clip-text text-transparent dark:from-white dark:to-violet-400">
        {value}
      </p>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
