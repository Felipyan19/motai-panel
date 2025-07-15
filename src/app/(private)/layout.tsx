import { useAuth } from "@/hooks/useAuth";

export default async function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated } = useAuth();
  const isAuth = await isAuthenticated();
  if (!isAuth) {
    return null;
  }
  return <div>{children}</div>;
}