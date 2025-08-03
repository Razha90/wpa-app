"use client";

import NavItem from "./reusable/nav_item";
import Book from "./icons/book";
import Avatar from "./icons/avatar";
import { useEffect, useState } from "react";

export default function Footer() {
  const [isFirstLoad, setIsFirstLoad] = useState(false);

  useEffect(() => {
    // hanya akan jalan sekali saat pertama render di browser
    const hasAnimated = sessionStorage.getItem("footerAnimated");

    if (!hasAnimated) {
      setIsFirstLoad(true);
      sessionStorage.setItem("footerAnimated", "true");
    }
  }, []);
  return (
    <footer
      className={` z-10 fixed bottom-0 left-0 w-full bg-white text-white p-2 text-center flex justify-center ${
        isFirstLoad ? "animate-fade-up" : ""
      }`}
      style={{ boxShadow: "0 -4px 6px -1px rgba(0,0,0,0.1)" }}
    >
      <div className="max-w-7xl w-full mx-auto flex flex-row items-center justify-around">
        <NavItem href={"/"} label={"Pembelajaran"} icon={<Book />} width="w-7" />
        <NavItem href={"/profile"} label={"Profil"} icon={<Avatar />} width="w-7"/>
      </div>
    </footer>
  );
}
