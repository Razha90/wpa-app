"use client";
import Colors from "@/lib/colors";
import AvatarDefault from "../components/icons/avatar-default";
import  Camera  from "../components/icons/camera";

export function MenuProfile({clicked, name = "Nama Pengguna"}) {
  const handleProfileClick = () => {
    clicked?.();
  };
  return (
    <div className="flex items-center justify-center flex-col mt-5">
    <div className="relative">
      <div className="w-40 h-40">
        <AvatarDefault />
      </div>
      <div className={`absolute bottom-0 right-0 p-3 rounded-full ${Colors.background.blueDark} hover:opacity-60 transition-opacity cursor-pointer`} onClick={handleProfileClick}>
        <div className="w-6 h-6">
          <Camera />
        </div>
      </div>
    </div>
    <p className={`${Colors.text.default} font-bold text-xl mt-4`}>{name}</p>
  </div>
  )
}