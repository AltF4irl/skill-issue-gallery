"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { SimpleUploadButton } from "./simple-upload-button";

export default function TopNav() {
  return (
    <nav className="flex items-center justify-between border-b bg-neutral-950 border-neutral-800 p-4 text-xl font-semibold md:h-screen md:flex-col md:border-b-0 md:border-r">
    {/* <nav className="flex items-center justify-between border-b bg-neutral-950 border-neutral-800 p-4 text-xl font-semibold"> */}
      <Link className="flex justify-start text-center" href="/">
        <div className="hidden md:!block">S<br />k<br />i<br />l<br />l<br /><br /> I<br />s<br />s<br />u<br />e</div>
        <div className="md:hidden">Skill Issue</div>
        {/* <div>Skill Issue</div> */}
      </Link>
      <div className="flex flex-row items-center gap-4 md:flex-col">
      {/* <div className="flex flex-row items-center gap-4"> */}
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <SimpleUploadButton />
          <UserButton
            appearance={{
              elements: {
                avatarBox: "md:h-10 md:w-10",
              },
            }}
          />
        </SignedIn>
      </div>
    </nav>
  );
}
