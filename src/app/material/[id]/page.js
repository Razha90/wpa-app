import DbError from "@/app/components/db_error";
import { auth } from "@/auth";
import logger from "@/lib/logger";
import prisma from "@/lib/prisma";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Page({ params }) {
  const { id } = await params;
  const session = await auth();

  let userId = session?.user?.userId;
  let result = null;
  let isFinished = false;
  try {
    // data = await prisma.Collection.findFirst({
    //   where: {
    //     id,
    //   },
    //   include: {
    //     contents: {
    //       orderBy: {
    //         sort: "asc",
    //       },
    //       take: 1,
    //     },
    //   },
    // });
    const collection = await prisma.collection.findFirst({
      where: { id, type: "MATERI" },
      include: {
        contents: {
          orderBy: { sort: "asc" }, // urutkan supaya gampang ambil urutan
          select: { id: true, title: true, sort: true },
        },
      },
    });
    if (!collection) {
      return (
        <DbError
          title="Maaf terjadi masalah pada server."
          message="Terjadi masalah saat mengambil data pada server."
        />
      );
    }

    const progress = await prisma.userContentProgress.findMany({
      where: {
        userId,
        content: { collectionId: id },
      },
      orderBy: { openedAt: "desc" },
      select: { contentId: true, openedAt: true },
    });

    if (progress.length < collection.contents.length) {
      if (progress.length == 0) {
        result = collection.contents[0];
      } else {
        const lastOpenedId = progress[0].contentId;
        const lastOpenedIndex = collection.contents.findIndex(
          (c) => c.id === lastOpenedId
        );

        if (lastOpenedIndex + 1 < collection.contents.length) {
          result = collection.contents[lastOpenedIndex + 1];
        } else {
          result = collection.contents[lastOpenedIndex];
        }
      }
    } else {
      isFinished = true;
    }


    // if (!data || !data.contents || data.contents.length == 0) {
    //   return (
    //     <DbError
    //     title="Maaf terjadi masalah pada server."
    //     message="Terjadi masalah saat mengambil data pada server."
    //   />
    //   );
    // }
  } catch (error) {
    console.error("Error fetching data:", error);
    logger.error("Error fetching data:", error);
    return (
      <DbError
        title="Maaf terjadi masalah pada server."
        message="Terjadi masalah saat mengambil data pada server."
      />
    );
  }

  if (isFinished) {
    return redirect(`/finish/material/${id}`);
  }

  if (!result) {
    return (
      <DbError
        title="Maaf terjadi masalah pada server."
        message="Terjadi masalah saat mengambil data pada server."
      />
    );
  }

  redirect(`/material/${id}/${result.sort}`);
  // if (data || data.contents) {
  //   return redirect(`/material/${data.id}/${data.contents[0].sort}`); // Redirect to the first content
  // }

}
