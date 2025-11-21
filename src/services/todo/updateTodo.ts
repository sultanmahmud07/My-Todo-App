"use server";
import { revalidatePath, revalidateTag } from "next/cache";
import { getCookie } from "../auth/tokenHandlers";

export const updateTodo = async (id: number, formData: FormData) => {
    try {
        const token = await getCookie("accessToken");
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/todos/${id}/`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData,
        });

        if (!res.ok) {
            throw new Error("Update failed");
        }

        revalidateTag("my-todos", "max");
        revalidatePath("/todos");
        revalidatePath("/dashboard/todos");

        return { success: true };
    } catch (err) {
        console.error(err);
        return { success: false };
    }
};