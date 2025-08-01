"use client"

import { signIn } from "next-auth/react";
import Email from "./icons/email";
import Colors from "@/lib/colors";
import Padlock from "./icons/padlock";
import CloseEye from "./icons/close_eye";
import OpenEye from "./icons/open_eye";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignIn({ loading, stopLoading, alert }) {
  const router = useRouter();
  const credentialsAction = async (e) => {
    e.preventDefault();
    loading?.();
    
    const form = e.currentTarget;
    const email = form.email.value;
    const password = form.password.value;

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result.url) {
      router.push("/");
    } else {
      stopLoading?.();
      alert?.();
    }


  };
  const [security, setSecurity] = useState(false);
  return (
    <form onSubmit={credentialsAction} className="mt-15 max-w-md mx-auto">
      <div className="flex flex-col animate-fade-down animate-delay-300">
        <div className={`flex flex-row items-center gap-x-2`}>
          <div className={`w-8 h-8 ${Colors.text.grayLight}`}>
            <Email />
          </div>
          <input
            autoComplete="email"
            type="email"
            id="credentials-email"
            name="email"
            className={`!text-gray-500 w-full ${Colors.text.default} border-none focus:outline-none focus:border-blue-500 focus:ring-0 placeholder:text-gray-400 ${Colors.font.secondary} text-xl`}
            placeholder="Alamat Email"
          />
        </div>
        <div
          className={`h-[3px] rounded-full w-full ${Colors.background.gray}`}
        ></div>
      </div>

      <div className="flex flex-col mt-10 animate-fade-down animate-delay-400">
        <div className={`flex flex-row items-center gap-x-2`}>
          <div className={`w-8 h-8 ${Colors.text.grayLight}`}>
            <Padlock />
          </div>
          <input
            autoComplete="current-password"
            type={security ? "text" : "password"}
            id="credentials-password"
            name="password"
            className={`w-full !text-gray-500 border-none focus:outline-none focus:border-blue-500 focus:ring-0 placeholder:text-gray-400 ${Colors.font.secondary} text-xl`}
            placeholder="Password"
          />
          <div
            onClick={() => setSecurity(!security)}
            className={`w-10 h-8 ${Colors.text.grayLight} cursor-pointer ${Colors.background.gray} rounded-lg py-1 px-2 mb-1 border border-white ${Colors.hover.borderGray} ${Colors.hover.bgWhite} ${Colors.active.borderGray} ${Colors.active.bgWhite}`}
          >
            {security ? <OpenEye /> : <CloseEye />}
          </div>
        </div>
        <div
          className={`h-[3px] rounded-full w-full ${Colors.background.gray}`}
        ></div>
      </div>

      <div className="mt-10 text-right animate-fade-down animate-delay-500">
        <Link
          href={`/forgot-password`}
          className={`${Colors.text.blueDark} text-base cursor-pointer hover:underline decoration-2 underline-offset-4 ${Colors.active.underline}`}
        >
          Lupa Password
        </Link>
      </div>

      <div className="flex justify-center w-full mt-10 animate-fade-down animate-delay-700">
        <input
          type="submit"
          value="Masuk"
          className={`w-[200px] rounded-md p-2 text-xl ${Colors.text.white} ${Colors.font.default} ${Colors.background.blueDark} ${Colors.hover.bgWhite} ${Colors.hover.textBlueDark} ${Colors.hover.borderBlue} ${Colors.active.opacity} transition-all border-2 ${Colors.border.white} ${Colors.active.bgWhite} ${Colors.active.borderBlue} cursor-pointer ${Colors.active.textBlueDark}`}
        />
      </div>
    </form>
  );
}
