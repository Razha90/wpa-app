import { NextResponse } from "next/server";
import path from "path";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { existsSync, promises as fsPromises } from "fs";

export const POST = async () => {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Ambil data user dulu untuk tahu image lama
    const user = await prisma.user.findUnique({
      where: { id: session.user?.userId },
      select: { image: true },
    });

    if (!user?.image) {
      return NextResponse.json({ error: "No image to delete" }, { status: 400 });
    }

    // Hapus file di storage
    const oldImagePath = path.join(process.cwd(), "public/uploads", user.image);
    if (existsSync(oldImagePath)) {
      await fsPromises.unlink(oldImagePath);
      console.log("File lama dihapus:", user.image);
    }

    // Hapus field image di database (set ke null)
    await prisma.user.update({
      where: { id: session.user?.userId },
      data: { image: null },
    });

    return NextResponse.json({ Message: "Image deleted", status: 200 });
  } catch (error) {
    console.error("Error occured ", error);
    return NextResponse.json({ Message: "Failed", status: 500 });
  }
};
