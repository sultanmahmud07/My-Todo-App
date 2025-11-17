import Image from "next/image";
import { User,CheckSquare, House } from "lucide-react";
import { getUserInfo } from "@/services/auth/getUserInfo";
import NavLink from "../shared/NavLink";
import LogoutButton from "../auth/LogoutButton";

export const Sidebar = async () => {
      const user = await getUserInfo();
      // console.log(user)
      return (
            <div className="w-full min-h-screen bg-[#0D224A] text-white flex flex-col py-6">
                  <div className="flex flex-col items-center py-10">
                        <Image
                              src={user?.profile_image || "/profile-img.png"}
                              alt="profile"
                              width={100}
                              height={100}
                              className="rounded-full mb-3"
                        />
                        <h2 className="font-semibold">{user?.first_name + " " + user?.last_name}</h2>
                        <p className="text-sm text-gray-300">{user?.email}</p>
                  </div>


                  <nav className="flex flex-col gap-3 text-lg">
                        <NavLink href="/dashboard" className="flex items-center gap-3 p-4 pl-10 md:pl-16">
                              <House size={24} /> Dashboard
                        </NavLink>
                        <NavLink href="/dashboard/todos" className="flex items-center gap-3 p-4 pl-10 md:pl-16">
                              <CheckSquare size={24} /> Todos
                        </NavLink>
                        <NavLink href="/dashboard/profile" className="flex items-center gap-3 p-4 pl-10 md:pl-16">
                              <User size={24} /> Account Information
                        </NavLink>
                  </nav>
                 <LogoutButton />
            </div>
      );
};