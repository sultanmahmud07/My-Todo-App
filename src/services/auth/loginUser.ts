/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { redirect } from "next/navigation";
import { setCookie } from "./tokenHandlers";

interface LoginResponse {
  access: string;
  refresh: string;
  ["Max-Age"]?: string;
  Path?: string;
  SameSite?: string;
}

export const loginUser = async (data: { email: string; password: string }): Promise<void> => {
  try {
    // Build form-data (your API requirement)
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/login/`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!res.ok) {
      throw new Error("Invalid credentials");
    }

    const result: LoginResponse = await res.json();

    // Cookie handling
    const maxAge = parseInt(result["Max-Age"] || "") || 60 * 60;
    const refreshMaxAge = parseInt(result["Max-Age"] || "") || 60 * 60 * 24 * 90;

    await setCookie("accessToken", result.access, {
      secure: true,
      httpOnly: true,
      maxAge,
      path: result.Path || "/",
      sameSite: (result.SameSite as any) || "none",
    });

    await setCookie("refreshToken", result.refresh, {
      secure: true,
      httpOnly: true,
      maxAge: refreshMaxAge,
      path: result.Path || "/",
      sameSite: (result.SameSite as any) || "none",
    });

    // Successful → Redirect
    redirect("/dashboard");

  } catch (error: any) {
    // Next.js expects redirect errors to bubble
    if (error?.digest?.startsWith("NEXT_REDIRECT")) {
      throw error;
    }

    console.error("Login error:", error);
    throw new Error("Login failed");
  }
};
