import { NextRequest, NextResponse } from 'next/server'

// Block common attack patterns at the edge — before any route runs
const BLOCKED_PATTERNS = [
  /\.\.\//,                    // path traversal
  /<script/i,                  // XSS attempts in URL
  /javascript:/i,              // JS injection
  /union\s+select/i,           // SQL injection
  /exec\s*\(/i,                // code execution
  /eval\s*\(/i,                // eval injection
  /\bwp-admin\b/i,             // WordPress scanning
  /\bphpmyadmin\b/i,           // phpMyAdmin scanning
  /\.env/i,                    // env file probing
  /\.git\//,                   // git directory probing
  /\/etc\/passwd/,             // Linux file probing
  /base64_decode/i,            // PHP exploit patterns
]

// Block known bad user agents
const BLOCKED_USER_AGENTS = [
  /sqlmap/i,
  /nikto/i,
  /nessus/i,
  /masscan/i,
  /zgrab/i,
  /python-requests\/2\.[01]/i,  // old bot versions
  /go-http-client\/1\./i,
  /curl\//i,                   // block raw curl (APIs use fetch)
]

export function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl
  const fullPath = pathname + search
  const ua = req.headers.get('user-agent') || ''

  // ── Block path traversal and injection attempts ──
  for (const pattern of BLOCKED_PATTERNS) {
    if (pattern.test(fullPath)) {
      return new NextResponse('Forbidden', { status: 403 })
    }
  }

  // ── Block malicious user agents ──
  // Only apply to API routes to avoid blocking legitimate browsers
  if (pathname.startsWith('/api/')) {
    for (const pattern of BLOCKED_USER_AGENTS) {
      if (pattern.test(ua)) {
        return new NextResponse('Forbidden', { status: 403 })
      }
    }

    // Block requests with no user agent to API routes
    if (!ua || ua.length < 5) {
      return new NextResponse('Forbidden', { status: 403 })
    }
  }

  // ── Block suspicious file extension probing ──
  const suspiciousExtensions = ['.php', '.asp', '.aspx', '.jsp', '.cgi', '.bak', '.sql', '.tar', '.zip']
  if (suspiciousExtensions.some(ext => pathname.toLowerCase().endsWith(ext))) {
    return new NextResponse('Not Found', { status: 404 })
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Apply to all routes except Next.js internals and static files
    '/((?!_next/static|_next/image|favicon.ico|images/).*)',
  ],
}
