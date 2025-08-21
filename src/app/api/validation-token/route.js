import logger from "@/lib/logger";
import prisma from "@/lib/prisma";

export async function POST(request) {
  const body = await request.json();
  const { token, email } = body;

  let errors = {
    not_found: "",
    server: "",
    expired: "",
    wrong:"",
  };

  try {
    if (!token || !/^\d{6}$/.test(token)) {
      errors.not_found = "Token tidak valid. Harus berupa 6 digit angka.";
      return new Response(JSON.stringify({ errors }), { status: 400 });
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.not_found = "Email tidak valid.";
      return new Response(JSON.stringify({ errors }), { status: 400 });
    }

    // Cari user berdasarkan email
    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        VerificationToken: {
          select: { token: true, expiredAt: true },
        },
      },
    });

    // Pastikan user ditemukan
    if (!user || !user.VerificationToken) {
      errors.not_found = "Pengguna atau token verifikasi tidak ditemukan.";
      return new Response(JSON.stringify({ errors }), { status: 404 });
    }

    // Periksa apakah token cocok dan belum kedaluwarsa
    const verificationToken = user.VerificationToken;
    const now = new Date();

    if (verificationToken.expiredAt < now) {
      errors.not_found =
        "Token tidak valid atau sudah kedaluwarsa, cobalah buat token ulang.";
      return new Response(JSON.stringify({ errors }), { status: 400 });
    }

    if (verificationToken.token != token) {
      errors.wrong = "Token tidak valid. Silakan coba lagi.";
      return new Response(JSON.stringify({ errors }), { status: 400 });
    }

    // Token valid, lakukan sesuatu (misalnya, verifikasi akun)
    // Di sini Anda bisa menambahkan logika untuk memperbarui status pengguna
    // Misalnya, memperbarui status pengguna menjadi terverifikasi
    await prisma.user.update({
      where: { email },
      data: { emailVerified: new Date() }, // Atur tanggal verifikasi
    });
    // ...
    // Jika verifikasi berhasil, Anda bisa menghapus token atau memperbarui status pengguna
    await prisma.verificationToken.delete({
      where: { token: verificationToken.token },
    });

    return new Response(JSON.stringify({ message: "Token valid." }), {
      status: 200,
    });
  } catch (error) {
    logger.error("Error Validation Token:", error);
    console.error("Error Validation Token:", error);
    errors.server = "Terjadi kesalahan pada server. Silakan coba lagi nanti.";
    return new Response(JSON.stringify({ errors }), { status: 500 });
  }
}
