"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Home from "./components/icons/home";
import Refresh from "./components/icons/refresh";
import { useClicked } from "@/lib/clicked_context";

export default function NotFound() {
  const router = useRouter();
  const { play } = useClicked();
  const handleBackHome = () => {
    play();
    router.push("/");
  };

  const handleRefresh = () => {
    play();
    router.refresh();
  }

  return (
    <div className="h-screen w-screen bg-gray-50 flex items-center">
      <div className="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700">
        <div className="w-full lg:w-1/2 mx-8">
          <div className="text-7xl text-blue-500 font-dark font-extrabold mb-8">
            {" "}
            404
          </div>
          <p className="text-2xl md:text-3xl font-light leading-normal mb-8">
            Maaf terjadi error, silakan kembali atau segarkan halaman.
          </p>

          <div className="flex flex-row items-center justify-between">
            <div
              onClick={handleBackHome}
              className="px-5 py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-blue-600 active:bg-blue-400 hover:bg-blue-700 flex flex-row items-center gap-x-2"
            >
              <div className="w-6 h-6 text-white">
                <Home />
              </div>
              <p className="font-bold">Kembali</p>
            </div>
            <div onClick={handleRefresh} className="px-5 py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-green-600 active:bg-green-400 hover:bg-green-700 flex flex-row items-center gap-x-2">
              <div className="w-6 h-6 text-white">
                <Refresh />
              </div>
              <p className="font-bold">Segarkan</p>
            </div>
          </div>
        </div>
        <div className="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
          {/* <img src="https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg" className="" alt="Page not found"> */}
          <Image
            src={`https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg`}
            width={0}
            height={0}
            className="w-full h-full"
            alt="PKNUNIMED ERROR"
          />
        </div>
      </div>
    </div>
  );
}
