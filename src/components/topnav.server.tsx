"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { UploadButton } from "../utils/uploadthing";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function TopNav() {
  const router = useRouter();
  return (
    <nav className="flex md:flex-col items-center justify-between border-b md:border-r border-neutral-800 md:border-b-0 bg-neutral-950 p-4 text-xl font-semibold md:h-screen">
      <Link
        className="mb-2 flex text-center justify-start"
        href="/"
      >
        <div>Skill Issue</div>
      </Link>
      <div className="flex flex-row md:flex-col items-center ">
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
