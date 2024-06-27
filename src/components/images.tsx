import { db } from "../server/db";
import React from "react";

export default async function Images() {
  const images = await db.query.posts.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
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
