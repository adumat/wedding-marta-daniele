import { Image } from "react-bootstrap";

export default function CroppedImage({ url, height }: { url: string; height: number }) {
  return (
    <div
      className="thumb-post d-flex align-items-center"
      style={{ height: `${height}px` }}
    >
      <Image
        src={url}
        rounded
        className="shadow"
        style={{ maxHeight: `${height}px` }}
      />
    </div>
  );
}
