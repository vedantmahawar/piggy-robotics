// Next
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full max-w-6xl mx-auto px-8 xl:px-0">
      <div
        className="absolute right-0 top-0 h-80 w-40 -z-10 blur-xl 
              bg-radial-[at_top_right] from-red-100 via-orange-100 to-transparent "
      ></div>
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Piggy Robotics Logo"
          width={100}
          height={100}
          className="absolute top-10 w-16 sm:w-20 z-10"
        />
      </Link>
    </div>
  );
}
