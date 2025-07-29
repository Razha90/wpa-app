import Email from "./icons/email";
import Colors from "@/lib/colors";
import Padlock from "./icons/padlock";
import CloseEye from "./icons/close_eye";
import OpenEye from "./icons/open_eye";
import { useState } from "react";
import Link from "next/link";
import Avatar from "./icons/avatar";
import Phone from "./icons/phone";

export default function SignUp() {
  const [checkFullname, setCheckFullname] = useState("");
  const [checkEmail, setCheckEmail] = useState("");
  const [checkPhone, setCheckPhone] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [checkTermsAccepted, setCheckTermsAccepted] = useState("");

  const credentialsAction = async (formData) => {
    const fullname = formData.get("fullname");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const password = formData.get("password");
    const checkPassword = formData.get("check-password");
    const termsAccepted = formData.get("terms-accepted");

    if (!fullname || fullname.length < 5) {
      setCheckFullname("Nama lengkap harus diisi dan minimal 5 karakter.");
    }

    if (fullname.trim() !== fullname) {
      setCheckFullname("Nama tidak boleh diawali atau diakhiri dengan spasi.");
      return;
    }

    if (phone && phone.length < 8) {
      setCheckPhone("Nomor telepon harus diisi dan minimal 8 digit.");
    }

    if (phone.trim() !== phone) {
      setCheckPhone(
        "Nomor phone tidak boleh diawali atau diakhiri dengan spasi."
      );
      return;
    }

    if (!email || !email.includes("@")) {
      setCheckEmail("Email harus diisi dengan format yang benar.");
    }

    if (email.trim() !== email) {
      setCheckEmail("Email tidak boleh diawali atau diakhiri dengan spasi.");
    }

    if (email.includes(" ")) {
      setCheckEmail("Email tidak boleh mengandung spasi.");
    }

    if (!password || password.length < 8) {
      setErrorPassword("Password harus diisi dan minimal 8 karakter.");
    }

    if (password != checkPassword) {
      setErrorPassword("Password tidak cocok.");
    }

    if (termsAccepted !== "on") {
      setCheckTermsAccepted("Anda harus menyetujui syarat dan ketentuan.");
    }

    console.log("All Error", {
      checkFullname,
      checkEmail,
      checkPhone,
      errorPassword,
      checkTermsAccepted,
    });

    if (
      !checkFullname &&
      !checkEmail &&
      !checkPhone &&
      !errorPassword &&
      !checkTermsAccepted
    ) {
      fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname,
          email,
          phone,
          password,
          termsAccepted,
        }),
      })
        .then((data) => {
          console.log("data:", data);
        })
        .catch((error) => {
          console.error("dibawah:", error);
        });
      return;
    }
  };
  const [security, setSecurity] = useState(false);
  return (
    <form action={credentialsAction} className="mt-15 max-w-md mx-auto">
      <div className="flex flex-col animate-fade-down animate-delay-300">
        <div className={`flex flex-row items-center gap-x-2`}>
          <div
            className={`w-7 h-7 ${
              checkFullname ? Colors.text.danger : Colors.text.grayLight
            }`}
          >
            <Avatar />
          </div>
          <input
            required
            autoComplete="fullname"
            type="text"
            id="credentials-fullname"
            name="fullname"
            onInput={(e) => {
              e.target.value = e.target.value
                .replace(/[^a-zA-Z\s]/g, "")
                .slice(0, 50);
              if (checkFullname) setCheckFullname("");
            }}
            className={`!text-gray-500 w-full ${Colors.text.default} border-none focus:outline-none focus:border-blue-500 focus:ring-0 placeholder:text-gray-400 ${Colors.font.secondary} text-xl`}
            placeholder="Nama Lengkap"
          />
        </div>
        <div
          className={`h-[3px] rounded-full w-full ${
            checkFullname ? Colors.background.red2 : Colors.background.gray
          } mt-1`}
        ></div>
        {checkFullname && (
          <p className={`${Colors.text.danger} text-sm italic animate-fade`}>
            {checkFullname}
          </p>
        )}
      </div>

      <div className="flex flex-col animate-fade-down animate-delay-400 mt-10">
        <div className={`flex flex-row items-center gap-x-2`}>
          <div
            className={`w-8 h-8 ${
              checkEmail ? Colors.text.danger : Colors.text.grayLight
            }`}
          >
            <Email />
          </div>
          <input
            required
            autoComplete="email"
            type="email"
            id="credentials-email"
            name="email"
            onInput={(e) => {
              if (checkEmail) setCheckEmail("");
            }}
            className={`!text-gray-500 w-full ${Colors.text.default} border-none focus:outline-none focus:border-blue-500 focus:ring-0 placeholder:text-gray-400 ${Colors.font.secondary} text-xl`}
            placeholder="Alamat Email"
          />
        </div>
        <div
          className={`h-[3px] rounded-full w-full ${
            checkEmail ? Colors.background.red2 : Colors.background.gray
          } mt-1`}
        ></div>
        {checkEmail && (
          <p className={`${Colors.text.danger} text-sm italic animate-fade`}>
            {checkEmail}
          </p>
        )}
      </div>

      <div className="flex flex-col animate-fade-down animate-delay-500 mt-10">
        <div className={`flex flex-row items-center gap-x-2`}>
          <div
            className={`w-8 h-8 ${
              checkPhone ? Colors.text.danger : Colors.text.grayLight
            }`}
          >
            <Phone />
          </div>
          <label className={`${Colors.text.grayLight} text-sm`}>+62</label>
          <input
            autoComplete="phone"
            type="number"
            inputMode="numeric"
            id="credentials-phone"
            name="phone"
            required
            min="8"
            max={9999999999999}
            maxLength={12}
            onInput={(e) => {
              let value = e.target.value.replace(/\D/g, ""); // Hapus semua karakter non-digit

              if (value.startsWith("0")) {
                value = value.replace(/^0+/, ""); // Hilangkan semua nol di depan
              }

              e.target.value = value.slice(0, 13); // Batasi maksimal 13 digit

              if (checkPhone) setCheckPhone("");
            }}
            className={`!text-gray-500 w-full ${Colors.text.default} border-none focus:outline-none focus:border-blue-500 focus:ring-0 placeholder:text-gray-400 ${Colors.font.secondary} text-xl`}
            placeholder="83424243"
          />
        </div>
        <div
          className={`h-[3px] rounded-full w-full ${
            checkPhone ? Colors.background.red2 : Colors.background.gray
          } mt-1`}
        ></div>
        {checkPhone && (
          <p className={`${Colors.text.danger} text-sm italic animate-fade`}>
            {checkPhone}
          </p>
        )}
      </div>

      <div className="flex flex-col mt-10 animate-fade-down animate-delay-600">
        <div className={`flex flex-row items-center gap-x-2`}>
          <div
            className={`w-8 h-8 ${
              errorPassword ? Colors.text.danger : Colors.text.grayLight
            }`}
          >
            <Padlock />
          </div>
          <input
            autoComplete="current-password"
            type={security ? "text" : "password"}
            id="credentials-password"
            name="password"
            required
            onInput={(e) => {
              if (errorPassword) setErrorPassword("");
            }}
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
          className={`h-[3px] rounded-full w-full ${
            errorPassword ? Colors.background.red2 : Colors.background.gray
          } mt-1`}
        ></div>
        {errorPassword && (
          <p className={`${Colors.text.danger} text-sm italic animate-fade`}>
            {errorPassword}
          </p>
        )}
      </div>

      <div className="flex flex-col mt-5 animate-fade-down animate-delay-700">
        <label htmlFor="check-password" className={`${Colors.text.blue}`}>
          Pastikan Password kamu sama.
        </label>
        <div className={`flex flex-row items-center gap-x-2`}>
          <div
            className={`w-7 h-7 ${
              errorPassword ? Colors.text.danger : Colors.text.grayLight
            }`}
          >
            <CloseEye />
          </div>
          <input
            autoComplete="check-password"
            required
            type={"password"}
            id="check-password"
            name="check-password"
            className={`w-full !text-gray-500 border-none focus:outline-none focus:border-blue-500 focus:ring-0 placeholder:text-gray-400 ${Colors.font.secondary} text-xl`}
            placeholder="Periksa Password"
          />
        </div>
        <div
          className={`h-[3px] rounded-full w-full ${
            errorPassword ? Colors.background.red2 : Colors.background.gray
          } mt-1`}
        ></div>
        {errorPassword && (
          <p className={`${Colors.text.danger} text-sm italic animate-fade`}>
            {errorPassword}
          </p>
        )}
      </div>

      <div className="mt-6 relative animate-fade-down animate-delay-800 flex flex-row gap-x-2">
        <input
          type="checkbox"
          id="terms-accepted"
          name="terms-accepted"
          className={`${Colors.background.blueDark} w-4 h-4 cursor-pointer`}
          required
        />
        <p className={`${Colors.text.default} absolute -top-[2px] left-6`}>
          Dengan mencentang kotak, Anda menyetujui{" "}
          <Link href={"/term"} className={`${Colors.text.blueDark}`}>
            Syarat
          </Link>{" "}
          dan{" "}
          <Link href={`/condition`} className={`${Colors.text.blue}`}>
            Ketentuan kami
          </Link>
          .
        </p>
        {checkTermsAccepted && (
          <p
            className={`${Colors.text.danger} text-sm italic animate-fade mt-10`}
          >
            {checkTermsAccepted}
          </p>
        )}
      </div>

      <div className="flex justify-center w-full mt-25 animate-fade-down animate-delay-900">
        <input
          type="submit"
          value="Daftar Segera"
          className={`w-[200px] rounded-md p-2 text-xl ${Colors.text.white} ${Colors.font.default} ${Colors.background.blueDark} ${Colors.hover.bgWhite} ${Colors.hover.textBlueDark} ${Colors.hover.borderBlue} ${Colors.active.opacity} transition-all border-2 ${Colors.border.white} ${Colors.active.bgWhite} ${Colors.active.borderBlue} cursor-pointer ${Colors.active.textBlueDark}`}
        />
      </div>

      <div className={`text-center mt-5 animate-fade-down animate-delay-1000`}>
        <p className={`${Colors.text.default} font-bold`}>
          Apakah kamu punya akun?{" "}
          <Link
            href={"/login"}
            className={`${Colors.text.blue} ${Colors.hover.opacity} ${Colors.active.opacity}`}
          >
            Coba Masuk
          </Link>
        </p>
      </div>
    </form>
  );
}
