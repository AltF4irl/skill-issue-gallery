import "server-only";

import { db } from "./db/index";
import { auth } from "@clerk/nextjs/server";

export const getUserImages = async () => {
  const user = auth();

  if (!user.userId) {
    throw new Error("Not Authorrized");
  }

  const images = await db.query.posts.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.id),
  });
  return images;
};

export const getImage = async (id: number) => {
  const image = await db.query.posts.findFirst({
    where: (model, { eq }) => eq(model.id, id),
  });

  if (!image) throw new Error('Image does not exist.');

  return image;
};
