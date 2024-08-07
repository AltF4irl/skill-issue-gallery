import Image from "next/image";
import Link from "next/link";
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
    <div className="flex flex-wrap justify-center gap-4 py-2 md:p-4">
      {images.map((image) => {
        return (
          <div key={image.id} className="flex w-screen flex-col md:w-96 border-y md:border-x border-neutral-800">
            <Link href={`/img/${image.id}`}>
              <Image
                src={image.url}
                alt={image.name}
                width={480}
                height={240}
                className="md:object-cover md:h-60 w-screen md:w-96"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYAAAADwCAYAAAAJkrPKAAACtElEQVR42u3VMQEAAAQAQTpZ1JZQD+4i/PLZXRMAvJMGAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAGAABgBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgBgAAYAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAYAAGAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAGAAMgAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQBgAAAYAAAGAIABAGAAABgAAAYAgAEAYAAAGAAABgCAAQAYAAAGAIABAGAAAFyz8xRDgAr0FRgAAAAASUVORK5CYII="
                placeholder="blur"
              />
            </Link>
            <p className="p-1">{truncateStr(image.name)}</p>
          </div>
        );
      })}
    </div>
  );
}
