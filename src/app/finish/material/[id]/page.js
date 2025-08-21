"use server";

import prisma from "@/lib/prisma";
import Client from "./client";
import DbError from "@/app/components/db_error";
import { auth } from "@/auth";
import logger from "@/lib/logger";

export default async function Home({ params }) {
  const { id } = await params;
  const session = await auth();
  let userId = session?.user?.userId;
  let data;
  let result;
  try {
    data = await prisma.collection.findFirst({
      where: { id },
      include: {
        contents: {
          orderBy: {
            sort: 'asc', // urut dari kecil ke besar
          },
          select: {
            sort: true,
            id: true,
            title: true,
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

    const current = {
      id: 'finish'
    };

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

  return (
    <>
      <Client data={result} id={id} />
    </>
  );
}
