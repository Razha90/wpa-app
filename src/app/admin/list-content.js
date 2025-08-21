"use client";

import { useActionState, useEffect, useState } from "react";
import Arrow from "../components/icons/arrow";
import {
  childDownSort,
  childUpSort,
  deleteChild,
  deleteCollection,
  downSort,
  upSort,
} from "./action";
import Link from "next/link";
import AlertSucess from "../components/alert_sucess";
import AlertDanger from "../components/alert_danger";

export default function ListContent({ data }) {
  const [collections, setCollections] = useState(data || []);
  const [alertSucess, setAlertSucess] = useState("");
  const [alertError, setAlertError] = useState("");

  const [state, formAction] = useActionState(upSort, {
    success: false,
    updatedData: [],
    values: { id: "", parentId: "" },
  });

  const [childUp, formActionChildUp] = useActionState(childUpSort, {
    success: false,
    updatedData: [],
    values: { id: "" },
  });

  const [childDown, formActionChildDown] = useActionState(childDownSort, {
    success: false,
    updatedData: [],
    values: { id: "", parentId: "" },
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

  const [childDelete, formActionChildDelete] = useActionState(deleteChild, {
    success: false,
    updatedData: [],
    values: { id: "", parentId: "" },
  });

  useEffect(() => {
    if (childDelete.updatedData && childDelete.updatedData.length > 0) {
      if (childDelete.success) {
        setCollections(childDelete.updatedData);
        setAlertSucess("Berhasil mengubah urutan data ke atas.");
      } else {
        setAlertError("Gagal mengubah urutan data ke atas. Silakan coba lagi.");
      }
    }
  }, [childDelete]);

  useEffect(() => {
    if (childUp.updatedData && childUp.updatedData.length > 0) {
      if (childUp.success) {
        setCollections(childUp.updatedData);
        setAlertSucess("Berhasil mengubah urutan data ke atas.");
      } else {
        setAlertError("Gagal mengubah urutan data ke atas. Silakan coba lagi.");
      }
    }
  }, [childUp]);

  useEffect(() => {
    if (childDown.updatedData && childDown.updatedData.length > 0) {
      if (childDown.success) {
        setCollections(childDown.updatedData);
        setAlertSucess("Berhasil mengubah urutan data ke bawah.");
      } else {
        setAlertError(
          "Gagal mengubah urutan data ke bawah. Silakan coba lagi."
        );
      }
    }
  }, [childDown]);

  useEffect(() => {
    if (state.updatedData && state.updatedData.length > 0) {
      if (state.success) {
        setCollections(state.updatedData);
        setAlertSucess("Berhasil mengubah urutan data.");
      } else {
        setAlertError("Gagal mengubah urutan data. Silakan coba lagi.");
      }
    }
  }, [state]);

  useEffect(() => {
    if (stateDown.updatedData && stateDown.updatedData.length > 0) {
      if (stateDown.success) {
        setCollections(stateDown.updatedData);
        setAlertSucess("Berhasil mengubah urutan data ke bawah.");
      } else {
        setAlertError(
          "Gagal mengubah urutan data ke bawah. Silakan coba lagi."
        );
      }
    }
  }, [stateDown]);

  useEffect(() => {
    if (alertSucess) {
      setTimeout(() => {
        setAlertSucess("");
      }, 3000);
    }
  }, [alertSucess]);

  useEffect(() => {
    if (stateDelete.updatedData && stateDelete.updatedData.length > 0) {
      if (stateDelete.success) {
        setCollections(stateDelete.updatedData);
        setAlertSucess("Berhasil menghapus data.");
      } else {
        setAlertError("Gagal menghapus data. Silakan coba lagi.");
      }
    }
  }, [stateDelete]);

  const handleCloseDanger = () => {
    setAlertSucess("");
  };

  const handleClosedError = () => {
    setAlertError("");
  };

  useEffect(() => {
    if (alertError) {
      setTimeout(() => {
        setAlertError("");
      }, 3000);
    }
  }, [alertError]);

  return (
    <>
      {alertSucess && (
        <AlertSucess
          closed={handleCloseDanger}
          message={"Berhasil menambah data."}
        />
      )}
      {alertError && (
        <AlertDanger message={alertError} closed={handleClosedError} />
      )}
      {collections.map((item, index) => (
        <div key={`${item.id}`}>
          <div className="flex flex-row" key={item.id}>
            <div className="flex flex-col items-center">
              {index != 0 ? (
                <form action={formAction}>
                  <input type="hidden" name="id" value={item.id} />
                  <button
                    type="submit"
                    className="-rotate-90 text-blue-400 w-8"
                  >
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
                <p dangerouslySetInnerHTML={{ __html: item.name }}></p>
                <p
                  className={`${
                    item.type == "MATERI" ? "text-amber-400" : "text-green-400"
                  }`}
                >
                  {item.type}
                </p>
              </div>
              <p
                className="text-gray-400 text-sm"
                dangerouslySetInnerHTML={{ __html: item.description }}
              ></p>

              <div className="mt-5 text-right mb-3 flex flex-row justify-center gap-x-2 items-center">
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
                  className="rounded-lg bg-yellow-400 text-white font-bold px-2 py-1"
                  href={`/admin/edit/${item.id}`}
                >
                  Ubah
                </Link>
                <Link
                  className="rounded-lg bg-blue-400 text-white font-bold px-2 py-1"
                  href={
                    item.type == "MATERI"
                      ? `/admin/add-data/${item.id}`
                      : `/admin/add-soal/${item.id}`
                  }
                >
                  Tambah {item.type == "MATERI" ? "Materi" : "Soal"}
                </Link>
              </div>
            </div>
          </div>
          {item.contents?.length > 0 && (
            <div className="ml-10 mt-1 mb-2">
              <p className="text-gray-500 font-bold text-xl">
                Daftar {item.type == "MATERI" ? "MATERI" : "SOAL"}
              </p>
              <div className="flex flex-col gap-y-2">
                {item.contents.map((child, i) => (
                  <div className="flex flex-row gap-x-2" key={child.id}>
                    <div className="flex flex-col items-center">
                      {i != 0 ? (
                        <form action={formActionChildUp}>
                          <input
                            type="hidden"
                            name="parentId"
                            value={item.id}
                          />
                          <input type="hidden" name="id" value={child.id} />
                          <button
                            type="submit"
                            className="-rotate-90 text-blue-400 w-8"
                          >
                            <Arrow />
                          </button>
                        </form>
                      ) : (
                        <div className="w-8 h-8"></div>
                      )}
                      <p className="text-blue-500 text-xl font-bold">
                        {child.sort}
                      </p>
                      {i + 1 != item.contents.length ? (
                        <form action={formActionChildDown}>
                          <input
                            type="hidden"
                            name="parentId"
                            value={item.id}
                          />
                          <input type="hidden" name="id" value={child.id} />
                          <button
                            type="submit"
                            className="rotate-90 text-blue-400 w-8"
                          >
                            <Arrow />
                          </button>
                        </form>
                      ) : (
                        <div className="w-8 h-8"></div>
                      )}
                    </div>
                    <div className="border-2 border-blue-300 p-2 rounded-xl w-full">
                      <div
                        className="text-blue-500"
                        dangerouslySetInnerHTML={{ __html: child.title }}
                      ></div>
                      {item.type == "SOAL" ? (
                        <ul className="!list-disc pl-4 text-blue-500">
                          <li>
                            <div
                              className="text-blue-500"
                              dangerouslySetInnerHTML={{
                                __html: child.choiceA,
                              }}
                            ></div>
                          </li>
                          <li>
                            {" "}
                            <div
                              className="text-blue-500"
                              dangerouslySetInnerHTML={{
                                __html: child.choiceB,
                              }}
                            ></div>
                          </li>
                          <li>
                            {" "}
                            <div
                              className="text-blue-500"
                              dangerouslySetInnerHTML={{
                                __html: child.choiceC,
                              }}
                            ></div>
                          </li>
                          <li>
                            <div
                              className="text-blue-500"
                              dangerouslySetInnerHTML={{
                                __html: child.choiceD,
                              }}
                            ></div>
                          </li>
                        </ul>
                      ) : (
                        <div
                          className="text-blue-500"
                          dangerouslySetInnerHTML={{ __html: item.description }}
                        ></div>
                      )}
                      <div className="flex flex-row items-center mt-2 justify-center">
                        <form action={formActionChildDelete}>
                          <input type="hidden" name="id" value={child.id} />
                          <input
                            type="submit"
                            value={"Hapus"}
                            className="rounded-lg bg-red-500 text-white font-bold px-2 py-1"
                          />
                        </form>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
}
