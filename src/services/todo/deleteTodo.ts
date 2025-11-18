"use server";

import { revalidateTag } from "next/cache";
import { getCookie } from "../auth/tokenHandlers";

export const deleteTodo = async (id: number) => {
    try {
      const token = await getCookie("accessToken");
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/todos/${id}/`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
// console.log("Respons:", res)
        if (!res.ok) {
            throw new Error("Failed to delete");
        }

        revalidateTag("todos", "max");

        return { success: true };
    } catch (err) {
        console.error(err);
        return { success: false };
    }
};
