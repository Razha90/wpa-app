"use client";

import Colors from "@/lib/colors";
import Footer from "./components/footer";
import { Header } from "./components/header";
import Card from "./components/card";
import { useEffect, useState } from "react";

export default function Client({ data }) {
  const [current, setCurrent] = useState([]);

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

  return (
    <div className="relative">
      <div className="bg-[url('/background.png')] bg-cover bg-center w-dvw h-dvh fixed -z-10"></div>
      <Header />
      <div className="container mx-auto px-2">
        <h2
          className={`${Colors.text.blueDark} text-xl mt-5 animate-fade-down`}
        >
          Ikuti Track Belajar Mu
        </h2>
      </div>
      <div className="flex flex-col gap-y-3 px-2 mt-3">
        {current.map((item, index) => item.type == "MATERI" ? (
          <Card
            key={item.id}
            title={item.name}
            type={item.type}
            id={item.id}
            progress={item?.progress}
          />
        ): (
          <Card
            key={item.id}
            title={item.name}
            type={item.type}
            id={item.id}
            progress={item?.UserCollectionProgress[0]?.score}
          />
        ))}
      </div>
      <div className="h-35"></div>
      <Footer />
    </div>
  );
}
