import { getImage } from "~/server/queries";
import { Button } from "~/components/ui/button";

export default async function FullPageImaggeView({
  photoId,
}: {
  photoId: string;
}) {
  if (isNaN(Number(photoId))) throw new Error("Invalid Image id");
  const image = await getImage(Number(photoId));

  return (
    <div className="flex flex-col h-full w-screen min-w-0 items-center justify-center text-white no-scrollbar">
      <div className="bg-neutral-900 border-1.5 border border-neutral-800 max-w-screen-md max-h-screen m-4 no-scrollbar">
        <div className="flex-shrink flex-grow">
          <img src={image.url} className="object-contain w-full md:max-h-[60vh]" alt={image.name} />
        </div>
        <div className="flex  w-full flex-shrink-0 flex-col border-neutral-800">
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
            <Button variant="destructive">Delete</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
