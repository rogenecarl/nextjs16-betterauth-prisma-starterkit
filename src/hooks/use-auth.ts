"use client"

import { useCallback, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { useSession, signOut as authSignOut } from "@/lib/auth-client"
import type { Role } from "@/types/auth"

const AUTH_CHANNEL = "auth-sync"

type AuthSignOutMessage = {
    type: "SIGN_OUT"
    timestamp: number
}

export function useAuth() {
    const router = useRouter()
    const { data: session, isPending, error, refetch } = useSession()
    const channelRef = useRef<BroadcastChannel | null>(null)

    // Setup cross-tab sync
    useEffect(() => {
        if (typeof window === "undefined") return

        channelRef.current = new BroadcastChannel(AUTH_CHANNEL)

        const handleMessage = (event: MessageEvent<AuthSignOutMessage>) => {
            if (event.data.type === "SIGN_OUT") {
                // Another tab signed out, refresh session state
                refetch()
                router.push("/login")
            }
        }

        channelRef.current.addEventListener("message", handleMessage)

        return () => {
            channelRef.current?.removeEventListener("message", handleMessage)
            channelRef.current?.close()
        }
    }, [refetch, router])

    // Sign out with cross-tab broadcast
    const signOut = useCallback(async () => {
        try {
            await authSignOut()

            // Broadcast to other tabs
            channelRef.current?.postMessage({
                type: "SIGN_OUT",
                timestamp: Date.now(),
            } satisfies AuthSignOutMessage)

            router.push("/login")
        } catch (error) {
            console.error("Sign out error:", error)
            throw error
        }
    }, [router])

    // Derive role-based states
    const user = session?.user
    const role = (user as { role?: Role } | undefined)?.role

    return {
        // Session state
        session,
        user,
        error,

        // Loading states
        isLoading: isPending,
        isAuthenticated: !!user,

        // Role checks
        role,
        isAdmin: role === "ADMIN",
        isProvider: role === "PROVIDER",
        isUser: role === "USER",

        // Methods
        signOut,
        refetch,
    }
}

// Type for the hook return value
export type UseAuthReturn = ReturnType<typeof useAuth>
