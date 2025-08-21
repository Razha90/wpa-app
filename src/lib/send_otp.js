import nodemailer from "nodemailer";
import logger from "./logger";

export default async function SendOtp({ email, name = "Pengguna", otp }) {
  try {
    // const transporter = nodemailer.createTransport({
    //   service: "Gmail",
    //   auth: {
    //     user: process.env.GMAIL,
    //     pass: process.env.GMAIL_PASS,
    //   },
    // });

    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: parseInt(process.env.MAIL_PORT || '465', 10),
      secure: process.env.MAIL_SECURE === 'true', // true untuk port 465 (SSL)
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.MAIL_USER,
      to: email,
      subject: `Kode OTP untuk ${name}`,
      html: `<p>Berikut adalah kode OTP Anda: <strong>${otp}</strong></p>`,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log("Error sending OTP email:", error);
    logger.error("Error sending OTP email:", error);
  }
}
