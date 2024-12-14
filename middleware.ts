import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';
 

export function middleware(req:NextRequest) {
  const token = req.headers.get("Authorization")?.split(' ')?.[1]; 
  if(!token){
    NextResponse.redirect('/login')
  }
  
  try { 
    const decoded = jwt.verify(token, process.env.JWT_SECRET1 || '') 
    
    if (decoded.role === 'user' && req.nextUrl.pathname !== '/dashboard') {
      return NextResponse.redirect(new URL('/dashboard', req.url));
    }

    return NextResponse.next(); 
  } catch (error) {
    return NextResponse.redirect(new URL('/login', req.url)); 
  }

}
export const config = {
  matcher: ["/dashboard", "/users", "/settings"],
};
