"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  username: z
    .string()
    .email({ message: "Username debe ser un email válido" }),
  password: z
    .string()
    .min(5, { message: "Password debe tener al menos 5 caracteres" }),
});

type LoginSchema = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginSchema) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            placeholder="Username"
            {...register("username")}
            style={{ borderColor: errors.username ? "red" : "initial" }}
          />
          {errors.username && (
            <p style={{ color: "red", fontSize: "14px", margin: "4px 0" }}>
              {errors.username.message}
            </p>
          )}
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
            style={{ borderColor: errors.password ? "red" : "initial" }}
          />
          {errors.password && (
            <p style={{ color: "red", fontSize: "14px", margin: "4px 0" }}>
              {errors.password.message}
            </p>
          )}
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Login"}
        </button>
      </form>
    </div>
  );
}
