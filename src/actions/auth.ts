"use server";

import { loginSchema, ILogin } from "@/lib/schemas/auth";
import { removeToken, setToken } from "@/lib/utils/token";
import { MOCK_TOKEN, MOCK_CREDENTIALS } from "@/lib/constants/auth";
import { redirect } from "next/navigation";

export async function login(data: ILogin) {
  const validatedData = loginSchema.parse(data);
  const response = await validateLogin(validatedData);

  return response;
}

export async function logout() {
  await removeToken();
  redirect("/login");
}

const validateLogin = async (data: ILogin) => {
  const { username, password } = data;
  if (
    username === MOCK_CREDENTIALS.username &&
    password === MOCK_CREDENTIALS.password
  ) {
    await setToken(MOCK_TOKEN);
    return {
      success: true,
      message: "Login successful",
    };
  }
  return {
    success: false,
    message: "Invalid credentials",
  };
};

