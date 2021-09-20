import NextAuth from "next-auth";
import Provides from "next-auth/providers";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Provides.Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
  ],
});
