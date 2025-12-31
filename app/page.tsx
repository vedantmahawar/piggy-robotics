// default components
import { Iphone } from "@/components/ui/iphone";
import { Globe } from "@/components/ui/globe";
import StripedPattern from "@/components/ui/striped-pattern";
import { DotPattern } from "@/components/ui/dot-pattern";

// custom components
import BackedYC from "@/components/custom/BackedYC";
import DesktopComparisonTable from "@/components/custom/DesktopComparisonTable";
import MobileComparisonTable from "@/components/custom/MobileComparisonTable";

// icons
import { CircleDollarSign, ChartNoAxesCombined } from "lucide-react";

// data
import { comparisonData } from "@/app/data";

// Next
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="relative">
        <DotPattern glow={true} className="-z-20 absolute inset-0" />
        {/* Hero */}
        <div className="w-full max-w-6xl mx-auto px-8 xl:px-0 pt-30 pb-15 sm:py-35 text-center text-balance flex flex-col items-center">
          <BackedYC link="https://www.ycombinator.com/companies/piggy-robotics" />
          <h1 className="tracking-tight text-5xl sm:text-6xl font-semibold mb-2">
            Humanoids for the <br /> price of an iPhone
          </h1>
          <h2 className="text-lg sm:text-2xl font-medium mb-4 sm:mb-6">
            Built to scale from day one
          </h2>
        </div>
        {/* Our Belief */}
        <div className="overflow-hidden">
          <div className="w-full border-b-2 border-dashed border-neutral-300 relative">
            <div className="relative z-10 -my-[2px] w-full max-w-6xl mx-auto px-8 xl:px-0 text-balance text-left flex sm:flex-row flex-col justify-center items-center bg-[#f9f9f9] border-t-2 border-b-2 xl:border-l-2 xl:border-r-2 border-t-4 border-neutral-300 py-10 lg:py-0  overflow-hidden">
              <div
                className="absolute -bottom-20 -left-15 h-30 w-60 -z-10
            bg-radial from-orange-300 to-transparent blur-3xl"
              />
              <div className="sm:ps-10">
                <h4 className="text-lg sm:text-normal font-medium mb-2 text-blue-500">
                  Our Belief
                </h4>
                <h2 className="text-4xl sm:text-5xl font-medium mb-2">
                  Mass production before autonomy
                </h2>
                <h3 className="text-lg sm:text-xl font-normal text-neutral-500">
                  Tesla required billions of miles of driving data from millions
                  of vehicles worldwide to enable self driving with just two
                  degrees of freedom. Humanoids have &gt;50 degrees of freedom,
                  meaning they require much more data to reach autonomy.
                </h3>
              </div>
              <div className="relative size-80 sm:size-120 shrink-0">
                <Globe />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Cost */}
      <div className="w-full border-b-2 border-dashed border-neutral-300">
        <div className="xl:border-l-2 xl:border-r-2 border-dashed w-full max-w-6xl mx-auto px-8 xl:px-0 border-neutral-300 sm:grid sm:grid-cols-4 items-center py-10 sm:py-20 relative">
          <DotPattern
            glow={true}
            className={
              "-z-10 [mask-image:radial-gradient(700px_circle_at_center,white,transparent)]"
            }
          />
          <div className="hidden sm:block">
            <Iphone className="-rotate-5 -z-10 h-100 col-span-1 ml-5"></Iphone>
          </div>
          <div className="sm:px-10 text-balance text-right sm:col-span-3">
            <h4 className="text-lg sm:text-normal font-medium mb-2 text-blue-500">
              Cost
            </h4>
            <h2 className="text-4xl sm:text-5xl font-medium mb-2">
              As cheap as an iPhone
            </h2>
            <h3 className="text-lg sm:text-xl font-normal text-neutral-500">
              To achieve mass production we've built a humanoid for &lt;$1,000.
              The world already buys a billion smartphones a year, a billion
              humanoids are next.
            </h3>
          </div>
        </div>
      </div>
      {/* Technology */}
      <div className="w-full border-dashed border-neutral-300 relative  overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-8 xl:px-0 text-balance border-t-2 border-b-2 xl:border-l-2 xl:border-r-2 border-neutral-300 py-10 sm:py-20 bg-[#f9f9f9] -my-[2px]">
          <div className="sm:px-10 ">
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
            <div className="grid grid-cols-1 grid-rows-4 sm:grid-rows-2 sm:grid-cols-10 lg:grid-cols-11 xl:grid-cols-12 border-dashed border-3">
              {/* Striped */}
              <div className="hidden xl:block sm:row-span-2 sm:col-span-1 sm:row-start-1 sm:col-start-1 relative flex h-full w-full flex-col items-center justify-center overflow-hidden border-r-3 border-dashed ">
                <StripedPattern className="[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]" />
              </div>
              {/* Low Cost */}
              <div className="p-4 row-start-1 row-span-1 sm:col-span-6 sm:row-start-1 sm:col-start-1 xl:col-start-2 border-b-3 sm:border-r-3 border-dashed flex flex-col justify-center items-center">
                <CircleDollarSign className="text-blue-500 mb-2" />
                <h3 className="text-xl sm:text-2xl font-medium">Low-cost</h3>
                <p className="text-md sm:text-lg text-neutral-500 text-center">
                  Unlike competitors who use electric actuators our artificial
                  muscles are much cheaper, and more human
                </p>
              </div>
              {/* Mass */}
              <div className="p-4 row-start-2 row-span-1 sm:col-span-6 sm:row-start-2 sm:col-start-1 xl:col-start-2 border-b-3 sm:border-b-0 sm:border-r-3 border-dashed flex flex-col justify-center items-center">
                <ChartNoAxesCombined className="text-blue-500 mb-2" />
                <h3 className="text-xl sm:text-2xl font-medium text-center">
                  Easily mass producible
                </h3>
                <p className="text-md sm:text-lg text-neutral-500 text-center">
                  Each muscle is just a tube wrapped in braided fibre, and the
                  whole robot is powered by a single pump
                </p>
              </div>
              {/* Striped */}
              <div className="hidden lg:block sm:row-span-2 sm:col-span-1 sm:row-start-1 sm:col-start-7 xl:col-start-8 relative flex h-full w-full flex-col items-center justify-center overflow-hidden border-r-3 border-dashed ">
                <StripedPattern className="[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]" />
              </div>
              {/* Graphic */}
              <div className="row-span-2 row-start-3 sm:col-span-4 sm:row-start-1 sm:col-start-7 lg:col-start-8 xl:col-start-9 relative aspect-square">
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
          </div>
        </div>
      </div>
      {/* The Competition */}
      <div className="w-full border-t-2 border-dashed border-neutral-300 relative">
        <div className="w-full max-w-6xl mx-auto px-8 xl:px-0 py-10 sm:py-20 xl:border-l-2 xl:border-r-2 border-dashed border-neutral-300 text-balance text-center overflow-hidden">
          <div className="sm:px-10">
            <h4 className="text-lg sm:text-normal font-medium mb-2 text-blue-500">
              Comparison
            </h4>
            <h2 className="text-4xl sm:text-5xl font-medium mb-2">
              The Competition
            </h2>
            <h3 className="text-lg sm:text-xl font-normal mb-10 text-neutral-500">
              Only capable of manufacturing a few hundred humanoids per year.
            </h3>
            <div className="hidden lg:block">
              <DesktopComparisonTable data={comparisonData} />
            </div>
            <div className="lg:hidden">
              <MobileComparisonTable data={comparisonData} />
            </div>
          </div>
        </div>
      </div>
      {/* Use Cases */}
      <div className="w-full border-t-2 border-b-2 border-dashed border-neutral-300 relative">
        <div className="w-full max-w-6xl mx-auto px-8 xl:px-0 border-t-2 border-b-2 xl:border-l-2 xl:border-r-2 border-neutral-300 bg-[#f9f9f9] -my-[2px] text-balance text-left p-10 sm:py-20">
          <div className="sm:px-10">
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
              <span className="text-blue-400 font-medium"> ocean</span>, or deep
              in the
              <span className="text-emerald-600 font-medium"> forest</span>,
              Earth is filled with places mass-produced humanoids could make
              accessible to humanity.
            </h3>
            <div className="flex flex-col grid grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 gap-4 sm:gap-6 mb-20">
              <div className="aspect-video">
                <Image
                  src="/useCases/desert.jpg"
                  alt="Desert"
                  width={3553}
                  height={1987}
                  className="w-full h-full object-cover rounded-md sm:rounded-xl pointer-events-none select-none shadow-xl"
                />
              </div>
              <div className="aspect-video">
                <Image
                  src="/useCases/mountain.jpg"
                  alt="Mountain"
                  width={3000}
                  height={2000}
                  className="w-full h-full object-cover rounded-md sm:rounded-xl pointer-events-none select-none shadow-xl"
                />
              </div>
              <div className="aspect-video">
                <Image
                  src="/useCases/ocean.jpg"
                  alt="Ocean"
                  width={1280}
                  height={853}
                  className="w-full h-full object-cover rounded-md sm:rounded-xl pointer-events-none select-none shadow-xl"
                />
              </div>
              <div className="aspect-video">
                <Image
                  src="/useCases/forest.webp"
                  alt="Forest"
                  width={1350}
                  height={900}
                  className="w-full h-full object-cover rounded-md sm:rounded-xl pointer-events-none select-none shadow-xl"
                />
              </div>
            </div>
            <div className="w-full max-w-6xl mx-auto xl:px-0 text-balance text-right">
              <h4 className="text-lg sm:text-normal font-medium mb-2 text-blue-500">
                Use Cases
              </h4>
              <h2 className="text-4xl sm:text-5xl font-medium mb-2">
                Never do your chores again
              </h2>
              <h3 className="text-lg sm:text-xl font-normal text-neutral-500">
                We believe in making humanoids accessible to all, not just the
                wealthy. Whether it's cleaning your dishes or your bathroom, a
                humanoid can do it all.
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/* Final CTA */}
      <div className="w-full sm:border-b-2 border-dashed border-neutral-300 relative">
        <div className="w-full max-w-6xl mx-auto xl:px-0 text-balance text-center xl:border-l-2 xl:border-r-2 border-dashed border-neutral-300 relative">
          <DotPattern
            glow={true}
            className={
              "-z-10 [mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
            }
          />
          <div className="border-b-2 border-neutral-300 py-20 sm:py-30 -my-[2px] px-8">
            <h2 className="text-4xl sm:text-5xl font-medium mb-2">
              Making the impossible possible
            </h2>
            <h3 className="text-lg sm:text-xl font-normal text-neutral-500 ">
              We're the most capital-efficient humanoid company, run by Oxford
              engineers & global robotics competition champions.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
