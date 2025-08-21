"use client";
import { useState } from "react";
import Footer from "../components/footer";
import { MenuProfile } from "./menu_profile";
import { BlackScreen } from "../components/black_screen";
import EditImageChoose from "./edit_image_choose";
import Arrow from "../components/icons/arrow";
import ListArrow from "../components/reusable/list_arrow";
import Colors from "@/lib/colors";
import Exit from "../components/icons/exit";
import Logout from "./logout";
import { signOut } from "next-auth/react";
import ListArrowLink from "../components/reusable/list_arrow_link";
import { useRouter } from "next/navigation";

export function Client({ auth }) {
  // const [profile, setProfile] = useState(false);
  const [background, setBackground] = useState(false);
  const [editImage, setEditImage] = useState(false);
  const [logout, setLogout] = useState(false);
  const [isAdmin, setIsAdmin] = useState(auth?.user?.role == "ADMIN");
  const route = useRouter();

  const handleEditImageProfile = () => {
    setBackground(!background);
    setEditImage(!editImage);
  };

  const handleLogout = () => {
    setLogout(!logout);
    setBackground(!background);
  };

  const handleBlackScreen = () => {
    setBackground(false);
    setEditImage(false);
    setLogout(false);
  };

  const logoutSign = () => {
    signOut();
  };

  const handleEdit = () => {
    route.push("/profile/edit");
  };

  const handlePrivacy = () => {
    route.push("/privacy");
  };

  const handleInfo = () => {
    route.push("/info");
  };

  const handleSetting = () => {
    route.push("/settings");
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="bg-[url('/background.png')] bg-cover bg-center w-dvw h-dvh fixed -z-10"></div>

      <div
        className="flex items-start justify-start py-4 px-4 container mx-auto"
        style={{ boxShadow: "0 -4px 6px -1px rgba(0,0,0,0.1)" }}
      >
        <h1 className={`font-bold text-3xl ${Colors.text.default}`}>Akun</h1>
      </div>

      <MenuProfile clicked={handleEditImageProfile} name={auth.user.fullname} />
      {background && <BlackScreen clicked={handleBlackScreen} />}
      {editImage && (
        <>
          <EditImageChoose />
        </>
      )}

      {logout && <Logout clickedNo={handleLogout} clickedYes={logoutSign} />}

      <div className="container px-2 flex flex-col items-start justify-start py-4 mx-auto mt-10 gap-y-2">
        <ListArrow icon={<Arrow />} label={"Edit Akun"} clicked={handleEdit} />
        <ListArrow icon={<Arrow />} label={"Privasi"} clicked={handlePrivacy} />
        <ListArrow
          icon={<Arrow />}
          label={"Pengaturan"}
          clicked={handleSetting}
        />

        <ListArrow
          icon={<Arrow />}
          label={"Terima Kasih Kami"}
          clicked={handleInfo}
        />

        <ListArrow
          icon={<Exit />}
          label={"Keluar"}
          backgroundColor={Colors.background.red}
          activeColor={Colors.text.danger}
          activeBg={Colors.active.red}
          hoverBg={Colors.hover.red}
          textColor={Colors.text.danger}
          activeBorderColor={Colors.hover.borderRed}
          clickedBorder={Colors.active.borderRed}
          clicked={handleLogout}
        />

        {isAdmin && (
          <ListArrowLink href="/admin" icon={<Arrow />} label={"Menu Admin"} />
        )}
      </div>
      {!editImage && <Footer />}
      <div className="h-30"></div>
    </div>
  );
}
