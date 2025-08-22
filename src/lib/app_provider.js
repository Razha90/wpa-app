import { SessionProvider } from "next-auth/react";
import AudioPlayer from "@/app/components/audio_player";
import ClickedPlayer from "@/app/components/clicked_player";

export function AppProvider({ children }) {
  return (
    <SessionProvider>
      <ClickedPlayer>
        <AudioPlayer>{children}</AudioPlayer>
      </ClickedPlayer>
    </SessionProvider>
  );
}
