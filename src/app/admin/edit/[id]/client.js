"use client";

import { useActionState, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AlertDanger from "@/app/components/alert_danger";
import AlertSucess from "@/app/components/alert_sucess";
import HeaderAdmin from "@/app/components/header-admin";
import { updateKoleksi } from "./action";

export default function Client({ data }) {
  const [dataFinal, setDataFinal] = useState(data);
  const [stateSucces, setStateSucces] = useState("");
  const [stateError, setStateError] = useState("");
  const [state, formAction, isPending] = useActionState(updateKoleksi, {
    success: false,
    errors: { title: "", server: "", id: "", description: "" },
    values: { title: "", id: "", description: "" },
  });
  const [title, setTitle] = useState(data?.name || "");
  const [description, setDescription] = useState(data?.description || "");
  const [hasChanged, setHasChanged] = useState(false);
  const router = useRouter();
  const back = () => {
    router.push("/admin");
  };
  const handleCloseDanger = () => {
    setStateError("");
  };

  const handleCloseSuccess = () => {
    setStateSucces("");
  };

  useEffect(() => {
    if (state.success) {
      setDataFinal({
        name: state.values.title || data.name,
        description: state.values.description || dataFinal.description,
      });
      setStateSucces("Berhasil menambah data.");
      setTimeout(() => {
        setStateSucces("");
      }, 2000);
    }

    // Error handling
    const errorFields = ["title", "description", "server", "id"];
    errorFields.forEach((field) => {
      if (state.errors[field]) {
        setStateError(state.errors[field]);
        setTimeout(() => setStateError(""), 2000);
      }
    });
    // if (state.success) {
    //   setDataFinal({
    //     name: state.values.title || data.name,
    //     description: state.values.description || dataFinal.description,
    //   })
    //   setStateSucces("Berhasil menambah data.");
    //   setTimeout(() => {
    //     setStateSucces("");
    //   }, 2000);
    // }
    // if (state.errors.title) {
    //   setStateError(state.errors.title);
    //   setTimeout(() => {
    //     setStateError("");
    //   }, 2000);
    // }

    // if (state.errors.description) {
    //   setStateError(state.errors.description);
    //   setTimeout(() => {
    //     setStateError("");
    //   }, 2000);
    // }

    // if (state.errors.server) {
    //   setStateError(state.errors.server);
    //   setTimeout(() => {
    //     setStateError("");
    //   }, 2000);
    // }
    // if (state.errors.id) {
    //   setStateError(state.errors.id);
    //   setTimeout(() => {
    //     setStateError("");
    //   }, 2000);
    // }
  }, [state, data.name, dataFinal.description]);

  return (
    <>
      {data ? (
        <div>
          <HeaderAdmin />
          {stateError && (
            <AlertDanger
              closed={handleCloseSuccess}
              message={stateError || "Terjadi kesalahan saat menambah data."}
            />
          )}
          {stateSucces && (
            <AlertSucess
              closed={handleCloseDanger}
              message={stateSucces || "Berhasil menambah data."}
            />
          )}
          <button onClick={back} className="text-blue-500 my-5 px-5">
            kembali
          </button>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-blue-500">Ubah Koleksi</h1>
            <p className="text-gray-500 text-xl font-bold">{dataFinal?.name}</p>
            <p
              className={`text-center text-lg ${
                data?.type == "MATERI" ? "text-amber-400" : "text-green-400"
              }`}
            >
              {data?.type}
            </p>
          </div>
          <form action={formAction} className="px-3">
            <input type="hidden" value={data?.id} name="id" />
            <div className="max-w-md mx-auto mt-8">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Judul Konten
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 text-blue-600"
                placeholder="Masukkan judul materi"
                name="title"
                required
                value={title}
                onChange={(event) => {
                  setHasChanged(true);
                  setTitle(event.target.value);
                }}
              />
              {!hasChanged && state?.errors.title && (
                <p className="text-red-500 text-sm">{state?.errors.title}</p>
              )}
            </div>

            <div className="max-w-md mx-auto mt-8">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Deksripsi
              </label>
              <textarea
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 text-blue-600"
                placeholder="Masukkan judul materi"
                name="description"
                required
                rows={10}
                value={description}
                onChange={(event) => {
                  setHasChanged(true);
                  setDescription(event.target.value);
                }}
              ></textarea>
              {!hasChanged && state?.errors.description && (
                <p className="text-red-500 text-sm">
                  {state?.errors.description}
                </p>
              )}
            </div>

            <div className="max-w-md mx-auto mt-4">
              <button
                disabled={isPending}
                type="submit"
                className={`w-full mt-4 px-4 py-2 rounded-md text-white focus:outline-none focus:ring focus:ring-blue-500 ${
                  isPending
                    ? "bg-blue-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {isPending ? "Menyimpan..." : "Simpan"}
              </button>
            </div>
          </form>
        </div>
      ) : (
        <>
          <HeaderAdmin />
          <div className="text-red-500 text-center mt-10">Tidak Ditemukan</div>
        </>
      )}
    </>
  );
}
