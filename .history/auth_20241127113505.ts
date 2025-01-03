import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";

import { db } from "@/lib/db";
import authConfig from "@/auth.config";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  callbacks: {
    async session({ token, session }) {
      if (session.user) {
        session.user.customField = token.customField;
      }
      return session;
    },
    async jwt({ token }) {
      return token;
    }
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});