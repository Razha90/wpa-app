import prisma from "@/lib/prisma";
import Client from "./client";

export default async function Home({ params }) {
  const { id } = await params;
  const data = await prisma.collection.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      description: true,
      type: true,
    },
  });
 
  return (
    <>
      <Client data={data} />
    </>
  );
}
