"use client";

import { logout } from "@/actions/auth";
import { toast } from "@/lib/utils/toast";

export const Header = () => {
  const handleLogout = async () => {
    await logout();
    toast.success("Logged out successfully");
  };

  return (
    <div className="flex flex-wrap gap-3 justify-between items-center p-4 sm:p-5 bg-dark-card rounded-lg">
      <h1 className="text-2xl font-bold text-dark-text">Products</h1>
      <button
        className="bg-dark-button text-dark-text py-2 px-4 rounded-md"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};
