import { createContext, useContext } from "react";

export const AudioContext = createContext({
  volume: 0.5,
  isStopped: false,
  setIsStopped: () => {},
  setVolume: () => {},
  togglePlay: () => {},
});

export function useAudio() {
  return useContext(AudioContext);
}