import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { LOCALE_HEADER } from "./i18n/config";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const isHk = pathname === "/hk" || pathname.startsWith("/hk/");
  const locale = isHk ? "zh-HK" : "en";

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(LOCALE_HEADER, locale);

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
