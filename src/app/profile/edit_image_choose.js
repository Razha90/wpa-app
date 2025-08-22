"use client";

import Album from "../components/icons/album";
import CameraTake from "../components/icons/camera_take";
import Delete from "../components/icons/delete";
import NavItemClicked from "../components/reusable/nav_item_clicked";
import { useRef } from "react";
import Colors from "@/lib/colors";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function EditImageChoose({
  closed,
  isSucess,
  isError,
  image = null,
}) {
  const handleClose = () => {
    closed?.();
  };
  const inputRef = useRef(null);
  const cameraRef = useRef(null);
  const { update } = useSession();
  const route = useRouter();

  const handleFileChange = async (e) => {
    e.preventDefault();
    handleClose();

    const file = e.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      await fetch("/api/upload/avatar", {
        method: "POST",
        body: formData,
      })
        .then(async (res) => {
          if (!res.ok) {
            throw new Error("Failed to upload image");
          }
          isSucess?.("Gambar berhasil diunggah");
          await update({ updated: true });
          route.refresh();
          return;
        })
        .then((data) => console.log(data))
        .catch((error) => {
          isError?.("Gagal mengunggah gambar");
        });
    }
  };

  const handleDeletedImage = async (e) => {
    handleClose();
    e.preventDefault();

    if (!image) {
      isError?.("Tidak ada gambar yang dihapus");
      return;
    }

    await fetch("/api/delete-image", {
      method: "POST",
    })
      .then(async (res) => {
        if (!res.ok) {
          throw new Error("Failed to upload image");
        }
        isSucess?.("Gambar berhasil Di Hapus");
        await update({ updated: true });
        route.refresh();
        return;
      })
      .then((data) => console.log(data))
      .catch((error) => {
        isError?.("Gagal hapus gambar");
      });
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
        {image ? (
          <div onClick={handleDeletedImage}>
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
        ) : (
          <div onClick={handleClose}>
            <NavItemClicked
              label={"Hapus Gambar"}
              icon={<Delete />}
              width="w-7"
              activeColor={Colors.group_active.blue}
              hoverBg={Colors.hover.gray}
              activeBg={Colors.active.gray}
              clickedColor={Colors.active.gray}
              colorText={Colors.text.default}
            />
          </div>
        )}
      </div>
    </footer>
  );
}
