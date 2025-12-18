"use client";

import type { NavSection } from "@/components/dashboard";
import {
  LayoutDashboard,
  GitPullRequest,
  Bug,
  Code2,
  Package,
  GitBranch,
  Bell,
  Settings,
  User,
  FileText,
  HelpCircle,
  Users,
} from "lucide-react";

export const providerNavSections: NavSection[] = [
  {
    title: "Overview",
    items: [
      {
        title: "Dashboard",
        href: "/provider/dashboard",
        icon: LayoutDashboard,
      },
      {
        title: "Pull Requests",
        href: "/provider/dashboard/pulls",
        icon: GitPullRequest,
        badge: 3,
      },
      {
        title: "Issues",
        href: "/provider/dashboard/issues",
        icon: Bug,
        badge: 2,
      },
    ],
  },
  {
    title: "Development",
    items: [
      {
        title: "Components",
        href: "/provider/dashboard/components",
        icon: Code2,
      },
      {
        title: "Packages",
        href: "/provider/dashboard/packages",
        icon: Package,
      },
      {
        title: "Branches",
        href: "/provider/dashboard/branches",
        icon: GitBranch,
      },
    ],
  },
  {
    title: "Team",
    items: [
      {
        title: "Members",
        href: "/provider/dashboard/team",
        icon: Users,
      },
      {
        title: "Documentation",
        href: "/provider/dashboard/docs",
        icon: FileText,
      },
    ],
  },
  {
    title: "Account",
    items: [
      {
        title: "Notifications",
        href: "/provider/dashboard/notifications",
        icon: Bell,
        badge: 5,
      },
      {
        title: "Profile",
        href: "/provider/dashboard/profile",
        icon: User,
      },
      {
        title: "Settings",
        href: "/provider/dashboard/settings",
        icon: Settings,
      },
      {
        title: "Help & Support",
        href: "/provider/dashboard/help",
        icon: HelpCircle,
      },
    ],
  },
];
