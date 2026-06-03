"use server";

import { redirect } from "next/navigation";
import { pool } from "../lib/db";

export async function signup(formdata: FormData) {
  const username = formdata.get("username");
  const email = formdata.get("email");
  const password = formdata.get("password");

  // Validate that all fields have data
  if (!username || !email || !password) return;

  // Safe parameterized query to prevent syntax errors and SQL injection
  await pool.query(
    "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)",
    [username, email, password],
  );

  console.log("saved user :", username);

  // Redirect to login page after successful signup
  redirect("/login");
}
