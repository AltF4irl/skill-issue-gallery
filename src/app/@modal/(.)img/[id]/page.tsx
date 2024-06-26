import FullPageImaggeView from "~/components/full-image-page";
import { Modal } from "~/components/modal";

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <Modal>
        <FullPageImaggeView photoId={photoId} />
      </Modal>
    </div>
  );
}
