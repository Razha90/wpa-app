import nodemailer from "nodemailer";

export default async function SendOtp({
  email,
  name = "Pengguna",
  otp,
}) {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.GMAIL,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL,
    to: email,
    subject: `Kode OTP untuk ${name}`,
    html: `<p>Berikut adalah kode OTP Anda: <strong>${otp}</strong></p>`,
  };

  await transporter.sendMail(mailOptions);
}
