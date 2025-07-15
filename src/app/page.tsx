import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/utils/auth";

export default async function HomePage() {
  const authenticated = await isAuthenticated();

  if (authenticated) {
    redirect("/dashboard");
  } else {
    redirect("/login");
  }
}
