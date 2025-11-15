"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { registerSchema, RegisterSchemaType } from "@/schemas/registerSchema";

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
      formData.append("firstName", data.firstName);
      formData.append("lastName", data.lastName);
      formData.append("email", data.email);
      formData.append("password", data.password);

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE}/api/users/signup/`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setSuccessMsg("Account created successfully!");
      reset();
    } catch (error: any) {
      setServerError(
        error?.response?.data?.message || "Something went wrong!"
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow space-y-4"
    >
      <h2 className="text-2xl font-bold text-center">Create your account</h2>
<p className="text-[#4B5563] text-center">Start managing your tasks efficiently</p>
      {/* Name */}
      <div className="grid grid-cols-2 gap-4">
        <div>
        <input
          {...register("firstName")}
          type="text"
          placeholder="First Name"
          className="w-full p-2 border rounded"
        />
        {errors.firstName && (
          <p className="text-red-500 text-sm">{errors.firstName.message}</p>
        )}
      </div>
      <div>
        <input
          {...register("lastName")}
          type="text"
          placeholder="Last Name"
          className="w-full p-2 border rounded"
        />
        {errors.lastName && (
          <p className="text-red-500 text-sm">{errors.lastName.message}</p>
        )}
      </div>
      </div>

      {/* Email */}
      <div>
        <input
          {...register("email")}
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      {/* Password */}
      <div>
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>

      {/* Confirm Password */}
      <div>
        <input
          {...register("confirmPassword")}
          type="password"
          placeholder="Confirm Password"
          className="w-full p-2 border rounded"
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      {/* Error message */}
      {serverError && <p className="text-sm text-red-600">{serverError}</p>}

      {/* Success message */}
      {successMsg && <p className="text-sm text-green-600">{successMsg}</p>}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-2 bg-[#5272FF] text-white rounded hover:bg-[#2950ff]"
      >
        {isSubmitting ? "Creating..." : "Sign Up"}
      </button>
    </form>
  );
}
