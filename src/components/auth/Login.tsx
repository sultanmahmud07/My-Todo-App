"use client";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);

    try {
      const res = await fetch("https://todo-app.pioneeralpha.com/api/auth/login/", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();

      if (!res.ok) {
        alert(result?.message || "Login failed");
        return;
      }

      alert("Login successful!");

      if (result?.token) {
        localStorage.setItem("token", result.token);
      }

      window.location.href = "/todos";
    } catch (error) {
      console.error("Login error", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="h-screen flex flex-col-reverse md:flex-row md:items-center gap-4 md:gap-6">
      <div className="w-full md:w-[43%] h-full flex items-center justify-center bg-[#E2ECF8]">
        <Image
          src="/login.png"
          width={500}
          height={400}
          alt="sign up illustration"
          className="w-full"
        />
      </div>

      <div className="w-full md:w-[57%] bg-white flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-2">Log in to your account</h2>
          <p className="text-center text-gray-500 mb-8">Start managing your tasks efficiently</p>

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
              <Link href="#" className="text-blue-600 hover:underline">Forgot your password?</Link>
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              Log In
            </button>
          </form>

          <p className="text-center text-sm mt-6">
            Don’t have an account? <Link href="/signup" className="text-[#5272FF] hover:underline">Register now</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;