import { Bell, CalendarDays } from "lucide-react";
import Image from "next/image";

export const Topbar = async () => {
  const now = new Date();

  // Full weekday name (Monday, Tuesday, ...)
  const dayName = now.toLocaleDateString("en-US", {
    weekday: "long",
  });

  // Format date as DD/MM/YYYY
  const formattedDate = now.toLocaleDateString("en-GB");

  return (
    <div className="flex items-center justify-between py-5 px-8 md:px-14 bg-white shadow-sm">
      <Image src="/logo.png" alt="logo" width={145} height={50} />

      <div className="flex items-center gap-4">
        <button
          type="button"
          className="bg-[#5272FF] rounded-md p-2 text-white"
        >
          <Bell size={16} />
        </button>

        <button
          type="button"
          className="bg-[#5272FF] rounded-md p-2 text-white"
        >
          <CalendarDays size={16} />
        </button>

        <div className="text-sm">
          <p className="font-medium text-[#0D224A]">{dayName}</p>
          <p className="text-[#0D224A]">{formattedDate}</p>
        </div>
      </div>
    </div>
  );
};
