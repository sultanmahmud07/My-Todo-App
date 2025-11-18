import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

// Protected routes (only for logged-in users)
const protectedRoutes = ['/dashboard', '/profile', '/settings']

// Public routes that authenticated users SHOULD NOT visit
const authPages = ['/login', '/signup']

export default async function proxy(req: NextRequest) {
  const path = req.nextUrl.pathname
  const cookie = (await cookies()).get('accessToken')?.value

  const isProtected = protectedRoutes.some(route =>
    path.startsWith(route)
  )

  const isAuthPage = authPages.includes(path)
  
 // --- Redirect root "/" to "/dashboard" ---
  if (path === "/") {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  }
  // --- CASE 1: User is NOT logged in & visiting protected page ---
  if (isProtected && !cookie) {
    return NextResponse.redirect(new URL('/login', req.nextUrl))
  }

  // --- CASE 2: User IS logged in & trying to access login/signup ---
  if (cookie && isAuthPage) {
    return NextResponse.redirect(new URL('/dashboard', req.nextUrl))
  }

  return NextResponse.next()
}

// Apply proxy to these routes
export const config = {
  matcher: [
     "/",
    '/dashboard/:path*',
    '/profile/:path*',
    '/settings/:path*',
    '/login',
    '/signup',
  ],
}
