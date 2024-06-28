"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { UploadButton } from "../utils/uploadthing";
import { useRouter } from "next/navigation";

export default function TopNav() {
  const router = useRouter();
  return (
    <nav className="flex w-full items-center justify-between border-b bg-neutral-950 p-4 text-xl font-semibold">
      <div>Skill Issue</div>
      <div className="flex flex-row">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={() => {
              router.refresh();
            }}
          />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
