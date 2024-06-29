import Image from "next/image";
import React from "react";
import { getUserImages } from "~/server/queries";

export default async function Images() {
  const images = await getUserImages();
  const truncateStr = (str: string): string => {
    return (
      str.substring(0, 12) + "..." + str.substring(str.length - 7, str.length)
    );
  };

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {images.map((image) => {
        return (
          <div key={image.id} className="flex w-full flex-col md:w-60 md:h-35">
            <Image
              src={image.url}
              alt={image.name}
              width={480}
              height={240}
              style={{ objectFit: "contain", height: "100%" }}
            />
            <p>{truncateStr(image.name)}</p>
          </div>
        );
      })}
    </div>
  );
}
