"use client";

import { useRouter } from "next/navigation";
import Arrow from "../components/icons/arrow";

export default function Home() {
  const route = useRouter();
  const handleBack = () => {
    route.back();
  };
  return (
    <div>
      <div className="flex mt-5 ml-5" onClick={handleBack}>
        <div className="bg-blue-500 rounded-xl flex flex-row items-center gap-x-1 py-1 pl-2 pr-4 hover:bg-white transition-all active:bg-white cursor-pointer border-2 border-blue-500 group">
          <div className="w-6 h-6 rotate-180 group-active:text-blue-500 group-hover:text-blue-500">
            <Arrow />
          </div>
          <p className="mt-1 group-active:text-blue-500 group-hover:text-blue-500">
            Kembali
          </p>
        </div>
      </div>
      <h1 className="text-gray-800 text-xl font-bold text-center mt-5">
        Persetujuan dan Persyaratan Pengguna
      </h1>
      <p className="text-gray-600 px-2 mt-3">
        Dengan menggunakan layanan ini, Anda menyatakan telah membaca, memahami,
        dan menyetujui persyaratan yang berlaku. Mohon membaca seluruh poin di
        bawah ini dengan seksama.
      </p>

      <h2 className="text-gray-600 px-2 mt-4 font-bold">1. Ketentuan Umum.</h2>
      <p className="text-gray-600 px-2 mt-1">
        Layanan ini disediakan untuk kepentingan pengguna sesuai dengan hukum
        yang berlaku di wilayah Republik Indonesia. Segala bentuk pelanggaran
        akan dikenakan sanksi sesuai peraturan yang berlaku.
      </p>

      <h2 className="text-gray-600 px-2 mt-3 font-bold">
        2. Kewajiban Pengguna
      </h2>

      <div className="px-5">
        <div className="flex flex-row items-start gap-x-2 animate-fade-down animate-delay-200">
          <div className="bg-gray-600 p-1 rounded-full mt-[5px]"></div>
          <p className="text-gray-600 text-base text-left">
            Memberikan informasi yang benar dan akurat saat melakukan
            pendaftaran.
          </p>
        </div>
        <div className="flex flex-row items-start gap-x-2 animate-fade-down animate-delay-400">
          <div className="bg-gray-600 p-1 rounded-full mt-[5px]"></div>
          <p className="text-gray-600 text-base text-left">
            Menggunakan layanan hanya untuk tujuan yang sah dan sesuai hukum.
          </p>
        </div>
        <div className="flex flex-row items-start gap-x-2 animate-fade-down animate-delay-600">
          <div className="bg-gray-600 p-1 rounded-full mt-[5px]"></div>
          <p className="text-gray-600 text-base text-left">
            Tidak melakukan tindakan yang dapat merugikan pihak lain atau
            merusak sistem.
          </p>
        </div>
      </div>

      <h2 className="text-gray-600 px-2 mt-3 font-bold">
        3. Hak dan Kewajiban Penyedia Layanan
      </h2>
      <div className="px-5">
        <div className="flex flex-row items-start gap-x-2 animate-fade-down animate-delay-800">
          <div className="bg-gray-600 p-1 rounded-full mt-[5px]"></div>
          <p className="text-gray-600 text-base text-left">
            Berhak menolak atau menghentikan layanan jika pengguna melanggar
            ketentuan.
          </p>
        </div>
        <div className="flex flex-row items-start gap-x-2 animate-fade-down animate-delay-1000">
          <div className="bg-gray-600 p-1 rounded-full mt-[5px]"></div>
          <p className="text-gray-600 text-base text-left">
            Berkewajiban menjaga keamanan dan kerahasiaan data pengguna sesuai
            kebijakan privasi.
          </p>
        </div>
      </div>

      <h2 className="text-gray-600 px-2 mt-3 font-bold">4. Perubahan Ketentuan</h2>
      <p className="text-gray-600 px-2 mt-3">
        Penyedia layanan berhak mengubah ketentuan ini sewaktu-waktu. Perubahan
        akan diberitahukan melalui media resmi dan berlaku sejak tanggal yang
        ditentukan.
      </p>

      <h2 className="text-gray-600 px-2 mt-3 font-bold">5. Persetujuan</h2>
      <p className="text-gray-600 px-2 mt-3">
        Dengan melanjutkan penggunaan layanan ini, pengguna dianggap telah
        menyetujui seluruh persyaratan yang tercantum.
      </p>
      <div className="h-20"></div>
    </div>
  );
}
