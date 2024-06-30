import { getImage } from "~/server/queries";

export default async function FullPageImaggeView({
  photoId,
}: {
  photoId: string;
}) {
  if (isNaN(Number(photoId))) throw new Error("Invalid Image id");
  const image = await getImage(Number(photoId));

  return (
    <div className="flex h-full w-full min-w-0">
      <div className="flex-shrink flex justify-center items-center">
        <img src={image.url} alt={image.name} />
      </div>
      <div className="flex w-48 flex-col flex-shrink-0 border-l border-neutral-800">
        <div className="text-xl font-bold">{image.name}</div>
      </div>
    </div>
  );
}
