"use server";

import { getCookie } from "@/services/auth/tokenHandlers";
import { revalidateTag } from "next/cache";

export async function createTask(form: FormData) {
  const token = await getCookie("accessToken");

  if (!token) {
    throw new Error("User not authenticated");
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/todos/`,
    {
      method: "POST",
      body: form,
      headers: {
        Authorization: `Bearer ${token}`, // ✔️ NO content-type for FormData
      },
    }
  );

  const result = await res.json();
console.log(result)
  // Revalidate GET /api/todos/
  revalidateTag("todos", 'max');

  return result;
}
