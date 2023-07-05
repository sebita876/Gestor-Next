import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request) {
    const coockie = request.cookies.get('isLogged');
    console.log('Middleware: ', request.nextUrl.pathname);
    if (coockie) {
        return NextResponse.next()
        
    }
    return NextResponse.redirect(
        new URL(process.env.NEXT_PUBLIC_FRONTEND_URL + '/', request.url)
    );
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - favicon.ico (favicon file)
         */
        '/inventario',
        '/login'
    ],
};