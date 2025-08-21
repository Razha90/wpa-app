"use client";

import { useEffect, useState } from "react";
import Arrow from "./icons/arrow";

export default function FooterProfile({clicked}) {
  const [isFirstLoad, setIsFirstLoad] = useState(false);

  useEffect(() => {
    // hanya akan jalan sekali saat pertama render di browser
    const hasAnimated = sessionStorage.getItem("footerAnimated");

    if (!hasAnimated) {
      setIsFirstLoad(true);
      sessionStorage.setItem("footerAnimated", "true");
    }
  }, []);
  const handleClick = () => {
    clicked?.();
  }
  return (
    <footer
      className={` z-10 fixed bottom-0 left-0 w-full bg-white text-white p-2 text-center flex justify-center ${
        isFirstLoad ? "animate-fade-up" : ""
      }`}
      style={{ boxShadow: "0 -4px 6px -1px rgba(0,0,0,0.1)" }}
    >
      <div className="max-w-7xl w-full mx-auto flex flex-row items-center justify-around">
        <div onClick={handleClick} className="flex flex-row items-center p-3 rounded-xl transition-all hover:bg-gray-200 cursor-pointer active:bg-gray-200">
          <div className="w-6 h-6 text-slate-600 rotate-180">
            <Arrow />
          </div>
          <p className="text-slate-600 text-lg mt-[2px]">Kembali</p>
        </div>
      </div>
    </footer>
  );
}
