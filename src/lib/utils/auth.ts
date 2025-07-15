import { getToken, removeToken } from "./token";

export const isAuthenticated = async () => {
  const token = await getToken();
  return !!token;
};

export const logout = async () => {
  await removeToken();
};