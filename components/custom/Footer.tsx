// custom components
import ExternalLink from "@/components/custom/ExternalLink";

// Next
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="">
      <div className="w-full mx-auto max-w-6xl flex justify-between border-t border-neutral-700 py-5 px-5 xl:px-0">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="w-16 sm:w-20"
          />
        </Link>
        <div className="flex flex-row gap-20">
          <div>
            <p className="font-semibold mb-1">Company</p>
            <Link href="/our-team">
              <p>Our Team</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full mx-auto max-w-6xl flex justify-between py-5 px-5 xl:px-0">
        <p>
          © 2025 Piggy Robotics. <br className="sm:hidden" />
          Designed by{" "}
          <ExternalLink link="https://www.vedantmahawar.com" color="nocolor">
            Vedant Mahawar
          </ExternalLink>
          .
        </p>
      </div>
    </div>
  );
}
