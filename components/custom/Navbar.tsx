// Next
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full max-w-6xl mx-auto px-8 xl:px-0">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Logo"
          width={100}
          height={100}
          className="absolute top-10 w-16 sm:w-20"
        />
      </Link>
    </div>
  );
}
