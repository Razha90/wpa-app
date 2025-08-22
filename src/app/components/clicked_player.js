"use client";

import { ClickedContext } from "@/lib/clicked_context";
import { useEffect, useState } from "react";
import useSound from "use-sound";

export default function ClickedPlayer({ children }) {
  const initialVolume =
    typeof window !== "undefined" && localStorage.getItem("clicked_volume")
      ? parseFloat(localStorage.getItem("clicked_volume"))
      : 0.5;

  const initialStopped =
    typeof window !== "undefined" &&
    localStorage.getItem("clicked_isStopped") === "true";

  const [volume, setVolume] = useState(initialVolume);
  const [isStopped, setIsStopped] = useState(initialStopped);

  const [play] = useSound("clicked-output.mp3", {
    volume,
    loop: false,
  });

  // useEffect(() => {
  //   const unlock = () => {
  //     if (!isStopped) {
  //       play();
  //     }
  //     window.removeEventListener("click", unlock);
  //   };
  //   window.addEventListener("click", unlock);
  // }, [play, isStopped]);

  useEffect(() => {
    localStorage.setItem("clicked_volume", volume);
  }, [volume]);

  useEffect(() => {
    localStorage.setItem("clicked_isStopped", isStopped);
  }, [isStopped]);

  const togglePlay = () => {
    if (isStopped) {
      setIsStopped(false);
    } else {
      setIsStopped(true);
    }
  };

  const player = () => {
    if (isStopped) {
    } else {
      play();
    }
  };

  return (
    <ClickedContext.Provider
      value={{
        volume,
        setVolume,
        isStopped,
        setIsStopped,
        togglePlay,
        play:  player ,
      }}
    >
      {children}
    </ClickedContext.Provider>
  );
}
