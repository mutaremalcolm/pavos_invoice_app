import { NextRequest, NextResponse } from "next/server";

const locales = ['en', 'es']
const defaultLocale = 'en'

export function middleware(request: NextRequest) {
    // Check if there is any supported locale in the pathname
    const { pathname } = request.nextUrl

    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    if (pathnameHasLocale) return

    // Redirect if there is no locale
    const locale = getLocale(request)
    request.nextUrl.pathname = `/${locale}${pathname}`

    return Response.redirect(request.nextUrl)
}

function getLocale(request: NextRequest): string {
    // Get locale from Accept-Language header
    const acceptLanguage = request.headers.get('accept-language')
    if (acceptLanguage) {
        const prefferedLocale = acceptLanguage
            .split(',')[0]
            .split('-')[0]
            .toLowerCase()

        if (locales.includes(prefferedLocale)) {
            return prefferedLocale
        }
    }

    return defaultLocale
}

export const config = {
    matcher: [
        //Skip all internal paths (_next)
        `/((?!_next|api|favicon.ico|.*\\.).*)`
    ]
}