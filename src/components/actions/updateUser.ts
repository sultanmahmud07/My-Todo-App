"use server";

import { getCookie } from "@/services/auth/tokenHandlers";
import { revalidatePath, revalidateTag } from "next/cache";

export async function updateUser(form: FormData) {
      const token = await getCookie("accessToken");

      const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/me/`,
            {
                  method: "PATCH",
                  body: form,
                  headers: {
                        "Authorization": `Bearer ${token}`,
                  },
            }
      );

      const data = await res.json();

      //  Revalidate the tag so getUserInfo re-fetches fresh data
      revalidateTag("user-info", "max");
      revalidatePath("/dashboard");
      revalidatePath("/dashboard/profile");
      // console.log("revalidate:::::")
      return data;
}
