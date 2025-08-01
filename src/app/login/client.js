"use client";
import Colors from "@/lib/colors";
import LinkLogin from "../components/link_login";
import SignIn from "../components/sign-in";
import { BlackScreen } from "../components/black_screen";
import { useState } from "react";
import Loading from "../components/loading";
import AlertDanger from "../components/alert_danger";

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
  } 

  const handleShowAlert = () => {
    setShowAlert(true);
  }

  return (
    <div className="max-w-xl w-xl mx-auto">
      {background && <BlackScreen />}

      {showLoader && <Loading />}

      {showAlert && <AlertDanger message="Periksa Kembali Email dan Password." closed={handleStopALert}  />}
      <div className="mt-10">
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
        <p
          className={`text-base ${Colors.text.blue} text-center ${Colors.font.secondary} animate-fade-down animate-delay-100`}
        >
          Syarat dan Kebijakan Privasi kami
        </p>
      </div>
      <LinkLogin />
      <SignIn loading={handleStartLoader} stopLoading={handleStopLoader} alert={handleShowAlert} />
    </div>
  );
}
