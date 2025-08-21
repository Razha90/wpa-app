import prisma from "@/lib/prisma";
import Client from "./client";
import logger from "@/lib/logger";
import { auth } from "@/auth";

export default async function Page({ params }) {
  const { id } = await params;
  const session = await auth();
  const userId = session?.user?.userId;
  let data;
  try {
    data = await prisma.collection.findFirst({
      where: { id, type: "SOAL" },
      include: {
        contents: {
          orderBy: { sort: "asc" },
          select: {
            sort: true,
            title: true,
            choiceB: true,
            choiceC: true,
            choiceD: true,
            choiceA: true,
            answer: true,
            id: true,
            UserContentProgress: {
              where: { userId },
              select: {
                id: true,
                openedAt: true,
              },
            },
          },
        },
      },
    });
  } catch (error) {
    logger.error("Error fetching collection data:", error);
    throw new Error("Failed to fetch collection data");
  }
  if (!data) {
    logger.warn(`Collection with ID ${id} not found.`);
    throw new Error(`Collection with ID ${id} not found.`);
  }

  return (
    <>
      <Client data={data} userId={userId} />
    </>
  );
}
