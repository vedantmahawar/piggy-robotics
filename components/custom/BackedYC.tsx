// default components
import { Button } from "@/components/ui/button";

// custom components
import ExternalLink from "@/components/custom/ExternalLink";

// Next
import Image from "next/image";

export default function BackedYC({ link }: { link: string }) {
  return (
    <ExternalLink link={link} color="nocolor">
      <Button
        size="default"
        className="mb-4 rounded-full text-xs sm:text-sm font-normal cursor-pointer h-9 px-3 sm:h-10 sm:px-6"
      >
        <Image
          src="/yc_logo.png"
          alt="YC Logo"
          width={20}
          height={20}
          className="rounded-xs w-4 sm:w-5"
        />
        Backed by Y Combinator
      </Button>
    </ExternalLink>
  );
}
