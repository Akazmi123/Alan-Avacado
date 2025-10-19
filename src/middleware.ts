// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl

    // Allow only base URL "/"
    if (pathname === '/') {
        return NextResponse.next()
    }

    // Redirect all other routes to /error
    const errorUrl = request.nextUrl.clone()
    errorUrl.pathname = '/error'
    return NextResponse.redirect(errorUrl)
}

export const config = {
  matcher: ['/((?!_next|static|favicon.ico|error|.*\\..*).*)'],
}