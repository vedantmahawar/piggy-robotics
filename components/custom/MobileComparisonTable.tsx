"use client";

// default components
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// icons
import { ChevronLeft, ChevronRight } from "lucide-react";

// data
import { ComparisonData } from "@/app/data";

// React
import { useState } from "react";

export default function MobileComparsionTable({
  data,
}: {
  data: ComparisonData;
}) {
  const [competitor, setCompetitor] = useState(1);

  const piggyData = data.competitors[0];
  const competitorData = data.competitors[competitor];

  const handlePrev = () => {
    setCompetitor((prev) =>
      prev === 1 ? data.competitors.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCompetitor((prev) =>
      prev === data.competitors.length - 1 ? 1 : prev + 1,
    );
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between bg-[#f9f9f9] rounded-md border border-neutral-300 p-4">
        <button onClick={handlePrev} className="p-1">
          <ChevronLeft className="size-5" />
        </button>
        <div className="text-center">
          <p className="text-xs text-neutral-500">Comparing against</p>
          <p className="font-medium">{competitorData.name}</p>
        </div>
        <button onClick={handleNext} className="p-1">
          <ChevronRight className="size-5" />
        </button>
      </div>
      {data.features.map((feature, featureIndex) => (
        <Table key={feature} className="bg-[#f9f9f9]">
          <TableHeader>
            <TableRow>
              <TableHead colSpan={2} className="text-left font-medium">
                {feature}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="w-1/2 text-center bg-[#f0f0f0] font-medium text-black">
                <p className="text-xs text-neutral-500 mb-1">
                  {piggyData.name}
                </p>
                <p>
                  {piggyData.values[featureIndex] === false
                    ? "—"
                    : piggyData.values[featureIndex]}
                </p>
              </TableCell>
              <TableCell className="w-1/2 text-center">
                <p className="text-xs text-neutral-500 mb-1">
                  {competitorData.name}
                </p>
                <p>
                  {competitorData.values[featureIndex] === false
                    ? "—"
                    : competitorData.values[featureIndex]}
                </p>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      ))}
    </div>
  );
}
