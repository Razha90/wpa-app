import logger from "@/lib/logger";
import prisma from "@/lib/prisma";

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
    server : "",
  };

  try {
    const data = await prisma.user.findUnique({
      where: { email },
      select: {
        emailVerified: true,
        fullname: true,
        phone: true,
        VerificationToken: true,
      },
    });
    if (!data) {
      errors.not_found = "Pengguna tidak ditemukan.";
      return new Response(JSON.stringify({ errors }), { status: 404 });
    }

    console.log("Data:", data);

    return new Response(
      JSON.stringify({
        date: data.VerificationToken
          ? data.VerificationToken.expiredAt
          : null,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching user:", error);
    logger.error("Error fetching user:", error);
    errors.server = "Terjadi kesalahan pada server.";
    return new Response(
      JSON.stringify({ errors }),
      { status: 500 }
    );
  }
}
