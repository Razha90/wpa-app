"use client";
import AlertDanger from "@/app/components/alert_danger";
import { simpanKoleksi } from "./action";
import { useActionState, useEffect, useState } from "react";
import AlertSucess from "@/app/components/alert_sucess";

export default function FormAction() {
  const [state, formAction, isPending] = useActionState(simpanKoleksi, {
    success: false,
    errors: {
      title: "",
      type: "",
      description: "",
      server: "",
    },
    values: { title: "", type: "", description: "" },
  });

  const [hasChanged, setHasChanged] = useState(false);

  useEffect(() => {
    setHasChanged(false);
  }, [state]);

  const handleCloseDanger = () => {
    setHasChanged(true);
  };

  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (state.success) {
      setTitle("");
      setType("");
      setDescription("");
    }
  }, [state.success]);

  return (
    <div>
      {!hasChanged && state.errors.server && (
        <AlertDanger closed={handleCloseDanger} message={state.errors.server} />
      )}
      {!hasChanged && state.success && (
        <AlertSucess
          closed={handleCloseDanger}
          message={"Berhasil menambah data."}
        />
      )}

      <h1 className="text-blue-600 text-center text-2xl font-bold">
        Simpan Koleksi
      </h1>
      <form action={formAction} className="px-3">
        <div className="max-w-md mx-auto mt-8">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Judul Materi
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
          {!hasChanged && state.errors.title && (
            <p className="text-red-500 text-sm">{state.errors.title}</p>
          )}
        </div>

        <div className="max-w-md mx-auto mt-8">
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Pilih Jenis Konten
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
            name="type"
            // onChange={() => setHasChanged(true)}
            onChange={(event) => {
              setHasChanged(true);
              setType(event.target.value);
            }}
            value={type}
          >
            <option disabled hidden value="">
              Pilih Jenis
            </option>
            <option value="MATERI">Soal Latihan</option>
            <option value="SOAL">Materi</option>
          </select>
          {!hasChanged && state.errors.type && (
            <p className="text-red-500 text-sm">{state.errors.type}</p>
          )}
        </div>

        <div className="max-w-md mx-auto mt-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Deskripsi
          </label>
          <textarea
            rows="4"
            className="w-full text-blue-600 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Masukkan deskripsi materi"
            name="description"
            required
            // onChange={() => setHasChanged(true)}
            onChange={(event) => {
              setHasChanged(true);
              setDescription(event.target.value);
            }}
            value={description}
          ></textarea>

          {!hasChanged && state.errors.description && (
            <p className="text-red-500 text-sm">{state.errors.description}</p>
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

          {/* <button
            type="submit"
            className={`mt-4 px-4 py-2 rounded ${
              isPending
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            } text-white`}
          ></button> */}
        </div>
      </form>
    </div>
  );
}
