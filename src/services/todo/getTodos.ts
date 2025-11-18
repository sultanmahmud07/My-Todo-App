
import { getCookie } from "../auth/tokenHandlers";


export const getTodos = async () => {
  const token = await getCookie("accessToken");

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/todos/`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      next: { tags: ["todos"] },
    }
  );

  return res.json();
};
