import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import Passkey from "next-auth/providers/passkey";
import Credentials from "next-auth/providers/credentials";
import CredentialsProvider from "next-auth/providers/credentials";

const prisma = new PrismaClient();

export const { handlers, auth, signIn, signOut } = NextAuth({
  // adapter: PrismaAdapter(prisma),
  providers: [
    // Passkey,
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null;
        user = {
          id: 10,
          name: "Razha",
          email: credentials.email,
          password: credentials.password,
        }
        if (!user) {
          throw new Error("Invalid credentials.");
        }
        return user;
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.id;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
  session: {
    jwt: true,
    maxAge: 60 * 60 * 24 * 4
  },
  // session: {
  //   strategy: "database"
  // },
  jwt: {
    maxAge: 60 * 60 * 24 * 4,
    updateAge: 60 * 60 * 24
  },
  // experimental: { enableWebAuthn: true },
  secret: process.env.NEXTAUTH_SECRET,
});
