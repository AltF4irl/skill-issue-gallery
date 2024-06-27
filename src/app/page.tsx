import Image from "next/image";
import { db } from "~/server/db";

const placeholderUrls = [
  "https://utfs.io/f/92707176-4db9-4351-90ef-a49377e5c92d-foqhiy.png",
  "https://utfs.io/f/0a07f8c4-1f86-4d6c-a860-45c33634f3fd-foqhi3.png",
  "https://utfs.io/f/0a07f8c4-1f86-4d6c-a860-45c33634f3fd-foqhi3.png",
  "https://utfs.io/f/47e8aded-31bb-4e1b-9f23-ad85425b94b7-265i.png",
];

const mockImages = placeholderUrls.map((url, idx) => ({
  id: idx + Math.random(),
  url,
}));

export default async function HomePage() {
  const gitgud = await db.query.posts.findMany();
  console.log(gitgud);
  
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {
          [...mockImages, ...mockImages, ...mockImages].map((image) => {
            return (
              <div key={image.id + Math.random()} className="md:w-60 w-full">
                <img src={image.url} />
              </div>
            )
          })
        }
      </div>
      Git Gud
    </main>
  );
}
