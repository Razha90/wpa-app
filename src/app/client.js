"use client";

import Colors from "@/lib/colors";
import Footer from "./components/footer";
import { Header } from "./components/header";

export default function Client() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="max-w-xl w-xl mx-auto">
        <h2 className={`${Colors.text.blueDark} text-xl mt-10 animate-fade-down`}>Ikuti Track Belajar Mu</h2>
      </div>
      <Footer />
    </div>
  );
}
