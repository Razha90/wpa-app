"use client";

import Colors from "@/lib/colors";
import Footer from "./components/footer";
import { Header } from "./components/header";

export default function Client() {
  return (
    <div className="">
      <Header />
      <div className="container mx-auto px-2">
        <h2 className={`${Colors.text.blueDark} text-xl mt-5 animate-fade-down`}>Ikuti Track Belajar Mu</h2>
      </div>
      <Footer />
    </div>
  );
}
