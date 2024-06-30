import Image from "next/image";
import { getImage } from "~/server/queries";

export default async function PhotoPage({
  params: { id },
}: {
  params: { id: string };
}) {
  if (isNaN(Number(id))) throw new Error("Invalid Image id");
  const image = await getImage(Number(id));

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
