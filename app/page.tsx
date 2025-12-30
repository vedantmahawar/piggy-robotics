// default components
import { Button } from "@/components/ui/button";
import TextType from "@/components/ui/TextType";

// custom components
import BackedYC from "@/components/custom/BackedYC";
import Integrations from "@/components/custom/Integrations";
import ViewportElement from "@/components/custom/ViewportElement";
import FloatingIcon from "@/components/custom/FloatingIcon";
import FAQ from "@/components/custom/FAQ";
import Waitlist from "@/components/custom/Waitlist";
import ComparsionTable from "@/components/custom/ComparisonTable";

// icons
import {
  Database,
  FingerprintPattern,
  Folder,
  CreditCard,
  Bot,
  Network,
} from "lucide-react";

// icons
import {
  Box,
  Flame,
  ArrowLeftRight,
  BrickWall,
  ArrowRight,
  Mail,
} from "lucide-react";

// data
import { comparisonData } from "@/app/data";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <div className="w-full max-w-6xl mx-auto px-8 xl:px-0 pt-30 pb-20 sm:py-40 text-center text-balance flex flex-col items-center">
        <BackedYC link="https://www.ycombinator.com/companies/piggy-robotics" />
        <h1 className="tracking-tight text-5xl sm:text-6xl font-semibold mb-2">
          Humanoids for the <br /> price of an iPhone
        </h1>
        <h2 className="text-lg sm:text-2xl font-medium mb-4 sm:mb-6">
          We've built a full-size, mass-producible <br />
          humanoid robot in 2 months for &lt;$1000
        </h2>
      </div>
      {/* Our Belief */}
      <div className="w-full max-w-6xl mx-auto px-8 xl:px-0 mb-20 sm:mb-40 text-balance text-center">
        <h4 className="text-lg sm:text-normal font-medium mb-2 text-blue-500">
          Our Vision
        </h4>
        <h2 className="text-4xl sm:text-5xl font-medium mb-2">
          Mass production before autonomy
        </h2>
        <h3 className="text-lg sm:text-xl font-normal mb-10 text-neutral-500">
          To achieve autonomy you need a boatload of data, yet existing humanoid
          companies can only produce a few hundred units per year.
        </h3>
      </div>
      {/* The Technology (muscles section) */}
      <div className="w-full max-w-6xl mx-auto px-8 xl:px-0 mb-20 sm:mb-40 text-balance text-left">
        <h4 className="text-lg sm:text-normal font-medium mb-2 text-blue-500">
          Our Technology
        </h4>
        <h2 className="text-4xl sm:text-5xl font-medium mb-2">
          Proprietary artificial muscles
        </h2>
        <h3 className="text-lg sm:text-xl font-normal mb-10 text-neutral-500">
          Instead of following the usual playbook (raise $100M and spend years
          on actuators), we've designed our humanoid around artificial muscles
          from day one.
        </h3>
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
          A household robot cannot be a 70kg, $20,000 metal beast.
        </h3>
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
        <ComparsionTable data={comparisonData}/>
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
          Only capable of manufacturing a few hundred humanoids per year.
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
      {/* Final CTA -> helps us envision a world where no one does chores ( -> get in contact */}

      <div className="w-full max-w-6xl mx-auto px-8 xl:px-0 mb-20 sm:mb-40 text-balance">
        <div className="grid grid-rows-4 sm:grid-rows-2 sm:grid-cols-2 border border-dashed">
          <div className="p-4 sm:border-r border-b border-dashed">
            <Box color="#f87171" className="mb-2" />
            <h3 className="text-xl sm:text-2xl font-medium">Low-cost</h3>
            <p className="text-md sm:text-lg text-neutral-500">
              Unlike competitors who use electric actuators our artificial
              muscles are much cheaper, and more human
            </p>
          </div>
          <div className="p-4 border-b border-dashed">
            <Flame color="#f87171" className="mb-2" />
            <h3 className="text-xl sm:text-2xl font-medium">22 DOF</h3>
            <p className="text-md sm:text-lg text-neutral-500">
              Designed for high-performance materials, so you never have to
              compromise
            </p>
          </div>
          <div className="p-4 border-b sm:border-b-0 sm:border-r border-dashed">
            <BrickWall color="#f87171" className="mb-2" />
            <h3 className="text-xl sm:text-2xl font-medium">
              1.5m tall build chamber
            </h3>
            <p className="text-md sm:text-lg text-neutral-500">
              Never worry about a part being too large
            </p>
          </div>
          <div className="p-4">
            <ArrowLeftRight color="#f87171" className="mb-2" />
            <h3 className="text-xl sm:text-2xl font-medium">
              Switchable end effectors
            </h3>
            <p className="text-md sm:text-lg text-neutral-500">
              Switch between additive and subtractive manufacturing with ease
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
