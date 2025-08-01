import Loader from "./icons/loader";
import Colors from "@/lib/colors";

export default function Loading({message='Menunggu...'}) {

  return (
    <div className="flex items-center justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">

      <div role="status" className="flex flex-col gap-y-6 items-center">
        <p className={`${Colors.text.blueDark} animate-fade-down text-2xl font-bold`}>{message}</p>
        <Loader />
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
