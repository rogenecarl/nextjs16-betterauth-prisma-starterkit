import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/lib/generated/prisma";

/**
 * ===========================================
 * DATABASE CONFIGURATION (Prisma 7)
 * ===========================================
 *
 * Prisma 7 requires an adapter for direct database connections.
 * This uses @prisma/adapter-pg for PostgreSQL.
 *
 * Works with any PostgreSQL provider:
 * - Neon (use pooled connection string with "-pooler" in hostname)
 * - Supabase (use Transaction mode pooler URL)
 * - Railway, Render, or any standard PostgreSQL
 */

const connectionString = process.env.DATABASE_URL!;

const globalForPrisma = global as unknown as {
    prisma: PrismaClient;
};

function createPrismaClient(): PrismaClient {
    // Create connection pool
    const pool = new Pool({
        connectionString,
        max: 10,
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 10000,
    });

    // Create Prisma adapter
    const adapter = new PrismaPg(pool);

    return new PrismaClient({
        adapter,
        log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
    });
}

// Use existing global instance or create new one
const prisma = globalForPrisma.prisma ?? createPrismaClient();

// Prevent multiple instances in development (hot reload)
if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;
}

export default prisma;
