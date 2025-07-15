import { redirect } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

export default async function HomePage() {
  const { isAuthenticated } = useAuth();
  const isAuth = await isAuthenticated();
  if (isAuth) {
    redirect("/products");
  } else {
    redirect("/login");
  }
}
