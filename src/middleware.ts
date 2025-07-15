import { NextRequest, NextResponse } from "next/server";
import { getToken } from "@/lib/utils/token";

export async function middleware(request: NextRequest) {
  const token = await getToken();

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/products/:path*"],
};