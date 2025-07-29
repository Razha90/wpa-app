"use client";

import Album from "../components/icons/album";
import CameraTake from "../components/icons/camera_take";
import Delete from "../components/icons/delete";
import NavItemClicked from "../components/reusable/nav_item_clicked";
import { useRef, useState } from "react";
import Colors from "@/lib/colors";

export default function EditImageChoose() {
  const inputRef = useRef(null);
  const cameraRef = useRef(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
    }
  };

  const openFilePicker = () => {
    inputRef.current?.click();
  };

  const openCamera = () => {
    cameraRef.current?.click();
  };
  return (
    <footer
      className={`fixed bottom-0 left-0 w-full ${Colors.background.default} ${Colors.text.white} p-2 text-center z-50 flex justify-center animate-fade-up`}
      style={{ boxShadow: "0 -4px 6px -1px rgba(0,0,0,0.1)" }}
    >
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      <input
        ref={cameraRef}
        type="file"
        accept="image/*"
        capture="environment" // atau "user" untuk kamera depan
        onChange={handleFileChange}
        className="hidden"
      />
      <div className="max-w-7xl w-full mx-auto flex flex-row items-center justify-around">
        <NavItemClicked
          label={"Album"}
          icon={<Album />}
          width="w-7"
          clicked={openFilePicker}
        />
        <NavItemClicked
          label={"Kamera"}
          icon={<CameraTake />}
          width="w-7"
          clicked={openCamera}
        />
        <NavItemClicked
          label={"Hapus Gambar"}
          icon={<Delete />}
          width="w-7"
          activeColor={Colors.group_active.red}
          hoverBg={Colors.hover.red}
          activeBg={Colors.active.red}
          clickedColor={Colors.active.red}
          colorText={Colors.text.danger}
        />
      </div>
    </footer>
  );
}
