import { getUserInfo } from "@/services/auth/getUserInfo";
import Image from "next/image";

export default async function Overview() {
  const user = await getUserInfo();

  return (
    <div className="p-6 md:p-10 space-y-8">

      <h1 className="text-2xl md:text-3xl font-semibold text-[#0D224A]">
        Dashboard Overview
      </h1>

      {/* Welcome Section */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-6">
        <Image
          src={user?.profile_image || "/default-user.png"}
          alt="User Avatar"
          width={80}
          height={80}
          className="rounded-full border shadow-sm object-cover"
        />

        <div>
          <h2 className="text-xl font-semibold text-[#0D224A]">
            Welcome back, {user?.first_name || "User"} 👋
          </h2>
          <p className="text-gray-600">
            Here’s an overview of your account.
          </p>
        </div>
      </div>

      {/* Quick Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <p className="text-gray-500">Full Name</p>
          <h3 className="text-lg font-semibold mt-1 text-[#0D224A]">
            {user?.first_name} {user?.last_name}
          </h3>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <p className="text-gray-500">Email</p>
          <h3 className="text-lg font-semibold mt-1 text-[#0D224A]">
            {user?.email}
          </h3>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <p className="text-gray-500">Contact Number</p>
          <h3 className="text-lg font-semibold mt-1 text-[#0D224A]">
            {user?.contact_number || "Not provided"}
          </h3>
        </div>

      </div>

      {/* More User Details */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4">
        <h2 className="text-xl font-semibold text-[#0D224A]">Account Information</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <p className="text-gray-500">Address</p>
            <p className="font-medium text-[#0D224A]">
              {user?.address || "No address added"}
            </p>
          </div>

          <div>
            <p className="text-gray-500">Birthday</p>
            <p className="font-medium text-[#0D224A]">
              {user?.birthday ? new Date(user.birthday).toDateString() : "No birthday set"}
            </p>
          </div>

          <div className="md:col-span-2">
            <p className="text-gray-500">Bio</p>
            <p className="font-medium text-[#0D224A]">
              {user?.bio || "No bio added yet"}
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}
