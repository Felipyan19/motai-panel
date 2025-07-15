import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().email({ message: "Invalid email" }),
  password: z
    .string()
    .min(5, { message: "Password must be at least 5 characters" }),
});

export type ILogin = z.infer<typeof loginSchema>;
