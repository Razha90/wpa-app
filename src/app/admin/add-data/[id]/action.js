"use server";

export async function addData(prevState, formData) {
  const title = formData.get("title")?.toString() || "";
  const body = formData.get("body")?.toString() || "";
  const id = formData.get("id")?.toString() || "";
  const vr = formData.get("vr")?.toString() || "";
  const parentId = formData.get("parentId")?.toString() || "";

  if (!title || title.length <= 3) {
    return {
      success: false,
      errors: {
        title: "Harap masukkan Judul Materi lebih dari 3 karakter.",
        body: "",
        server: "",
        id: "",
      },
      values: { title, body, id },
    };
  }

  if (!body || body.length <= 10) {
    return {
      success: false,
      errors: {
        title: "",
        body: "Content tidak boleh kurang dari 10.",
        server: "",
        id: "",
      },
      values: { title, body, id },
    };
  }

  if (!parentId) {
    return {
      success: false,
      errors: {
        title: "",
        body: "",
        id: "Tidak ada data ID.",
        server: "",
      },
      values: { title, body, id },
    };
  }

  if (!id) {
    return {
      success: false,
      errors: {
        title: "",
        body: "",
        id: "Tidak ada data ID.",
        server: "",
      },
      values: { title, body, id },
    };
  }

  // Simpan ke DB
  try {
    const checkParent = await prisma.collection.findFirst({
      where: {
        id,
      },
    });

    if (!checkParent) {
      return {
        success: false,
        errors: {
          server: "Data parent tidak ditemukan.",
          title: "",
          body: "",
          id: "",
        },
        values: { title, body },
      };
    }

    const lastSort = await prisma.content.findFirst({
      where: {
        collectionId: parentId,
      },
      orderBy: {
        sort: "desc",
      },
      select: {
        sort: true,
      },
    });

    const nextSort = (lastSort?.sort ?? 0) + 1;

    let progress;
    if (vr) {
      progress = await prisma.content.create({
        data: {
          title,
          body,
          sort: nextSort,
          vr,
          collectionId: id,
        },
      });
    } else {
      progress = await prisma.content.create({
        data: {
          title,
          body,
          sort: nextSort,
          collectionId: id,
        },
      });
    }

    if (!progress) {
      return {
        success: false,
        errors: {
          server: "Gagal menyimpan data ke database.",
          title: "",
          body: "",
          id: "",
        },
        values: { title, body, vr },
      };
    }
    return {
      success: true,
      errors: {
        server: "",
        title: "",
        body: "",
        id: "",
      },
      values: { title: "", body: "", vr:"" },
    };
  } catch (error) {
    console.log("Error saat menyimpan koleksi:", error);
    return {
      success: false,
      errors: {
        server: "Server Error",
        body: "",
        title: "",
        id: "",
      },
      values: { title, body },
    };
  }
}
