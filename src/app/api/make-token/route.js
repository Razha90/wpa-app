import GenerateOtp from "@/lib/generate_otp";
import logger from "@/lib/logger";
import makeExpired from "@/lib/make_expired";
import prisma from "@/lib/prisma";
import SendOtp from "@/lib/send_otp";

export async function POST(request) {
  const body = await request.json();
  const { email } = body;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response(JSON.stringify({ error: "Email tidak valid." }), {
      status: 400,
    });
  }

  let errors = {
    not_found: "",
    server: "",
  };

  try {
    const token = await GenerateOtp(prisma);
    // const expiredAt = new Date(Date.now() + 15 * 60 * 1000); // 15 menit dari sekarang
    // const expiredAt = new Date(Date.now() + 30 * 1000); // 1 jam dari sekarang
    // Cari user dan token relasinya
    const expiredAt = makeExpired();
    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        VerificationToken: {
          select: { id: true }, // ambil id token-nya
        },
      },
    });

    // Pastikan token user ditemukan
    if (!user?.VerificationToken) {
      errors.not_found = "Token verifikasi tidak ditemukan untuk pengguna ini.";
      return new Response(JSON.stringify({ errors }), { status: 404 });
    }

    // Update token yang sudah ada
    const data = await prisma.verificationToken.update({
      where: { id: user.VerificationToken.id },
      data: {
        token,
        expiredAt,
      },
    });

    await SendOtp({ email, name: user.fullname, otp: token });

    return new Response(
      JSON.stringify({
        date: data ? data.expiredAt : null,
      }),
      { status: 200 }
    );
  } catch (error) {
    logger.error("Error Make Token:", error);
    console.error("Error Make Token:", error);
    errors.server = "Terjadi kesalahan pada server.";
    return new Response(JSON.stringify({ errors }), { status: 500 });
  }
}
