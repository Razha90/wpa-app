"use client";

import HeaderAdmin from "@/app/components/header-admin";
import { useActionState, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { addData } from "./action";
import AlertDanger from "@/app/components/alert_danger";
import AlertSucess from "@/app/components/alert_sucess";

export default function Client({ data, parentId }) {
  const router = useRouter();
  const [stateSucces, setStateSucces] = useState("");
  const [stateError, setStateError] = useState("");
  const [state, formAction, isPending] = useActionState(addData, {
    success: false,
    errors: { title: "", body: "", server: "", id: "", vr:"" },
    values: { title: "", body: "", id: "", vr:"" },
  });
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [vr, setVr] = useState("");
  const [hasChanged, setHasChanged] = useState(false);
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
      setTitle("");
      setBody("");
      setVr("");
      setStateSucces("Berhasil menambah data.");
      setTimeout(() => {
        setStateSucces("");
      }, 2000);
    }
    if (state.errors.title) {
      setStateError(state.errors.title);
      setTimeout(() => {
        setStateError("");
      }, 2000);
    }
    if (state.errors.body) {
      setStateError(state.errors.body);
      setTimeout(() => {
        setStateError("");
      }, 2000);
    }

    if (state.errors.vr) {
      setStateError(state.errors.vr);
      setTimeout(() => {
        setStateError("");
      }, 2000);
    }

    if (state.errors.server) {
      setStateError(state.errors.server);
      setTimeout(() => {
        setStateError("");
      }, 2000);
    }
    if (state.errors.id) {
      setStateError(state.errors.id);
      setTimeout(() => {
        setStateError("");
      }, 2000);
    }
  }, [state]);

  return (
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
        <h1 className="text-2xl font-bold text-blue-500">Tambah Konten</h1>
        <p className="text-gray-500 text-xl font-bold">{data.name}</p>
        <p
          className={`text-center text-lg ${
            data.type == "MATERI" ? "text-amber-400" : "text-green-400"
          }`}
        >
          {data.type}
        </p>
      </div>
      <form action={formAction} className="px-3">
        <input type="hidden" value={parentId} name="parentId" />
        <input type="hidden" value={data.id} name="id" />
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
            Link VR (Optional)
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 text-blue-600"
            placeholder="Link VR"
            name="vr"
            value={vr}
            onChange={(event) => {
              setHasChanged(true);
              setVr(event.target.value);
            }}
          />
          {!hasChanged && state?.errors.vr && (
            <p className="text-red-500 text-sm">{state?.errors.vr}</p>
          )}
        </div>

        <div className="max-w-md mx-auto mt-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Isi Kontent
          </label>
          <textarea
            rows="4"
            className="w-full text-blue-600 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Masukkan isi materi, gunakan markdown untuk format teks seperti **bold**, *italic*, dan lain-lain."
            name="body"
            required
            onChange={(event) => {
              setHasChanged(true);
              setBody(event.target.value);
            }}
            value={body}
          ></textarea>

          {!hasChanged && state?.errors.body && (
            <p className="text-red-500 text-sm">{state?.errors.body}</p>
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
  );
}
