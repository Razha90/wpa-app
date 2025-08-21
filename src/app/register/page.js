"use server";
import Client from "./client";
import prisma from "@/lib/prisma";

export default async function Home() {

  return (
    <div>
      <Client />
    </div>
  )
}
