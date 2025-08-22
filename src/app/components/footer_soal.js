import { useClicked } from "@/lib/clicked_context";
import Arrow from "./icons/arrow";

export default function FooterSoal({ current, before, after, clicked, handleFinish }) {
  const { play } = useClicked();
  return (
    <footer
      style={{ boxShadow: "0 2px 6px 2px rgba(0,0,0,0.1)" }}
      className="w-full fixed bottom-0 bg-white"
    >
      {
        <div className="container mx-auto flex flex-row px-2 items-center justify-between py-3">
          {before ? (
            <div
              className="flex flex-row items-center"
              onClick={() => {
                play();
                clicked(before);
              }}
            >
              <div className="w-6 h-6 text-gray-500 rotate-180">
                <Arrow />
              </div>
              <p className="text-gray-500">Sebelumnya</p>
            </div>
          ) : (
            <div></div>
          )}
          {after ? (
            <div
              className="flex flex-row items-center"
              onClick={() => {
                play();
                clicked(after);
              }}
            >
              <p className="text-gray-500">Lanjut</p>
              <div className="w-6 h-6 text-gray-500">
                <Arrow />
              </div>
            </div>
          ) : (
            <div></div>
          )}
          {!after && (
            <div onClick={() => {
              play();
              handleFinish()
            }} className="flex flex-row items-center">
              <p className="text-green-500">Selesaikan</p>
              <div className="w-6 h-6 text-green-500">
                <Arrow />
              </div>
            </div>
          )}
        </div>
      }
    </footer>
  );
}
