"use server";

import logger from "@/lib/logger";
import prisma from "@/lib/prisma";

// id: ID koleksi yang ingin dinaikkan
export async function upSort(prevState, formData) {
  const id = formData.get("id")?.toString() || "";
  const item = await prisma.collection.findUnique({ where: { id } });

  const itemAtas = await prisma.collection.findFirst({
    where: { sort: { lt: item.sort } },
    orderBy: { sort: "desc" },
  });

  if (!itemAtas) return { success: false };

  // Tukar nilai sort
  await prisma.collection.update({
    where: { id: item.id },
    data: { sort: itemAtas.sort },
  });

  await prisma.collection.update({
    where: { id: itemAtas.id },
    data: { sort: item.sort },
  });

  const collectionBaru = await prisma.collection.findMany({
    orderBy: { sort: "asc" },
    select: {
      id: true,
      name: true,
      type: true,
      contents: {
        orderBy: {
          sort: "asc",
        },
      },
      description: true,
      sort: true,
    },
  });

  return {
    success: true,
    updatedData: collectionBaru,
  };
}

export async function downSort(prevState, formData) {
  const id = formData.get("id")?.toString() || "";
  const item = await prisma.collection.findUnique({ where: { id } });

  if (!item) return { success: false };

  const itemBawah = await prisma.collection.findFirst({
    where: { sort: { gt: item.sort } },
    orderBy: { sort: "asc" },
  });

  if (!itemBawah) return { success: false };

  // Tukar nilai sort
  await prisma.collection.update({
    where: { id: item.id },
    data: { sort: itemBawah.sort },
  });

  await prisma.collection.update({
    where: { id: itemBawah.id },
    data: { sort: item.sort },
  });

  const collectionBaru = await prisma.collection.findMany({
    orderBy: { sort: "asc" },
    select: {
      id: true,
      name: true,
      type: true,
      contents: {
        orderBy: {
          sort: "asc",
        },
      },
      description: true,
      sort: true,
    },
  });

  return {
    success: true,
    updatedData: collectionBaru,
  };
}

export async function deleteCollection(prevState, formData) {
  try {
    const id = formData.get("id")?.toString() || "";

    // Hapus koleksi
    const deleted = await prisma.collection.delete({
      where: { id },
    });

    if (!deleted) {
      return {
        success: false,
        updatedData: [],
      };
    }

    // Ambil data yang tersisa dan urutkan
    const remaining = await prisma.collection.findMany({
      orderBy: { sort: "asc" },
    });

    // Perbarui urutan sort
    for (let i = 0; i < remaining.length; i++) {
      const item = remaining[i];
      // Hanya update jika nilai sort lama tidak sesuai
      if (item.sort !== i + 1) {
        await prisma.collection.update({
          where: { id: item.id },
          data: { sort: i + 1 },
        });
      }
    }

    // Ambil ulang data terbaru untuk dikirim ke UI
    const updated = await prisma.collection.findMany({
      orderBy: { sort: "asc" },
      select: {
        id: true,
        name: true,
        type: true,
        contents: {
          orderBy: {
            sort: "asc",
          },
        },
        description: true,
        sort: true,
      },
    });

    return {
      success: true,
      updatedData: updated,
    };
  } catch (error) {
    console.error("Error hapus koleksi:", error);
    return { error: "Gagal menghapus koleksi" };
  }
}

export async function getData() {
  const collection = await prisma.collection.findMany({
    select: {
      id: true,
      name: true,
      type: true,
      contents: {
        orderBy: {
          sort: "asc",
        },
      },
      description: true,
      sort: true,
    },
    orderBy: { sort: "asc" },
  });
  return collection;
}

