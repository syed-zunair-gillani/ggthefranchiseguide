import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { logger } from "./lib/logger"

export function middleware(request: NextRequest) {
  // Log every request
  logger.log({
    level: "debug",
    component: "Middleware",
    data: {
      url: request.url,
      method: request.method,
      headers: Object.fromEntries(request.headers),
    },
  })

  return NextResponse.next()
}

export const config = {
  matcher: "/:path*",
}

