import { redirect } from "next/navigation";
import { getToken } from "@/lib/utils/token";

export default async function HomePage() {
  const token = await getToken();
  if (token) {
    redirect("/products");
  } else {
    redirect("/login");
  }
}
