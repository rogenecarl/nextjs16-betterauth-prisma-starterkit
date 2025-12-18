import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getSessionCookie } from "better-auth/cookies"

/**
 * Proxy for optimistic route protection (Next.js 16+).
 *
 * IMPORTANT: This is for UX optimization only, NOT security.
 * Cookie checks can be bypassed - always validate sessions
 * in your actual routes using auth.api.getSession().
 *
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/proxy
 * @see https://www.better-auth.com/docs/integrations/next
 */

// Routes that require authentication (optimistic check)
const protectedRoutes = [
    "/admin",
    "/provider",
    "/dashboard",
    "/browse-services",
    "/settings",
    "/profile",
]

// Routes that should redirect authenticated users
const authRoutes = [
    "/login",
    "/register",
    "/register-provider",
]

export async function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl

    // Skip API routes and static files
    if (
        pathname.startsWith("/api") ||
        pathname.startsWith("/_next") ||
        pathname.includes(".")
    ) {
        return NextResponse.next()
    }

    // Get session cookie (optimistic check - not secure, just for UX)
    const sessionCookie = getSessionCookie(request)
    const isAuthenticated = !!sessionCookie

    // Check if accessing protected route without session cookie
    const isProtectedRoute = protectedRoutes.some((route) =>
        pathname.startsWith(route)
    )

    if (isProtectedRoute && !isAuthenticated) {
        const loginUrl = new URL("/login", request.url)
        loginUrl.searchParams.set("callbackUrl", pathname)
        return NextResponse.redirect(loginUrl)
    }

    // Redirect authenticated users away from auth pages
    const isAuthRoute = authRoutes.some((route) =>
        pathname.startsWith(route)
    )

    if (isAuthRoute && isAuthenticated) {
        // Redirect to home - actual role-based redirect happens after login
        return NextResponse.redirect(new URL("/", request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        /*
         * Match all request paths except:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public folder
         */
        "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*|_next).*)",
    ],
}
