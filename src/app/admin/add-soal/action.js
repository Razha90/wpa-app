"use server";
import logger from "@/lib/logger";
import prisma from "@/lib/prisma";

export async function simpanKoleksi(prevState, formData) {
  const title = formData.get("title")?.toString() || "";
  const type = formData.get("type")?.toString() || "";
  const description = formData.get("description")?.toString() || "";

  if (!title || title.length <= 3) {
    return {
      success: false,
      errors: {
        title: "Harap masukkan Judul Materi lebih dari 3 karakter.",
        type: "",
        description: "",
        server: "",
      },
      values: { title, type, description },
    };
  }

  if (!type) {
    return {
      success: false,
      errors: {
        type: "Harap Masukkan Type",
        title: "",
        description: "",
        server: "",
      },
      values: { title, type, description },
    };
  }

  if (!description || description.length <= 5) {
    return {
      success: false,
      errors: {
        description: "Harap masukkan Deskripsi Materi lebih dari 5 karakter.",
        type: "",
        title: "",
        server: "",
      },
      values: { title, type, description },
    };
  }

  try {
    const lastSort = await prisma.collection.findFirst({
      orderBy: {
        sort: 'desc',
      },
      select: {
        sort: true,
      },
    });
    
    const nextSort = (lastSort?.sort ?? 0) + 1;
    console.log("Next Sort Value:", type);
    const progress = await prisma.collection.create({
      data: {
        name: title,
        type,
        description,
        sort: nextSort,
      },
    });
    
    if (!progress) {
      return {
        success: false,
        errors: {
          server: "Gagal menyimpan data ke database.",
          type: "",
          description: "",
          title: "",
        },
        values: { title, type, description },
      };
    }
    return {
      success: true,
      errors: {
        server: "",
        type: "",
        description: "",
        title: "",
      },
      values: { title:"", type:"", description:"" },
    };
  } catch (error) {
    logger.error("Error saat menyimpan koleksi:", error);
    console.log("Error saat menyimpan koleksi:", error);
    return {
      success: false,
      errors: {
        server: "Server Error",
        type: "",
        description: "",
        title: "",
      },
      values: { title, type, description },
    };
  }
}
