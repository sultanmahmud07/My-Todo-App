"server-only";

import { getCookie } from "../auth/tokenHandlers";

interface TodoQuery {
  search?: string;
  todo_date?: string;
}

export const getTodos = async (params?: TodoQuery) => {
  const token = await getCookie("accessToken");

  // Build query string safely
  const queryString = new URLSearchParams();

  if (params?.search) queryString.set("search", params.search);
  if (params?.todo_date) queryString.set("todo_date", params.todo_date);

  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/todos/${queryString.toString() ? `?${queryString.toString()}` : ""
    }`;

  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    next: { tags: ["my-todos"] },

  }
  );

  return res.json();
};
