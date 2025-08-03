// export { auth as middleware } from "@/auth"

import { auth } from "@/auth";
import { NextResponse } from "next/server";

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // const publicPaths = ["/login", "/register", "/term", "/condition", "/contact"];
  // const isPublic = publicPaths.includes(pathname);

  // const session = await auth();

  // if (isPublic && !session) {
  //   return NextResponse.next();
  // }

  // if (isPublic && session) {
  //   return NextResponse.redirect(new URL("/", request.url));
  // }

  // if (!isPublic && !session) {
  //   const loginUrl = new URL("/login", request.url);
  //   loginUrl.searchParams.set("redirect", pathname); // biar bisa kembali setelah login
  //   return NextResponse.redirect(loginUrl);
  // }

  const justLogin = ["/", "/profile"];
  const stopLogin = ["/login", "/register"];
  const verifyLogin = ["/verify-token"];

  const session = await auth();
  // console.log("session", session);

  const isJustLogin = justLogin.includes(pathname);
  const isStopLogin = stopLogin.includes(pathname);
  const isVerifyLogin = verifyLogin.includes(pathname);
  const isAdminPath = pathname.startsWith("/admin");

  if (isAdminPath && !session) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  if (isAdminPath && session?.user?.role == "ADMIN") {
    return NextResponse.next();
  }


  if (isJustLogin && session && session.user.emailVerified) {
    return NextResponse.next();
  }

  if (verifyLogin && session && session.user.emailVerified) {
    const loginUrl = new URL("/", request.url);
    return NextResponse.redirect(loginUrl);
  }

  if (isJustLogin && session && !session.user.emailVerified) {
    const loginUrl = new URL("/verify-token", request.url);
    return NextResponse.redirect(loginUrl);
  }

  if (isVerifyLogin && session && !session.user.emailVerified) {
    return NextResponse.next();
  }

  if (isStopLogin && !session) {
    return NextResponse.next();
  }

  if (isStopLogin && session) {
    const loginUrl = new URL("/", request.url);
    return NextResponse.redirect(loginUrl);
  }

  // console.log('dibawah', `${isJustLogin} ${isStopLogin} ${session}`);
  const loginUrl = new URL("/login", request.url);
  // loginUrl.searchParams.set("redirect", pathname); // biar bisa kembali setelah login
  return NextResponse.redirect(loginUrl);
}

// export const config = {
//   matcher: ["/((?!_next/static|_next/image|favicon.ico|api|.well-known).*)"],
// };

export const config = {
  matcher: ["/profile", "/", "/login", "/register", "/verify-token", "/admin/:path*"],
};

// export const config = {
//   matcher: [
//     "/((?!_next/static|_next/image|favicon.ico|api|.well-known|.*\\.(gif|png|jpg|jpeg|svg|webp)).*)",
//   ],
// };
