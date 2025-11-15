"use client";
import { useState, useEffect } from "react";
import api, { setAuthToken } from "../lib/api";
import type { User } from "../lib/types";

const STORAGE_KEY = process.env.NEXT_PUBLIC_AUTH_STORAGE_KEY || "todo_app_token";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(() => {
    if (typeof window === "undefined") return null;
    return localStorage.getItem(STORAGE_KEY);
  });

  useEffect(() => {
    if (token) {
      setAuthToken(token);
      // optionally fetch user profile
      api.get("/auth/me").then(res => setUser(res.data)).catch(() => {
        // token invalid -> clear
        logout();
      });
    } else {
      setAuthToken(undefined);
      setUser(null);
    }
  }, [token]);

  function login(credentials: { email: string; password: string }) {
    // Adapt path & response to your API
    return api.post("/auth/login", credentials).then(res => {
      const t = res.data?.token || res.data?.accessToken;
      if (!t) throw new Error("No token in login response");
      localStorage.setItem(STORAGE_KEY, t);
      setToken(t);
      setAuthToken(t);
      return res.data;
    });
  }

  function signup(payload: { name?: string; email: string; password: string }) {
    return api.post("/auth/signup", payload);
  }

  function logout() {
    localStorage.removeItem(STORAGE_KEY);
    setToken(null);
    setAuthToken(undefined);
  }

  return { user, token, login, signup, logout, setUser };
}
