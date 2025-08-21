import { auth } from "@/auth";
import prisma from "@/lib/prisma";

export async function POST(request) {
  try {
    const body = await request.json();
    const { id } = body;

    const session = await auth();
    const userId = session?.user?.userId;

    if (!userId) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
      });
    }

    const progress = await prisma.userContentProgress.upsert({
      where: {
        userId_contentId: {
          userId,
          contentId: id,
        },
      },
      update: {
        openedAt: new Date(),
      },
      create: {
        userId,
        contentId: id,
        openedAt: new Date(),
      },
    });

    return new Response(JSON.stringify({ success: true, progress }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
