// default components
import { Button } from "@/components/ui/button";
import TextType from "@/components/ui/TextType";

// custom components
import BackedYC from "@/components/custom/BackedYC";
import ViewportElement from "@/components/custom/ViewportElement";
import FloatingIcon from "@/components/custom/FloatingIcon";
import Waitlist from "@/components/custom/Waitlist";
import ComparsionTable from "@/components/custom/ComparisonTable";
import { Globe } from "@/components/ui/globe"

// icons
import {
  CircleDollarSign,
  ChartNoAxesCombined
} from "lucide-react";

// data
import { comparisonData } from "@/app/data";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <div className="w-full max-w-6xl mx-auto px-8 xl:px-0 pt-30 pb-10 sm:py-40 text-center text-balance flex flex-col items-center">
        <BackedYC link="https://www.ycombinator.com/companies/piggy-robotics" />
        <h1 className="tracking-tight text-5xl sm:text-6xl font-semibold mb-2">
          Humanoids for the <br /> price of an iPhone
        </h1>
        <h2 className="text-lg sm:text-2xl font-medium mb-4 sm:mb-6">
          Built to scale from day one
        </h2>
      </div>
      {/* Our Belief */}
      <div className="w-full max-w-6xl mx-auto px-8 xl:px-0 mb-20 sm:mb-20 text-balance text-left flex flex-row justify-center items-center">
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
      <div className="w-full max-w-6xl mx-auto px-8 xl:px-0 mb-20 sm:mb-40 text-balance text-right">
        <h4 className="text-lg sm:text-normal font-medium mb-2 text-blue-500">
          Cost
        </h4>
        <h2 className="text-4xl sm:text-5xl font-medium mb-2">
          As cheap as an iPhone
        </h2>
        <h3 className="text-lg sm:text-xl font-normal mb-10 text-neutral-500">
          To achieve mass production we've built a robot for &lt;$1,000 dollars.
        </h3>
      </div>
      {/* The Technology (muscles section) */}
      <div className="w-full max-w-6xl mx-auto px-8 xl:px-0 mb-20 sm:mb-40 text-balance text-left">
        <h4 className="text-lg sm:text-normal font-medium mb-2 text-blue-500">
          Technology
        </h4>
        <h2 className="text-4xl sm:text-5xl font-medium mb-2">
          Proprietary artificial muscles
        </h2>
        <h3 className="text-lg sm:text-xl font-normal mb-10 text-neutral-500">
          Our humanoid is so cheap because we've designed it around low-cost artificial muscles
          from day one.
        </h3>
        <div className="flex flex-row gap-10">
          <div className="border rounded-md p-4 shadow-xl">
            <CircleDollarSign className="text-blue-500 mb-2" />
              <h3 className="text-xl sm:text-2xl font-medium">Low-cost</h3>
              <p className="text-md sm:text-lg text-neutral-500">
                Unlike competitors who use electric actuators our artificial
                muscles are much cheaper, and more human
              </p>
          </div>
          <div className="border rounded-md p-4 shadow-xl">
           <ChartNoAxesCombined className="text-blue-500 mb-2" />
            <h3 className="text-xl sm:text-2xl font-medium">
              Easily mass producible
            </h3>
            <p className="text-md sm:text-lg text-neutral-500">
              Each muscle is just a tube wrapped in braided fibre, and the whole robot is powered by a single pump
            </p>
          </div>
                      {/* designed to scale a graph of exponetial growth */}
            {/* globe,  */}
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
          Never do your chores again
        </h2>
        <h3 className="text-lg sm:text-xl font-normal mb-10 text-neutral-500">
          Only capable of manufacturing a few hundred humanoids per year.  A household robot cannot be a 70kg, $20,000 metal beast.
        </h3>
      </div>
      {/* Somewhere mention that it does your chores? mayeb give examples earlier, playing tennis picking balls?)*/}
      {/* mass > auto -> imagine your in the desert, deep in the forest, deep underwater, middle of the  pacific, theres no infrastructure, imagine you could big a massive solar farm -> the possibilities are endless o */}
      {/* The Team Making it Possible -> we know this isnt' easy, 15 of the best robotics champions */}
      <div className="w-full max-w-6xl mx-auto px-8 xl:px-0 mb-20 sm:mb-40 text-balance text-right">
        <h4 className="text-lg sm:text-normal font-medium mb-2 text-blue-500">
          The Team
        </h4>
        <h2 className="text-4xl sm:text-5xl font-medium mb-2">
          Making the impossible possible
        </h2>
        <h3 className="text-lg sm:text-xl font-normal mb-10 text-neutral-500">
          Speed is the cultural at Piggy Robotics. We're a team of Oxford
          engineers & global robotics competition champions.
        </h3>
      </div>
      {/* Final CTA -> the most capital-efficient humanoid company helps us envision a world where no one does chores ( -> get in contact */}
    </div>
  );
}