export async function childUpSort(prevState, formData) {
  const id = formData.get("id")?.toString() || ""; // ID child
  const parentId = formData.get("parentId")?.toString() || ""; // ID parent

  // Ambil child yang ingin dipindahkan ke atas
  const item = await prisma.content.findUnique({
    where: { id },
  });

  // Cari child di atasnya (dalam parent yang sama)
  const itemAtas = await prisma.content.findFirst({
    where: {
      collectionId: parentId,
      sort: { lt: item.sort },
    },
    orderBy: { sort: "desc" },
  });

  if (!itemAtas) return { success: false };

  // Tukar nilai sort
  await prisma.content.update({
    where: { id: item.id },
    data: { sort: itemAtas.sort },
  });

  await prisma.content.update({
    where: { id: itemAtas.id },
    data: { sort: item.sort },
  });

  // Ambil ulang collections dengan contents yang sudah diurutkan
  const collectionBaru = await prisma.collection.findMany({
    orderBy: { sort: "asc" },
    select: {
      id: true,
      name: true,
      type: true,
      contents: {
        orderBy: { sort: "asc" },
      },
      description: true,
      sort: true,
    },
  });

  return {
    success: true,
    updatedData: collectionBaru,
  };
}

export async function childDownSort(prevState, formData) {
  try {
    const id = formData.get("id")?.toString() || ""; // ID child
    const parentId = formData.get("parentId")?.toString() || ""; // ID parent

    // Ambil child yang ingin dipindahkan ke bawah
    const item = await prisma.content.findUnique({
      where: { id },
    });

    // Cari child di bawahnya (dalam parent yang sama)
    const itemBawah = await prisma.content.findFirst({
      where: {
        collectionId: parentId,
        sort: { gt: item.sort },
      },
      orderBy: { sort: "asc" }, // ambil yang terdekat di bawahnya
    });

    if (!itemBawah) return { success: false };

    // Tukar nilai sort
    await prisma.content.update({
      where: { id: item.id },
      data: { sort: itemBawah.sort },
    });

    await prisma.content.update({
      where: { id: itemBawah.id },
      data: { sort: item.sort },
    });

    const collectionBaru = await prisma.collection.findMany({
      orderBy: { sort: "asc" },
      select: {
        id: true,
        name: true,
        type: true,
        contents: {
          orderBy: { sort: "asc" },
        },
        description: true,
        sort: true,
      },
    });

    return {
      success: true,
      updatedData: collectionBaru,
    };
  } catch (error) {
    logger.error("Error childDownSort:", error);
    return { success: false, error: "Gagal memindahkan child ke bawah" };
  }
}

export async function deleteChild(prevState, formData) {
  try {
    const id = formData.get("id")?.toString() || "";

    const child = await prisma.content.findUnique({
      where: { id },
      select: { collectionId: true }
    });

    if (!child) {
      return {
        success: false,
        updatedData: [],
      };
    }

    // Hapus child
    const deleted = await prisma.content.delete({
      where: { id },
    });

    if (!deleted) {
      return {
        success: false,
        updatedData: [],
      };
    }

    // Ambil semua child yang tersisa dalam parent yang sama
    const remainingChildren = await prisma.content.findMany({
      where: { collectionId: child.collectionId },
      orderBy: { sort: "asc" },
    });

    // Perbarui urutan sort anak-anak
    for (let i = 0; i < remainingChildren.length; i++) {
      const item = remainingChildren[i];
      if (item.sort !== i + 1) {
        await prisma.content.update({
          where: { id: item.id },
          data: { sort: i + 1 },
        });
      }
    }

    // Ambil ulang seluruh collection untuk update UI
    const updatedCollections = await prisma.collection.findMany({
      orderBy: { sort: "asc" },
      select: {
        id: true,
        name: true,
        type: true,
        contents: {
          orderBy: { sort: "asc" },
        },
        description: true,
        sort: true,
      },
    });

    return {
      success: true,
      updatedData: updatedCollections,
    };
  } catch (error) {
    logger.error("Error hapus child:", error);
    console.error("Error hapus child:", error);
    return { error: "Gagal menghapus child" };
  }
}
