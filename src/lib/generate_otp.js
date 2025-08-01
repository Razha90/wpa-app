import logger from "./logger";
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
    logger.error("Error generating OTP:", error);
    throw new Error("Failed to generate OTP. Please try again later.");
  }
  logger.info(`Generated OTP: ${token}`);

  return token;
}
