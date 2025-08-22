"use client";

import { useAudio } from "@/lib/audio_context";
import { useClicked } from "@/lib/clicked_context";
import { useRouter } from "next/navigation";
import Arrow from "../components/icons/arrow";

export default function Home() {
  const { volume, setVolume, togglePlay, isStopped } = useAudio();
  const {
    volume: clicked_volume,
    setVolume: clicked_setVolume,
    togglePlay: clicked_togglePlay,
    isStopped: clicked_isStopped,
    play: clicked_play,
  } = useClicked();

  const route = useRouter();
  const handleBack = () => {
    clicked_play();
    route.back();
  };

  return (
    <div className="relative">
      <div className="bg-[url('/background.png')] bg-cover bg-center w-dvw h-dvh fixed -z-10"></div>
      <div className="container mx-auto">
        <div className="flex justify-center">
          <h2 className="text-2xl mt-5 animate-fade-down text-white font-bold bg-blue-500 px-4 py-1 rounded-xl">
            Pengaturan
          </h2>
        </div>
        <div className="ml-2 mt-2">
          <h3 className="text-base mt-5 animate-fade-down animate-delay-200 text-blue-500 font-bold">
            Pengaturan Suara
          </h3>
          <div className="">
            <h4 className="text-slate-500">Suara Latar Belakang</h4>
            <div className="flex flex-row justify-start">
              {isStopped ? (
                <button
                  onClick={() => {
                    clicked_play();
                    togglePlay();
                  }}
                  className={`bg-blue-500 text-white px-2 py-1 text-sm rounded-lg shadow-md transition-all hover:bg-blue-600 active:bg-blue-700 w-20`}
                >
                  Hidup
                </button>
              ) : (
                <button
                  onClick={() => {
                    clicked_play();
                    togglePlay();
                  }}
                  className={`bg-red-500 text-white px-2 py-1 text-sm rounded-lg shadow-md transition-all hover:bg-red-600 active:bg-blue-700 w-20`}
                >
                  Mati
                </button>
              )}
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
              />
            </div>
          </div>

          <div className="mt-5">
            <h4 className="text-slate-500">Suara Effect</h4>
            <div className="flex flex-row justify-start">
              {clicked_isStopped ? (
                <button
                  onClick={() => {
                    clicked_togglePlay();
                    clicked_play();
                  }}
                  className={`bg-blue-500 text-white px-2 py-1 text-sm rounded-lg shadow-md transition-all hover:bg-blue-600 active:bg-blue-700 w-20 `}
                >
                  Hidup
                </button>
              ) : (
                <button
                  onClick={() => {
                    clicked_play();
                    clicked_togglePlay();
                  }}
                  className={`bg-red-500 hover:bg-red-600 text-white px-2 py-1 text-sm rounded-lg shadow-md transition-all active:bg-blue-700 w-20 `}
                >
                  Mati
                </button>
              )}
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={clicked_volume}
                onChange={(e) => clicked_setVolume(parseFloat(e.target.value))}
              />
            </div>
          </div>
        </div>

        <div className="h-5"></div>
        <div className="flex mt-5 ml-5" onClick={handleBack}>
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
