import { getToken } from "@/lib/utils/token";
import { redirect } from "next/navigation";

export default async function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = await getToken();
  if (!token) {
    redirect("/login");
  }
  return <div>{children}</div>;
}