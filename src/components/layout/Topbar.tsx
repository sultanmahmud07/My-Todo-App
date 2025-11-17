import { Bell, CalendarDays, Plus } from "lucide-react";
import Image from "next/image";


export const Topbar = () => {
      return (
            <div className="flex items-center justify-between py-5 px-8 md:px-14 bg-white shadow-sm">
                  <Image src="/logo.png" alt="logo" width={145} height={50} />
                  <div className="flex items-center gap-4">
                        <Bell size={22} className="text-[#0A1D3A]" />
                        <CalendarDays size={22} className="text-[#0A1D3A]" />
                        <div className="text-right text-sm">
                              <p className="font-medium">Friday</p>
                              <p className="text-gray-500">07/11/2025</p>
                        </div>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700">
                              <Plus size={18} /> New Task
                        </button>
                  </div>
            </div>
      );
};