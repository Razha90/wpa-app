"use client";

import { useRouter } from "next/navigation";
import Colors from "@/lib/colors";
import { signOut } from "next-auth/react"
import { useClicked } from "@/lib/clicked_context";

export default function Refresh({
  message = "Terjadi Kesalahan, Silakan Coba Lagi atau hubungi admin.",
}) {
  const router = useRouter();
  const {play} = useClicked();
  const handleRetry = () => {
    play();
    window.location.reload();
  };

  const handleContactAdmin = () => {
    play();
    router.push("/contact");
  };

  return (
    <div className="flex items-center justify-center px-5 py-8 border border-gray-200 rounded-lg bg-gray-50 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 max-w-sm">
      <div role="status" className="flex flex-col gap-y-6 items-center">
        <p
          className={`${Colors.text.danger} animate-fade-down text-xl font-bold text-center`}
        >
          {message}
        </p>
        <div className="flex flex-col justify-center gap-y-3">
          <div className="flex flex-row">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 animate-fade-down animate-delay-200"
              onClick={handleRetry}
            >
              Coba Lagi
            </button>
            <button
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 animate-fade-down animate-delay-400"
              onClick={handleContactAdmin}
            >
              Kontak Admin
            </button>
          </div>
          <button
            onClick={() => {
              play();
              signOut();
            }}
            type="button"
            className="text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Keluar
          </button>
        </div>
      </div>
    </div>
  );
}
