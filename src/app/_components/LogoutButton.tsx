"use client";
import React from "react";
import { logOutAction } from "../actions/auth";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logOutAction();
      router.push("/login");
      router.refresh();
    } catch (error) {
      console.log("Logout failed:", error);
    }
  };

  return (
    <button
      className="cursor-pointer px-4 py-2 bg-red-700 text-white rounded-md transition-colors hover:bg-red-400"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
