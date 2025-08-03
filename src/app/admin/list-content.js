"use client";

import { useActionState, useEffect, useState } from "react";
import Arrow from "../components/icons/arrow";
import { deleteCollection, downSort, upSort } from "./action";
import Link from "next/link";

export default function ListContent({ data }) {
  const [collections, setCollections] = useState(data || []);
  const [state, formAction] = useActionState(upSort, {
    success: false,
    updatedData: [],
    values: { id: "" },
  });

  const [stateDown, formActionDown] = useActionState(downSort, {
    success: false,
    updatedData: [],
    values: { id: "" },
  });

  const [stateDelete, formActionDelete] = useActionState(deleteCollection, {
    success: false,
    updatedData: [],
    values: { id: "" },
  });

  useEffect(() => {
    if (state.success) {
      setCollections(state.updatedData);
    }
  }, [state]);

  useEffect(() => {
    if (stateDown.success) {
      setCollections(stateDown.updatedData);
    }
  }, [stateDown]);

  useEffect(() => {
    if (stateDelete.success) {
      setCollections(stateDelete.updatedData);
    }
  }, [stateDelete]);

  return (
    <>
      {collections.map((item, index) => (
        <div className="flex flex-row" key={item.id}>
          <div className="flex flex-col items-center">
            {index != 0 ? (
              <form action={formAction}>
                <input type="hidden" name="id" value={item.id} />
                <button type="submit" className="-rotate-90 text-blue-400 w-8">
                  <Arrow />
                </button>
              </form>
            ) : (
              <div className="w-8 h-8"></div>
            )}
            <p className="text-blue-500 text-xl font-bold">{item.sort}</p>
            {index + 1 != collections.length ? (
              <form action={formActionDown}>
                <input type="hidden" name="id" value={item.id} />
                <button type="submit" className="rotate-90 text-blue-400 w-8">
                  <Arrow />
                </button>
              </form>
            ) : (
              <div className="w-8 h-8"></div>
            )}
          </div>
          <div
            key={item.id}
            className="mb-2 text-blue-400 p-2 border border-blue-300 rounded-xl w-full"
          >
            <div className="flex flex-row justify-between">
              <p>{item.name}</p>{" "}
              <p
                className={`${
                  item.type == "MATERI" ? "text-amber-400" : "text-green-400"
                }`}
              >
                {item.type}
              </p>
            </div>
            <p className="text-gray-400 text-sm">{item.description}</p>
            <p className="text-gray-500 mt-5 font-bold">
              Daftar {item.type == "MATERI" ? "MATERI" : "SOAL"}
            </p>
            {item.contents && item.contents.length > 0 ? (
              <ul className="text-gray-500 list-disc pl-5">
                {item.contents.map((content) => (
                  <li key={content.id}>{content.name}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">Tidak ada konten</p>
            )}
            <div className="mt-5 text-right mb-3 flex flex-row justify-between items-center">
              <form
                action={formActionDelete}
                onSubmit={(e) => {
                  const confirmDelete = window.confirm(
                    "Apakah kamu yakin ingin menghapus item ini?"
                  );
                  if (!confirmDelete) {
                    e.preventDefault();
                  }
                }}
              >
                <input type="hidden" name="id" value={item.id} />
                <button
                  type="submit"
                  className="focus:outline-none text-white bg-red-500 hover:bg-red-700 cursor-pointer active:bg-red-700 focus:ring-4 focus:ring-red-300 rounded-lg px-2 py-1 font-bold  "
                >
                  Hapus
                </button>
              </form>
              <Link
                className="rounded-lg bg-blue-400 text-white font-bold px-2 py-1"
                href={`/admin/add-data/${item.id}`}
              >
                Tambah {item.type == "MATERI" ? "Materi" : "Soal"}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
