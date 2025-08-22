import Link from "next/link";
import AvatarDefault from "./icons/avatar-default";
import Colors from "@/lib/colors";
import { useClicked } from "@/lib/clicked_context";

export function Header() {
  const { play } = useClicked();
  return (
    <header
      className={`w-full p-4 ${Colors.background.default}`}
      style={{ boxShadow: "0 2px 6px 2px rgba(0,0,0,0.1)" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1
          className={`text-3xl font-bold ${Colors.text.default} ${Colors.font.default}`}
        >
          AR Keragaman
        </h1>
        <nav className="space-x-4">
          <Link onClick={play} href="/profile" className="">
            <p></p>
            <div className="w-10 h-10">
              <AvatarDefault />
            </div>
          </Link>
        </nav>
      </div>
    </header>
  );
}
