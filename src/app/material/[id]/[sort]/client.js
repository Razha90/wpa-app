"use client";

import FooterMaterial from "@/app/components/footer_material";
import HeaderMaterial from "@/app/components/header_material";
import Vr from "@/app/components/icons/vr";
import MenuNav from "@/app/components/menu_nav";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Client({ data, id }) {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  const closeMenu = () => {
    setMenu(false);
  };
  const sortedContents = data.contents.sort((a, b) => a.sort - b.sort);
  const currentIndex = sortedContents.findIndex(
    (item) => item.sort === data.current.sort
  );

  const before = currentIndex >= 0 ? sortedContents[currentIndex - 1] : null;
  const after =
    currentIndex < sortedContents.length - 1
      ? sortedContents[currentIndex + 1]
      : null;

  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current; // salin ref.current ke variabel lokal
    const currentData = data.current; // salin data.current ke variabel lokal
  
    const observer = new IntersectionObserver(
      () => {
        if (currentData.UserContentProgress.length === 0) {
          console.log("Updating progress for:", currentData.id);
          fetch("/api/progress-material", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: currentData.id }),
          }).catch((error) => {
            console.error("Error updating progress:", error);
          });
        }
      },
      { threshold: 0.5 }
    );
  
    if (currentRef) {
      observer.observe(currentRef);
    }
  
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [data]); // tambahkan data sebagai dependency
  

  console.log("Data", data);

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
      <HeaderMaterial title={data.name} toggleMenu={toggleMenu} />
      <div className="px-2">
        <div className="h-20"></div>
        <div
          className="text-gray-600 font-bold text-xl text-center"
          dangerouslySetInnerHTML={{ __html: data.current.title }}
        ></div>
        <div className="h-7"></div>
        <div
          className="text-gray-500"
          dangerouslySetInnerHTML={{ __html: data.current.body }}
        ></div>
        {data.current?.vr && (
          <div className="container mx-auto mt-10 text-center">
            <h3 className="text-blue-500 text-2xl font-bold">
              Jelajahi Dunia Baru
            </h3>
            <div className="flex justify-center aspect-square">
              <iframe src={data.current.vr} title="Cuplikan Web Assemblr" className="w-full h-full"/>
            </div>
            <Link href={data.current.vr} className="flex justify-center">
              <div className="w-20 h-20 text-white bg-blue-500 p-4 rounded-full text-center transition-all active:bg-white active:text-blue-500 hover:bg-white border-2 hover:text-blue-500 border-blue-500 mt-4">
                <Vr />
              </div>
            </Link>
          </div>
        )}
      </div>
      <FooterMaterial
        current={data.current.sort}
        before={before ? before.sort : null}
        after={after ? after.sort : null}
        id={id}
      />
      <div ref={ref} className=""></div>
      <div className="h-20"></div>
    </div>
  );
}
