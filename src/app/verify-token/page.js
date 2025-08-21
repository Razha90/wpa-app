'use server';

import { auth } from "@/auth";
import Client from "./client";
import prisma from "@/lib/prisma";

export default async function Home() {
  const user = await auth();
  return (
    <>
      <Client user={user} />
    </>
  )
}