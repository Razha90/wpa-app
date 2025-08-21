"use client";

import { useAudio } from "@/lib/audio_context";

export default function Home() {
  const { volume, setVolume, togglePlay, isStopped, setIsStopped } = useAudio();

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
              <button
                onClick={togglePlay}
                className={`bg-blue-500 text-white px-2 py-1 text-sm rounded-lg shadow-md transition-all hover:bg-blue-600 active:bg-blue-700 w-20 ${
                  !isStopped ? "bg-red-500 hover:bg-red-600" : ""
                }`}
              >
                {isStopped ? "Hidup" : "Mati"}
              </button>
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

          <div className="">
            <h4 className="text-slate-500">Suara Effect</h4>
            <div className="flex flex-row justify-start">
              <button
                onClick={togglePlay}
                className={`bg-blue-500 text-white px-2 py-1 text-sm rounded-lg shadow-md transition-all hover:bg-blue-600 active:bg-blue-700 w-20 ${
                  !isStopped ? "bg-red-500 hover:bg-red-600" : ""
                }`}
              >
                {isStopped ? "Hidup" : "Mati"}
              </button>
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
        </div>
      </div>
    </div>
  );
}
