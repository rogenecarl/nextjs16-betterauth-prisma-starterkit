import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/prisma/client";

/**
 * ===========================================
 * DATABASE CONFIGURATION
 * ===========================================
 *
 * This file supports multiple PostgreSQL providers.
 * Uncomment the section for your chosen provider.
 *
 * SUPPORTED PROVIDERS:
 * 1. Neon (recommended for Vercel) - WebSocket + connection pooling
 * 2. Supabase - Connection pooler via pgBouncer
 * 3. Standard PostgreSQL - Railway, Render, self-hosted, etc.
 *
 * SWITCHING PROVIDERS:
 * 1. Uncomment your provider's import and configuration
 * 2. Comment out other providers
 * 3. Update DATABASE_URL in .env
 * 4. Run: pnpm build (to verify)
 */

const connectionString = process.env.DATABASE_URL!;

// ===========================================
// OPTION 1: NEON SERVERLESS (Recommended for Vercel)
// ===========================================
// Best for: Vercel, Cloudflare Workers, serverless functions
// Install: pnpm add @neondatabase/serverless
// URL format: postgresql://user:pass@ep-xxx-pooler.region.aws.neon.tech/db?sslmode=require
//             (use POOLED connection string with "-pooler" in hostname)

import { neonConfig, Pool } from "@neondatabase/serverless";

// Enable WebSocket connections for serverless environments
if (typeof globalThis.WebSocket !== "undefined") {
    neonConfig.webSocketConstructor = globalThis.WebSocket;
}

const prismaClientSingleton = () => {
    const pool = new Pool({
        connectionString,
        max: 10,                      // Max connections in pool
        idleTimeoutMillis: 30000,     // Close idle connections after 30s
        connectionTimeoutMillis: 10000, // Connection timeout
    });

    const adapter = new PrismaPg(pool);

    return new PrismaClient({
        adapter,
        log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
    });
};

// ===========================================
// OPTION 2: SUPABASE
// ===========================================
// Best for: Full BaaS, need realtime/storage/auth from Supabase
// Install: pnpm add pg (standard pg driver works fine)
// URL format: postgresql://postgres.[project-ref]:[password]@aws-0-[region].pooler.supabase.com:6543/postgres
//             (use "Transaction" mode pooler URL from Supabase dashboard)
//
// import { Pool } from "pg";
//
// const prismaClientSingleton = () => {
//     const pool = new Pool({
//         connectionString,
//         max: 10,
//         idleTimeoutMillis: 30000,
//         connectionTimeoutMillis: 10000,
//         ssl: { rejectUnauthorized: false }, // Required for Supabase
//     });
//
//     const adapter = new PrismaPg(pool);
//
//     return new PrismaClient({
//         adapter,
//         log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
//     });
// };

// ===========================================
// OPTION 3: STANDARD POSTGRESQL
// ===========================================
// Best for: Railway, Render, DigitalOcean, self-hosted, Docker
// Install: pnpm add pg
// URL format: postgresql://user:pass@host:5432/dbname?sslmode=require
//
// import { Pool } from "pg";
//
// const prismaClientSingleton = () => {
//     const pool = new Pool({
//         connectionString,
//         max: 20,                      // Can use more connections for dedicated DB
//         idleTimeoutMillis: 60000,     // Longer idle timeout OK for dedicated
//         connectionTimeoutMillis: 10000,
//         // ssl: { rejectUnauthorized: false }, // Uncomment if SSL required
//     });
//
//     const adapter = new PrismaPg(pool);
//
//     return new PrismaClient({
//         adapter,
//         log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
//     });
// };

// ===========================================
// OPTION 4: NO ADAPTER (Simplest - works with any PostgreSQL)
// ===========================================
// Best for: Quick setup, development, when you don't need connection pooling
// Works with: Any PostgreSQL provider
// URL format: Any valid PostgreSQL connection string
//
// const prismaClientSingleton = () => {
//     return new PrismaClient({
//         log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
//     });
// };

declare const globalThis: {
    prismaGlobal: ReturnType<typeof prismaClientSingleton>;
    WebSocket: typeof WebSocket;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

// Cache client in development to prevent multiple instances
if (process.env.NODE_ENV !== "production") {
    globalThis.prismaGlobal = prisma;
}

export default prisma;