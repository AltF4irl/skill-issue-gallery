import Image from "next/image";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.posts.findMany({
    orderBy: (model, {desc}) => desc(model.id),
  });

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {images.map((image) => {
          return (
            <div key={image.id} className="w-full md:w-60 flex flex-col">
              <img src={image.url} />
              <p>{image.name}</p>
            </div>
          );
        })}
      </div>
      Git Gud
    </main>
  );
}
