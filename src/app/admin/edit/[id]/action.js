"use server";

import logger from "@/lib/logger";
import prisma from "@/lib/prisma";

export async function updateKoleksi(prevState, formData) {
  const id = formData.get("id")?.toString() || "";
  const title = formData.get("title")?.toString() || "";
  const description = formData.get("description")?.toString() || "";

  if (!title || title.length <= 3) {
    return {
      success: false,
      errors: {
        title: "Harap masukkan Judul Materi lebih dari 3 karakter.",
        description: "",
        server: "",
      },
      values: { title, description },
    };
  }

  if (!description || description.length <= 5) {
    return {
      success: false,
      errors: {
        description: "Harap masukkan Deskripsi Materi lebih dari 5 karakter.",
        title: "",
        server: "",
      },
      values: { title, description },
    };
  }

  try {
    // const lastSort = await prisma.collection.findFirst({
    //   orderBy: {
    //     sort: "desc",
    //   },
    //   select: {
    //     sort: true,
    //   },
    // });

    // const nextSort = (lastSort?.sort ?? 0) + 1;
    // console.log("Next Sort Value:", type);
    // const progress = await prisma.collection.create({
    //   data: {
    //     name: title,
    //     type,
    //     description,
    //     sort: nextSort,
    //   },
    // });
    let updateKoleksi;
    try {
      updateKoleksi = await prisma.collection.update({
        where: {
          id,
        },
        data: {
          name: title,
          description,
        },
      });
    } catch (error) {
      logger.error("Error saat mengupdate koleksi:", error);
      console.log("Error saat mengupdate koleksi:", error);
      return {
        success: false,
        errors: {
          server: "Gagal mengupdate data ke database.",
          title: "",
          description: "",
        },
        values: { title, description },
      };
    }
    // if (!progress) {
    //   return {
    //     success: false,
    //     errors: {
    //       server: "Gagal menyimpan data ke database.",
    //       type: "",
    //       description: "",
    //       title: "",
    //     },
    //     values: { title, type, description },
    //   };
    // }
    return {
      success: true,
      errors: {
        server: "",
        description: "",
        title: "",
      },
      values: {
        title: updateKoleksi.name,
        description: updateKoleksi.description,
      },
    };
  } catch (error) {
    logger.error("Error saat menyimpan koleksi:", error);
    console.log("Error saat menyimpan koleksi:", error);
    return {
      success: false,
      errors: {
        server: "Server Error",
        description: "",
        title: "",
      },
      values: { title, description },
    };
  }
}
