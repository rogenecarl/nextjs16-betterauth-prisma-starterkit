"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "./use-auth"
import type { Role } from "@/types/auth"
import { getRoleRedirect } from "@/config/auth"

type UseRequireAuthOptions = {
    /** Required role (optional) */
    role?: Role
    /** Redirect path when not authenticated (default: /login) */
    redirectTo?: string
    /** Redirect path when wrong role (default: based on user's role) */
    roleRedirectTo?: string
}

/**
 * Hook to require authentication on a page.
 * Redirects to login if not authenticated.
 * Optionally checks for a specific role.
 *
 * @example
 * // Basic auth requirement
 * const { user, isLoading } = useRequireAuth()
 *
 * @example
 * // Require admin role
 * const { user, isLoading } = useRequireAuth({ role: 'ADMIN' })
 */
export function useRequireAuth(options: UseRequireAuthOptions = {}) {
    const {
        role: requiredRole,
        redirectTo = "/login",
        roleRedirectTo,
    } = options

    const router = useRouter()
    const auth = useAuth()
    const { isAuthenticated, isLoading, role: userRole } = auth

    useEffect(() => {
        // Wait for session to load
        if (isLoading) return

        // Not authenticated - redirect to login
        if (!isAuthenticated) {
            router.replace(redirectTo)
            return
        }

        // Check role if required
        if (requiredRole && userRole !== requiredRole) {
            // Redirect to appropriate dashboard based on actual role
            const defaultRedirect = getRoleRedirect(userRole)
            router.replace(roleRedirectTo || defaultRedirect)
        }
    }, [isLoading, isAuthenticated, requiredRole, userRole, router, redirectTo, roleRedirectTo])

    return auth
}
