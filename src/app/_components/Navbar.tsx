import React from "react";
import Link from "next/link";
import LogoutButton from "./LogoutButton";
import { getSession } from "../_lib/session";

// import { log } from "console";

const Navbar = async () => {
  const session = await getSession();

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Contact Manager
        </Link>

        <div className="flex space-x-4 items-center">
          {session ? (
            <>
              <Link href="/contact" className="hover:text-blue-600 mr-8">
                Contacts
              </Link>
              <LogoutButton />
            </>
          ) : (
            <>
              <Link href="/login" className="hover:text-blue-600 mr-8">
                Login
              </Link>
              <Link href="/register" className="hover:text-blue-600">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
