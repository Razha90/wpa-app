'use server'

import { redirect } from "next/navigation"
import prisma from "@/lib/prisma";

export default async function Home({params}) {
  redirect('/');
}
