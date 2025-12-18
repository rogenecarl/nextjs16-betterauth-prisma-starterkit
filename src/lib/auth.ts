import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "./db";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql", // or "mysql", "postgresql", ...etc
    }),
    emailAndPassword: {
        enabled: true,
    },
    user: {
        additionalFields: {
            role: {
                type: "string",
                required: false,
                defaultValue: "USER",
                input: false, // Don't allow setting via signup
            },
        },
    },
    session: {
        cookieCache: {
            enabled: true,
            maxAge: 5 * 60, // 5 minutes - reduces database calls
        },
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        },
    },
    rateLimit: {
        enabled: true, // Enable rate limiting (disabled by default in development)
        window: 60, // time window in seconds
        max: 100, // Increased default for general API calls
        customRules: {
            // Allow frequent session checks (needed for client-side auth)
            "/get-session": {
                window: 60,
                max: 20, // Allow 20 session checks per minute (for navigation)
            },
            // Rate limit for sign-in to prevent brute force and credential stuffing attacks
            "/sign-in/email": {
                window: 300, // 5 minutes
                max: 5, // max 5 login attempts per 5 minutes
            },
            // Rate limit for user and provider signup to prevent spam and abuse
            "/sign-up/email": {
                window: 300, // 5 minutes
                max: 5, // max 5 signup attempts per 5 minutes
            },
            // Stricter rate limit for forgot password to prevent email enumeration and spam
            "/forget-password": {
                window: 300, // 5 minutes
                max: 3, // max 3 requests per 5 minutes
            },
            // Also limit reset password attempts
            "/reset-password": {
                window: 300, // 5 minutes
                max: 5, // max 5 attempts per 5 minutes
            },
        },
    },
    plugins: [nextCookies()],
});