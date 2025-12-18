import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getSessionCookie, getCookieCache } from "better-auth/cookies"
import { AUTH_ROUTES, PROTECTED_ROUTES, ROLE_REDIRECTS } from "@/config/auth"

/**
 * Role-based route prefixes.
 * Maps route prefixes to required roles.
 */
const ROLE_ROUTE_MAP: Record<string, string> = {
    "/admin": "ADMIN",
    "/provider": "PROVIDER",
    "/dashboard": "USER",
}

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
    const isProtectedRoute = PROTECTED_ROUTES.some((route) =>
        pathname.startsWith(route)
    )

    if (isProtectedRoute && !isAuthenticated) {
        const loginUrl = new URL("/login", request.url)
        loginUrl.searchParams.set("callbackUrl", pathname)
        return NextResponse.redirect(loginUrl)
    }

    // Role-based route protection (optimistic - for UX only)
    if (isAuthenticated) {
        // Try to get cached session with role
        const cachedSession = await getCookieCache(request)
        const userRole = cachedSession?.user?.role as string | undefined

        if (userRole) {
            // Check if user is accessing a role-specific route
            for (const [routePrefix, requiredRole] of Object.entries(ROLE_ROUTE_MAP)) {
                if (pathname.startsWith(routePrefix) && userRole !== requiredRole) {
                    // Redirect to user's correct dashboard
                    const correctDashboard = ROLE_REDIRECTS[userRole as keyof typeof ROLE_REDIRECTS]
                    if (correctDashboard) {
                        return NextResponse.redirect(new URL(correctDashboard, request.url))
                    }
                }
            }
        }

        // Redirect authenticated users away from auth pages
        const isAuthRoute = AUTH_ROUTES.some((route) =>
            pathname.startsWith(route)
        )

        if (isAuthRoute) {
            // Use role from cached session for proper redirect
            const redirectPath = userRole
                ? ROLE_REDIRECTS[userRole as keyof typeof ROLE_REDIRECTS]
                : ROLE_REDIRECTS.USER

            return NextResponse.redirect(new URL(redirectPath || "/dashboard", request.url))
        }
    }

    // Redirect authenticated users away from auth pages (fallback without cache)
    const isAuthRoute = AUTH_ROUTES.some((route) =>
        pathname.startsWith(route)
    )

    if (isAuthRoute && isAuthenticated) {
        // No cached session available, redirect to default
        return NextResponse.redirect(new URL(ROLE_REDIRECTS.USER, request.url))
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
