"use client";

import type { NavSection } from "@/components/dashboard";
import {
  LayoutDashboard,
  Users,
  UserCog,
  Shield,
  BarChart3,
  Settings,
  Bell,
  FileText,
  Server,
  HelpCircle,
  Package,
  Download,
} from "lucide-react";

export const adminNavSections: NavSection[] = [
  {
    title: "Overview",
    items: [
      {
        title: "Dashboard",
        href: "/admin/dashboard",
        icon: LayoutDashboard,
      },
      {
        title: "Analytics",
        href: "/admin/dashboard/analytics",
        icon: BarChart3,
      },
      {
        title: "Downloads",
        href: "/admin/dashboard/downloads",
        icon: Download,
      },
    ],
  },
  {
    title: "User Management",
    items: [
      {
        title: "All Users",
        href: "/admin/dashboard/users",
        icon: Users,
      },
      {
        title: "Contributors",
        href: "/admin/dashboard/contributors",
        icon: UserCog,
        badge: 3,
      },
    ],
  },
  {
    title: "System",
    items: [
      {
        title: "Security",
        href: "/admin/dashboard/security",
        icon: Shield,
      },
      {
        title: "Releases",
        href: "/admin/dashboard/releases",
        icon: Package,
      },
      {
        title: "Infrastructure",
        href: "/admin/dashboard/infrastructure",
        icon: Server,
      },
      {
        title: "Audit Logs",
        href: "/admin/dashboard/logs",
        icon: FileText,
      },
    ],
  },
  {
    title: "Account",
    items: [
      {
        title: "Notifications",
        href: "/admin/dashboard/notifications",
        icon: Bell,
        badge: 2,
      },
      {
        title: "Settings",
        href: "/admin/dashboard/settings",
        icon: Settings,
      },
      {
        title: "Documentation",
        href: "/admin/dashboard/docs",
        icon: HelpCircle,
      },
    ],
  },
];
