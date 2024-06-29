import React from "react";
import { getUserImages } from "~/server/queries";

export default async function Images() {
  const images = await getUserImages();

  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image) => {
        return (
          <div key={image.id} className="flex w-full flex-col md:w-60">
            <img src={image.url} />
            <p>{image.name}</p>
          </div>
        );
      })}
    </div>
  );
}
