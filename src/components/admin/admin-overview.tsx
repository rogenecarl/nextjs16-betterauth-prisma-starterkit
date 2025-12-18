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
  Users,
  UserPlus,
  Download,
  Star,
  ChevronRight,
  Shield,
  CheckCircle,
  Clock,
  Activity,
  Server,
  GitFork,
  Package,
  AlertTriangle,
} from "lucide-react";
import Link from "next/link";

// Mock data for demonstration
const recentUsers = [
  {
    id: "1",
    name: "John Smith",
    email: "john@example.com",
    role: "USER",
    status: "active",
    joinedAt: "Dec 15, 2024",
  },
  {
    id: "2",
    name: "Sarah Chen",
    email: "sarah@example.com",
    role: "PROVIDER",
    status: "pending",
    joinedAt: "Dec 14, 2024",
  },
  {
    id: "3",
    name: "Emily Davis",
    email: "emily@example.com",
    role: "USER",
    status: "active",
    joinedAt: "Dec 13, 2024",
  },
  {
    id: "4",
    name: "Michael Brown",
    email: "michael@example.com",
    role: "PROVIDER",
    status: "active",
    joinedAt: "Dec 12, 2024",
  },
  {
    id: "5",
    name: "Admin User",
    email: "admin2@example.com",
    role: "ADMIN",
    status: "active",
    joinedAt: "Dec 10, 2024",
  },
];

const systemActivity = [
  {
    id: "1",
    title: "New User Registration",
    description: "john@example.com signed up for an account",
    timestamp: "10 minutes ago",
    icon: UserPlus,
    iconColor: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
  },
  {
    id: "2",
    title: "Deployment Successful",
    description: "Production deployment v2.4.1 completed",
    timestamp: "1 hour ago",
    icon: Package,
    iconColor: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400",
  },
  {
    id: "3",
    title: "Security Alert",
    description: "Multiple failed login attempts detected",
    timestamp: "3 hours ago",
    icon: Shield,
    iconColor: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
  },
  {
    id: "4",
    title: "New Fork Created",
    description: "Repository forked by sarah_dev",
    timestamp: "5 hours ago",
    icon: GitFork,
    iconColor: "bg-violet-100 text-violet-600 dark:bg-violet-900/30 dark:text-violet-400",
  },
  {
    id: "5",
    title: "Database Backup",
    description: "Automatic backup completed successfully",
    timestamp: "1 day ago",
    icon: Server,
    iconColor: "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400",
  },
];

