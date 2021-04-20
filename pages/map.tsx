export default function Map({ url, height, width }: { url: string; height: number; width: number }) {
  return (
    <div
      className="d-flex justify-content-center"
      style={{
        height: `${height}px`
      }}
    >
      <iframe
        src={url}
        style={{
          border: 0,
          width: `min(600px, calc(${width}px - var(--bs-gutter-x)))`,
          height: '100%'
        }}
        allowFullScreen={false}
        loading="lazy"
      ></iframe>
    </div>
  );
}
