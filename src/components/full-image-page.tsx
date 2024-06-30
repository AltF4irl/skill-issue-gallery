import Image from "next/image";
import { getImage } from "~/server/queries";

export default async function FullPageImaggeView({photoId} : {photoId: string,}) {
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