const userColumns = [
  {
    key: "name",
    header: "User",
    render: (item: (typeof recentUsers)[0]) => (
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-violet-500/20 text-xs font-semibold">
          {item.name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .slice(0, 2)}
        </div>
        <div>
          <p className="font-medium">{item.name}</p>
          <p className="text-xs text-muted-foreground">{item.email}</p>
        </div>
      </div>
    ),
  },
  {
    key: "role",
    header: "Role",
    render: (item: (typeof recentUsers)[0]) => {
      const roleConfig = {
        USER: { color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" },
        PROVIDER: { color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400" },
        ADMIN: { color: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400" },
      };
      const config = roleConfig[item.role as keyof typeof roleConfig];

      return (
        <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${config.color}`}>
          {item.role}
        </span>
      );
    },
  },
  {
    key: "status",
    header: "Status",
    render: (item: (typeof recentUsers)[0]) => {
      const statusConfig = {
        active: {
          icon: CheckCircle,
          color: "text-emerald-600 dark:text-emerald-400",
          label: "Active",
        },
        pending: {
          icon: Clock,
          color: "text-amber-600 dark:text-amber-400",
          label: "Pending",
        },
        suspended: {
          icon: AlertTriangle,
          color: "text-red-600 dark:text-red-400",
          label: "Suspended",
        },
      };
      const config = statusConfig[item.status as keyof typeof statusConfig];
      const Icon = config.icon;

      return (
        <span className={`inline-flex items-center gap-1 text-xs font-medium ${config.color}`}>
          <Icon className="h-3 w-3" />
          {config.label}
        </span>
      );
    },
  },
  {
    key: "joinedAt",
    header: "Joined",
    className: "text-muted-foreground",
  },
];

export function AdminOverview() {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="rounded-xl border border-border bg-gradient-to-r from-violet-500/5 via-purple-500/5 to-fuchsia-500/5 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Admin Dashboard
            </h2>
            <p className="mt-1 text-muted-foreground">
              Welcome back, {user?.name || "Administrator"}. Manage your starter kit deployment.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 px-3 py-1.5 text-sm font-medium text-emerald-700 dark:text-emerald-400">
            <Activity className="h-4 w-4" />
            All Systems Operational
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <StatsGrid columns={4}>
        <StatsCard
          title="Total Users"
          value="1,284"
          description="Registered accounts"
          icon={Users}
          trend={{ value: 12, label: "vs last month" }}
        />
        <StatsCard
          title="Active Contributors"
          value="48"
          description="Team members"
          icon={UserPlus}
          trend={{ value: 8, label: "vs last month" }}
        />
        <StatsCard
          title="Downloads"
          value="24.5K"
          description="This month"
          icon={Download}
          trend={{ value: 23, label: "vs last month" }}
        />
        <StatsCard
          title="GitHub Stars"
          value="5.2K"
          description="Repository stars"
          icon={Star}
          trend={{ value: 15, label: "growth" }}
        />
      </StatsGrid>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent Users */}
        <div className="lg:col-span-2">
          <Card className="h-full">
            <CardHeader
              action={
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/admin/dashboard/users" className="flex items-center gap-1">
                    View all
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              }
            >
              <CardTitle>Recent Users</CardTitle>
              <CardDescription>Newly registered accounts</CardDescription>
            </CardHeader>
            <CardContent>
              <DataTable
                columns={userColumns}
                data={recentUsers}
                emptyMessage="No users found"
              />
            </CardContent>
          </Card>
        </div>

        {/* System Activity */}
        <Card>
          <CardHeader
            action={
              <Button variant="ghost" size="sm" asChild>
                <Link href="/admin/dashboard/activity" className="flex items-center gap-1">
                  View all
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            }
          >
            <CardTitle>System Activity</CardTitle>
            <CardDescription>Recent events</CardDescription>
          </CardHeader>
          <CardContent>
            <ActivityFeed items={systemActivity} />
          </CardContent>
        </Card>
      </div>

      {/* System Status & Quick Actions */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* System Status */}
        <Card>
          <CardHeader>
            <CardTitle>System Health</CardTitle>
            <CardDescription>Infrastructure metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <SystemMetric
                label="API Response Time"
                value="45ms"
                status="healthy"
              />
              <SystemMetric
                label="Database Connections"
                value="12/100"
                status="healthy"
              />
              <SystemMetric
                label="Memory Usage"
                value="2.1GB / 4GB"
                status="warning"
              />
              <SystemMetric
                label="Storage Usage"
                value="45GB / 100GB"
                status="healthy"
              />
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common administrative tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <ActionItem
                icon={Users}
                title="User Management"
                description="View, edit, or suspend user accounts"
                href="/admin/dashboard/users"
              />
              <ActionItem
                icon={Shield}
                title="Security Settings"
                description="Configure auth and rate limiting"
                href="/admin/dashboard/security"
              />
              <ActionItem
                icon={Server}
                title="Deployment Settings"
                description="Manage environment variables"
                href="/admin/dashboard/deployment"
              />
              <ActionItem
                icon={Package}
                title="Release Management"
                description="Create and publish new versions"
                href="/admin/dashboard/releases"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function SystemMetric({
  label,
  value,
  status,
}: {
  label: string;
  value: string;
  status: "healthy" | "warning" | "critical";
}) {
  const statusConfig = {
    healthy: "bg-emerald-500",
    warning: "bg-amber-500",
    critical: "bg-red-500",
  };

  return (
    <div className="flex items-center justify-between rounded-lg border border-border p-3">
      <div className="flex items-center gap-3">
        <div className={`h-2 w-2 rounded-full ${statusConfig[status]}`} />
        <span className="text-sm">{label}</span>
      </div>
      <span className="text-sm font-medium">{value}</span>
    </div>
  );
}

function ActionItem({
  icon: Icon,
  title,
  description,
  href,
}: {
  icon: typeof Users;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-4 rounded-lg border border-border p-3 transition-all hover:border-primary/20 hover:bg-primary/5"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
      <ChevronRight className="h-4 w-4 text-muted-foreground" />
    </Link>
  );
}
