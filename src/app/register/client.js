"use client";
import Colors from "@/lib/colors";
import LinkLogin from "../components/link_login";
import SignUp from "../components/sign-up";
import { useState } from "react";
import AlertDanger from "../components/alert_danger";
import { BlackScreen } from "../components/black_screen";
import Loading from "../components/loading";

export default function Client() {
  const [serverError, setServerError] = useState("");
  const [background, setBackground] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [backgroundLogin, setBackgroundLogin] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const handleStopAlert = () => {
    setServerError("");
  };

  const handleStartLoader = () => {
    setShowLoader(true);
    setBackground(true);
  }

  const handleStopLoader = () => {
    setShowLoader(false);
    setBackground(false);
  }

  const handleLoginShow = () => {
    setShowLogin(true);
    setBackgroundLogin(true);
  }
  return (
    <div className="container mx-auto px-2">
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
      {background && <BlackScreen />}
      {showLoader && <Loading />}
      {backgroundLogin && <BlackScreen />}
      {showLogin && <Loading message="Mencoba Masuk.." />}


      <LinkLogin />
      <SignUp returnError={setServerError} loading={handleStartLoader} stopLoading={handleStopLoader} loginShow={handleLoginShow}/>
      <div className="h-10"></div>
      {
        serverError && (
          <AlertDanger
            message={serverError}
            closed={handleStopAlert}
          />
        )
      }
    </div>
  );
}
