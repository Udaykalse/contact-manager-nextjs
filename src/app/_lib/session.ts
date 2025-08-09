// app/_lib/session.ts
import { cookies } from "next/headers";
import { UserType } from "../_types/user";

export const setSession = async (user: UserType) => {
  const cookieStore = await cookies();
  cookieStore.set("session", JSON.stringify(user), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });
};

export const getSession = async (): Promise<UserType | null> => {
  const cookieStore =  await cookies();
  
  const session = cookieStore.get("session")?.value;
  if (!session) return null;
  return JSON.parse(session) as UserType;
};

export const deleteSession = async () => {
  const cookieStore = await cookies();
  cookieStore.delete("session");
};
