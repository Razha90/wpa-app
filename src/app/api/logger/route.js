import logger from "@/lib/logger";

export default async function POST(req, res) {
  try {
    const body = await req.json();
    const { path, message } = body;

    if (!message || typeof message !== "string") {
      return new Response(
        JSON.stringify({ error: "Message is required and must be a string." }),
        { status: 400 }
      );
    }

    logger.error(path, message);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error in logger route:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
