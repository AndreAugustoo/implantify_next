import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
 
export const { 
  auth, handlers, signIn, signOut } = NextAuth(
    {
  providers: [GitHub, Google],
})