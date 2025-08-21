"use client";

import FooterProfile from "@/app/components/footer_profile";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Client({ auth }) {
  const [name, setName] = useState(auth?.user?.fullname || "");

  const route = useRouter();
  const handleBack = () => {
    route.back();
  };
  return (
    <div className="container mx-auto px-2">
      <h1 className="text-3xl font-bold text-slate-600 py-4">Edit Profile</h1>
      <div className="flex flex-col gap-y-5">
        <div className="relative">
          <label
            htmlFor="first_name"
            class="block mb-2 pl-2 text-xl font-bold text-slate-600 "
          >
            Nama Lengkap
          </label>
          <input
            type="text"
            id="first_name"
            class="bg-gray-50 border border-gray-300 text-slate-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Masukkan Nama Lengkap Mu"
            required
            name="fullname"
            value={name}
            onChange={(e) => {
              const lettersOnly = e.target.value.replace(/[^a-zA-Z\s]/g, "");
              setName(lettersOnly);
            }}
          />
          <button className="text-white absolute right-3 font-bold px-4 py-1 rounded-lg bg-blue-600 text-center border-2 border-blue-600 cursor-pointer active:bg-white hover:bg-white active:text-blue-600 hover:text-blue-600">
            Simpan
          </button>
        </div>
        <div>
          <label
            htmlFor="email"
            class="block mb-2 pl-2 text-xl font-bold text-slate-600 "
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            class="bg-gray-50 border border-gray-300 text-slate-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Masukkan Email Mu"
            required
            disabled
            name="email"
            defaultValue={auth?.user?.email || ""}
          />
        </div>
      </div>
      <FooterProfile clicked={handleBack} />
    </div>
  );
}
