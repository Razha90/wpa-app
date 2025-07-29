export async function POST(request) {
  const body = await request.json();
  const { fullname, email, phone, password, termsAccepted } = body;

  let errors = {
    fullname: "Salah",
    email: "Salah",
    phone: "Salah",
    password: "Salah",
    termsAccepted: "Salah",
  };

  if (!fullname || fullname.length < 5) {
    errors.fullname = "Nama Penuh harus lebih panjang dari 5 karakter.";
  }

  if (fullname.trim() !== fullname) {
    errors.fullname = "Nama Penuh tidak boleh mengandung spasi di awal atau akhir.";
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Email tidak valid.";
  }

  if (!phone || !/^\d{8,15}$/.test(phone)) {
    errors.phone = "Nombor telefon tidak valid. Harus terdiri dari 8 hingga 15 digit.";
  }

  if (!password || password.length < 8) {
    errors.password = "Kata laluan harus lebih panjang dari 8 karakter.";
  }

  if (!termsAccepted) {
    errors.termsAccepted = "Anda harus menerima syarat dan ketentuan.";
  }

  if (termsAccepted !== "on") {
    errors.termsAccepted = "Anda harus menerima syarat dan ketentuan.";
  }
  const hasErrors = Object.values(errors).some((error) => error !== "");
  if (hasErrors) {
    return new Response(JSON.stringify({ errors }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
      data: JSON.stringify({ errors }),
    });
  }

  return new Response(
    JSON.stringify({ email, password }),
    {
      status: 201,
      headers: { "Content-Type": "application/json" },
    }
  );
}
