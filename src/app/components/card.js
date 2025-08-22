import Colors from "@/lib/colors";
import Exclamation from "./icons/exclamation";
import Link from "next/link";
import { useClicked } from "@/lib/clicked_context";

export default function Card({
  title = "Judul Card",
  type = "UNDEFINED",
  id = "0",
  progress = 0,
  vr = '',
}) {
  const { play } = useClicked();
  return (
    <div
      className={`p-3 rounded-xl ${
        progress == 0
          ? "bg-blue-200"
          : progress == 100
          ? "bg-green-200"
          : "bg-yellow-200"
      } gap-x-3 w-full flex flex-row items-start`}
    >
      <div
        className={`${Colors.background.default} p-2 rounded-xl flex items-center justify-center`}
      >
        {progress == 0 ? (
          <div className={`w-10 h-10 ${Colors.text.blue} inline-block`}>
            <Exclamation />
          </div>
        ) : (
          <div className="w-10 h-10 flex items-center justify-center">
            <div
              className={`text-3xl font-bold text text-center ${
                progress == 0
                  ? "text-blue-500"
                  : progress == 100
                  ? "text-green-500"
                  : "text-yellow-500"
              }`}
            >
              {progress}
            </div>
          </div>
        )}
      </div>
      <div className="w-full">
        <div
          dangerouslySetInnerHTML={{ __html: title }}
          className={`${Colors.text.blue} line-clamp-2 ${
            progress == 0
              ? "text-blue-500"
              : progress == 100
              ? "text-green-500"
              : "text-yellow-500"
          } font-bold`}
        ></div>
        <div className="flex flex-row justify-between items-start">
          {/* <p
            className={`inline-block py-1 px-2 text-sm ${Colors.background.blueDark} ${Colors.text.white} rounded-lg`}
          >
            {type}
          </p> */}
          <Link
            onClick={play}
            href={type == "MATERI" ? `/material/${id}` : `/soal/${id}`}
            className={`${Colors.background.blueDark} rounded-md text-base py-1 px-4 active:bg-white active:text-blue-500 transition-all hover:bg-white border-2 border-blue-500 active:border-blue-500  hover:text-blue-500 hover:border-blue-500 font-bold`}
          >
            {type}
          </Link>
          {vr ? (
            <Link
            onClick={play}
              href={`/material/${id}/${vr+1}#vr`}
              className={`${Colors.background.green} rounded-md text-base py-1 px-4 active:bg-white active:text-green-500 transition-all hover:bg-white border-2 border-green-500 active:border-green-500  hover:text-green-500 hover:border-green-500 font-bold`}
            >
              AR
            </Link>
          ) : ("")}
        </div>
      </div>
    </div>
  );
}
