"use client";
import HeaderMaterial from "@/app/components/header_material";
import InfoAction from "@/app/components/icons/info_action";
import MenuLocal from "@/app/components/menu_local";
import { useRouter, useSearchParams } from "next/navigation";
import { useActionState, useEffect, useRef, useState } from "react";
import { handleCreated } from "./action";
import FooterSoal from "@/app/components/footer_soal";
import { BlackScreen } from "@/app/components/black_screen";
import Refresh from "@/app/components/refresh";
import Image from "next/image";
import Arrow from "@/app/components/icons/arrow";

export default function Client({ data, userId }) {
  const route = useRouter;
  const [myData, setMyData] = useState(data || []);
  const [soal, setSoal] = useState({});
  const [answer, setAnswer] = useState([]);
  const [score, setScore] = useState("");
  const formRef = useRef();
  const [formState, setFormState] = useActionState(handleCreated, {
    success: false,
    message: "",
    finish: false,
    values: {
      id: "",
      score: "",
    },
  });

  const searchParams = useSearchParams();
  const router = useRouter();

  const page = searchParams.get("page");

  useEffect(() => {
    if (!page || page == 0) {
      router.replace(`?page=0`);
      return;
    }

    if (data?.contents && data.contents.length >= page) {
      setSoal(data.contents[page - 1]);
    }
  }, [page, myData, router]);

  useEffect(() => {
    if (data?.contents) {
      const initialAnswers = data.contents.map((item, index) => ({
        id: item.id,
        page: index + 1,
        choose: null,
        answer: item.answer,
        title: item.title,
      }));
      setAnswer(initialAnswers);
      console.log("Initial answers set:", initialAnswers);
    }
  }, []);

  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  const closeMenu = () => {
    setMenu(false);
  };

  const handleSaveAnswer = async (page, jawaban) => {
    const soalId = data.contents[page - 1]?.id;
    if (!soalId) return;

    setAnswer((prev) => {
      const existingIndex = prev.findIndex((item) => item.id == soalId);

      if (existingIndex !== -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          page,
          id: soalId,
          choose: jawaban,
          answer: soal.answer,
          title: soal.title,
        };
        return updated;
      } else {
        return [
          ...prev,
          {
            id: soalId,
            choose: jawaban,
            answer: soal.answer,
            page,
            title: soal.title,
          },
        ];
      }
    });
  };

  const handleChangePage = (newPage) => {
    router.replace(`?page=${newPage}`);
  };

  const selectedAnswer = answer.find((a) => a.page == page)?.choose || "";

  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return; // lewati eksekusi pertama kali
    }

    if (score !== null && formRef.current) {
      formRef.current.requestSubmit();
    }
  }, [score]);

  const handleFinish = async () => {
    const benar = answer.filter((a) => a.choose == a.answer).length;
    const total = myData.contents.length;
    const myscore = Math.round((benar / total) * 100);
    setScore(myscore);
  };

  const handleBackHome = () => {
    router.push("/");
  };
  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="bg-[url('/background.png')] bg-cover bg-center w-dvw h-dvh fixed -z-10"></div>
      <form action={setFormState} ref={formRef}>
        <input type="text" hidden defaultValue={myData.id} name="id" />
        <input type="text" hidden defaultValue={score} name="score" />
        <input type="text" hidden defaultValue={userId} name="userId" />
      </form>
      {formState.success && formState.finish && (
        <>
          <BlackScreen />
          <div className="fixed z-40 bg-white p-5 rounded-xl text-center animate-fade-down">
            <Image
              src={`/smile.gif`}
              width={200}
              height={200}
              alt="Smile"
              className="mx-auto"
            />
            <p className="text-7xl font-bold text-blue-500 text-center">{score}</p>
            <p className="text-2xl font-bold text-blue-500 animate-fade-down">
              Selamat Telah Menyelesaikan Latihan
            </p>

            <div className="flex justify-center">
              <button
                onClick={handleBackHome}
                type="button"
                className="bg-blue-500 rounded-xl py-2 pl-2 pr-4 flex-row flex items-center mt-5 group hover:bg-white active:bg-white border-2 border-blue-500 transition-all cursor-pointer"
              >
                <div className="text-white w-6 h-6 rotate-180 group-hover:text-blue-500">
                  <Arrow />
                </div>
                <span className="font-bold text-white mt-1 group-hover:text-blue-500">
                  Kembali
                </span>
              </button>
            </div>
          </div>
        </>
      )}
      {!formState.success && formState.finish == true && (
        <>
          <BlackScreen /> <Refresh />
        </>
      )}
      {menu && (
        <MenuLocal
          closedMenu={closeMenu}
          list={answer}
          changePage={handleChangePage}
          page={page}
        />
      )}
      <HeaderMaterial title={myData.name} toggleMenu={toggleMenu} />
      <div className="h-20"></div>
      {page && page != 0 ? (
        <div className="px-3" key={page}>
          <div className="text-2xl font-bold text-gray-700 animate-fade-down">
            Soal Nomor {page}
          </div>
          <div
            className="text-gray-600 mt-5 text-lg animate-fade-down animate-delay-100"
            dangerouslySetInnerHTML={{ __html: soal.title }}
          ></div>

          <div className="w-full">
            <div className="flex items-center ps-4 border rounded-sm animate-fade-down animate-delay-200">
              <p className="text-gray-600 text-xl mt-1 mr-2">A</p>
              <input
                id="bordered-radio-1"
                type="radio"
                value="A"
                checked={selectedAnswer == "A"}
                onChange={(e) => {
                  handleSaveAnswer(page, e.target.value);
                }}
                name="bordered-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
              />
              <label
                htmlFor="bordered-radio-1"
                className="w-full py-4 ms-2 text-sm font-medium text-gray-900 break-all"
                dangerouslySetInnerHTML={{
                  __html: soal.choiceA,
                }}
              ></label>
            </div>

            <div className="flex items-center ps-4 border rounded-sm animate-fade-down animate-delay-300">
              <p className="text-gray-600 text-xl mt-1 mr-2">B</p>
              <input
                id="bordered-radio-2"
                type="radio"
                value="B"
                checked={selectedAnswer == "B"}
                onChange={(e) => {
                  handleSaveAnswer(page, e.target.value);
                }}
                name="bordered-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
              />
              <label
                htmlFor="bordered-radio-2"
                className="w-full py-4 ms-2 text-sm font-medium text-gray-900 break-all"
                dangerouslySetInnerHTML={{
                  __html: soal.choiceB,
                }}
              ></label>
            </div>

            <div className="flex items-center ps-4 border rounded-sm animate-fade-down animate-delay-400">
              <p className="text-gray-600 text-xl mt-1 mr-2">C</p>
              <input
                id="bordered-radio-3"
                type="radio"
                value="C"
                checked={selectedAnswer == "C"}
                onChange={(e) => {
                  handleSaveAnswer(page, e.target.value);
                }}
                name="bordered-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
              />
              <label
                htmlFor="bordered-radio-3"
                className="w-full py-4 ms-2 text-sm font-medium text-gray-900 break-all"
                dangerouslySetInnerHTML={{
                  __html: soal.choiceC,
                }}
              ></label>
            </div>

            <div className="flex items-center ps-4 border rounded-sm animate-fade-down animate-delay-500">
              <p className="text-gray-600 text-xl mt-1 mr-2">D</p>
              <input
                id="bordered-radio-4"
                type="radio"
                value="D"
                checked={selectedAnswer == "D"}
                onChange={(e) => {
                  handleSaveAnswer(page, e.target.value);
                }}
                name="bordered-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
              />
              <label
                htmlFor="bordered-radio-4"
                className="w-full py-4 ms-2 text-sm font-medium text-gray-900 break-all"
                dangerouslySetInnerHTML={{
                  __html: soal.choiceD,
                }}
              ></label>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <div className="text-blue-500 w-20 h-20 mx-auto animate-fade-down">
            <InfoAction />
          </div>
          <h2 className="text-2xl font-bold mb-3 text-blue-500 mt-5 animate-fade-down animate-delay-100">
            Perhatikan Sebelum Memulai Kuis
          </h2>
          <div className="px-5">
            <div className="flex flex-row items-start gap-x-2 animate-fade-down animate-delay-200">
              <div className="bg-gray-500 p-1 rounded-full mt-[5px]"></div>
              <p className="text-gray-500 text-base text-left">
                Pastikan jaringan internet stabil untuk menghindari gangguan
                saat mengerjakan kuis.
              </p>
            </div>

            <div className="flex flex-row items-start gap-x-2 animate-fade-down animate-delay-300">
              <div className="bg-gray-500 p-1 rounded-full mt-[5px]"></div>
              <p className="text-gray-500 text-base text-left">
                Baca setiap soal dengan teliti sebelum menjawab.
              </p>
            </div>

            <div className="flex flex-row items-start gap-x-2 animate-fade-down animate-delay-400">
              <div className="bg-gray-500 p-1 rounded-full mt-[5px]"></div>
              <p className="text-gray-500 text-base text-left">
                Jangan menutup atau memuat ulang halaman selama kuis
                berlangsung.
              </p>
            </div>

            <div className="flex flex-row items-start gap-x-2 animate-fade-down animate-delay-500">
              <div className="bg-gray-500 p-1 rounded-full mt-[5px]"></div>
              <p className="text-gray-500 text-base text-left">
                Gunakan perangkat yang mendukung dengan baterai cukup.
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-row justify-center items-center gap-x-7 animate-fade-down animate-delay-700">
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all"
              onClick={() => {
                router.push("/");
              }}
            >
              Kembali
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
              onClick={() => {
                handleChangePage(1);
              }}
            >
              Mulai Kuis
            </button>
          </div>
        </div>
      )}
      <FooterSoal
        current={page}
        after={myData.contents.length == page ? null : Number(page) + 1}
        before={
          myData.contents.length == 1
            ? null
            : page == 0
            ? null
            : Number(page) - 1
        }
        clicked={handleChangePage}
        handleFinish={handleFinish}
      />
    </div>
  );
}
