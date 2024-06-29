import "server-only";

import { db } from "./db/index";
import { auth } from "@clerk/nextjs/server";

export const getUserImages = async () => {

    const user = auth();

    if (!user.userId) {
        throw new Error("Not Authorrized");
    }

  const images = await db.query.posts.findMany({
    where: (model, {eq}) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.id),
  });
  return images;
} 