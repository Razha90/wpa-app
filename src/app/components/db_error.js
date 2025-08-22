"use client";

import { useClicked } from "@/lib/clicked_context";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DbError({
  title = "Materi tidak ditemukan",
  message = " Maaf, materi yang Anda cari tidak tersedia.",
}) {

  const router = useRouter();
  const handleBack = () => {
    play();
    router.refresh();
  };
  const { play } = useClicked();
  return (
    <div className="text-center">
      <h1 className="text-center text-2xl font-bold mt-10 text-red-400">
        {title}
      </h1>
      <p className="text-center text-red-400 mt-4">{message}</p>
      <div className="flex flex-row gap-x-5 items-center justify-center">
        <Link
          onClick={play}
          href={`/`}
          className="text-blue-500 underline text-center"
        >
          Kembali
        </Link>
        <button
          onClick={handleBack}
          className="text-blue-500 underline text-center"
        >
          Ulangi
        </button>
      </div>
    </div>
  );
}
