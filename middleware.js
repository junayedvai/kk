
import { NextResponse } from "next/server";
import { getCookieName, isValidSession } from "@/lib/auth";
export function middleware(request){ const { pathname } = request.nextUrl; if(!pathname.startsWith("/admin") || pathname.startsWith("/admin/login")) return NextResponse.next(); const session=request.cookies.get(getCookieName())?.value; if(!session || !isValidSession(session)) return NextResponse.redirect(new URL("/admin/login", request.url)); return NextResponse.next(); }
export const config = { matcher:["/admin/:path*"] };
