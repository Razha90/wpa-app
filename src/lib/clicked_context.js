"use client";
import { createContext, useContext } from "react";

export const ClickedContext = createContext({
  volume: 0.5,
  isStopped: false,
  setIsStopped: () => {},
  setVolume: () => {},
  togglePlay: () => {},
  play: () => {},
});

export function useClicked() {
  return useContext(ClickedContext);
}