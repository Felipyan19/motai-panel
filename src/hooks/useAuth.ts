import { login } from "@/app/login/action";
import { ILogin } from "@/lib/schemas/auth";
import { getToken, removeToken } from "@/lib/utils/token";

export const useAuth = () => {

  const isAuthenticated = async () => {
    const token = await getToken();
    return !!token;
  };

  const handleLogout = async () => {
    await removeToken();
  };

  const handleLogin = async (data: ILogin) => {
    const response = await login(data);
    return response;
  };

  return {
    isAuthenticated,
    handleLogout,
    handleLogin,    
  };
};