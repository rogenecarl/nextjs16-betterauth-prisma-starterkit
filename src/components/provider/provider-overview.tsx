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
  DataTable,
  ActivityFeed,
} from "@/components/dashboard";
import { Button } from "@/components/ui/button";
import {
  GitPullRequest,
  GitCommit,
  Code2,
  Star,
  Users,
  ChevronRight,
  TrendingUp,
  CheckCircle,
  XCircle,
  Clock,
  GitBranch,
  Package,
  Bug,
} from "lucide-react";
import Link from "next/link";

// Mock data for demonstration
const recentPullRequests = [
  {
    id: "1",
    title: "Add dark mode toggle component",
    author: "john_dev",
    branch: "feature/dark-mode",
    status: "merged",
    createdAt: "2 hours ago",
  },
  {
    id: "2",
    title: "Fix authentication redirect loop",
    author: "sarah_coder",
    branch: "fix/auth-redirect",
    status: "open",
    createdAt: "5 hours ago",
  },
  {
    id: "3",
    title: "Update Prisma to v7.2",
    author: "mike_ops",
    branch: "chore/prisma-update",
    status: "reviewing",
    createdAt: "1 day ago",
  },
  {
    id: "4",
    title: "Add rate limiting middleware",
    author: "emily_sec",
    branch: "feature/rate-limit",
    status: "open",
    createdAt: "2 days ago",
  },
  {
    id: "5",
    title: "Deprecated: Old auth flow",
    author: "alex_dev",
    branch: "chore/cleanup",
    status: "closed",
    createdAt: "3 days ago",
  },
];

const teamActivity = [
  {
    id: "1",
    title: "New Component Published",
    description: "DataTable component added to the library",
    timestamp: "30 minutes ago",
    icon: Package,
    iconColor: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
  },
  {
    id: "2",
    title: "PR Merged",
    description: "Dark mode toggle merged to main branch",
    timestamp: "2 hours ago",
    icon: GitPullRequest,
    iconColor: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400",
  },
  {
    id: "3",
    title: "Issue Resolved",
    description: "Fixed authentication cookie issue #142",
    timestamp: "4 hours ago",
    icon: Bug,
    iconColor: "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400",
  },
  {
    id: "4",
    title: "New Contributor",
    description: "emily_sec joined the team",
    timestamp: "1 day ago",
    icon: Users,
    iconColor: "bg-violet-100 text-violet-600 dark:bg-violet-900/30 dark:text-violet-400",
  },
];

const prColumns = [
  {
    key: "title",
    header: "Pull Request",
    render: (item: (typeof recentPullRequests)[0]) => (
      <div>
        <p className="font-medium">{item.title}</p>
        <p className="text-xs text-muted-foreground flex items-center gap-1">
          <GitBranch className="h-3 w-3" />
          {item.branch}
        </p>
      </div>
    ),
  },
  {
    key: "author",
    header: "Author",
    render: (item: (typeof recentPullRequests)[0]) => (
      <span className="text-sm">@{item.author}</span>
    ),
  },
  {
    key: "status",
    header: "Status",
    render: (item: (typeof recentPullRequests)[0]) => {
      const statusConfig = {
        merged: {
          icon: CheckCircle,
          color: "text-violet-600 dark:text-violet-400",
          bg: "bg-violet-100 dark:bg-violet-900/30",
          label: "Merged",
        },
        open: {
          icon: GitPullRequest,
          color: "text-emerald-600 dark:text-emerald-400",
          bg: "bg-emerald-100 dark:bg-emerald-900/30",
          label: "Open",
        },
        reviewing: {
          icon: Clock,
          color: "text-amber-600 dark:text-amber-400",
          bg: "bg-amber-100 dark:bg-amber-900/30",
          label: "Reviewing",
        },
        closed: {
          icon: XCircle,
          color: "text-red-600 dark:text-red-400",
          bg: "bg-red-100 dark:bg-red-900/30",
          label: "Closed",
        },
      };
      const config = statusConfig[item.status as keyof typeof statusConfig];
      const Icon = config.icon;

      return (
        <span className={`inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-xs font-medium ${config.bg} ${config.color}`}>
          <Icon className="h-3 w-3" />
          {config.label}
        </span>
      );
    },
  },
  {
    key: "createdAt",
    header: "Created",
    className: "text-muted-foreground text-sm",
  },
];

