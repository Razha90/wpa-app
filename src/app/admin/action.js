"use server";

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
      contents: true,
      description: true,
      sort: true,
    },
    orderBy: { sort: "asc" },
  });
  return collection;
}
