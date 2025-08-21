import { useState, useEffect } from "react";
import useSound from "use-sound";

export function useClickedSound() {
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    const savedVolume = localStorage.getItem("app-volume");
    if (savedVolume !== null) {
      setVolume(parseFloat(savedVolume));
    }
  }, []);

  const [play] = useSound("clicked.mp3", { volume });

  return play;
}
