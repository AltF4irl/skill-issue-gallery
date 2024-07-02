import FullPageImaggeView from "~/components/full-image-page";

export default function PhotoPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div className="h-screen">
      <FullPageImaggeView bgColorCode="950" photoId={id} />
    </div>
  );
}