export function ProviderOverview() {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="rounded-xl border border-border bg-gradient-to-r from-emerald-500/5 via-teal-500/5 to-cyan-500/5 p-6">
        <h2 className="text-2xl font-bold tracking-tight">
          Welcome back, {user?.name?.split(" ")[0] || "Contributor"}!
        </h2>
        <p className="mt-1 text-muted-foreground">
          You have <span className="font-semibold text-foreground">3 open pull requests</span> and <span className="font-semibold text-foreground">2 issues</span> assigned to you
        </p>
      </div>

      {/* Stats Grid */}
      <StatsGrid columns={4}>
        <StatsCard
          title="Contributions"
          value="147"
          description="Total commits"
          icon={GitCommit}
          trend={{ value: 23, label: "this month" }}
        />
        <StatsCard
          title="Pull Requests"
          value="28"
          description="Merged PRs"
          icon={GitPullRequest}
          trend={{ value: 12, label: "vs last month" }}
        />
        <StatsCard
          title="Components"
          value="12"
          description="Published to library"
          icon={Code2}
        />
        <StatsCard
          title="Stars Earned"
          value="1.2K"
          description="GitHub stars"
          icon={Star}
          trend={{ value: 8, label: "growth" }}
        />
      </StatsGrid>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent Pull Requests */}
        <div className="lg:col-span-2">
          <Card className="h-full">
            <CardHeader
              action={
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/provider/dashboard/pulls" className="flex items-center gap-1">
                    View all
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              }
            >
              <CardTitle>Recent Pull Requests</CardTitle>
              <CardDescription>Latest contributions to the project</CardDescription>
            </CardHeader>
            <CardContent>
              <DataTable
                columns={prColumns}
                data={recentPullRequests}
                emptyMessage="No pull requests found"
              />
            </CardContent>
          </Card>
        </div>

        {/* Team Activity */}
        <Card>
          <CardHeader
            action={
              <Button variant="ghost" size="sm" asChild>
                <Link href="/provider/dashboard/activity" className="flex items-center gap-1">
                  View all
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            }
          >
            <CardTitle>Team Activity</CardTitle>
            <CardDescription>Latest updates</CardDescription>
          </CardHeader>
          <CardContent>
            <ActivityFeed items={teamActivity} />
          </CardContent>
        </Card>
      </div>

      {/* Contribution Stats & Tasks */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Contribution Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Contribution Overview</CardTitle>
            <CardDescription>Your impact on the project</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <ContributionMetric
                label="Code Reviews"
                value={85}
                trend={5}
              />
              <ContributionMetric
                label="Issues Resolved"
                value={72}
                trend={-3}
              />
              <ContributionMetric
                label="Documentation"
                value={60}
                trend={12}
              />
              <ContributionMetric
                label="Test Coverage"
                value={88}
                trend={4}
              />
            </div>
          </CardContent>
        </Card>

        {/* Assigned Tasks */}
        <Card>
          <CardHeader>
            <CardTitle>Your Tasks</CardTitle>
            <CardDescription>Issues and PRs assigned to you</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <TaskItem
                type="pr"
                title="Review: Add form validation"
                priority="high"
                href="/provider/dashboard/pulls/45"
              />
              <TaskItem
                type="issue"
                title="Bug: Session expires too quickly"
                priority="medium"
                href="/provider/dashboard/issues/142"
              />
              <TaskItem
                type="pr"
                title="Review: Update dependencies"
                priority="low"
                href="/provider/dashboard/pulls/43"
              />
              <TaskItem
                type="issue"
                title="Feature: Add email templates"
                priority="medium"
                href="/provider/dashboard/issues/138"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function ContributionMetric({
  label,
  value,
  trend,
}: {
  label: string;
  value: number;
  trend: number;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">{label}</span>
        <div className="flex items-center gap-2">
          <span className="font-medium">{value}%</span>
          <span
            className={`flex items-center text-xs ${
              trend > 0
                ? "text-emerald-600 dark:text-emerald-400"
                : "text-red-600 dark:text-red-400"
            }`}
          >
            <TrendingUp
              className={`h-3 w-3 ${trend < 0 ? "rotate-180" : ""}`}
            />
            {Math.abs(trend)}%
          </span>
        </div>
      </div>
      <div className="h-2 w-full rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-primary transition-all"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

function TaskItem({
  type,
  title,
  priority,
  href,
}: {
  type: "pr" | "issue";
  title: string;
  priority: "high" | "medium" | "low";
  href: string;
}) {
  const priorityConfig = {
    high: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
    medium: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    low: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  };

  const typeConfig = {
    pr: { icon: GitPullRequest, color: "text-violet-600 dark:text-violet-400" },
    issue: { icon: Bug, color: "text-amber-600 dark:text-amber-400" },
  };

  const Icon = typeConfig[type].icon;

  return (
    <Link
      href={href}
      className="flex items-center justify-between rounded-lg border border-border p-3 transition-all hover:border-primary/20 hover:bg-primary/5"
    >
      <div className="flex items-center gap-3">
        <Icon className={`h-4 w-4 ${typeConfig[type].color}`} />
        <span className="text-sm font-medium">{title}</span>
      </div>
      <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${priorityConfig[priority]}`}>
        {priority}
      </span>
    </Link>
  );
}
