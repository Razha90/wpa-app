"use client";

import { AudioContext } from "@/lib/audio_context";
import { SessionProvider } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import useSound from "use-sound";

export default function AudioPlayer({ children }) {
  const initialVolume =
    typeof window !== "undefined" && localStorage.getItem("volume")
      ? parseFloat(localStorage.getItem("volume"))
      : 0.5;

  const initialStopped =
    typeof window !== "undefined" &&
    localStorage.getItem("isStopped") === "true";

  const [volume, setVolume] = useState(initialVolume);
  const [isStopped, setIsStopped] = useState(initialStopped);

  const [play, { stop, sound }] = useSound("/backsound.m4a", {
    volume,
    loop: true,
  });

  useEffect(() => {
    const unlock = () => {
      if (!isStopped) {
        play();
      }
      window.removeEventListener("click", unlock);
    };
    window.addEventListener("click", unlock);
  }, [play, isStopped]);

  useEffect(() => {
    localStorage.setItem("volume", volume);
  }, [volume]);

  useEffect(() => {
    localStorage.setItem("isStopped", isStopped);
  }, [isStopped]);

  const togglePlay = () => {
    if (isStopped) {
      play();
      setIsStopped(false);
    } else {
      stop();
      setIsStopped(true);
    }
  };

  return (
    <AudioContext.Provider value={{ isStopped, togglePlay, volume, setVolume }}>
      <SessionProvider>{children}</SessionProvider>
    </AudioContext.Provider>
  );
}
