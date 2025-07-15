import { NextRequest, NextResponse } from "next/server";
import { useAuth } from "@/hooks/useAuth";

export async function middleware(request: NextRequest) {
  const { isAuthenticated } = useAuth();
  const isAuth = await isAuthenticated();

  if (!isAuth) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/products/:path*"],
};