/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/server-fetch";
interface TodoQuery {
      search?: string;
      todo_date?: string;
}

export async function getTodosList(params?: TodoQuery) {

      try {
            // Build query string safely
            const queryString = new URLSearchParams();

            if (params?.search) queryString.set("search", params.search);
            if (params?.todo_date) queryString.set("todo_date", params.todo_date);

            const url = `/api/todos/${queryString.toString() ? `?${queryString.toString()}` : ""
                  }`;
            const response = await serverFetch.get(url)
            const result = await response.json();
            return result;
      } catch (error: any) {
            console.log(error);
            return {
                  success: false,
                  message: `${process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'}`
            };
      }
}