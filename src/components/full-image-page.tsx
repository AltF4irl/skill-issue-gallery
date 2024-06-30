import { getImage } from "~/server/queries";

export default async function FullPageImaggeView({
  photoId,
}: {
  photoId: string;
}) {
  if (isNaN(Number(photoId))) throw new Error("Invalid Image id");
  const image = await getImage(Number(photoId));

  return (
    <div className="flex h-full w-screen min-w-0 items-center justify-center text-white">
      <div className="flex-shrink flex-grow">
        <img src={image.url} className="object-contain" alt={image.name} />
      </div>
      <div className="flex h-full w-56 flex-shrink-0 flex-col border-l border-neutral-800">
        <div className="border-b p-2 text-center text-xl border-neutral-800">{image.name}</div>

        <div className="p-2">
          <div>Uploaded By:</div>
          <div className="overflow-clip">{image.userId}</div>
        </div>

        <div className="p-2">
          <div>Created On:</div>
          <div>{image.createdAt.toLocaleDateString()}</div>
        </div>
      </div>
    </div>
  );
}
