import { User } from "@/lib/models/userSchema";
import connectMongoDB from "@/utils/connectDb";
import type { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const options: NextAuthOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Enter username",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter password",
        },
      },
      async authorize(credentials) {
        try {
          await connectMongoDB();
          const user = await User.findOne({
            username: credentials?.username,
          });
          if (!user.username) {
            return null;
          }
          const isValid = await bcrypt.compare(
            credentials?.password as string,
            user.password as string,
          );
          if (!isValid) {
            return null;
          }
          return user;
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
  ],
};
