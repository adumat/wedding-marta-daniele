export default function Map({ url, height, width }: { url: string; height: number; width: number }) {
  return (
    <div className="d-flex justify-content-center py-2" style={{ height: '100%' }}>
      <iframe
        src={url}
        style={{ border: 0, width: `min(600px, calc(${width}px - var(--bs-gutter-x) * 2))`, height: '100%' }}
        allowFullScreen={false}
        loading="lazy"
      ></iframe>
    </div>
  );
}
