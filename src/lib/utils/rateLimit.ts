import { pool } from '$lib/db/client';
import { RATE_LIMIT_WINDOW_MS, RATE_LIMIT_MAX_COMMENTS } from '$env/static/private';

const WINDOW_MS = parseInt(RATE_LIMIT_WINDOW_MS || '900000'); // Default: 15 minutes
const MAX_COMMENTS = parseInt(RATE_LIMIT_MAX_COMMENTS || '5'); // Default: 5 comments

export interface RateLimitResult {
  allowed: boolean;
  remainingComments?: number;
  resetTime?: Date;
}

/**
 * Check if IP address is rate limited
 */
export async function checkRateLimit(ipAddress: string): Promise<RateLimitResult> {
  try {
    // Clean up old rate limit records
    await cleanupOldRecords();

    // Check current rate limit for this IP
    const query = `
      SELECT comment_count, window_start
      FROM comment_rate_limits
      WHERE ip_address = $1
    `;

    const result = await pool.query(query, [ipAddress]);

    if (result.rows.length === 0) {
      // No record exists, user is allowed
      return { allowed: true, remainingComments: MAX_COMMENTS - 1 };
    }

    const record = result.rows[0];
    const windowStart = new Date(record.window_start);
    const now = new Date();
    const windowEnd = new Date(windowStart.getTime() + WINDOW_MS);

    // Check if window has expired
    if (now > windowEnd) {
      // Reset the window
      await resetRateLimit(ipAddress);
      return { allowed: true, remainingComments: MAX_COMMENTS - 1 };
    }

    // Check if user has exceeded limit
    if (record.comment_count >= MAX_COMMENTS) {
      return {
        allowed: false,
        remainingComments: 0,
        resetTime: windowEnd
      };
    }

    // User is allowed, return remaining comments
    return {
      allowed: true,
      remainingComments: MAX_COMMENTS - record.comment_count - 1
    };
  } catch (error) {
    console.error('Rate limit check error:', error);
    // On error, allow the comment (fail open)
    return { allowed: true };
  }
}

/**
 * Increment rate limit counter for IP address
 */
export async function incrementRateLimit(ipAddress: string): Promise<void> {
  try {
    const query = `
      INSERT INTO comment_rate_limits (ip_address, comment_count, window_start)
      VALUES ($1, 1, CURRENT_TIMESTAMP)
      ON CONFLICT (ip_address)
      DO UPDATE SET comment_count = comment_rate_limits.comment_count + 1
    `;

    await pool.query(query, [ipAddress]);
  } catch (error) {
    console.error('Rate limit increment error:', error);
  }
}

/**
 * Reset rate limit for IP address
 */
async function resetRateLimit(ipAddress: string): Promise<void> {
  const query = `
    UPDATE comment_rate_limits
    SET comment_count = 0, window_start = CURRENT_TIMESTAMP
    WHERE ip_address = $1
  `;

  await pool.query(query, [ipAddress]);
}

/**
 * Clean up old rate limit records (older than 24 hours)
 */
async function cleanupOldRecords(): Promise<void> {
  const query = `
    DELETE FROM comment_rate_limits
    WHERE window_start < NOW() - INTERVAL '24 hours'
  `;

  await pool.query(query);
}

/**
 * Get client IP address from request
 */
export function getClientIP(request: Request): string {
  // Check common proxy headers
  const xForwardedFor = request.headers.get('x-forwarded-for');
  if (xForwardedFor) {
    return xForwardedFor.split(',')[0].trim();
  }

  const xRealIP = request.headers.get('x-real-ip');
  if (xRealIP) {
    return xRealIP;
  }

  // Fallback (this might not work in all deployments)
  return 'unknown';
}
