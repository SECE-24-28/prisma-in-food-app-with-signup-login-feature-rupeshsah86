"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { pool } from "../lib/db";

export async function login(formdata: FormData) {
  const email = formdata.get("email");
  const password = formdata.get("password"); // If you need to verify passwords later

  if (!email) return;

  // Safe query fixing the 'usrs' typo to 'users'
  const userResult = await pool.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);

  const user = userResult.rows[0];
  console.log("user: ", user);

  // Check if a user with that email actually exists
  if (!user) {
    console.error("Login failed: User not found");
    return;
  }

  // Set the session cookie safely
  const cookieStore = await cookies();
  cookieStore.set("user", user.id.toString(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
  });

  // Redirect to dashboard or home page after logging in
  redirect("/dashboard");
}
