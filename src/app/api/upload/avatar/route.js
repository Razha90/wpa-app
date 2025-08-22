import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { existsSync, promises as fsPromises } from "fs";

export const POST = async (req) => {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await req.formData();
  const file = formData.get("file");

  if (!file) {
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const ext = path.extname(file.name);
  const filename = Date.now() + session.user?.userId + ext;

  try {
    // Ambil user dulu sebelum update, untuk tahu image lama
    const oldUser = await prisma.user.findUnique({
      where: { id: session.user?.userId },
      select: { image: true },
    });

    // Hapus file lama kalau ada
    if (oldUser?.image) {
      const oldImagePath = path.join(process.cwd(), "public/uploads", oldUser.image);
      if (existsSync(oldImagePath)) {
        await fsPromises.unlink(oldImagePath);
        console.log("File lama dihapus:", oldUser.image);
      }
    }

    // Simpan file baru
    const newFilePath = path.join(process.cwd(), "public/uploads", filename);
    await writeFile(newFilePath, buffer);

    // Update database dengan nama file baru
    await prisma.user.update({
      where: { id: session.user?.userId },
      data: { image: filename },
    });

    return NextResponse.json({ Message: "Success", status: 201 });
  } catch (error) {
    console.error("Error occured ", error);
    return NextResponse.json({ Message: "Failed", status: 500 });
  }
};
  