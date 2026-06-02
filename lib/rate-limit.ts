// In-memory rate limiter — works per Vercel serverless instance
// Simple but effective against casual abuse and bot floods

interface RateLimitEntry {
  count: number
  resetAt: number
}

const store = new Map<string, RateLimitEntry>()

// Clean up old entries every 5 minutes to prevent memory leak
setInterval(() => {
  const now = Date.now()
  for (const [key, entry] of store.entries()) {
    if (now > entry.resetAt) store.delete(key)
  }
}, 5 * 60 * 1000)

export function rateLimit(
  ip: string,
  options: { limit: number; windowMs: number }
): { allowed: boolean; remaining: number; resetAt: number } {
  const now = Date.now()
  const key = ip
  const existing = store.get(key)

  if (!existing || now > existing.resetAt) {
    // New window
    const entry: RateLimitEntry = { count: 1, resetAt: now + options.windowMs }
    store.set(key, entry)
    return { allowed: true, remaining: options.limit - 1, resetAt: entry.resetAt }
  }

  existing.count++
  const remaining = Math.max(0, options.limit - existing.count)
  return {
    allowed: existing.count <= options.limit,
    remaining,
    resetAt: existing.resetAt,
  }
}

export function getIP(req: Request): string {
  const forwarded = req.headers.get('x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0].trim()
  return req.headers.get('x-real-ip') || 'unknown'
}
