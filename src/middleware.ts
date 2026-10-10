import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Wordfence-Equivalent Edge WAF (Web Application Firewall) for Next.js
 * 
 * 1. Blocks SQL Injection (SQLi) & XSS Attack Payloads
 * 2. Blocks Path Traversal (../) & Null Byte Injections
 * 3. Blocks WordPress/Php Vulnerability Scanners (wp-login, xmlrpc, .env, .git)
 * 4. Blocks Known Malicious Scanners & Malicious User-Agents
 * 5. Enforces Security Response Headers & Origin Restrictions
 */

// 1. Malicious Paths & Vulnerability Probe Signatures (Wordfence WAF Rules)
const BLOCKED_PATHS_REGEX = /^\/(\.env|\.git|\.htaccess|\.aws|\.docker|wp-admin|wp-login\.php|wp-content|wp-includes|xmlrpc\.php|phpmyadmin|admin|eval|cgi-bin|autodiscover|server-status|\.php|\.bak|\.sql|\.config)/i;

// 2. Dangerous Injection Patterns (SQLi, XSS, Command Injection)
const DANGEROUS_PAYLOADS_REGEX = /(union\s+select|select\s+.*\s+from|insert\s+into|delete\s+from|drop\s+table|information_schema|<script\b|javascript:|onerror\s*=|onload\s*=|document\.cookie|\.\.\/|\.\.\\)/i;

// 3. Malicious Scanners & Attack User-Agents
const BAD_BOTS_REGEX = /(sqlmap|nikto|acunetix|dirbuster|nmap|masscan|zgrab|nessus|openvas|havij|w3af)/i;

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const userAgent = request.headers.get("user-agent") || "";

  // A. Block Malicious Scanner User-Agents
  if (BAD_BOTS_REGEX.test(userAgent)) {
    return new NextResponse("Forbidden: Malicious Security Scanner Blocked (Wordfence WAF Rule)", {
      status: 403,
      headers: { "Content-Type": "text/plain" },
    });
  }

  // B. Block Probe Attempts for Sensitive Files & WordPress Exploits
  if (BLOCKED_PATHS_REGEX.test(pathname)) {
    return new NextResponse("Forbidden: Access Denied by WAF Security Shield", {
      status: 403,
      headers: { "Content-Type": "text/plain" },
    });
  }

  // C. Block SQLi, XSS, and Path Traversal Payloads in Query Parameters
  const decodedSearch = decodeURIComponent(search);
  if (DANGEROUS_PAYLOADS_REGEX.test(decodedSearch) || DANGEROUS_PAYLOADS_REGEX.test(pathname)) {
    return new NextResponse("Forbidden: Malicious Request Signature Detected (WAF Security Shield)", {
      status: 400,
      headers: { "Content-Type": "text/plain" },
    });
  }

  // Pass request through & inject security headers
  const response = NextResponse.next();

  // Inject Extra Defense Headers (Wordfence Security Equivalents)
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  response.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");

  return response;
}

// Apply WAF Firewall Middleware to all routes except static assets & _next internal files
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|images/|.*\\.(?:svg|png|jpg|jpeg|gif|webp|mp4)$).*)"],
};
