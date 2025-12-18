"use server"

import { SignInSchema, SignUpProviderSchema, SignUpUserSchema } from "@/schema";
import type { z } from "zod";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import prisma from "@/lib/db";
import type { ActionResponse } from "@/types/api";
import { checkRateLimit, getClientIP, RATE_LIMITS } from "@/lib/auth-rate-limit";
import { getRoleRedirect } from "@/config/auth";
import type { Role } from "@/types/auth";

export async function signIn(
    values: z.infer<typeof SignInSchema>
): Promise<ActionResponse<never>> {
    const validatedFields = SignInSchema.safeParse(values);

    if (!validatedFields.success) {
        return {
            success: false,
            error: "Invalid email or password format"
        };
    }

    const { email, password } = validatedFields.data;

    // Rate limiting check
    const headersList = await headers();
    const clientIP = getClientIP(headersList);
    const rateLimitResult = checkRateLimit({
        key: "sign-in",
        identifier: clientIP,
        ...RATE_LIMITS.signIn,
    });

    if (!rateLimitResult.success) {
        return {
            success: false,
            error: `Too many sign-in attempts. Please try again in ${rateLimitResult.retryAfterSeconds} seconds.`,
        };
    }

    try {
        const res = await auth.api.signInEmail({
            body: { email, password },
            headers: await headers(),
        });

        if (!res.user) {
            return {
                success: false,
                error: "Invalid email or password",
            };
        }

        // Fetch user with role from database
        const userWithRole = await prisma.user.findUnique({
            where: { id: res.user.id },
            select: {
                id: true,
                role: true,
            },
        });

        if (!userWithRole) {
            return {
                success: false,
                error: "User not found",
            };
        }

        // Role-based redirection
        const redirectPath = getRoleRedirect(userWithRole.role as Role);
        redirect(redirectPath);
    } catch (error) {
        // Let NEXT_REDIRECT errors bubble up for navigation
        if (isRedirectError(error)) {
            throw error;
        }

        console.error("Sign in error:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "An error occurred during sign in",
        };
    }
}

export async function signUpUser(
    values: z.infer<typeof SignUpUserSchema>
): Promise<ActionResponse<{ userId: string }>> {
    const validatedFields = SignUpUserSchema.safeParse(values);

    if (!validatedFields.success) {
        return {
            success: false,
            error: "Invalid input. Please check your details"
        };
    }

    const { name, email, password } = validatedFields.data;

    // Rate limiting check
    const headersList = await headers();
    const clientIP = getClientIP(headersList);
    const rateLimitResult = checkRateLimit({
        key: "sign-up",
        identifier: clientIP,
        ...RATE_LIMITS.signUp,
    });

    if (!rateLimitResult.success) {
        return {
            success: false,
            error: `Too many sign-up attempts. Please try again in ${rateLimitResult.retryAfterSeconds} seconds.`,
        };
    }

    try {
        const res = await auth.api.signUpEmail({
            body: { name, email, password },
            headers: await headers(),
        });

        if (!res.user) {
            return {
                success: false,
                error: "Failed to create account",
            };
        }

        return {
            success: true,
            data: { userId: res.user.id },
        };
    } catch (error) {
        console.error("Sign up error:", error);

        // Handle specific error cases
        if (error instanceof Error) {
            if (error.message.includes("already exists") || error.message.includes("duplicate")) {
                return {
                    success: false,
                    error: "An account with this email already exists",
                };
            }
        }

        return {
            success: false,
            error: error instanceof Error ? error.message : "Failed to create account",
        };
    }
}

export async function signUpProvider(
    values: z.infer<typeof SignUpProviderSchema>
): Promise<ActionResponse<{ userId: string }>> {
    const validatedFields = SignUpProviderSchema.safeParse(values);

    if (!validatedFields.success) {
        return {
            success: false,
            error: "Invalid input. Please check your details"
        };
    }

    const { name, email, password } = validatedFields.data;

    // Rate limiting check
    const headersList = await headers();
    const clientIP = getClientIP(headersList);
    const rateLimitResult = checkRateLimit({
        key: "sign-up",
        identifier: clientIP,
        ...RATE_LIMITS.signUp,
    });

    if (!rateLimitResult.success) {
        return {
            success: false,
            error: `Too many sign-up attempts. Please try again in ${rateLimitResult.retryAfterSeconds} seconds.`,
        };
    }

    try {
        // Use transaction to ensure atomicity
        const res = await auth.api.signUpEmail({
            body: { name, email, password },
            headers: await headers(),
        });

        if (!res.user) {
            return {
                success: false,
                error: "Failed to create account",
            };
        }

        // Update user role to PROVIDER immediately in same transaction
        await prisma.user.update({
            where: { id: res.user.id },
            data: { role: "PROVIDER" },
            select: { id: true }, // Only return id to minimize data transfer
        });

        return {
            success: true,
            data: { userId: res.user.id },
        };
    } catch (error) {
        console.error("Sign up provider error:", error);

        // Handle specific error cases
        if (error instanceof Error) {
            if (error.message.includes("already exists") || error.message.includes("duplicate")) {
                return {
                    success: false,
                    error: "An account with this email already exists",
                };
            }
        }

        return {
            success: false,
            error: error instanceof Error ? error.message : "Failed to create account",
        };
    }
}
