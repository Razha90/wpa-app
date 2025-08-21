"use client";

import FooterMaterial from "@/app/components/footer_material";
import HeaderMaterial from "@/app/components/header_material";
import Arrow from "@/app/components/icons/arrow";
import MenuNav from "@/app/components/menu_nav";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Client({ data, id }) {
  const route = useRouter();
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  const closeMenu = () => {
    setMenu(false);
  };

  const handleBackHome = () => {
    route.push("/");
  };

  const lastIndex = data.contents.length - 1; // hitung index terakhir
  const before = data.contents[lastIndex];
  const after = null;
  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="bg-[url('/background.png')] bg-cover bg-center w-dvw h-dvh fixed -z-10"></div>
      {menu && (
        <MenuNav
          closedMenu={closeMenu}
          list={data?.contents}
          id={id}
          current={data?.current}
        />
      )}
      <div className="h-20"></div>
      <div className="max-w-[300px] mx-auto text-center">
        <Image
          src={`/smile.gif`}
          width={200}
          height={200}
          alt="Smile"
          className="mx-auto"
        />
        <p className="text-2xl font-bold text-blue-500 animate-fade-down">
          Selamat Telah Menyelesaikan Pembelajaran
        </p>
        <div className="flex justify-center">
          <button
            onClick={handleBackHome}
            type="button"
            className="bg-blue-500 rounded-xl py-2 pl-2 pr-4 flex-row flex items-center mt-5 group hover:bg-white active:bg-white border-2 border-blue-500 transition-all cursor-pointer"
          >
            <div className="text-white w-6 h-6 rotate-180 group-hover:text-blue-500">
              <Arrow />
            </div>
            <span className="font-bold text-white mt-1 group-hover:text-blue-500">
              Kembali
            </span>
          </button>
        </div>
      </div>

      <HeaderMaterial title={data.name} toggleMenu={toggleMenu} />
      <FooterMaterial
        current={null}
        before={before ? before.sort : null}
        after={after ? after.sort : null}
        id={id}
      />
    </div>
  );
}
