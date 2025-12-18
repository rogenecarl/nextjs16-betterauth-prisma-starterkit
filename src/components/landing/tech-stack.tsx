"use client";

const technologies = [
  {
    name: "Next.js 16",
    description: "The React framework for production with App Router",
    logo: (
      <svg viewBox="0 0 180 180" className="h-10 w-10" fill="currentColor">
        <mask
          id="nextjs-mask"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="180"
          height="180"
        >
          <circle cx="90" cy="90" r="90" />
        </mask>
        <g mask="url(#nextjs-mask)">
          <circle cx="90" cy="90" r="90" />
          <path
            d="M149.508 157.52L69.142 54H54v71.97h12.114V69.384l73.885 95.461a90.304 90.304 0 009.509-7.325z"
            className="fill-background"
          />
          <rect x="115" y="54" width="12" height="72" className="fill-background" />
        </g>
      </svg>
    ),
    category: "Framework",
  },
  {
    name: "Better Auth",
    description: "Modern authentication library for TypeScript",
    logo: (
      <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    category: "Auth",
  },
  {
    name: "Prisma 7",
    description: "Next-generation ORM for Node.js and TypeScript",
    logo: (
      <svg viewBox="0 0 159 194" className="h-10 w-10" fill="currentColor">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.39 122.65c-3.8 6.45-2.9 14.57 2.27 20.04l40.59 42.96c3.35 3.55 8.08 5.44 12.97 5.19l89.32-4.65c8.53-.44 14.73-8.16 13.87-16.67l-13.22-130.3c-.87-8.53-8.59-14.73-17.12-13.75l-6.72.77L89.7 1.36a9.98 9.98 0 00-11.82 3.88L2.39 122.65zm124.67 35.08l-79.7 4.15c-2.13.11-4.04-.85-5.18-2.57L22.8 134.37a5.63 5.63 0 01.68-7.11l72.11-73.88a5.63 5.63 0 019.4 2.44l22.5 94.33c.94 3.96-1.75 7.89-5.83 7.58h-5.59z"
        />
      </svg>
    ),
    category: "Database",
  },
  {
    name: "PostgreSQL",
    description: "The world's most advanced open source database",
    logo: (
      <svg viewBox="0 0 128 128" className="h-10 w-10">
        <path
          fill="currentColor"
          d="M93.809 92.112c.785-6.533.55-7.492 5.416-6.433l1.235.108c3.742.17 8.637-.602 11.513-1.938 6.191-2.873 9.861-7.668 3.758-6.409-13.924 2.873-14.881-1.842-14.881-1.842 14.703-21.815 20.849-49.508 15.543-56.287-14.47-18.489-39.517-9.746-39.936-9.52l-.134.025c-2.751-.571-5.83-.912-9.289-.968-6.301-.104-11.082 1.652-14.535 4.41 0 0-44.19-18.2-42.153 22.94 1.098 8.773 31.497 66.27 67.755 48.886 13.24-6.348 1.573-11.478-1.573-11.478l-1.235-.108z"
        />
        <path
          fill="currentColor"
          className="opacity-80"
          d="M62.439 65.164c-1.479 13.773 9.368 14.645 22.726 13.115 7.355-.844 11.277-4.31 11.277-4.31s.786 2.984.786 5.557c0 5.33-11.748 11.622-25.937 11.622-13.188 0-20.876-6.24-20.876-17.65 0-3.398.688-7.109 2.236-10.873 4.142-10.075 12.853-16.29 12.853-16.29l-3.065 18.829z"
        />
      </svg>
    ),
    category: "Database",
  },
  {
    name: "TanStack Query",
    description: "Powerful asynchronous state management",
    logo: (
      <svg viewBox="0 0 633 633" className="h-10 w-10" fill="currentColor">
        <path d="M316.5 0C141.73 0 0 141.73 0 316.5S141.73 633 316.5 633 633 491.27 633 316.5 491.27 0 316.5 0zm0 574c-142.09 0-257.5-115.41-257.5-257.5S174.41 59 316.5 59 574 174.41 574 316.5 458.59 574 316.5 574z" />
        <circle cx="316.5" cy="316.5" r="150" />
      </svg>
    ),
    category: "Data",
  },
  {
    name: "Tailwind CSS 4",
    description: "A utility-first CSS framework for rapid UI",
    logo: (
      <svg viewBox="0 0 54 33" className="h-10 w-10" fill="currentColor">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
        />
      </svg>
    ),
    category: "Styling",
  },
  {
    name: "shadcn/ui",
    description: "Beautifully designed components built with Radix",
    logo: (
      <svg viewBox="0 0 256 256" className="h-10 w-10" fill="none">
        <rect width="256" height="256" rx="60" fill="currentColor" />
        <path d="M208 128L128 208" stroke="currentColor" strokeWidth="16" className="stroke-background" />
        <path d="M192 40L40 192" stroke="currentColor" strokeWidth="16" className="stroke-background" />
      </svg>
    ),
    category: "Components",
  },
  {
    name: "Zod 4",
    description: "TypeScript-first schema validation",
    logo: (
      <svg viewBox="0 0 512 512" className="h-10 w-10" fill="currentColor">
        <path d="M256 0L0 128v256l256 128 256-128V128L256 0zm0 472L40 352V160l216 108v204zm20-224L60 140l196-98 196 98-196 108zm196 104L276 460V248l196-108v192z" />
      </svg>
    ),
    category: "Validation",
  },
];

export function TechStack() {
  return (
    <section id="tech-stack" className="relative py-24 sm:py-32 bg-background">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.015] dark:opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Built with the{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent dark:from-emerald-400 dark:to-teal-400">
              best technologies
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A carefully curated stack of modern, battle-tested technologies that
            work seamlessly together.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {technologies.map((tech, index) => (
            <TechCard key={tech.name} tech={tech} index={index} />
          ))}
        </div>

        {/* Version Badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-3">
          <Badge>Next.js 16</Badge>
          <Badge>React 19</Badge>
          <Badge>TypeScript 5</Badge>
          <Badge>Prisma 7</Badge>
          <Badge>Tailwind 4</Badge>
          <Badge>Zod 4</Badge>
        </div>
      </div>
    </section>
  );
}

function TechCard({
  tech,
  index,
}: {
  tech: (typeof technologies)[0];
  index: number;
}) {
  return (
    <div
      className="group relative flex flex-col items-center rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-6 text-center transition-all duration-300 hover:border-primary/20 hover:bg-card hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
      style={{
        animationDelay: `${index * 50}ms`,
      }}
    >
      {/* Category Badge */}
      <span className="absolute top-3 right-3 text-[10px] font-medium uppercase tracking-wider text-muted-foreground/60">
        {tech.category}
      </span>

      {/* Logo */}
      <div className="mb-4 text-foreground/80 transition-transform group-hover:scale-110 group-hover:text-foreground">
        {tech.logo}
      </div>

      {/* Name */}
      <h3 className="text-sm font-semibold mb-1">{tech.name}</h3>

      {/* Description */}
      <p className="text-xs text-muted-foreground leading-relaxed">
        {tech.description}
      </p>
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
      {children}
    </span>
  );
}
