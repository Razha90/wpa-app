import Colors from "@/lib/colors";
import Close from "../components/icons/close";
import { useClicked } from "@/lib/clicked_context";

export default function Logout({ clickedYes, clickedNo }) {
  const { play } = useClicked();
  const handleClickYes = () => {
    play();
    clickedYes?.();
  };

  const handleClickNo = () => {
  play();
    clickedNo?.();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-center"
    >
      <div className={`p-4 rounded-3xl ${Colors.background.default} relative`}>
        <div onClick={handleClickNo} className={`${Colors.text.danger} w-8 h-8 absolute right-4 p-1 rounded-xl ${Colors.background.red} ${Colors.hover.borderRed} ${Colors.border.white} ${Colors.active.opacity} border-2 cursor-pointer transition-all`}>
          <Close />
        </div>
        <div className="h-10"></div>
        <p className={`my-4 text-center ${Colors.text.default} font-bold`}>
          Apakah kamu yakin keluar dari akunmu?
        </p>
        <div className="h-3"></div>

        <div className="flex justify-center gap-4">
          <button
            className={`px-4 py-2 rounded-xl ${Colors.background.gray} ${Colors.text.gray} border-2 ${Colors.border.white} ${Colors.hover.borderGray} transition-all cursor-pointer ${Colors.hover.bgWhite} ${Colors.active.gray}`}
            onClick={handleClickNo}
          >
            Tidak
          </button>
          <button
            className={`px-4 py-2 rounded-xl ${Colors.background.red1} ${Colors.text.danger} border-2 ${Colors.border.white} ${Colors.hover.borderRed} transition-all cursor-pointer ${Colors.hover.bgWhite} ${Colors.active.red}`}
            onClick={handleClickYes}
          >
            Ya
          </button>
        </div>
      </div>
    </div>
  );
}
