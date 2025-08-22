"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useClicked } from "@/lib/clicked_context";
export default function NavItem({ href, label, icon, width = "w-8" }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const { play } = useClicked();

  return (
    <Link
      onClick={() => {
        play();
      }}
      href={href}
      className={`flex flex-col justify-center gap-2 items-center hover:bg-gray-200 rounded-full px-4 py-2 transition duration-300 ease-in-out`}
    >
      <div
        className={`${isActive ? "text-blue-600" : "text-gray-500"} ${width}`}
      >
        {icon}
      </div>
      <p
        className={`text-sm ${
          isActive ? "text-blue-600 font-semibold" : "text-gray-500"
        }`}
      >
        {label}
      </p>
    </Link>
  );
}
