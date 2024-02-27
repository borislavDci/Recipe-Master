"use server";

import connectMongoDB from "@/utils/connectDb";
import { z } from "zod";
import { User } from "../models/userSchema";
import bcrypt from "bcrypt";

const userSchema = z.object({
  username: z.string().min(3).max(20),
  email: z.string().email("You must provide a valid email address."),
  password: z.string().min(6).max(20),
});

interface Errors {
  [key: string]: string[];
}

export default async function signUpAction(
  prevState: { messages: { errors: Array<string>; success: string } },
  formData: FormData,
) {
  const formDataObject = Object.fromEntries(formData.entries());
  const user = userSchema.safeParse(formDataObject);
  if (!user.success) {
    const formatError: string[] = [];
    const erorrs: Errors = user.error.flatten().fieldErrors;
    for (const key in erorrs) {
      let error = erorrs[key][0];
      if (key === "password" || key === "username") {
        error = erorrs[key][0].replace("String", key);
      }
      formatError.push(error);
    }
    return { messages: { errors: formatError, success: "" } };
  }
  const hashedPassword = await bcrypt.hash(
    user.data.password,
    Number(process.env.SALT_ROUNDS),
  );
  try {
    await connectMongoDB();
    await User.create({
      username: user.data.username,
      email: user.data.email,
      password: hashedPassword,
    });
  } catch (error) {
    console.log(error);
    return {
      messages: {
        errors: ["Something went wrong please try again later."],
        success: "",
      },
    };
  }

  return { messages: { success: "Succsses", errors: [] } };
}
