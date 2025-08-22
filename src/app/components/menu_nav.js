import Link from "next/link";
import Close from "./icons/close";
import Arrow from "./icons/arrow";
import Thumb from "./icons/thumb";
import { useClicked } from "@/lib/clicked_context";

export default function MenuNav({ closedMenu, list, id, current }) {
  const {play} = useClicked();
  const handleClose = () => {
    play();
    closedMenu?.();
  };
  // console.log("MenuNav Rendered", { list, id, current });
  return (
    <nav className="fixed top-0 left-0 h-full w-full z-50 bg-black/20 animate-duration-100 animate-ease-in animate-fade-right">
      <div className="p-4 w-64 bg-white h-full animate-fade-right animate-delay-200">
        <div className="flex flex-row items-center justify-between">
          <h2 className="text-xl font-bold text-blue-500 !mb-0">Menu Materi</h2>
          <div
            className="w-10 h-10 text-blue-500 cursor-pointer rounded-xl p-2 hover:bg-gray-100 active:bg-gray-100"
            onClick={handleClose}
          >
            <Close />
          </div>
        </div>
        <ul className="space-y-2 mt-5">
          {list?.map((item, index) => (
            <li key={`${item.id}-${index}`} className="text-sm font-semibold">
              <Link
                className={`text-base flex flex-row items-center justify-between rounded-xl p-2 hover:bg-gray-100 active:bg-gray-100  ${
                  item.UserContentProgress?.length == 0
                    ? item.id == current?.id
                      ? "text-blue-500"
                      : "text-gray-400"
                    : item.UserContentProgress[0]?.id ==
                      current?.UserContentProgress?.[0]?.id
                    ? "text-blue-500"
                    : "text-yellow-400"
                }`}
                href={`/material/${id}/${item.sort}`}
                onClick={handleClose}
              >
                <p className="line-clamp-1">{item.title}</p>
                <div className="w-5 h-5">
                  <Arrow />
                </div>
              </Link>
            </li>
          ))}
          <li key={current.id} className="text-sm font-semibold">
            <Link
              className={`text-base flex flex-row items-center justify-between rounded-xl p-2 hover:bg-gray-100 active:bg-gray-100 ${
                current?.id === "finish" ? "text-blue-500" : "text-gray-400"
              }`}
              href={`/finish/material/${id}`}
              onClick={handleClose}
            >
              <p className="line-clamp-1">Selesai</p>
              <div className="w-5 h-5">
                <Thumb />
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
