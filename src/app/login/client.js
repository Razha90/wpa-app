"use client";
import Colors from "@/lib/colors";
import Link from "next/link";
import LinkLogin from "../components/link_login";
import  SignIn  from "../components/sign-in";

export default function Client() {

  return (
    <div className="max-w-xl w-xl mx-auto">
      <div className="mt-10">
        <h1
          className={`${Colors.text.default} ${Colors.font.default} text-center text-5xl font-bold animate-fade-down`}
        >
          Masuk
        </h1>
        <p className={`text-center ${Colors.text.default} text-base ${Colors.font.secondary} mt-5 animate-fade-down animate-delay-100`}>Dengan masuk, Anda menyetujui</p>
        <p className={`text-base ${Colors.text.blue} text-center ${Colors.font.secondary} animate-fade-down animate-delay-100`}>Syarat dan Kebijakan Privasi kami</p>
      </div>
      <LinkLogin />
      <SignIn />
    </div>
  );
}
