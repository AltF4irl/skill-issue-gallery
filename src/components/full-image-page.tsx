import { getImage } from "~/server/queries";
import clsx from "clsx";
import { removeImageAction } from "~/server/actions";
import DeleteButton from "./delete-button";
import { redirect } from "next/navigation";
import { Button } from "./ui/button";
import Image from "next/image";

export default async function FullPageImaggeView({
  photoId,
  bgColorCode,
}: {
  photoId: string;
  bgColorCode: string;
}) {
  if (isNaN(Number(photoId))) throw new Error("Invalid Image id");
  const image = await getImage(Number(photoId));
  const removeImage = removeImageAction.bind(null, Number(photoId));

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
          <Image
            src={image.url}
            className="w-full object-contain md:max-h-[60vh]"
            height={360}
            width={500}
            alt={image.name}
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYAAAADwCAYAAAAJkrPKAAACtElEQVR42u3VMQEAAAQAQTpZ1JZQD+4i/PLZXRMAvJMGAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAGAABgBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgBgAAYAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAYAAGAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAGAAMgAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQAYAAAGAIABAGAAAFyz8xRDgAr0FRgAAAAASUVORK5CYII="
            placeholder="blur"
          />
        </div>
        <div className="flex w-full flex-shrink-0 flex-col border-neutral-800">
          <div className="border-b border-neutral-800 p-2 text-center text-xl">
            {image.name}
          </div>

          <div className="p-2">
            <div>Uploaded By:</div>
            <div className="overflow-clip">{image.userId}</div>
          </div>

          <div className="p-2">
            <div>Created On:</div>
            <div>{image.createdAt.toLocaleDateString()}</div>
          </div>

          <div className="flex w-full flex-row justify-between">
            <div className="p-2">
              <form action={removeImage}>
                <DeleteButton />
              </form>
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
