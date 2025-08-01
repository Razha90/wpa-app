import prisma from "./prisma";

export default async function GenerateOtp() {
  let token;
  let exists = true;

  try {
    while (exists) {
      token = Math.floor(100000 + Math.random() * 900000);
      const existing = await prisma.verificationToken.findUnique({
        where: { token },
      });
      exists = !!existing;
    }
  } catch (error) {
    console.log("Error generating OTP:", error);
    throw new Error("Failed to generate OTP. Please try again later.");
  }
  return token;
}
