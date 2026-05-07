import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    Credentials({
      name: "credentials",

      credentials: {
        username: {},
        password: {},
      },

      async authorize(credentials) {
        if (
          credentials?.username === process.env.AUTH_USERNAME &&
          credentials?.password === process.env.AUTH_PASSWORD
        ) {
          return {
            id: "1",
            name: "Admin",
          };
        }

        return null;
      },
    }),
  ],

  secret: process.env.AUTH_SECRET,
});

export { handler as GET, handler as POST };