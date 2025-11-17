/* eslint-disable @typescript-eslint/no-explicit-any */
"server-only";
import { IUser } from "@/types";
import { getCookie } from "./tokenHandlers";

export const getUserInfo = async (): Promise<IUser | null> => {
    const token = await getCookie("accessToken");
    if (!token) {
        return null;
    }
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/me/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        });
        const result = await res.json();
        return result;
    } catch (error: any) {
        console.error("User info error:", error);
        return null;
    }

}