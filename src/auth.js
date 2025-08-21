import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import prisma from "./lib/prisma";

export const { handlers, auth, signIn, signOut } = NextAuth({
  // adapter: PrismaAdapter(prisma),
  providers: [
    // Passkey,
    Credentials({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        let user;
        try {
          user = await prisma.user.findUnique({
            where: { email: credentials.email },
          });
        } catch (error) {
          console.error("Error in authorize:", error);
          await fetch(`${process.env.NEXTAUTH_URL}/api/logger`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              message: error || "Error in authorize function",
              path: "src/auth.js - authorize function error",
            }),
          });
          throw new Error(
            "Server Bermasalah harap coba lagi, atau hubungi admin."
          );
        }

        if (!user) {
          throw new Error("Email tidak ditemukan.");
        }

        const isValidPassword = bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isValidPassword) {
          throw new Error("Credentials Tidak Cocok.");
        }

        const safeUser = {
          userId: user.id,
          email: user.email,
          fullname: user.fullname,
          phone: user.phone,
          emailVerified: user.emailVerified,
          role: user.role,
        };

        return safeUser;
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user.userId = token.userId;
        session.user.fullname = token.fullname;
        session.user.emailVerified = token.emailVerified;
        session.user.email = token.email;
        session.user.role = token.role;
      }
      return session;
    },
    async jwt({ token, user, trigger }) {
      if (trigger === "update") {
        const userInDb = await prisma.user.findUnique({
          where: { email: token.email },
        });
        if (userInDb) {
          token.emailVerified = userInDb.emailVerified;
          token.fullname = userInDb.fullname;
        }
      }
      if (user) {
        token.userId = user.userId;
        token.email = user.email;
        token.emailVerified = user.emailVerified;
        token.fullname = user.fullname;
        token.role = user.role;
      }
      return token;
    },
  },
  pages: {
    signIn: "/login",
    signOut: "/logout",
    error: "/error",
    verifyRequest: "/verify-request",
  },
  session: {
    jwt: true,
    maxAge: 60 * 60 * 24 * 4,
  },
  // session: {
  //   strategy: "database"
  // },
  jwt: {
    maxAge: 60 * 60 * 24 * 4,
    updateAge: 60 * 60 * 24,
  },
  // experimental: { enableWebAuthn: true },
  secret: process.env.NEXTAUTH_SECRET,
});
