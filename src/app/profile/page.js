"use server";

import { auth } from "@/auth";
import { Client } from "./client";

export default async function Home() {
  const session = await auth();
  return (
    <>
      <Client auth={session} />
    </>
  );
}
