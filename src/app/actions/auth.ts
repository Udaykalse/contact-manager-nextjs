// app/actions/auth.ts
"use server";

import axios from "axios";
import { redirect } from "next/navigation";
import { UserType } from "../_types/user";
import { deleteSession, setSession } from "../_lib/session";

const API_URL = "http://localhost:3001";

export const loginAction = async (formdata: FormData) : Promise<void> => {
  const email = (formdata.get("email") as string)?.trim();
  const password = (formdata.get("password") as string)?.trim();

  if (!email || !password) {
    return ;
  }

  const url = `${API_URL}/users?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;

  let user: UserType | undefined;

  try {
    const response = await axios.get<UserType[]>(url);
    user = response.data?.[0];
  } catch {
    return ;
  }

  if (!user) {
    return ;
  }

  await setSession({
    id: user.id,
    name: user.name,
    email: user.email,
  });

  redirect("/contact");
};

export const logOutAction = async () => {
  await deleteSession();
  redirect("/login");
};
