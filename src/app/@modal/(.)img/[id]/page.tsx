import { Suspense } from "react";
import FullPageImaggeView from "~/components/full-image-page";
import FullPageImageSkeleton from "~/components/full-image-skeleton";
import { Modal } from "~/components/modal";

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <Modal>
        <Suspense fallback={<FullPageImageSkeleton bgColorCode="900" />}>
          <FullPageImaggeView bgColorCode="900" photoId={photoId} />
        </Suspense>
      </Modal>
    </div>
  );
}
