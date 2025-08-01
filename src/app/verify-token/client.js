"use client";

import Colors from "@/lib/colors";
import Email from "../components/icons/email";
import { useEffect, useRef, useState } from "react";
import Arrow from "../components/icons/arrow";
import { BlackScreen } from "../components/black_screen";
import Loading from "../components/loading";
import AlertDanger from "../components/alert_danger";
import Refresh from "../components/refresh";
import CooldownTimer from "../components/cooldown_timer";
import { signOut, useSession } from "next-auth/react";
import CompleteVerification from "../components/complete_verification";
import { useRouter } from "next/navigation";


export default function Client({ user }) {
  const [expired, setExpired] = useState(false);
  const [timer, setTimer] = useState("");
  const [isAlert, setIsAlert] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [sucess, setSuccess] = useState(false);
  const [wrongPin, setWrongPin] = useState(false);
  const route = useRouter();
  const { update } = useSession();
  const refreshSession = async () => {
    await update({ updated: true });
  };

  const checkTokenExpiration = async () => {
    setLoading(false);
    try {
      const response = await fetch("/api/check-verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: user.user.email }),
      });
      const result = await response.json();
      if (response.ok) {
        console.log("Token is valid:", result);
        setTimer(result.date);
        const serverDate = new Date(result.date);
        const now = new Date();

        if (serverDate > now) {
        } else {
          setExpired(true);
        }
      } else {
        setError(
          result.errors?.not_found ||
            result.errors?.server ||
            "Terjadi kesalahan"
        );
      }
    } catch (err) {
      setError("Gagal terhubung ke server.");
    } finally {
      setLoading(true);
    }
  };

  useEffect(() => {
    checkTokenExpiration();
  }, []);

  const makeTokenAgain = async () => {
    if (!expired) return;
    setLoading(false);
    try {
      const response = await fetch("/api/make-token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: user.user.email }),
      });
      const result = await response.json();
      if (response.ok) {
        console.log("Token is valid:", result);
        setTimer(result.date);
        const serverDate = new Date(result.date);
        const now = new Date();

        if (serverDate >= now) {
          setExpired(false);
        }
      } else {
        setError(
          result.errors?.not_found ||
            result.errors?.server ||
            "Terjadi kesalahan"
        );
        setIsAlert(
          result.errors?.not_found ||
            result.errors?.server ||
            "Terjadi kesalahan"
        );
      }
    } catch (err) {
      setError("Gagal terhubung ke server.");
    } finally {
      setLoading(true);
    }
  };

  const inputRefs = Array.from({ length: 6 }, () => useRef());
  const handleChange = (e, index) => {
    setWrongPin(false);
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return;
    if (value.length === 1 && index < 5) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const handleClosed = () => {
    setIsAlert("");
  };

  const handleExpired = () => {
    setExpired(true);
  };

  const getPinValue = async (e) => {
    e.preventDefault();
    setLoading(false);

    const pin = inputRefs.map((ref) => ref.current.value).join("");
    if (pin.length < 6) {
      isAlert("Pin harus terdiri dari 6 digit.");
      return;
    }
    try {
      const response = await fetch("/api/validation-token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: user.user.email, token: pin }),
      });
      const result = await response.json();
      console.log("Response from validation-token:", result);
      if (response.ok) {

        setSuccess(true);
        refreshSession();
        setTimeout(() => {
          route.push("/");
        }, 2000);
      } else {
        if (result.errors?.not_found) {
          setIsAlert(result.errors.not_found);
        }

        if (result.errors?.server) {
          setError(result.errors.server);
          isAlert(result.errors.server);
        }

        if (result.errors?.expired) {
          setIsAlert(result.errors.expired);
        }

        if (result.errors?.wrong) {
          setWrongPin(true);
        }
        // setWrongPin(true);
      }
    } catch (err) {
      setError("Gagal terhubung ke server.");
    } finally {
      setLoading(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div
        className="flex items-start justify-start py-4 px-4 mx-auto w-xl max-w-xl"
        style={{ boxShadow: "0 -4px 6px -1px rgba(0,0,0,0.1)" }}
      >
        <div className="flex flex-row items-center gap-x-2">
          <h1 className={`font-bold text-3xl ${Colors.text.default}`}>
            Verifikasi Email
          </h1>
          <span className={`${Colors.text.default} w-8 pb-1`}>
            <Email />{" "}
          </span>
        </div>
      </div>

      {loading && (
        <div className="max-w-xl py-4 px-4 mx-auto w-xl mt-10 gap-y-2">
          <p
            className={`${Colors.text.blueDark} text-3xl font-bold text-center`}
          >
            Masukkan Kode Verifikasi
          </p>
          <p className={`${Colors.text.default} text-lg text-center mt-4`}>
            Kami telah mengirimkan token verifikasi ke email milikimu,{" "}
            {user.user.email}.
          </p>

          <form onSubmit={getPinValue} className="max-w-sm mx-auto mt-15">
            <div className="flex mb-2 space-x-2 rtl:space-x-reverse justify-center">
              {inputRefs.map((ref, index) => (
                <div key={index}>
                  <label htmlFor={`code-${index}`} className="sr-only">
                    First code
                  </label>
                  <input
                    ref={ref}
                    inputMode="numeric"
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => {
                      const allowedKeys = [
                        "Backspace",
                        "ArrowLeft",
                        "ArrowRight",
                        "Tab",
                        "Delete",
                      ];
                      if (
                        !/^[0-9]$/.test(e.key) &&
                        !allowedKeys.includes(e.key)
                      ) {
                        e.preventDefault();
                      }
                      handleKeyDown(e, index);
                    }}
                    type="text"
                    maxLength="1"
                    id={`code-${index}`}
                    className={`block w-15 h-15 py-5 text-5xl  font-extrabold text-center text-blue-600 bg-white border rounded-lg focus:ring-blue-300 focus:border-blue-300 ${
                      wrongPin ? "border-red-500" : "border-gray-300"
                    }`}
                    required
                  />
                </div>
              ))}
            </div>
            {wrongPin && (
              <p
                className={`${Colors.text.danger} text-center animate-fade-down text-base`}
              >
                Pin salah
              </p>
            )}
            <p
              id="helper-text-explanation"
              className="mt-2 text-sm text-gray-500 text-center"
            >
              Tolong masukkan kode 6 digit yang kami kirim melalui email.
            </p>
            <div className="mt-2 flex justify-end">
              <p
                onClick={makeTokenAgain}
                className={`${
                  expired
                    ? Colors.text.blueDark +
                      " cursor-pointer transition-all hover:opacity-50 active:opacity-50"
                    : Colors.text.gray
                }`}
              >
                Kirim Token Lagi<span> </span>
                {!expired && (
                  <CooldownTimer starttimer={timer} stopped={handleExpired} />
                )}
              </p>
            </div>
            <div className="flex justify-center w-full mt-10 animate-fade-down animate-delay-700">
              <div
                className={`w-[200px] rounded-md p-2 justify-center items-center text-xl flex flex-row ${Colors.text.white} ${Colors.font.default} ${Colors.background.blueDark} ${Colors.hover.bgWhite} ${Colors.hover.textBlueDark} ${Colors.hover.borderBlue} ${Colors.active.opacity} transition-all border-2 ${Colors.border.white} ${Colors.active.bgWhite} ${Colors.active.borderBlue} cursor-pointer ${Colors.active.textBlueDark}`}
              >
                <input type="submit" value="Kirim Token" className="text-2xl" />
                <div className="w-8 mt-1">
                  <Arrow />
                </div>
              </div>
            </div>

            <div className={`text-center ${Colors.text.default} text-sm mt-5`}>
              <p>
                Tidak bisa masuk, ingin coba{" "}
                <span
                  className={`${Colors.text.danger} cursor-pointer hover:opacity-50 active:opacity-55 transition-all`}
                  onClick={signOut}
                >
                  Keluar
                </span>
              </p>
            </div>
          </form>
        </div>
      )}

      {!loading && (
        <>
          <BlackScreen />
          <Loading message="Memproses.." />
        </>
      )}

      {loading && error && (
        <>
          <BlackScreen />
          <Refresh message={error} />
        </>
      )}

      {sucess && (
        <>
          <BlackScreen />
          <CompleteVerification />
        </>
      )}

      {isAlert && <AlertDanger message={isAlert} closed={handleClosed} />}
    </div>
  );
}
