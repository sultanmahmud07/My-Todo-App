import RegisterForm from "./RegisterForm";


export default function Register() {
  return (
    <div className="h-screen flex flex-col-reverse md:flex-row md:items-center gap-4 md:gap-6">
      <div className="w-full md:w-2/5 md:h-full bg-[#E2ECF8]">
       <img
          src="/signup.svg"
          width={500}
          height={400}
          alt="sign up illustration"
          className="w-full"
        />
      </div>
      <div className="w-full md:w-3/5 flex items-center justify-center bg-white h-full">
        <RegisterForm />
      </div>
    </div>
  );
}
