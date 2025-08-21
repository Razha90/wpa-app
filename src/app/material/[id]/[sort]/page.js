import logger from "@/lib/logger";
import prisma from "@/lib/prisma";
import Client from "./client";
import DbError from "@/app/components/db_error";
import { auth } from "@/auth";

export default async function Page({ params }) {
  const { id, sort } = await params;
  const session = await auth();
  let userId = session?.user?.userId;
  let data;
  let result;
  try {
    data = await prisma.collection.findFirst({
      where: { id, type: "MATERI" },
      include: {
        contents: {
          select: {
            sort: true,
            title: true,
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

    if (!data) {
      return (
        <DbError
          title="Maaf gagal memuat."
          message="Terdapat kesalahan pada server, gagal memuat materi."
        />
      );
    }

    const current = await prisma.content.findFirst({
      where: {
        collectionId: id,
        sort: Number(sort),
      },
      include: {
        UserContentProgress: {
          where: { userId },
          select: {
            id: true,
            openedAt: true,
          },
        },
      },
    });

    if (!current) {
      return <DbError />;
    }

    result = {
      ...data,
      current,
    };
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

  const matchedContent = data.contents.find((item) => item.sort == sort);

  return (
    <>
      <Client data={result} id={id} />
    </>
  );
}
