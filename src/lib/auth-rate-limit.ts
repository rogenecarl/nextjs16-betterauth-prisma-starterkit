/**
 * Simple in-memory rate limiter for server actions
 * Uses a sliding window approach to track requests
 */

type RateLimitRecord = {
  count: number;
  resetAt: number;
};

// In-memory store for rate limiting
// Note: This resets on server restart. For production with multiple instances,
// consider using Redis or database storage.
const rateLimitStore = new Map<string, RateLimitRecord>();

// Clean up expired entries periodically (every 5 minutes)
setInterval(() => {
  const now = Date.now();
  for (const [key, record] of rateLimitStore.entries()) {
    if (record.resetAt < now) {
      rateLimitStore.delete(key);
    }
  }
}, 5 * 60 * 1000);

type RateLimitConfig = {
  /** Unique identifier for the rate limit (e.g., "sign-in", "sign-up") */
  key: string;
  /** Client identifier (e.g., IP address, email) */
  identifier: string;
  /** Time window in seconds */
  windowSeconds: number;
  /** Maximum requests allowed in the window */
  maxRequests: number;
};

type RateLimitResult = {
  success: boolean;
  remaining: number;
  resetAt: number;
  retryAfterSeconds?: number;
};

/**
 * Check and consume a rate limit token
 */
export function checkRateLimit(config: RateLimitConfig): RateLimitResult {
  const { key, identifier, windowSeconds, maxRequests } = config;
  const storeKey = `${key}:${identifier}`;
  const now = Date.now();
  const windowMs = windowSeconds * 1000;

  let record = rateLimitStore.get(storeKey);

  // If no record exists or window has expired, create new record
  if (!record || record.resetAt < now) {
    record = {
      count: 1,
      resetAt: now + windowMs,
    };
    rateLimitStore.set(storeKey, record);

    return {
      success: true,
      remaining: maxRequests - 1,
      resetAt: record.resetAt,
    };
  }

  // Check if limit exceeded
  if (record.count >= maxRequests) {
    const retryAfterSeconds = Math.ceil((record.resetAt - now) / 1000);
    return {
      success: false,
      remaining: 0,
      resetAt: record.resetAt,
      retryAfterSeconds,
    };
  }

  // Increment count
  record.count += 1;
  rateLimitStore.set(storeKey, record);

  return {
    success: true,
    remaining: maxRequests - record.count,
    resetAt: record.resetAt,
  };
}

/**
 * Rate limit configurations for different actions
 */
export const RATE_LIMITS = {
  signIn: {
    windowSeconds: 300, // 5 minutes
    maxRequests: 5,
  },
  signUp: {
    windowSeconds: 300, // 5 minutes
    maxRequests: 5,
  },
  forgotPassword: {
    windowSeconds: 300, // 5 minutes
    maxRequests: 3,
  },
  resetPassword: {
    windowSeconds: 300, // 5 minutes
    maxRequests: 5,
  },
  resendOtp: {
    windowSeconds: 60, // 1 minute
    maxRequests: 2,
  },
} as const;

/**
 * Get client IP from headers
 */
export function getClientIP(headersList: Headers): string {
  // Check common headers for client IP
  const forwardedFor = headersList.get("x-forwarded-for");
  if (forwardedFor) {
    // x-forwarded-for can contain multiple IPs, get the first one
    return forwardedFor.split(",")[0].trim();
  }

  const realIP = headersList.get("x-real-ip");
  if (realIP) {
    return realIP;
  }

  // Fallback for development
  return "127.0.0.1";
}
