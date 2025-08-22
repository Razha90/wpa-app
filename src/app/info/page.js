"use client";

import { useRouter } from "next/navigation";
import Arrow from "../components/icons/arrow";
import Image from "next/image";
import { useClicked } from "@/lib/clicked_context";

export default function Home() {
  const route = useRouter();

  const handleBack = () => {
    play();
    route.back();
  };
  const { play } = useClicked();
  return (
    <div className="bg-[url('/background.png')] bg-cover bg-center w-full">
      <div className="h-5"></div>
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="bg-white shadow-lg rounded-2xl p-8 max-w-lg text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Terima Kasih Kami
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Terima kasih kepada{" "}
            <span className="font-semibold text-blue-600">
              Direktorat Penelitian dan Pengabdian Kepada Masyarakat
              Kemdiktisaintek
            </span>{" "}
            dan{" "}
            <span className="font-semibold text-green-600">LPPM Unimed</span>{" "}
            atas dukungan dan kerjasama yang telah diberikan.
          </p>
          <div className="flex flex-row items-center gap-x-2">
            <Image
              width={500}
              height={100}
              src={"/tut-wuri-handayani.png"}
              alt="Tut Wuri Handayani"
              className="w-[17%]"
            />
            <Image
              width={500}
              height={100}
              src={"/diktisaintek.png"}
              alt="Dikti Saintek"
              className="w-[17%]"
            />
            <Image
              width={500}
              height={100}
              src={"/lppm.png"}
              alt="LPPM"
              className="w-[66%]"
            />
          </div>

          <div className="h-5"></div>
          <div className="flex mt-5 ml-5" onClick={handleBack}>
            <div
              onClick={play}
              className="bg-blue-500 rounded-xl flex flex-row items-center gap-x-1 py-1 pl-2 pr-4 hover:bg-white transition-all active:bg-white cursor-pointer border-2 border-blue-500 group"
            >
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
    </div>
  );
}
