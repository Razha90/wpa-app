"use client";
import Colors from "@/lib/colors";
import AvatarDefault from "../components/icons/avatar-default";
import Camera from "../components/icons/camera";
import { useClicked } from "@/lib/clicked_context";
import Image from "next/image";

export function MenuProfile({ clicked, name = "Nama Pengguna", image = null }) {
  const { play } = useClicked();
  const handleProfileClick = () => {
    play();
    clicked?.();
  };
  return (
    <div className="flex items-center justify-center flex-col mt-5">
      <div className="relative">
        <div className="w-40 h-40 rounded-full overflow-hidden">
          {image ? (
            <Image src={`/uploads/${image}`} fill alt={name} />
          ) : (
            <AvatarDefault />
          )}
        </div>
        <div
          className={`absolute bottom-0 right-0 p-3 rounded-full ${Colors.background.blueDark} hover:opacity-60 transition-opacity cursor-pointer`}
          onClick={handleProfileClick}
        >
          <div className="w-6 h-6">
            <Camera />
          </div>
        </div>
      </div>
      <p className={`${Colors.text.default} font-bold text-xl mt-4`}>{name}</p>
    </div>
  );
}
