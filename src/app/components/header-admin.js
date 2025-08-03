"use client"; // penting jika kamu berada di App Router

import Colors from "@/lib/colors";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderAdmin() {
  const pathname = usePathname();

  return (
    <header
      className={`w-full p-4 ${Colors.background.default}`}
      style={{ boxShadow: "0 2px 6px 2px rgba(0,0,0,0.1)" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-x-3">
        <Link
          href="/admin"
          className={`text-base ${
            pathname === "/admin"
              ? "underline text-blue-600"
              : Colors.text.default
          } ${Colors.font.default}`}
        >
          Lihat Data
        </Link>

        <Link
          href="/admin/add-data"
          className={`text-base ${
            pathname === "/admin/add-data"
              ? "underline text-blue-600"
              : Colors.text.default
          } ${Colors.font.default}`}
        >
          Tambah Data
        </Link>
      </div>
    </header>
  );
}
