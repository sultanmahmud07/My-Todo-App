"use client";

import { useState, useTransition } from "react";
import Image from "next/image";
import { IUser } from "@/types";
import { Upload } from "lucide-react";
import { toast } from "react-toastify";
import { updateUser } from "../actions/updateUser";

interface Props {
      user: IUser | null;
}

const AccountInformation = ({ user }: Props) => {
      const [formData, setFormData] = useState({
            first_name: user?.first_name || "",
            last_name: user?.last_name || "",
            email: user?.email || "",
            address: user?.address || "",
            contact_number: user?.contact_number || "",
            birthday: user?.birthday || "",
      });
      const [preview, setPreview] = useState<string | null>(
            user?.profile_image || null
      );
      const [imageFile, setImageFile] = useState<File | null>(null);
      const [isPending, startTransition] = useTransition();
      // -------------------------
      // HANDLE TEXT INPUT CHANGE
      // -------------------------
      const handleChange = (
            e: React.ChangeEvent<HTMLInputElement>
      ) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      // -------------------------
      // HANDLE IMAGE UPLOAD
      // -------------------------
      const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files?.[0];
            if (file) {
                  setImageFile(file);
                  setPreview(URL.createObjectURL(file));
            }
      };

      // -------------------------
      // SUBMIT PROFILE UPDATE
      // -------------------------
      const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault();

            try {
                  const form = new FormData();
                  form.append("first_name", formData.first_name);
                  form.append("last_name", formData.last_name);
                  form.append("email", formData.email);
                  form.append("address", formData.address);
                  form.append("contact_number", formData.contact_number);
                  form.append("birthday", formData.birthday);

                  if (imageFile) {
                        form.append("profile_image", imageFile);
                  }
                  startTransition(() => {
                        updateUser(form);
                  });
                  toast.success("Profile updated successfully!");
            } catch (err) {
                  console.log(err);
            }
      };

      return (
            <div className="p-4 mx-10 md:px-14 m-6">
                  <form
                        onSubmit={handleSubmit}
                        className="w-full bg-white   p-6 rounded-xl shadow-md"
                  >
                        {/* TITLE */}
                        <h2 className="text-2xl font-semibold text-[#0D224A]  pb-3">
                              Account Information
                        </h2>

                        {/* PROFILE IMAGE + UPLOAD BUTTON */}
                        <div className="mt-6 border-[1px] border-[#A1A3ABA1] p-5 w-full md:w-2/5 rounded-xl flex items-center gap-6">
                              <div className="relative">
                                    <div className="h-20 w-20 bg-gray-300 rounded-full overflow-hidden">
                                          {preview ? (
                                                <Image
                                                      src={preview}
                                                      alt="profile"
                                                      width={112}
                                                      height={112}
                                                      className="object-cover h-full w-full"
                                                />
                                          ) : null}
                                    </div>

                                    <label className="absolute bottom-0 right-0 bg-[#5272FF] text-white p-2 rounded-full cursor-pointer">
                                          <Upload size={16} />
                                          <input
                                                type="file"
                                                className="hidden"
                                                onChange={handleFileChange}
                                                accept="image/*"
                                          />
                                    </label>
                              </div>

                              <button
                                    type="button"
                                    className="bg-[#5272FF] text-white px-5 py-2 rounded-md flex items-center gap-2"
                                    onClick={() => document.querySelector<HTMLInputElement>("#file")?.click()}
                              >
                                    <Upload size={16} />
                                    Upload New Photo
                              </button>
                        </div>

                        {/* FORM FIELDS */}
                        <div className="mt-6 border-[1px] border-[#A1A3ABA1] p-8 rounded-xl">

                              <div className="grid grid-cols-2 gap-6 px-4">

                                    {/* First Name */}
                                    <div>
                                          <label className="text-sm font-medium">First Name</label>
                                          <input
                                                name="first_name"
                                                value={formData.first_name}
                                                onChange={handleChange}
                                                className="w-full mt-1 border border-gray-300 rounded-md px-4 py-2"
                                          />
                                    </div>

                                    {/* Last Name */}
                                    <div>
                                          <label className="text-sm font-medium">Last Name</label>
                                          <input
                                                name="last_name"
                                                value={formData.last_name}
                                                onChange={handleChange}
                                                className="w-full mt-1 border border-gray-300 rounded-md px-4 py-2"
                                          />
                                    </div>

                                    {/* Email */}
                                    <div className="col-span-2">
                                          <label className="text-sm font-medium">Email</label>
                                          <input
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full mt-1 border border-gray-300 rounded-md px-4 py-2"
                                          />
                                    </div>

                                    {/* Address */}
                                    <div>
                                          <label className="text-sm font-medium">Address</label>
                                          <input
                                                name="address"
                                                value={formData.address}
                                                onChange={handleChange}
                                                className="w-full mt-1 border border-gray-300 rounded-md px-4 py-2"
                                          />
                                    </div>

                                    {/* Contact Number */}
                                    <div>
                                          <label className="text-sm font-medium">Contact Number</label>
                                          <input
                                                name="contact_number"
                                                value={formData.contact_number}
                                                onChange={handleChange}
                                                className="w-full mt-1 border border-gray-300 rounded-md px-4 py-2"
                                          />
                                    </div>

                                    {/* Birthday */}
                                    <div className="col-span-2">
                                          <label className="text-sm font-medium">Birthday</label>
                                          <div className="relative">
                                                <input
                                                      name="birthday"
                                                      type="date"
                                                      value={formData.birthday || ""}
                                                      onChange={handleChange}
                                                      className="w-full mt-1 border border-gray-300 rounded-md px-4 py-2 pr-10"
                                                />
                                                {/* <CalendarDays
                  size={18}
                  className="absolute right-3 top-3 text-gray-500"
                /> */}
                                          </div>
                                    </div>
                              </div>

                              {/* BUTTONS */}
                              <div className="flex justify-center gap-6 mt-10">
                                    <button
                                          type="submit"
                                          disabled={isPending}
                                          className="bg-[#5272FF] text-white px-10 py-3 rounded-md"
                                    >
                                          {isPending ? "Saving..." : "Save Changes"}
                                    </button>

                                    <button
                                          type="button"
                                          className="bg-gray-300 text-black px-10 py-3 rounded-md"
                                    >
                                          Cancel
                                    </button>
                              </div>
                        </div>
                  </form>
            </div>
      );
};

export default AccountInformation;
