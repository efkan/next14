import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const isLoggedIn: boolean = true;

export function middleware(request: NextRequest) {
  let headers = new Headers(request.headers);
  console.log('middleware invoked - headers:', headers);

  // if (!isLoggedIn && request.url !== new URL("/", request.url).toString()) {
  //   return NextResponse.redirect(new URL("/", request.url));
  // }

  // return NextResponse.next()

  // the below code does the same thing with the code piece above together with a matcher config
  if (isLoggedIn) return NextResponse.next()

  return NextResponse.redirect(new URL("/", request.url))
}


export const config = {
  matcher: ["/profile", "/dashboard"],
}