import Info from "./icons/info";
import Close2 from "./icons/close2";
import { useCallback, useEffect } from "react";
import Link from "next/link";

export default function AlertDanger({
  message = "Something went wrong. Please try again.",
  closed,
}) {
  // const handleClosed = () => {
  //   closed?.();
  // };
  const handleClosed = useCallback(() => {
    closed?.();
  }, [closed]);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClosed();
    }, 5000);

    return () => clearTimeout(timer);
  }, [handleClosed]);
  return (
    <>
      <div
        id="alert-border-2"
        className="flex items-center p-4 mb-4 text-red-800 border-t-4 border-red-300 bg-red-50 fixed bottom-2 left-2 max-w-[320px] animate-fade-right z-20"
        role="alert"
      >
        <div className="shrink-0 w-4 h-4">
          <Info />
        </div>
        <div className="ms-3 text-sm font-medium">{message}, <Link className="transition-all hover:text-blue-600 cursor-pointer text-red-600 font-bold" href={`/contact`}>Coba Hubungi admin.</Link></div>
        <button
          type="button"
          className="ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8"
          onClick={handleClosed}
        >
          <span className="sr-only">Dismiss</span>
          <div className="w-3 h-3">
            <Close2 />
          </div>
        </button>
      </div>
    </>
  );
}
