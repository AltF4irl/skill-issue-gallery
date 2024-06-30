import FullPageImaggeView from "~/components/full-image-page";

export default function PhotoPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <FullPageImaggeView photoId={id} />
    </div>
  );
}
