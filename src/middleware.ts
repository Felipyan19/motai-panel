import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/utils/auth";

export async function middleware(request: NextRequest) {
  const isAuth = await isAuthenticated();
  if (!isAuth) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};