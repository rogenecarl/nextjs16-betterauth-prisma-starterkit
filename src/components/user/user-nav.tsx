"use client";

import type { NavSection } from "@/components/dashboard";
import {
  LayoutDashboard,
  Rocket,
  Code2,
  Book,
  Bell,
  Settings,
  User,
  FolderGit2,
  HelpCircle,
  Palette,
  Terminal,
} from "lucide-react";

export const userNavSections: NavSection[] = [
  {
    title: "Menu",
    items: [
      {
        title: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
      },
      {
        title: "Projects",
        href: "/dashboard/projects",
        icon: FolderGit2,
        badge: 3,
      },
      {
        title: "Components",
        href: "/dashboard/components",
        icon: Code2,
      },
      {
        title: "Templates",
        href: "/dashboard/templates",
        icon: Palette,
      },
    ],
  },
  {
    title: "Development",
    items: [
      {
        title: "Quick Start",
        href: "/dashboard/quickstart",
        icon: Rocket,
      },
      {
        title: "CLI Commands",
        href: "/dashboard/cli",
        icon: Terminal,
      },
      {
        title: "Notifications",
        href: "/dashboard/notifications",
        icon: Bell,
        badge: 2,
      },
    ],
  },
  {
    title: "Account",
    items: [
      {
        title: "Profile",
        href: "/dashboard/profile",
        icon: User,
      },
      {
        title: "Settings",
        href: "/dashboard/settings",
        icon: Settings,
      },
      {
        title: "Documentation",
        href: "/dashboard/docs",
        icon: Book,
      },
      {
        title: "Help & Support",
        href: "/dashboard/help",
        icon: HelpCircle,
      },
    ],
  },
];
