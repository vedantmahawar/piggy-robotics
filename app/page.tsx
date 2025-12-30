// default components
import { Button } from "@/components/ui/button";
import TextType from "@/components/ui/TextType";
import { Iphone } from "@/components/ui/iphone";
import { Globe } from "@/components/ui/globe";
import StripedPattern from "@/components/ui/striped-pattern";

// custom components
import BackedYC from "@/components/custom/BackedYC";
import ViewportElement from "@/components/custom/ViewportElement";
import FloatingIcon from "@/components/custom/FloatingIcon";
import Waitlist from "@/components/custom/Waitlist";
import ComparsionTable from "@/components/custom/ComparisonTable";

// icons
import { CircleDollarSign, ChartNoAxesCombined } from "lucide-react";

// data
import { comparisonData } from "@/app/data";

// Next
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <div className="w-full max-w-6xl mx-auto px-8 xl:px-0 pt-30 pb-20 sm:pt-40 pb-20 text-center text-balance flex flex-col items-center">
        <BackedYC link="https://www.ycombinator.com/companies/piggy-robotics" />
        <h1 className="tracking-tight text-5xl sm:text-6xl font-semibold mb-2">
          Humanoids for the <br /> price of an iPhone
        </h1>
        <h2 className="text-lg sm:text-2xl font-medium mb-4 sm:mb-6">
          Built to scale from day one
        </h2>
      </div>
      {/* Our Belief */}
      <div className="w-full max-w-6xl mx-auto px-8 xl:px-0  text-balance text-left flex flex-row justify-center items-center">
        <div>
          <h4 className="text-lg sm:text-normal font-medium mb-2 text-blue-500">
            Our Belief
          </h4>
          <h2 className="text-4xl sm:text-5xl font-medium mb-2">
            Mass production before autonomy
          </h2>
          <h3 className="text-lg sm:text-xl font-normal mb-10 text-neutral-500">
            Tesla required billions of miles of driving data from millions of
            vehicles worldwide to enable self driving with just two degrees of
            freedom. Humanoids have &gt;50 degrees of freedom, meaning they
            require much more data to reach autonomy.
          </h3>
        </div>
        <div className="relative size-120 shrink-0">
          <Globe />
        </div>
      </div>
      {/* Cost */}
      <div className="w-full max-w-6xl mx-auto px-8 xl:px-0 text-balance text-right -mt-30 -mb-10 ">
        <Iphone className="-z-10 rotate-90 h-200">
          <div className="size-full flex flex-col items-center justify-center text-center rotate-270 pe-11 max-w-3xl">
            <h4 className="text-lg sm:text-normal font-medium mb-2 text-blue-500">
              Cost
            </h4>
            <h2 className="text-4xl sm:text-5xl font-medium mb-2">
              As cheap as an iPhone
            </h2>
            <h3 className="text-lg sm:text-xl font-normal text-neutral-500 px-10">
              To achieve mass production we've built a humanoid for &lt;$1,000.
              The world already buys a billion smartphones a year, a billion
              humanoids are next.
            </h3>
          </div>
        </Iphone>
      </div>
      {/* The Technology */}
      <div className="w-full max-w-6xl mx-auto px-8 xl:px-0 mb-20 sm:mb-40 text-balance">
        <h4 className="text-lg sm:text-normal font-medium mb-2 text-blue-500">
          Technology
        </h4>
        <h2 className="text-4xl sm:text-5xl font-medium mb-2">
          Proprietary artificial muscles
        </h2>
        <h3 className="text-lg sm:text-xl font-normal mb-10 text-neutral-500">
          Our humanoid is so cheap because we've designed it around low-cost
          artificial muscles from day one.
        </h3>
        <div className="grid grid-rows-2 grid-cols-12 border-dashed border-3">
          {/* Striped */}
          <div className="row-span-2 col-span-1 row-start-1 col-start-1 relative flex h-full w-full flex-col items-center justify-center overflow-hidden border-r-3 border-dashed ">
            <StripedPattern className="[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]" />
          </div>
          {/* Low Cost */}
          <div className="p-4 row-span-1 col-span-6 row-start-1 col-start-2 border-b-3 border-r-3 border-dashed flex flex-col justify-center items-center">
            <CircleDollarSign className="text-blue-500 mb-2" />
            <h3 className="text-xl sm:text-2xl font-medium">Low-cost</h3>
            <p className="text-md sm:text-lg text-neutral-500 text-center">
              Unlike competitors who use electric actuators our artificial
              muscles are much cheaper, and more human
            </p>
          </div>
          {/* Mass */}
          <div className="p-4 row-span-1 col-span-6 row-start-2 col-start-2 border-r-3 border-dashed flex flex-col justify-center items-center">
            <ChartNoAxesCombined className="text-blue-500 mb-2" />
            <h3 className="text-xl sm:text-2xl font-medium">
              Easily mass producible
            </h3>
            <p className="text-md sm:text-lg text-neutral-500 text-center">
              Each muscle is just a tube wrapped in braided fibre, and the whole
              robot is powered by a single pump
            </p>
          </div>
          {/* Striped */}
          <div className="row-span-2 col-span-1 row-start-1 col-start-8 relative flex h-full w-full flex-col items-center justify-center overflow-hidden border-r-3 border-dashed ">
            <StripedPattern className="[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]" />
          </div>
          {/* Graphic */}
          <div className="row-span-2 col-span-4 row-start-1 col-start-9 relative aspect-[1/1]">
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 75 75"
              strokeWidth="1"
              strokeLinecap="round"
            >
              <defs>
                <linearGradient
                  id="wave-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#60A5FA" />
                  <stop offset="70%" stopColor="#A78BFA" />
                  <stop offset="100%" stopColor="#F472B6" />
                </linearGradient>
              </defs>
              <path
                d="M 5,70 A 65 65 0 0 0 70,5"
                fill="none"
                stroke="url(#wave-gradient)"
              />
            </svg>
            <p className="absolute bottom-10 left-6 font-semibold">2026</p>
            <p className="text-right absolute top-5 right-12 font-semibold">
              1 billion
              <br /> humanoids
            </p>
          </div>
        </div>
        {/* hip actuator for tesla is 200 dollars alone */}
      </div>
      {/* Our Competitors */}
      <div className="w-full max-w-6xl mx-auto px-8 xl:px-0 mb-20 sm:mb-40 text-balance text-center">
        <h4 className="text-lg sm:text-normal font-medium mb-2 text-blue-500">
          Comparison
        </h4>
        <h2 className="text-4xl sm:text-5xl font-medium mb-2">
          The Competition
        </h2>
        <h3 className="text-lg sm:text-xl font-normal mb-10 text-neutral-500">
          Only capable of manufacturing a few hundred humanoids per year.
        </h3>
        <ComparsionTable data={comparisonData} />
      </div>
      {/* Use Cases */}
      <div className="w-full max-w-6xl mx-auto px-8 xl:px-0 mb-20 sm:mb-40 text-balance text-left">
        <h4 className="text-lg sm:text-normal font-medium mb-2 text-blue-500">
          Use Cases
        </h4>
        <h2 className="text-4xl sm:text-5xl font-medium mb-2">
          Access the inaccesible
        </h2>
        <h3 className="text-lg sm:text-xl font-normal mb-10 text-neutral-500">
          Whether it's in the
          <span className="text-orange-400 font-medium"> desert</span>, atop
          remote
          <span className="text-indigo-600 font-medium"> mountain </span>
          summits, across the vast
          <span className="text-blue-400 font-medium"> ocean</span>, or deep in
          the
          <span className="text-emerald-600 font-medium"> forest</span>, Earth
          is filled with places mass-produced humanoids could make accessible to
          humanity.
        </h3>
        <div className="flex flex-col sm:grid sm:grid-cols-2 sm:grid-rows-2 gap-6 mb-20">
          <div className="aspect-video">
            <Image
              src="/useCases/desert.jpg"
              alt="Desert"
              width={3553}
              height={1987}
              className="w-full h-full object-cover rounded-xl pointer-events-none select-none shadow-xl"
            />
          </div>
          <div className="aspect-video">
            <Image
              src="/useCases/mountain.jpg"
              alt="Mountain"
              width={3000}
              height={2000}
              className="w-full h-full object-cover rounded-xl pointer-events-none select-none shadow-xl"
            />
          </div>
          <div className="aspect-video">
            <Image
              src="/useCases/ocean.jpg"
              alt="Ocean"
              width={1280}
              height={853}
              className="w-full h-full object-cover rounded-xl pointer-events-none select-none shadow-xl"
            />
          </div>
          <div className="aspect-video">
            <Image
              src="/useCases/forest.webp"
              alt="Forest"
              width={1350}
              height={900}
              className="w-full h-full object-cover rounded-xl pointer-events-none select-none shadow-xl"
            />
          </div>
        </div>
        <div className="w-full max-w-6xl mx-auto px-8 xl:px-0 mb-20 sm:mb-40 text-balance text-right">
          <h4 className="text-lg sm:text-normal font-medium mb-2 text-blue-500">
            Use Cases
          </h4>
          <h2 className="text-4xl sm:text-5xl font-medium mb-2">
            Never do your chores again
          </h2>
          <h3 className="text-lg sm:text-xl font-normal mb-10 text-neutral-500">
            We believe in making humanoids accessible to all, not just the
            wealthy. Whether it's cleaning your dishes or your bathroom, a
            humanoid can do it all.
          </h3>
        </div>
        {/* Final CTA */}
        <div className="w-full max-w-6xl mx-auto px-8 xl:px-0 mb-20 sm:mb-40 text-balance text-center">
          <h2 className="text-4xl sm:text-5xl font-medium mb-2">
            Making the impossible possible
          </h2>
          <h3 className="text-lg sm:text-xl font-normal mb-10 text-neutral-500">
            We're the most capital-efficient humanoid company, run by Oxford
            engineers & global robotics competition champions.
          </h3>
        </div>
      </div>
    </div>
  );
}
