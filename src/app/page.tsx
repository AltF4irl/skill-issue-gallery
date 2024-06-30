import { SignedOut, SignedIn } from "@clerk/nextjs";
import Images from "../components/images";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="min-h-screen h-full w-full text-2xl flex justify-center items-center">Please Sign in above.</div>
      </SignedOut>
      <SignedIn>
          <Images />
      </SignedIn>
    </main>
  );
}
