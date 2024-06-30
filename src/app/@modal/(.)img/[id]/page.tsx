import Image from "next/image";
import { getImage } from "~/server/queries";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  if (isNaN(Number(photoId))) throw new Error("Invalid Image id");
  const image = await getImage(Number(photoId));

  return (
    <div>
      <Image
        src={image.url}
        alt={image.name}
        width={480}
        height={240}
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}
