// Next
import Image from "next/image";
export default function FloatingIcon({
  image,
  alt,
  className = "",
  shadow,
}: {
  image: string;
  alt: string;
  className?: string;
  shadow: "white" | "black";
}) {
  const shadowClass =
    shadow === "white" ? "shadow-white/40" : "shadow-black/40";

  return (
    <Image
      src={image}
      alt={alt}
      width={100}
      height={100}
      className={
        `rounded-2xl sm:rounded-4xl shadow-xl ${shadowClass} pointer-events-none select-none w-18 sm:w-25 ` +
        className
      }
    />
  );
}
