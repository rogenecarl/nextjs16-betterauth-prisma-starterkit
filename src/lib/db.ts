import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/prisma/client";
import { neonConfig, Pool } from "@neondatabase/serverless";

/**
 * Neon Serverless Configuration
 *
 * PERFORMANCE OPTIMIZATIONS:
 * 1. Uses WebSocket connections (faster than TCP for serverless)
 * 2. Connection pooling via Neon's pooler URL
 * 3. Singleton pattern prevents multiple connections
 *
 * IMPORTANT: Use the POOLED connection string from Neon dashboard
 * Format: postgresql://user:pass@ep-xxx-pooler.ap-southeast-1.aws.neon.tech/dbname?sslmode=require
 */

// Enable WebSocket connections for serverless (Vercel)
if (typeof globalThis.WebSocket !== "undefined") {
    neonConfig.webSocketConstructor = globalThis.WebSocket;
}

// Use pooled connection for production
const connectionString = process.env.DATABASE_URL!;

const prismaClientSingleton = () => {
    // Create Neon pool with serverless-optimized settings
    const pool = new Pool({
        connectionString,
        max: 10,                    // Max connections in pool
        idleTimeoutMillis: 30000,   // Close idle connections after 30s
        connectionTimeoutMillis: 10000, // Timeout after 10s
    });

    // PrismaPg accepts pool config, not pool instance
    const adapter = new PrismaPg(pool);

    return new PrismaClient({
        adapter,
        // Log slow queries in development
        log: process.env.NODE_ENV === "development"
            ? ["warn", "error"]
            : ["error"],
    });
};

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