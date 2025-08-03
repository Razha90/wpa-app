import prisma from "@/lib/prisma";
import Client from "./client";

export default async function Home({ params }) {
  const { id } = await params;
  const data = await prisma.collection.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
    },
  });
  return (
    <>
      {data ? (
        <Client data={data} />
      ) : (
        <div className="w-full text-center h-dvw flex items-center flex-col justify-center">
          <h1 className="text-blue-500 font-bold text-3xl">404</h1>
          <p className="text-blue-500 text-2xl">Data tidak ditemukan.</p>
        </div>
      )}
    </>
  );
}
