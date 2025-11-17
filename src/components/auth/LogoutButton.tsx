"use client";

import { logoutUser } from "@/services/auth/logoutUser";
import { LogOut } from "lucide-react";

const LogoutButton = () => {
  const handleLogout = async () => {
    await logoutUser();
  };
  return (
    <button type="button" onClick={handleLogout} className="flex items-center text-[#8CA3CD] hover:text-red-600 gap-3 p-4 pl-10 md:pl-16 mt-auto">
      <LogOut size={24} /> Logout
    </button>
  );
};

export default LogoutButton;
