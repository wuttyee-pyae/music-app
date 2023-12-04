import { NextRequest, NextResponse, userAgent } from "next/server";
import { jwtVerify } from "jose";
const PUBLIC_FILE = /\.(.*)$/;

const verifyJWT = async (jwt :  any) => {
  const { payload } = await jwtVerify(
    jwt,
    new TextEncoder().encode(process.env.JWT_SECRET)
  );

  return payload;
};

export default async function middleware(request: NextRequest , response : NextResponse) {
  const {pathname} = request.nextUrl
  // console.log("Path name -- ", request.nextUrl.pathname);
  const requestHeaders = new Headers(request.headers);
   
  // const url = request.nextUrl
  // const { device } = userAgent(request)
  // const device_dir = device.type === 'mobile' ? 'mobile' : 'desktop'
  // url.searchParams.set('viewport', viewport)
  // if(pathname.endsWith('/')){
  //   request.nextUrl.pathname += device_dir
  //   return NextResponse.redirect(request.nextUrl)
  // }
  
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/") ||
    pathname.startsWith("/static") ||
    // pathname.startsWith("/signin") ||
    // pathname.startsWith("/register") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const jwt = request.cookies.get(process.env.COOKIE_NAME || '')
  console.log(jwt)

  // if (!jwt) {
  //   req.nextUrl.pathname = '/signin'
  //   return NextResponse.redirect(req.nextUrl)
  // }

  // try {
  //   await verifyJWT(jwt.value)
  //   return NextResponse.next();
  // } catch(e) {
  //   req.nextUrl.pathname = "/signin";
  //   return NextResponse.redirect(req.nextUrl);
  // }
}

export const config = {
  matcher: [
      '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};