import { Suspense } from "react";
import FullPageImaggeView from "~/components/full-image-page";
import FullPageImageSkeleton from "~/components/full-image-skeleton";

export default function PhotoPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div className="h-screen">
      <Suspense fallback={<FullPageImageSkeleton bgColorCode="950" />}>
        <FullPageImaggeView bgColorCode="950" photoId={id} />
      </Suspense>
    </div>
  );
}
