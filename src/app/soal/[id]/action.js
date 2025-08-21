// import logger from "@/lib/logger";
"use server";
import prisma from "@/lib/prisma";

export async function handleCreated(prevState, formData) {
  const id = formData.get("id")?.toString() || "";
  const score = formData.get("score")?.toString() || "";
  const userId = formData.get("userId")?.toString() || "";

  try {
    if (!id)
      return { success: false, message: "ID tidak ditemukan", finish: true };
    const item = await prisma.collection.findUnique({ where: { id } });
    if (!item)
      return { success: false, message: "Item tidak ditemukan", finish: true };
    const progress = await prisma.userCollectionProgress.upsert({
      where: {
        userId_collectionId: {
          userId,
          collectionId: id,
        },
      },
      update: {
        score:parseFloat(score),
      },
      create: {
        userId,
        collectionId: id,
        score:parseFloat(score),
      },
    });
    if (progress) {
      return {
        success: true,
        message: "Latihan berhasil diselesaikan.",
        finish: true,
        values: {
          id: id,
          score
        },
      };
    }
    // if (score) {
    //   const updatedItem = await prisma.collection.update({
    //     where: { contentId: id, userId },
    //     data: {
    //       score: parseFloat(score),
    //     },
    //   });
    //   return {
    //     success: true,
    //     message: "Latihan berhasil diselesaikan.",
    //     finish: true,
    //     values: {
    //       id: updatedItem.id,
    //       score: updatedItem.score,
    //     },
    //   };
    // } else {
    //   const userContent = await prisma.userContentProgress.create({
    //     data: {
    //       contentId: id,
    //       userId,
    //       openedAt: new Date(),
    //     },
    //   });
    //   return {
    //     success: true,
    //     message: "Item berhasil dibuat",
    //     finish: false,
    //     userContent,
    //     values: {
    //       id: userContent.id,
    //       score: userContent.score,
    //     },
    //   };
    // }
  } catch (error) {
    console.error("Error fetching item:", error);
    return {
      success: false,
      message: "Terjadi kesalahan saat mengambil data",
      finish: true,
      values: {
        id: id,
        score: score ? parseFloat(score) : null,
      },
    };
  }
}
