"use server";

import { deleteImage } from "../queries";
import { redirect } from "next/navigation";

export const removeImageAction = async (id: number) => {
  await deleteImage(id);

  redirect("/");
};
