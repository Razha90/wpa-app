import { useRouter } from "next/navigation";
import ExitDoor from "./icons/exit_door";
import Menu from "./icons/menu";

export default function HeaderMaterial({
  title = "No Title",
  toggleMenu,
  page = 1,
}) {
  const router = useRouter();
  const handleMenuClick = () => {
    toggleMenu?.();
  };
  const handleExitClick = () => {
    router.push("/");
  };
  return (
    <header
      style={{ boxShadow: "0 2px 6px 2px rgba(0,0,0,0.1)" }}
      className="fixed top-0 w-full bg-white"
    >
      <div className="flex flex-row justify-between items-center p-2 container mx-auto">
        <div className="flex flex-row items-center gap-x-2 w-full">
          {page != 0 && (
            <div
              className="w-10 h-10 text-gray-500 active:bg-gray-200 transition-all rounded-lg cursor-pointer hover:bg-gray-200 p-1"
              onClick={handleMenuClick}
            >
              <Menu />
            </div>
          )}
          <div
            className="text-blue-500 w-full text-center text-xl font-bold line-clamp-1"
            dangerouslySetInnerHTML={{ __html: title }}
          ></div>
        </div>
        <div
          className="text-red-500 w-10 h-10 active:bg-red-200 transition-all rounded-lg cursor-pointer hover:bg-red-200 p-1"
          onClick={handleExitClick}
        >
          <ExitDoor />
        </div>
      </div>
    </header>
  );
}
