// export { auth as middleware } from "@/auth"

import { auth } from "@/auth";
import { NextResponse } from "next/server";

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  const publicPaths = ["/login", "/register", "/term", "/condition"];
  const isPublic = publicPaths.includes(pathname);

  const session = await auth();

  // Jika halaman publik dan tidak ada session: lanjutkan
  if (isPublic && !session) {
    return NextResponse.next();
  }

  // Jika halaman publik tapi sudah login: redirect ke halaman utama
  if (isPublic && session) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Jika halaman private tapi belum login: redirect ke login
  if (!isPublic && !session) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname); // biar bisa kembali setelah login
    return NextResponse.redirect(loginUrl);
  }

  // Jika halaman private dan sudah login: lanjutkan
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api|.well-known).*)"],
};
