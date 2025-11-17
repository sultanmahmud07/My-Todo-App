import Image from "next/image";
import Link from "next/link";
import { User, LogOut, CheckSquare } from "lucide-react";

export const Sidebar = () => {
      return (
            <div className="w-full min-h-screen bg-[#0A1D3A] text-white flex flex-col p-6">
                  <div className="flex flex-col items-center mb-10">
                        <Image
                              src="/avatar.png"
                              alt="profile"
                              width={70}
                              height={70}
                              className="rounded-full mb-3"
                        />
                        <h2 className="font-semibold">amanuel</h2>
                        <p className="text-sm text-gray-300">amanuel@gmail.com</p>
                  </div>


                  <nav className="flex flex-col gap-3">
                        <Link href="/dashboard/todos" className="flex items-center gap-3 p-3 rounded-lg bg-white/20">
                              <CheckSquare size={18} /> Todos
                        </Link>
                        <Link href="/dashboard/profile" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10">
                              <User size={18} /> Account Information
                        </Link>
                  </nav>


                  <button className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 mt-auto">
                        <LogOut size={18} /> Logout
                  </button>
            </div>
      );
};