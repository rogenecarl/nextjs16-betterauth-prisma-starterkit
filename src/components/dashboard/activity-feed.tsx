"use client";

import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface ActivityItem {
  id: string;
  title: string;
  description?: string;
  timestamp: string;
  icon?: LucideIcon;
  iconColor?: string;
  user?: {
    name: string;
    avatar?: string;
  };
}

interface ActivityFeedProps {
  items: ActivityItem[];
  emptyMessage?: string;
  className?: string;
}

export function ActivityFeed({
  items,
  emptyMessage = "No recent activity",
  className,
}: ActivityFeedProps) {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  if (items.length === 0) {
    return (
      <div className={cn("py-8 text-center text-sm text-muted-foreground", className)}>
        {emptyMessage}
      </div>
    );
  }

  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={item.id}
            className="relative flex gap-4"
          >
            {/* Timeline Line */}
            {index < items.length - 1 && (
              <div className="absolute left-5 top-10 h-[calc(100%-8px)] w-px bg-border" />
            )}

            {/* Icon or Avatar */}
            <div className="relative z-10 flex-shrink-0">
              {Icon ? (
                <div
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full",
                    item.iconColor || "bg-primary/10 text-primary"
                  )}
                >
                  <Icon className="h-4 w-4" />
                </div>
              ) : item.user ? (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-violet-500/20 text-sm font-semibold">
                  {item.user.avatar ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={item.user.avatar}
                      alt={item.user.name}
                      className="h-full w-full rounded-full object-cover"
                    />
                  ) : (
                    getInitials(item.user.name)
                  )}
                </div>
              ) : (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                  <div className="h-2 w-2 rounded-full bg-muted-foreground" />
                </div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0 pb-4">
              <p className="text-sm font-medium">{item.title}</p>
              {item.description && (
                <p className="mt-0.5 text-sm text-muted-foreground line-clamp-2">
                  {item.description}
                </p>
              )}
              <p className="mt-1 text-xs text-muted-foreground">
                {item.timestamp}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
