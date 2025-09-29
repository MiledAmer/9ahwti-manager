import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function AfterAuthRedirectPage() {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  redirect("/dashboard");
}


