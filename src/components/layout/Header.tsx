"use client";

import { logout } from "@/actions/auth";

export const Header = () => {
  
const handleLogout = async () => {
  await logout();
};

  return (
    <div className="flex justify-between items-center p-5 bg-dark-card rounded-lg">
      <h1 className="text-2xl font-bold text-dark-text">Products</h1>
      <button className="bg-dark-button text-dark-text py-2 px-4 rounded-md" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};