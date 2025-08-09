'use client';
import React from "react";
import { loginAction } from "../actions/auth";

const LoginForm = () => {
  return (
    <form
      action={loginAction}
      className="space-y-4 max-w-md mx-auto p-4 border rounded shadow"
    >
      <div className="mt-3">
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          name="email"
          required
          className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your email"
        />
      </div>

      <div className="mt-3">
        <label className="block text-sm font-medium">Password</label>
        <input
          type="password"
          name="password"
          required
          className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your password"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
