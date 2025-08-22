"use client";
import Colors from "@/lib/colors";
import LinkLogin from "../components/link_login";
import { BlackScreen } from "../components/black_screen";
import { useState } from "react";
import Loading from "../components/loading";
import AlertDanger from "../components/alert_danger";
import Sign_In from "../components/sign-in";
import Link from "next/link";
import { useClicked } from "@/lib/clicked_context";

export default function Client() {
  const [background, setBackground] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleStartLoader = () => {
    setBackground(true);
    setShowLoader(true);
  };

  const handleStopLoader = () => {
    setBackground(false);
    setShowLoader(false);
  };

  const handleStopALert = () => {
    setShowAlert(false);
  };

  const handleShowAlert = () => {
    setShowAlert(true);
  };

  const { play } = useClicked();

  return (
    <div className="relative">
      <div className="bg-[url('/background.png')] bg-cover bg-center w-dvw h-dvh fixed -z-10 top-0"></div>

      <div className="container mx-auto px-2">
        {background && <BlackScreen />}

        {showLoader && <Loading />}

        {showAlert && (
          <AlertDanger
            message="Periksa Kembali Email dan Password."
            closed={handleStopALert}
          />
        )}
        <div className="mt-10 text-center">
          <h1
            className={`${Colors.text.default} ${Colors.font.default} text-center text-5xl font-bold animate-fade-down`}
          >
            Masuk
          </h1>
          <p
            className={`text-center ${Colors.text.default} text-base ${Colors.font.secondary} mt-5 animate-fade-down animate-delay-100`}
          >
            Dengan masuk, Anda menyetujui
          </p>
          <Link
            onClick={play}
            href={`/privacy`}
            className={`text-base ${Colors.text.blue} text-center ${Colors.font.secondary} animate-fade-down animate-delay-100`}
          >
            Syarat dan Kebijakan Privasi kami
          </Link>
        </div>
        <LinkLogin />
        <Sign_In
          loading={handleStartLoader}
          stopLoading={handleStopLoader}
          alert={handleShowAlert}
        />
      </div>
    </div>
  );
}
