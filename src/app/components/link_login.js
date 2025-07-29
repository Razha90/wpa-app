import Colors from "@/lib/colors";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LinkLogin() {
  const pathname = usePathname();
  return (
    <div
      className={`mt-10 flex flex-row items-center justify-center gap-x-7 font-bold ${Colors.font.default} text-2xl animate-fade-down animate-delay-200`}
    >
      <Link
        href={`/login`}
        className={`transition-colors ${Colors.text.blueDark} ${
          pathname === "/login"
            ? `${Colors.text.blueDark} underline decoration-4 underline-offset-8`
            : `${Colors.text.grayLight} ${Colors.hover.textBlue} ${Colors.active.textBlue}`
        }`}
      >
        Masuk
      </Link>
      <Link
        href={`/register`}
        className={`transition-colors ${Colors.text.blueDark} ${
          pathname === "/register"
            ? `${Colors.text.blueDark} underline decoration-4 underline-offset-8`
            : `${Colors.text.grayLight} ${Colors.hover.textBlue} ${Colors.active.textBlue}`
        }`}
      >
        Daftar
      </Link>
    </div>
  );
}
