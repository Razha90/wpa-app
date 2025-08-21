"use server";

import HeaderAdmin from "@/app/components/header-admin";
import FormAction from "./form_action";

export default async function Home() {
  return (
    <div>
      <HeaderAdmin />
      <FormAction />
    </div>
  );
}
