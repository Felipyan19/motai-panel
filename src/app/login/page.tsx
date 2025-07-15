"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, ILogin } from "@/lib/schemas/auth";
import { useRouter } from "next/navigation";
import { login } from "@/actions/auth";

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
      router.push("/products");
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
