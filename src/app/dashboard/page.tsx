"use client";
import { SignedIn, SignedOut, RedirectToSignIn, UserButton, useUser } from "@clerk/nextjs";

export default function DashboardPage() {
  const { user } = useUser();
  return (
    <main className="p-6">
      <SignedIn>
        <div className="flex items-center gap-3">
          <UserButton />
          <div>Signed in as {user?.primaryEmailAddress?.emailAddress}</div>
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </main>
  );
}