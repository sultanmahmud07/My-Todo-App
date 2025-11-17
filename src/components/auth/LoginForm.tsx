"use client";

import { loginUser } from "@/services/auth/loginUser";
import Link from "next/link";
import { useForm } from "react-hook-form";

const LoginForm = () => {
      const {
            register,
            handleSubmit,
            formState: { errors },
      } = useForm();

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const onSubmit = async (data: any) => {
            await loginUser(data);
      };
      return (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                              type="email"
                              placeholder="Enter your email"
                              {...register("email", { required: "Email is required" })}
                              className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                        />
                        {errors.email?.message && (
                              <p className="text-red-500 text-sm mt-1">{errors.email.message as string}</p>
                        )}
                  </div>

                  <div>
                        <label className="block text-sm font-medium mb-1">Password</label>
                        <input
                              type="password"
                              placeholder="Enter your password"
                              {...register("password", {
                                    required: "Password is required",
                              })}
                              className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                        />
                        {errors.password?.message && (
                              <p className="text-red-500 text-sm mt-1">{errors.password.message as string}</p>
                        )}
                  </div>

                  <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2">
                              <input type="checkbox" className="h-4 w-4" /> Remember me
                        </label>
                        <Link href="#" className="text-[#5272FF] hover:underline">Forgot your password?</Link>
                  </div>

                  <button type="submit" className="w-full bg-[#5272FF] text-white py-2 rounded-lg hover:bg-[#3458fc] transition">
                        Log In
                  </button>
            </form>
      )
}

export default LoginForm
