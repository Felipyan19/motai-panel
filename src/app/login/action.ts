"use server";

import { loginSchema, ILogin } from "@/lib/schemas/auth";
import { setToken } from "@/lib/utils/token";
import { MOCK_TOKEN, MOCK_CREDENTIALS } from "@/lib/constants/auth";

export async function login(data: ILogin) {
  const validatedData = loginSchema.parse(data);
  const response = await validateLogin(validatedData);

  return response;
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


