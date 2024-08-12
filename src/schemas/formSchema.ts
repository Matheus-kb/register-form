import { z } from "zod";

export const formSchema = z
  .object({
    name: z
      .string()
      .min(2, { message: "Name must be at least 2 characters long" }),
    lastname: z
      .string()
      .min(2, { message: "Lastname must be at least 2 characters long" }),
    gender: z.string().refine((fild) => fild !== "Select", {
      message: "Please select a one option",
    }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long" }),
    confirmPassword: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long" }),
    agree: z.boolean().refine((fild) => fild === true, {
      message: "You must agree to the terms and conditions",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export type FormType = z.infer<typeof formSchema>;