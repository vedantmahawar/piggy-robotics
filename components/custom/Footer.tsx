// custom components
import ExternalLink from "@/components/custom/ExternalLink";

// icons
import { Linkedin } from "lucide-react";
import { SiX } from "@icons-pack/react-simple-icons";

// Next
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div>
      <div className="border-t-2 border-neutral-300 max-w-6xl mx-auto w-full -my-[2px]"></div>
      <div className="overflow-hidden">
        <div className="w-full mx-auto max-w-6xl flex flex-col sm:flex-row justify-between py-5 px-5 xl:px-0 ">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={100}
              height={100}
              className="w-16 sm:w-20 mb-6 sm:mb-0"
            />
          </Link>
          <div className="flex flex-row gap-20">
            <div>
              <p className="font-semibold mb-1">Company</p>
              <Link href="/our-team">
                <p>Team</p>
              </Link>
            </div>
            <div>
              <p className="font-semibold mb-1">Support</p>
              <ExternalLink
                link="mailto:founders@piggyrobotics.com"
                color="nocolor"
              >
                <p>Contact Us</p>
              </ExternalLink>
            </div>
          </div>
        </div>
        <div className="relative w-full mx-auto max-w-6xl flex justify-between py-5 px-5 xl:px-0 items-center">
          <div
            className="absolute -bottom-15 right-0 h-30 w-96 -z-10
          bg-radial from-orange-300 to-transparent blur-3xl"
          />
          <div
            className="absolute -bottom-15 right-48 h-30 w-96 -z-10
          bg-radial from-red-300 to-transparent blur-3xl"
          />
          <div
            className="absolute -bottom-15 right-96 h-30 w-96 -z-10
          bg-radial from-sky-300 to-transparent blur-3xl"
          />
          <p>
            © 2026 Piggy Robotics. <br className="sm:hidden" />
            Designed by{" "}
            <ExternalLink link="https://www.vedantmahawar.com" color="nocolor">
              Vedant Mahawar
            </ExternalLink>
            .
          </p>
          <div className="flex flex-row gap-3">
            <ExternalLink
              link="https://www.linkedin.com/company/piggy-robotics/"
              color="nocolor"
            >
              <Linkedin size={20} />
            </ExternalLink>
            <ExternalLink link="https://x.com/PiggyRobotics" color="nocolor">
              <SiX size={20} />
            </ExternalLink>
          </div>
        </div>
      </div>
    </div>
  );
}
