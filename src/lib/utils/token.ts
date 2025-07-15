import { cookies } from "next/headers";
import { TOKEN, COOKIE_OPTIONS } from "@/lib/constants/auth";

export const setToken = async (token: string) => {
  const cookieStore = await cookies();
  cookieStore.set(TOKEN, token, COOKIE_OPTIONS);
};

export const getToken = async () => {
  const cookieStore = await cookies();
  return cookieStore.get(TOKEN)?.value;
};

export const removeToken = async () => {
  const cookieStore = await cookies();
  cookieStore.delete(TOKEN);
};
