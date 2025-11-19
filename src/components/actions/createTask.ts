"use server";

import { getCookie } from "@/services/auth/tokenHandlers";
import { revalidatePath, revalidateTag } from "next/cache";

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
        Authorization: `Bearer ${token}`, 
      },
    }
  );

  const result = await res.json();
  // Revalidate GET /api/todos/
  revalidateTag("todos", 'max');
  revalidatePath('/todos');
  revalidatePath('/dashboard/todos');

  return result;
}
