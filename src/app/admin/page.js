import prisma from "@/lib/prisma";
import HeaderAdmin from "../components/header-admin";
import ListContent from "./list-content";

export default async function Home() {
  let collection = [];
  try {
    collection = await prisma.collection.findMany({
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
  } catch (error) {
    collection = [];
  }
  return (
    <>
      <HeaderAdmin />
      <div className="container mx-auto px-2 mt-5">
        <h2 className="text-blue-600 text-2xl font-bold mb-3">Daftar Koleksi</h2>
        {
          collection ? (
            <ListContent data={collection} />
          ) : (
            <h2>Tidak Ditemukan data</h2>
          )
        }
        {/* {collection.map((item) => (
            <li key={item.id} className="mb-2 text-blue-400">
              {item.name} - {item.type}
            </li>
          ))} */}
      </div>
    </>
  );
}
