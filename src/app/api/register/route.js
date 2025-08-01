import GenerateOtp from "@/lib/generate_otp";
import makeExpired from "@/lib/make_expired";
import prisma from "@/lib/prisma";
import SendOtp from "@/lib/send_otp";
import bcrypt from "bcryptjs";

export async function POST(request) {
  const body = await request.json();
  const { fullname, email, phone, password, passwordConfirm, termsAccepted } =
    body;

  let errors = {
    fullname: "",
    email: "",
    phone: "",
    password: "",
    termsAccepted: "",
    server: "",
  };

  if (!fullname || fullname.length < 5) {
    errors.fullname = "Nama Penuh harus lebih panjang dari 5 karakter.";
  }

  if (fullname.trim() !== fullname) {
    errors.fullname =
      "Nama Penuh tidak boleh mengandung spasi di awal atau akhir.";
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Email tidak valid.";
  }

  if (!phone || !/^\d{8,15}$/.test(phone)) {
    errors.phone =
      "Nombor telefon tidak valid. Harus terdiri dari 8 hingga 15 digit.";
  }

  if (!password || password.length < 8) {
    errors.password = "Kata laluan harus lebih panjang dari 8 karakter.";
  }

  if (password !== passwordConfirm) {
    errors.password = "Password tidak sama.";
  }

  if (!termsAccepted) {
    errors.termsAccepted = "Anda harus menerima syarat dan ketentuan.";
  }

  if (termsAccepted !== "on") {
    errors.termsAccepted = "Anda harus menerima syarat dan ketentuan.";
  }

  if (!errors.email) {
    try {
      const existingUser = await prisma.user.findUnique({
        where: { email },
      });

      if (existingUser) {
        errors.email = "Email sudah digunakan oleh pengguna lain.";
      }
    } catch (error) {
      error.server = "Server Bermasalah, coba ulangi atau hubungi admin.";
    }
  }

  if (errors.phone && errors.phone !== "") {
    try {
      const existingUser = await prisma.user.findUnique({
        where: { phone },
      });

      if (existingUser) {
        errors.phone = "Nombor telefon sudah digunakan oleh pengguna lain.";
      }
    } catch (error) {
      error.server = "Server Bermasalah, coba ulangi atau hubungi admin.";
    }
  }

  const hasErrors = Object.values(errors).some((error) => error !== "");
  if (hasErrors) {
    return new Response(JSON.stringify({ errors }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    // const expiredAt = new Date(Date.now() + 15 * 60 * 1000);
    const expiredAt = makeExpired();

    const user = await prisma.user.create({
      data: {
        fullname,
        email,
        phone,
        password: hashedPassword,
      },
    });

    const token = await GenerateOtp(prisma);

    await prisma.verificationToken.create({
      data: {
        token,
        userId: user.id,
        expiredAt,
      },
    });

    await SendOtp({ email, name: user.fullname, otp: token });
  } catch (err) {
    console.log("Error creating user:", err);
    errors.server = "Terjadi kesalahan saat membuat pengguna.";
    return new Response(JSON.stringify({ errors }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ email, password }), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
