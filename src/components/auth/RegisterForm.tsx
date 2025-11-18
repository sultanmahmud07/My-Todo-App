/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { registerSchema, RegisterSchemaType } from "@/schemas/registerSchema";
import { loginUser } from "@/services/auth/loginUser";
import { toast } from "react-toastify";

export default function RegisterForm() {
  const [serverError, setServerError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterSchemaType) => {
    setServerError("");
    setSuccessMsg("");

    try {
      const formData = new FormData();
      formData.append("first_name", data.firstName);
      formData.append("last_name", data.lastName);
      formData.append("email", data.email);
      formData.append("password", data.password);

      // SIGNUP request
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/signup/`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      const result = await res.data;
      setSuccessMsg("Account created successfully!");
      if (result.id) {
        toast.success("Account created successfully! waiting for login...");
        //  Auto login after signup
        await loginUser({
          email: data.email,
          password: data.password,
        });
      }

      reset();
    } catch (error: any) {
      console.log(error.response.data.detail)
      toast.error((error.response.data.detail || "Unknown error"));
      setServerError(
        error?.response?.data?.message || "Something went wrong!"
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full">

      {/* First + Last Name */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">First Name</label>
          <input
            {...register("firstName")}
            type="text"
            placeholder="First Name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Last Name</label>
          <input
            {...register("lastName")}
            type="text"
            placeholder="Last Name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          {...register("email")}
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-medium mb-1">Password</label>
        <input
          {...register("password")}
          type="password"
          placeholder="Enter your password"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>

      {/* Confirm Password */}
      <div>
        <label className="block text-sm font-medium mb-1">Confirm Password</label>
        <input
          {...register("confirmPassword")}
          type="password"
          placeholder="Confirm your password"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none"
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      {/* Server Error */}
      {serverError && <p className="text-sm text-red-600">{serverError}</p>}

      {/* Success Message */}
      {successMsg && <p className="text-sm text-green-600">{successMsg}</p>}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#5272FF] text-white py-2 rounded-lg hover:bg-[#3458fc] transition"
      >
        {isSubmitting ? "Creating..." : "Sign Up"}
      </button>
    </form>
  );
}
