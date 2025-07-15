"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, ILogin } from "@/lib/schemas/auth";
import { useRouter } from "next/navigation";
import { login } from "@/actions/auth";
import { ErrorInput } from "@/components/ui/ErrorInput";

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
    <div className="min-h-screen flex items-center justify-center bg-dark-bg p-4">
      <div className="w-full max-w-md bg-dark-card rounded-lg shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-dark-text mb-8">
          Login
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Username"
              {...register("username")}
              className={`w-full px-3 py-2 bg-dark-input border rounded-md text-dark-text placeholder-dark-placeholder focus:outline-none focus:ring-2 focus:ring-primary ${
                errors.username ? "border-red-500" : "border-dark-border"
              }`}
            />
            {errors.username && (
                <ErrorInput error={errors.username.message ?? ""} />
            )}
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
              className={`w-full px-3 py-2 bg-dark-input border rounded-md text-dark-text placeholder-dark-placeholder focus:outline-none focus:ring-2 focus:ring-primary ${
                errors.password ? "border-red-500" : "border-dark-border"
              }`}
            />
            {errors.password && (
              <ErrorInput error={errors.password.message ?? ""} />
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-dark-button text-dark-text py-2 px-4 rounded-md"
          >
            {isSubmitting ? "Submitting..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
