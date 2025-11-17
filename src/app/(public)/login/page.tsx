import LoginForm from "@/components/auth/LoginForm";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
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
          <h2 className="text-3xl text-[#0D224A] font-bold text-center mb-2">Log in to your account</h2>
          <p className="text-center text-gray-500 mb-8">Start managing your tasks efficiently</p>

          <LoginForm />

          <p className="text-center text-[#4B5563] mt-6">
            Don’t have an account? <Link href="/signup" className="text-[#5272FF] hover:underline">Register now</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
