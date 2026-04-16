interface SanityImage {
  _key: string;
  alt?: string;
  asset: {
    _id: string;
    url: string;
    metadata: {
      dimensions: { width: number; height: number };
      lqip: string;
    };
  };
}

interface GalleryProps {
  images: SanityImage[];
}

export default function Gallery({ images }: GalleryProps) {
  if (!images?.length) return null;

  return (
    <div className="py-10">
      <div className="container-xl">
        <div className="flex flex-wrap -mx-2">
          {images.map((image, i) => (
            <div
              key={image._key}
              className="w-1/2 p-2 md:w-1/3 lg:w-1/4"
            >
              <div className="relative w-full" style={{ paddingBottom: "75%" }}>
                <img
                  src={image.asset.url}
                  alt={image.alt ?? ""}
                  className="absolute inset-0 object-cover w-full h-full"
                  loading={i === 0 ? "eager" : "lazy"}
                  style={{ backgroundImage: `url(${image.asset.metadata.lqip})` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}