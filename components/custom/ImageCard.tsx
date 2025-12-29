// Next
import Image from "next/image";

export default function ImageCard({
  image,
  alt,
  caption,
  className = "",
}: {
  image: string;
  alt: string;
  caption: string;
  className?: string;
}) {
  return (
    <div
      className={
        "flex flex-col items-center p-3 bg-neutral-700 rounded-xl " + className
      }
    >
      <Image
        src={image}
        alt={alt}
        width={800}
        height={400}
        className="pointer-events-none select-none rounded-lg mb-3"
      />
      <p className="font-medium text-md">{caption}</p>
    </div>
  );
}
