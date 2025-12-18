"use client"

import { useAuth } from "@/hooks"
import type { Role } from "@/types/auth"

type AuthGuardProps = {
    children: React.ReactNode
    /** Required role (optional - if not provided, just checks authentication) */
    role?: Role
    /** Content to show while loading */
    fallback?: React.ReactNode
    /** Content to show when not authorized */
    unauthorized?: React.ReactNode
}

/**
 * Component wrapper for protected content.
 * Shows children only when authenticated (and optionally with correct role).
 *
 * @example
 * // Basic auth guard
 * <AuthGuard fallback={<Loading />}>
 *   <ProtectedContent />
 * </AuthGuard>
 *
 * @example
 * // Role-based guard
 * <AuthGuard role="ADMIN" fallback={<Loading />}>
 *   <AdminPanel />
 * </AuthGuard>
 */
export function AuthGuard({
    children,
    role,
    fallback = null,
    unauthorized = null,
}: AuthGuardProps) {
    const { isLoading, isAuthenticated, role: userRole } = useAuth()

    // Loading state
    if (isLoading) {
        return <>{fallback}</>
    }

    // Not authenticated
    if (!isAuthenticated) {
        return <>{unauthorized}</>
    }

    // Role check (if required)
    if (role && userRole !== role) {
        return <>{unauthorized}</>
    }

    return <>{children}</>
}

/**
 * Shows content only to admins
 */
export function AdminOnly({
    children,
    fallback,
}: {
    children: React.ReactNode
    fallback?: React.ReactNode
}) {
    return (
        <AuthGuard role="ADMIN" fallback={fallback}>
            {children}
        </AuthGuard>
    )
}

/**
 * Shows content only to providers
 */
export function ProviderOnly({
    children,
    fallback,
}: {
    children: React.ReactNode
    fallback?: React.ReactNode
}) {
    return (
        <AuthGuard role="PROVIDER" fallback={fallback}>
            {children}
        </AuthGuard>
    )
}

/**
 * Shows content only to regular users
 */
export function UserOnly({
    children,
    fallback,
}: {
    children: React.ReactNode
    fallback?: React.ReactNode
}) {
    return (
        <AuthGuard role="USER" fallback={fallback}>
            {children}
        </AuthGuard>
    )
}
