"use client";
import { useRouter } from "next/navigation";
import Arrow from "../components/icons/arrow";
import { useClicked } from "@/lib/clicked_context";

export default function Home() {
  const { play } = useClicked();
  const route = useRouter();
  const handleBack = () => {
    play();
    route.back();
  };

  return (
    <div className="relative">
      <div className="bg-[url('/background.png')] bg-cover bg-center w-dvw h-dvh fixed -z-10"></div>
      <div className="container mx-auto">
        <div className="flex justify-center animate-fade-down">
          <h2 className="text-2xl mt-5 text-white font-bold bg-blue-500 px-4 py-1 rounded-xl">
            Tujuan Pembelajaran
          </h2>
        </div>
        <div className="ml-2 mt-7">
          <div className="flex flex-row text-slate-600 gap-x-2 animate-fade-down animate-delay-200">
            <p className="text-lg font-bold text-slate-700">1.</p>
            <p className="text-lg">
              {" "}
              Dengan kegiatan mengamati keragaman budaya menggunakan media
              berbasis augmented reality, peserta didik dapat menganalisis
              berbagai bentuk keragaman budaya seperti rumah adat, pakaian
              tradisional, dan alat musik tradisional di lingkungan sekitar.{" "}
              <span className="font-bold text-slate-800">(C4)</span>
            </p>
          </div>
          <div className="flex flex-row text-slate-600 gap-x-2 mt-5 animate-fade-down animate-delay-400">
            <p className="text-lg font-bold text-slate-700">2.</p>
            <p className="text-lg">
              {" "}
              Dengan kegiatan mengamati keragaman budaya menggunakan media
              berbasis augmented reality, peserta didik dapat mengevaluasi
              pentingnya memahami dan menghargai kebhinekaan sebagai sarana
              memperoleh pengalaman baru dan memperkuat persatuan dalam
              kehidupan sehari-hari.{" "}
              <span className="font-bold text-slate-800">(C5)</span>
            </p>
          </div>
        </div>

        <div className="h-5"></div>
        <div className="flex mt-5 ml-5 animate-fade-down animate-delay-600" onClick={handleBack}>
          <div className="bg-blue-500 rounded-xl flex flex-row items-center gap-x-1 py-1 pl-2 pr-4 hover:bg-white transition-all active:bg-white cursor-pointer border-2 border-blue-500 group">
            <div className="w-6 h-6 rotate-180 group-active:text-blue-500 group-hover:text-blue-500">
              <Arrow />
            </div>
            <p className="mt-1 group-active:text-blue-500 group-hover:text-blue-500">
              Kembali
            </p>
          </div>
        </div>
        <div className="h-5"></div>
      </div>
    </div>
  );
}
