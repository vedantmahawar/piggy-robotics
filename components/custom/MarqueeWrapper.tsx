// default
import { Marquee } from "@/components/ui/marquee";

// custom
import ExternalLink from "@/components/custom/ExternalLink";

// Next.js
import Image from "next/image";

// data
import type { Brand } from "@/app/data";

export default function MarqueeWrapper({ brands }: { brands: Brand[] }) {
  return (
    <Marquee pauseOnHover>
      {brands.map((brand, idx) => (
        <div key={idx}>
          <ExternalLink link={brand.link}>
            <div className="flex items-center h-24">
              {
                <Image
                  src={brand.image}
                  alt={brand.link}
                  width={150}
                  height={75}
                  className="mx-6"
                />
              }
            </div>
          </ExternalLink>
        </div>
      ))}
    </Marquee>
  );
}
