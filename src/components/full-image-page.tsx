import { getImage } from "~/server/queries";
import { Button } from "~/components/ui/button";
import clsx from "clsx";
import { removeImageAction } from "~/server/actions";

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
          <img
            src={image.url}
            className="w-full object-contain md:max-h-[60vh]"
            alt={image.name}
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

          <div className="p-2">
            <form action={removeImage}>
              <Button variant="destructive">Delete</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
