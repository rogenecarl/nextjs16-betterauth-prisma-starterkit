"use client"

import { useSession } from "@/components/providers"

/**
 * Hook to access authentication state.
 * Uses server-first session fetching for optimal performance.
 *
 * @example
 * const { user, isAuthenticated, signOut, isAdmin } = useAuth()
 *
 * @example
 * // Check loading state
 * const { isPending, isAuthenticated } = useAuth()
 * if (isPending) return <Spinner />
 */
export function useAuth() {
    const session = useSession()

    return {
        // Session state
        session: session.session,
        user: session.user,

        // Loading states (aliased for backward compatibility)
        isLoading: session.isPending,
        isPending: session.isPending,
        isAuthenticated: session.isAuthenticated,

        // Role checks
        role: session.role,
        isAdmin: session.isAdmin,
        isProvider: session.isProvider,
        isUser: session.isUser,

        // Methods
        signOut: session.signOut,
        refetch: session.refetch,
    }
}

// Type for the hook return value
export type UseAuthReturn = ReturnType<typeof useAuth>
