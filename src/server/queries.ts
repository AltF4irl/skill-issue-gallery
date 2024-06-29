import "server-only";

import { db } from "./db/index";

export const getImages = async () => {
  const images = await db.query.posts.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  return images;
} 