import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().email({ message: "Username debe ser un email válido" }),
  password: z
    .string()
    .min(5, { message: "Password debe tener al menos 5 caracteres" }),
});

export type ILogin = z.infer<typeof loginSchema>;
