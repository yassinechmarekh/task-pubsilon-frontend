import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyToken } from './action/auth-action';
 
// authorization
export async function middleware(request: NextRequest) {
    const token = request.cookies.get('token');
    // console.log("Token middleware",token);
    if(token) {
        // console.log("Middleware token :",token);
        const isverify = await verifyToken(token?.value);
        console.log(isverify);
        if(isverify) {
            return NextResponse.next();
        }
        return NextResponse.redirect(new URL('/login', request.url));
    } else {
        return NextResponse.redirect(new URL('/login', request.url));
    }
}
 
export const config = {
  matcher: '/home',
}