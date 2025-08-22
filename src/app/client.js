"use client";

import Colors from "@/lib/colors";
import Footer from "./components/footer";
import { Header } from "./components/header";
import Card from "./components/card";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useClicked } from "@/lib/clicked_context";

export default function Client({ data }) {
  const [current, setCurrent] = useState([]);
  const { play } = useClicked();

  useEffect(() => {
    if (!data || data.length === 0) return;

    const withProgress = data.map((collection) => {
      const completedCount = collection.contents.filter(
        (item) => item.UserContentProgress?.length > 0
      ).length;

      const totalCount = collection.contents.length;
      const progress =
        totalCount > 0
          ? Math.round((completedCount / totalCount) * 100) // bulatkan ke angka puluhan
          : 0;

      return {
        ...collection,
        progress,
      };
    });

    setCurrent(withProgress);
  }, [data]);
  function getRandomVrIndex(arr) {
    const vrIndexes = arr
      .map((item, index) => (item.vr ? index : null))
      .filter((index) => index !== null);
    if (vrIndexes.length === 0) return -1;
    const randomIndex = Math.floor(Math.random() * vrIndexes.length);
    return vrIndexes[randomIndex];
  }
  return (
    <div className="relative">
      <div className="bg-[url('/background.png')] bg-cover bg-center w-dvw h-dvh fixed -z-10"></div>
      <Header />
      <div className="container mx-auto px-2 text-center mb-5">
        <h2
          className={`${Colors.text.blueDark} text-2xl mt-5 animate-fade-down font-bold`}
        >
          Ikuti Track Belajar Mu
        </h2>
        <Link
          href={`/tujuan-pembelajaran`}
          className="border-2 rounded-2xl px-3 py-1 text-sm font-bold text-white bg-amber-800 active:bg-transparent hover:bg-transparent transition-all mt-3 inline-block hover:text-amber-800 active:text-amber-800"
          onClick={play}
        >
          Tujuan Pembelajaran
        </Link>
      </div>
      <div className="flex flex-col gap-y-3 px-2 mt-3">
        {current.map((item, index) =>
          item.type == "MATERI" ? (
            <Card
              key={item.id}
              title={item.name}
              type={item.type}
              id={item.id}
              progress={item?.progress}
              vr={getRandomVrIndex(item.contents)}
            />
          ) : (
            <Card
              key={item.id}
              title={item.name}
              type={item.type}
              id={item.id}
              progress={item?.UserCollectionProgress[0]?.score}
            />
          )
        )}
      </div>
      <div className="flex items-center justify-center  mt-5">
        <Link
          href={`https://drive.google.com/file/d/1MFj1zM_00RuVnwKe4pzlhPIoSXJoS6v0/view?usp=sharing`}
          className="border-2 rounded-2xl px-3 py-1 text-sm font-bold text-white bg-amber-800 active:bg-transparent hover:bg-transparent transition-all mt-3 inline-block hover:text-amber-800 active:text-amber-800"
          onClick={play}
        >
          Panduan Pembuatan
        </Link>
        {/* <embed src="/Panduan_Pembuatan.pdf" type="application/pdf" width="100%" height="600px" /> */}
        <iframe  src="https://drive.google.com/file/d/1MFj1zM_00RuVnwKe4pzlhPIoSXJoS6v0/view?usp=sharing"></iframe>

      </div>
      <div className="h-35"></div>
      <Footer />
    </div>
  );
}
