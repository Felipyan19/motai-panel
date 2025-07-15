"use client";

import { logout } from "@/actions/auth";
import { useAuth } from "@/hooks/useAuth";

export const Header = () => {
const handleLogout = async () => {
  await logout();
};

  return (
    <div className="flex justify-between items-center">
      <h1>Products</h1>
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};