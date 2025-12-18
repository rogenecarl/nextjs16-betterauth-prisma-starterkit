"use client";

import { useAuth } from "@/hooks";
import {
  StatsCard,
  StatsGrid,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  ActivityFeed,
} from "@/components/dashboard";
import { Button } from "@/components/ui/button";
import {
  Rocket,
  GitBranch,
  Code2,
  Book,
  Bell,
  ChevronRight,
  Star,
  Clock,
  Zap,
  FileCode,
  Terminal,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

// Mock data for demonstration
const recentActivity = [
  {
    id: "1",
    title: "Project Created",
    description: "You initialized a new project from the starter kit",
    timestamp: "2 hours ago",
    icon: Rocket,
    iconColor: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
  },
  {
    id: "2",
    title: "Dependencies Updated",
    description: "Updated to Next.js 16.0.10 and React 19",
    timestamp: "1 day ago",
    icon: GitBranch,
    iconColor: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400",
  },
  {
    id: "3",
    title: "New Component Added",
    description: "Created custom dashboard layout component",
    timestamp: "3 days ago",
    icon: Code2,
    iconColor: "bg-violet-100 text-violet-600 dark:bg-violet-900/30 dark:text-violet-400",
  },
  {
    id: "4",
    title: "Documentation Read",
    description: "Completed Better Auth integration guide",
    timestamp: "1 week ago",
    icon: Book,
    iconColor: "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400",
  },
];

const quickStartGuides = [
  {
    id: "1",
    title: "Authentication Setup",
    description: "Configure email, OAuth, and role-based access",
    icon: "🔐",
    status: "completed",
  },
  {
    id: "2",
    title: "Database Configuration",
    description: "Set up Prisma with PostgreSQL",
    icon: "🗄️",
    status: "completed",
  },
  {
    id: "3",
    title: "UI Components",
    description: "Explore shadcn/ui component library",
    icon: "🎨",
    status: "in-progress",
  },
  {
    id: "4",
    title: "Deployment",
    description: "Deploy to Vercel or other platforms",
    icon: "🚀",
    status: "pending",
  },
];

export function UserOverview() {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="rounded-xl border border-border bg-gradient-to-r from-primary/5 via-violet-500/5 to-blue-500/5 p-6">
        <h2 className="text-2xl font-bold tracking-tight">
          Welcome back, {user?.name?.split(" ")[0] || "Developer"}!
        </h2>
        <p className="mt-1 text-muted-foreground">
          Here&apos;s your starter kit dashboard. Build something amazing today.
        </p>
      </div>

      {/* Stats Grid */}
      <StatsGrid columns={4}>
        <StatsCard
          title="Projects Created"
          value="3"
          description="From this starter kit"
          icon={Rocket}
          trend={{ value: 50, label: "this month" }}
        />
        <StatsCard
          title="Components Used"
          value="24"
          description="shadcn/ui components"
          icon={Code2}
        />
        <StatsCard
          title="Build Time"
          value="2.4s"
          description="Last production build"
          icon={Zap}
          trend={{ value: -15, label: "faster" }}
        />
        <StatsCard
          title="Uptime"
          value="99.9%"
          description="Last 30 days"
          icon={Clock}
        />
      </StatsGrid>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Getting Started Guide */}
        <Card>
          <CardHeader
            action={
              <Button variant="ghost" size="sm" asChild>
                <Link href="/dashboard/docs" className="flex items-center gap-1">
                  View docs
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            }
          >
            <CardTitle>Getting Started</CardTitle>
            <CardDescription>Complete these steps to master the starter kit</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {quickStartGuides.map((guide) => (
                <div
                  key={guide.id}
                  className="flex items-center gap-4 rounded-lg border border-border p-4 transition-colors hover:bg-muted/50"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-lg">
                    {guide.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium">{guide.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {guide.description}
                    </p>
                  </div>
                  <StatusBadge status={guide.status} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader
            action={
              <Button variant="ghost" size="sm" asChild>
                <Link href="/dashboard/activity" className="flex items-center gap-1">
                  View all
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            }
          >
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest actions and updates</CardDescription>
          </CardHeader>
          <CardContent>
            <ActivityFeed items={recentActivity} />
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common development tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <QuickAction
              icon={FileCode}
              label="Create Component"
              href="/dashboard/components"
            />
            <QuickAction
              icon={Terminal}
              label="Run Commands"
              href="/dashboard/terminal"
            />
            <QuickAction
              icon={Bell}
              label="Notifications"
              href="/dashboard/notifications"
              badge={2}
            />
            <QuickAction
              icon={Book}
              label="Documentation"
              href="/dashboard/docs"
            />
          </div>
        </CardContent>
      </Card>

      {/* Resources */}
      <Card>
        <CardHeader>
          <CardTitle>Helpful Resources</CardTitle>
          <CardDescription>Learn more about the technologies used</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <ResourceLink
              title="Next.js 16 Docs"
              description="Learn about App Router and Server Components"
              href="https://nextjs.org/docs"
            />
            <ResourceLink
              title="Better Auth"
              description="Authentication library documentation"
              href="https://www.better-auth.com"
            />
            <ResourceLink
              title="Prisma 7"
              description="Type-safe database access"
              href="https://www.prisma.io/docs"
            />
            <ResourceLink
              title="Tailwind CSS 4"
              description="Utility-first CSS framework"
              href="https://tailwindcss.com/docs"
            />
            <ResourceLink
              title="shadcn/ui"
              description="Beautifully designed components"
              href="https://ui.shadcn.com"
            />
            <ResourceLink
              title="TanStack Query"
              description="Powerful data synchronization"
              href="https://tanstack.com/query"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const config = {
    completed: {
      label: "Done",
      className: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
    },
    "in-progress": {
      label: "In Progress",
      className: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    },
    pending: {
      label: "Pending",
      className: "bg-muted text-muted-foreground",
    },
  };

  const { label, className } = config[status as keyof typeof config] || config.pending;

  return (
    <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${className}`}>
      {label}
    </span>
  );
}

function QuickAction({
  icon: Icon,
  label,
  href,
  badge,
}: {
  icon: typeof Rocket;
  label: string;
  href: string;
  badge?: number;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 rounded-lg border border-border p-4 transition-all hover:border-primary/20 hover:bg-primary/5 hover:shadow-sm"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <span className="font-medium">{label}</span>
      {badge && (
        <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-destructive px-1.5 text-xs font-semibold text-destructive-foreground">
          {badge}
        </span>
      )}
    </Link>
  );
}

function ResourceLink({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-start gap-3 rounded-lg border border-border p-4 transition-all hover:border-primary/20 hover:bg-primary/5"
    >
      <Star className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1">
          <p className="font-medium">{title}</p>
          <ExternalLink className="h-3 w-3 text-muted-foreground" />
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </a>
  );
}
