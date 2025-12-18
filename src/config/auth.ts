import type { Role } from "@/types/auth"

/**
 * Centralized auth configuration.
 * Single source of truth for role-based redirects.
 */

// Role-based dashboard redirects after login
export const ROLE_REDIRECTS: Record<Role, string> = {
    ADMIN: "/admin/dashboard",
    PROVIDER: "/provider/dashboard",
    USER: "/dashboard",
} as const

// Default redirect for unknown roles
export const DEFAULT_REDIRECT = "/dashboard"

// Auth routes (public, redirect away if authenticated)
export const AUTH_ROUTES = [
    "/login",
    "/register",
    "/register-provider",
] as const

// Protected routes (require authentication)
export const PROTECTED_ROUTES = [
    "/admin",
    "/provider",
    "/dashboard",
    "/settings",
    "/profile",
] as const

/**
 * Get redirect path for a role
 */
export function getRoleRedirect(role: Role | undefined): string {
    if (!role) return "/login"
    return ROLE_REDIRECTS[role] ?? DEFAULT_REDIRECT
}

/**
 * Check if a path is an auth route
 */
export function isAuthRoute(pathname: string): boolean {
    return AUTH_ROUTES.some(route => pathname.startsWith(route))
}

/**
 * Check if a path is a protected route
 */
export function isProtectedRoute(pathname: string): boolean {
    return PROTECTED_ROUTES.some(route => pathname.startsWith(route))
}
