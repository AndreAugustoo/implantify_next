import NextAuth, { type DefaultSession } from "next-auth";

declare module "@auth/core" {
    interface Session {
        user: {
            role: string;
        } & DefaultSession["user"]
    }
}