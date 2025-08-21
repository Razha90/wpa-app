"use server";

import logger from "@/lib/logger";

export async function addData(prevState, formData) {
  const title = formData.get("title")?.toString() || "";
  const id = formData.get("id")?.toString() || "";
  const question1 = formData.get("question1")?.toString() || "";
  const question2 = formData.get("question2")?.toString() || "";
  const question3 = formData.get("question3")?.toString() || "";
  const question4 = formData.get("question4")?.toString() || "";
  const choose = formData.get("choose")?.toString() || "";

  if (!title || title.length <= 5) {
    return {
      success: false,
      errors: {
        title: "Harap masukkan Judul Materi lebih dari 5 karakter.",
        server: "",
        id: "",
        question1: "",
        question2: "",
        question3: "",
        question4: "",
        choose: "",
      },
      values: { title, question1, question2, question3, question4, choose, id },
    };
  }

  if (!question1 || question1.length <= 0) {
    return {
      success: false,
      errors: {
        title: "",
        server: "",
        id: "",
        question1: "Harap masukkan Pertanyaan.",
        question2: "",
        question3: "",
        question4: "",
        choose: "",
      },
      values: { title, question1, question2, question3, question4, choose, id },
    };
  }

  if (!question2 || question2.length <= 0) {
    return {
      success: false,
      errors: {
        title: "",
        server: "",
        id: "",
        question2: "Harap masukkan Pertanyaan.",
        question1: "",
        question3: "",
        question4: "",
        choose: "",
      },
      values: { title, question1, question2, question3, question4, choose, id },
    };
  }

  if (!question3 || question3.length <= 0) {
    return {
      success: false,
      errors: {
        title: "",
        server: "",
        id: "",
        question3: "Harap masukkan Pertanyaan.",
        question2: "",
        question1: "",
        question4: "",
        choose: "",
      },
      values: { title, question1, question2, question3, question4, choose, id },
    };
  }

  if (!question4 || question4.length <= 0) {
    return {
      success: false,
      errors: {
        title: "",
        server: "",
        id: "",
        question4: "Harap masukkan Pertanyaan.",
        question2: "",
        question1: "",
        question3: "",
        choose: "",
      },
      values: { title, question1, question2, question3, question4, choose, id },
    };
  }

  if (!choose) {
    return {
      success: false,
      errors: {
        title: "",
        server: "",
        id: "",
        question4: "",
        question2: "",
        question1: "",
        question3: "",
        choose: "Harap pilih pertanyaan benar.",
      },
      values: { title, question1, question2, question3, question4, choose, id },
    };
  }

  if (!id) {
    return {
      success: false,
      errors: {
        title: "",
        question1: "",
        question2: "",
        question3: "",
        question4: "",
        choose: "",
        id: "Tidak ada data ID.",
        server: "",
      },
      values: { title, question1, question2, question3, question4, choose, id },
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
          title: "",
          question1: "",
          question2: "",
          question3: "",
          question4: "",
          choose: "",
          id: "",
          server: "Tidak ditemukan data koleksi dengan ID tersebut.",
        },
        values: {
          title,
          question1,
          question2,
          question3,
          question4,
          choose,
          id,
        },
      };
    }

    // const lastSort = await prisma.content.findFirst({
    //   orderBy: {
    //     sort: "desc",
    //   },
    //   select: {
    //     sort: true,
    //   },
    // });

    const lastSort = await prisma.content.findFirst({
      where: {
        collectionId: checkParent.id,
      },
      orderBy: {
        sort: "desc",
      },
      select: {
        sort: true,
      },
    });

    const nextSort = (lastSort?.sort ?? 0) + 1;

    const progress = await prisma.content.create({
      data: {
        title,
        sort: nextSort,
        answer: choose,
        choiceA: question1,
        choiceB: question2,
        choiceC: question3,
        choiceD: question4,
        collectionId: id,
      },
    });

    if (!progress) {
      return {
        success: false,
        errors: {
          title: "",
          question1: "",
          question2: "",
          question3: "",
          question4: "",
          choose: "",
          id: "",
          server: "Gagal menyimpan data ke database.",
        },
        values: {
          title,
          question1,
          question2,
          question3,
          question4,
          choose,
          id,
        },
      };
    }

    return {
      success: true,
      errors: {
        title: "",
        question1: "",
        question2: "",
        question3: "",
        question4: "",
        choose: "",
        id: "",
        server: "",
      },
      values: {
        title,
        question1,
        question2,
        question3,
        question4,
        choose,
        id,
      },
    };
  } catch (error) {
    logger.error("Error saat menyimpan koleksi:", error);
    console.log("Error saat menyimpan koleksi:", error);
    return {
      success: true,
      errors: {
        title: "",
        question1: "",
        question2: "",
        question3: "",
        question4: "",
        choose: "",
        id: "",
        server: "",
      },
      values: {
        title,
        question1,
        question2,
        question3,
        question4,
        choose,
        id,
      },
    };
  }
}
