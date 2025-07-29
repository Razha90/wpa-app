"use client";
import Colors from "@/lib/colors";
import LinkLogin from "../components/link_login";
import SignUp from "../components/sign-up";

export default function Client() {
  return (
    <div className="max-w-xl w-xl mx-auto">
      <div className="mt-10">
        <h1
          className={`${Colors.text.default} ${Colors.font.default} text-center text-5xl font-bold`}
        >
          Ayo Daftar
        </h1>
        <p
          className={`text-center ${Colors.text.default} text-base ${Colors.font.secondary} mt-5`}
        >
          Dengan masuk, Anda menyetujui
        </p>
        <p
          className={`text-base ${Colors.text.blue} text-center ${Colors.font.secondary}`}
        >
          Syarat dan Kebijakan Privasi kami
        </p>
      </div>
      <LinkLogin />
      <SignUp />
      <div className="h-10"></div>
    </div>
  );
}
