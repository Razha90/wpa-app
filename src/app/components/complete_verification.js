import Colors from "@/lib/colors";
import Succed from "./icons/succed";

export default function CompleteVerification({ message = "Berhasil" }) {
  return (
    <div className="flex items-center justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
      <div role="status" className="flex flex-col gap-y-6 items-center">
        <div className={`w-32 h-32 ${Colors.text.green} animate-fade`}>
          <Succed />
        </div>
        <p
          className={`${Colors.text.green} text-2xl font-bold animate-fade animate-delay-200`}
        >
          {message}
        </p>
      </div>
    </div>
  );
}
