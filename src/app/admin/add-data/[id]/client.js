"use client";

import HeaderAdmin from "@/app/components/header-admin";
import { useActionState, useState } from "react";
import { useRouter } from "next/navigation";
import { addData } from "./action";
import AlertDanger from "@/app/components/alert_danger";
import AlertSucess from "@/app/components/alert_sucess";

export default function Client({ data }) {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(addData ,{
    success: false,
    errors: {
      title: "",
      body: "",
      server: "",
    },
    values: { title: "", body: "" },
  });
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [hasChanged, setHasChanged] = useState(false);
  const back = () => {
    router.back();
  };
  const handleCloseDanger = () => {
    setHasChanged(true);
  };

  return (
    <div>
      <HeaderAdmin />
      {!hasChanged && state?.errors.server && (
        <AlertDanger closed={handleCloseDanger} message={state?.errors.server} />
      )}
      {!hasChanged && state?.success && (
        <AlertSucess
          closed={handleCloseDanger}
          message={"Berhasil menambah data."}
        />
      )}
      <button onClick={back} className="text-blue-500 my-5 px-5">
        kembali
      </button>
      <div className="text-center">
        <h1 className="text-2xl font-bold text-blue-500">Tambah Konten</h1>
        <p className="text-gray-500 text-xl font-bold">{data.name}</p>
      </div>
      <form action={formAction} className="px-3">
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
