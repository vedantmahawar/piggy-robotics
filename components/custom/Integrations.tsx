"use client";

// React
import { useMemo, useRef } from "react";

// default components
import { AnimatedBeam } from "@/components/ui/animated-beam";

// Next
import Image from "next/image";

export default function Integrations({
  input,
  product,
  output,
  outputLabels,
}: {
  input: string[];
  product: string;
  output: React.ReactNode[];
  outputLabels: string[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);

  const inputRefs = useMemo(
    () => input.map(() => ({ current: null as HTMLDivElement | null })),
    [input.length],
  );
  const outputRefs = useMemo(
    () => output.map(() => ({ current: null as HTMLDivElement | null })),
    [output.length],
  );

  return (
    <div
      ref={containerRef}
      className="relative flex flex-row items-center justify-between w-full max-w-6xl border-2 p-6 rounded-lg bg-[radial-gradient(circle,_rgb(0_0_0_/_0.2)_1px,_transparent_1px)] bg-[size:24px_24px] bg-white"
    >
      <div
        className="absolute -bottom-15 -left-15 h-96 w-96 -z-10 blur-2xl
        bg-radial from-orange-200 to-transparent"
      />
      <div
        className="absolute -bottom-15 -right-15 h-96 w-96 -z-10 blur-2xl
        bg-radial from-sky-200 to-transparent"
      />
      <div className="flex flex-row items-center gap-4">
        <p className="hidden sm:block text-md font-medium text-center">
          Your <br />
          coding <br /> agent
        </p>
        <div className="flex flex-col gap-3">
          {input.map((input, idx) => (
            <div
              key={idx}
              ref={(el) => {
                inputRefs[idx].current = el;
              }}
              className="border-border z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]"
            >
              <Image
                src={input}
                alt={`Logo ${1 + idx}`}
                width={100}
                height={100}
                className="w-24 sm:w-32 pointer-events-none select-none"
              />
            </div>
          ))}
        </div>
      </div>
      <div
        ref={productRef}
        className="border-border z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]"
      >
        <Image
          src={product}
          alt={`Product Logo`}
          width={100}
          height={100}
          className="w-24 sm:w-32 pointer-events-none select-none"
        />
      </div>
      <div>
        <div className="flex flex-col gap-3">
          {output.map((output, idx) => (
            <div
              key={`output-wrapper-${idx}`}
              className="flex flex-row items-center gap-2"
            >
              <div
                ref={(el) => {
                  outputRefs[idx].current = el;
                }}
                className="border-border z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]"
              >
                {output}
              </div>
              <p className="hidden sm:block text-md font-medium">
                {outputLabels[idx]}
              </p>
            </div>
          ))}
        </div>
      </div>
      {input.map((_, idx) => (
        <AnimatedBeam
          key={`input-${idx}`}
          containerRef={containerRef}
          fromRef={inputRefs[idx]}
          toRef={productRef}
        />
      ))}
      {output.map((_, idx) => (
        <AnimatedBeam
          key={`output-${idx}`}
          containerRef={containerRef}
          fromRef={productRef}
          toRef={outputRefs[idx]}
        />
      ))}
    </div>
  );
}
