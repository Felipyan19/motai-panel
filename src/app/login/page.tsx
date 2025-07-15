"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { login } from "./action";
import { loginSchema, ILogin } from "@/lib/schemas/auth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ILogin>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: ILogin) => {
    const response = await login(data);
    if (response.success) {
      router.push("/dashboard");
    }
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
