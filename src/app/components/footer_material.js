import Link from "next/link";
import Arrow from "./icons/arrow";

export default function FooterMaterial({ current, before, after, id }) {
  return (
    <footer
      style={{ boxShadow: "0 2px 6px 2px rgba(0,0,0,0.1)" }}
      className="w-full fixed bottom-0 bg-white"
    >
      {
        <div className="container mx-auto flex flex-row px-2 items-center justify-between py-3">
          {before ? (
            <Link
              href={`/material/${id}/${before}`}
              className="flex flex-row items-center"
            >
              <div className="w-6 h-6 text-gray-500 rotate-180">
                <Arrow />
              </div>
              <p className="text-gray-500">Sebelumnya</p>
            </Link>
          ) : (
            <div></div>
          )}
          {after ? (
            <Link
              href={`/material/${id}/${after}`}
              className="flex flex-row items-center"
            >
              <p className="text-gray-500">Lanjut</p>
              <div className="w-6 h-6 text-gray-500">
                <Arrow />
              </div>
            </Link>
          ) : (
            <div></div>
          )}
          {current && !after && before && (
            <Link
              href={`/finish/material/${id}`}
              className="flex flex-row items-center"
            >
              <p className="text-green-500">Selesaikan</p>
              <div className="w-6 h-6 text-green-500">
                <Arrow />
              </div>
            </Link>
          )}
  
        </div>
      }
    </footer>
  );
}
