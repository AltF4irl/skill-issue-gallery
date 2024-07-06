import clsx from "clsx";
import { redirect } from "next/navigation";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";

export default async function FullPageImageSkeleton({
  bgColorCode,
}: {
  bgColorCode: string;
}) {
  return (
    <div className="no-scrollbar flex h-screen w-screen min-w-0 flex-col items-center justify-center text-white">
      <div
        className={clsx(
          {
            "bg-neutral-900": bgColorCode === "900",
            "bg-neutral-950": bgColorCode === "950",
          },
          `border-1.5 no-scrollbar m-4 !max-h-screen max-w-screen-md border border-neutral-800`,
        )}
      >
        <div className="flex-shrink flex-grow">
          <Skeleton className="h-60 w-96 md:h-[360px] md:w-[500px]" />
        </div>
        <div className="flex w-full flex-shrink-0 flex-col border-neutral-800 justify-center">
          <div className="border-b border-neutral-800 p-2 text-center text-xl w-full">
            <Skeleton className="h-4 w-[250px]" />
          </div>

          <div className="p-2">
            <div>Uploaded By:</div>
            <Skeleton className="h-4 w-[200px]" />
          </div>

          <div className="p-2">
            <div>Created On:</div>
            <Skeleton className="h-4 w-[200px]" />
          </div>

          <div className="flex w-full flex-row justify-between">
            <div className="p-2">
              <Button variant="destructive">
                Delete
              </Button>
            </div>

            <div className="p-2">
              <form
                action={async () => {
                  "use server";
                  redirect("/");
                }}
              >
                <Button variant="ghost">Go Back</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
