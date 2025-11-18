
import RegisterForm from "@/components/auth/RegisterForm";
import Image from "next/image";
import Link from "next/link";

export default function SignUpPage() {
  return (
     <div className="h-screen flex flex-col-reverse md:flex-row md:items-center gap-4 md:gap-6">
      <div className="w-full md:w-[43%] h-full flex items-center justify-center bg-[#E2ECF8]">
        <Image
          src="/signup.png"
          width={500}
          height={400}
          alt="sign up illustration"
          className="w-full"
        />
      </div>

      <div className="w-full md:w-[57%] bg-white flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-3xl text-[#0D224A] font-bold text-center mb-2">Create your account</h2>
          <p className="text-center text-gray-500 mb-8">Start managing your tasks efficiently</p>

          <RegisterForm />

          <p className="text-center text-[#4B5563] mt-6">
            Already have an account? <Link href="/login" className="text-[#5272FF] hover:underline">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
