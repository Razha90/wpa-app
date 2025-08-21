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
    errors: {
      title: "",
      question1: "",
      question2: "",
      question3: "",
      question4: "",
      choose: "",
      server: "",
      id: "",
    },
    values: {
      title: "",
      question1: "",
      question2: "",
      question3: "",
      question4: "",
      choose: "",
      id: "",
    },
  });
  const [title, setTitle] = useState("");
  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
  const [question3, setQuestion3] = useState("");
  const [question4, setQuestion4] = useState("");
  const [choose, setChoose] = useState("");
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
      setQuestion1("");
      setQuestion2("");
      setQuestion3("");
      setQuestion4("");
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
    if (state.errors.question1) {
      setStateError(state.errors.question1);
      setTimeout(() => {
        setStateError("");
      }, 2000);
    }
    if (state.errors.question2) {
      setStateError(state.errors.question2);
      setTimeout(() => {
        setStateError("");
      }, 2000);
    }
    if (state.errors.question3) {
      setStateError(state.errors.question3);
      setTimeout(() => {
        setStateError("");
      }, 2000);
    }
    if (state.errors.question4) {
      setStateError(state.errors.question4);
      setTimeout(() => {
        setStateError("");
      }, 2000);
    }
    if (state.errors.choose) {
      setStateError(state.errors.choose);
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
        <h1 className="text-2xl font-bold text-blue-500">Tambah Soal</h1>
        <p
          className="text-gray-500 text-xl font-bold"
          dangerouslySetInnerHTML={{ __html: data.name }}
        ></p>
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
            Pertanyaan
          </label>
          <textarea
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 text-blue-600"
            placeholder="Masukkan Pertanyaan"
            name="title"
            required
            value={title}
            onChange={(event) => {
              setHasChanged(true);
              setTitle(event.target.value);
            }}
          ></textarea>
          {!hasChanged && state?.errors.title && (
            <p className="text-red-500 text-sm">{state?.errors.title}</p>
          )}
        </div>

        <div className="max-w-md mx-auto mt-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Jawaban 1
          </label>
          <textarea
            rows="4"
            className="w-full text-blue-600 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Masukkan isi pertanyaan 1."
            name="question1"
            required
            onChange={(event) => {
              setHasChanged(true);
              setQuestion1(event.target.value);
            }}
            value={question1}
          ></textarea>

          {!hasChanged && state?.errors.question1 && (
            <p className="text-red-500 text-sm">{state?.errors.question1}</p>
          )}
        </div>

        <div className="max-w-md mx-auto mt-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Jawaban 2
          </label>
          <textarea
            rows="4"
            className="w-full text-blue-600 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Masukkan isi pertanyaan 2."
            name="question2"
            required
            onChange={(event) => {
              setHasChanged(true);
              setQuestion2(event.target.value);
            }}
            value={question2}
          ></textarea>

          {!hasChanged && state?.errors.question2 && (
            <p className="text-red-500 text-sm">{state?.errors.question2}</p>
          )}
        </div>

        <div className="max-w-md mx-auto mt-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Jawaban 3
          </label>
          <textarea
            rows="4"
            className="w-full text-blue-600 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Masukkan isi pertanyaan 3."
            name="question3"
            required
            onChange={(event) => {
              setHasChanged(true);
              setQuestion3(event.target.value);
            }}
            value={question3}
          ></textarea>

          {!hasChanged && state?.errors.question3 && (
            <p className="text-red-500 text-sm">{state?.errors.question3}</p>
          )}
        </div>

        <div className="max-w-md mx-auto mt-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Jawaban 4
          </label>
          <textarea
            rows="4"
            className="w-full text-blue-600 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Masukkan isi pertanyaan 4."
            name="question4"
            required
            onChange={(event) => {
              setHasChanged(true);
              setQuestion4(event.target.value);
            }}
            value={question4}
          ></textarea>

          {!hasChanged && state?.errors.question4 && (
            <p className="text-red-500 text-sm">{state?.errors.question4}</p>
          )}
        </div>

        <div className="max-w-md mx-auto mt-8">
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Pilih Jawaban Benar
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
            name="choose"
            // onChange={() => setHasChanged(true)}
            onChange={(event) => {
              setHasChanged(true);
              setChoose(event.target.value);
            }}
            value={choose}
          >
            <option disabled hidden value="">
              Pilih Jawaban Benar
            </option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select>
          {!hasChanged && state.errors.choose && (
            <p className="text-red-500 text-sm">{state.errors.choose}</p>
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
        <div className="my-10"></div>
      </form>
    </div>
  );
}
