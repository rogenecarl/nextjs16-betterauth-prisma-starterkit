import { createAuthClient } from "better-auth/react"
import type { auth } from "./auth"

export const authClient = createAuthClient<typeof auth>({
    baseURL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
})

// Export hooks for convenience
export const {
    signIn,
    signUp,
    signOut,
    useSession,
    getSession,
} = authClient