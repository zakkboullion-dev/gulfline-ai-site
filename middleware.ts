import { NextRequest, NextResponse } from 'next/server'

// Block common attack patterns at the edge — before any route runs
const BLOCKED_PATTERNS = [
  /\.\.\//,                      // path traversal
  /%2e%2e/i,                    // URL-encoded path traversal
  /<script/i,                   // XSS in URL
  /javascript:/i,               // JS injection
  /union\s+select/i,            // SQL injection
  /insert\s+into/i,             // SQL injection
  /drop\s+table/i,              // SQL injection
  /exec\s*\(/i,                 // code execution
  /eval\s*\(/i,                 // eval injection
  /system\s*\(/i,               // system call injection
  /\bwp-admin\b/i,              // WordPress scanning
  /\bwp-login/i,                // WordPress scanning
  /\bphpmyadmin\b/i,            // phpMyAdmin scanning
  /\.env(\.local|\.prod)?/i,   // env file probing
  /\.git\//,                    // git directory probing
  /\/etc\/passwd/,              // Linux file probing
  /\/proc\/self/,               // Linux proc probing
  /base64_decode/i,             // PHP exploit patterns
  /\bshellexec\b/i,             // shell execution
  /\bpassthru\b/i,              // PHP passthru
  /__proto__/,                  // prototype pollution
  /constructor\[/,              // prototype pollution variant
  /\$where/,                    // MongoDB injection
  /\{\{.*\}\}/,                 // template injection (Jinja/Handlebars/etc)
  /\$\{.*\}/,                   // JS template injection
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
  // Block absurdly large URLs (buffer overflow attempts)
  const url = req.nextUrl.toString()
  if (url.length > 2048) {
    return new NextResponse('URI Too Long', { status: 414 })
  }

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
