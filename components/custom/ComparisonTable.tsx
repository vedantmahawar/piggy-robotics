import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { ComparisonData } from "@/app/data";

import { BorderBeam } from "@/components/ui/border-beam";

export default function ComparsionTable({ data }: { data: ComparisonData }) {
  return (
    <div className="relative rounded-md">
      <div
        className="absolute -bottom-15 -left-15 h-90 w-96 -z-10 blur-3xl
        bg-radial from-orange-200/80 to-transparent"
      />
      <div
        className="absolute -bottom-15 -right-15 h-90 w-90 -z-10 blur-3xl
        bg-radial from-sky-200/80 to-transparent"
      />
      <Table className="bg-[#f9f9f9]">
        <TableHeader>
          <TableRow>
            <TableHead className="text-left">Features</TableHead>
            {data.competitors.map((competitor) => (
              <TableHead
                key={competitor.name}
                className={`text-center ${competitor.highlighted ? "bg-[#f0f0f0] text-black" : ""}`}
              >
                {competitor.name}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody className="text-neutral-500">
          {data.features.map((feature, rowIndex) => (
            <TableRow key={feature}>
              <TableCell className="font-medium text-left">{feature}</TableCell>
              {data.competitors.map((competitor, colIndex) => (
                <TableCell
                  key={`${competitor.name}-${colIndex}`}
                  className={`text-center ${competitor.highlighted ? "font-medium bg-[#f0f0f0] text-black" : ""}`}
                >
                  {competitor.values[rowIndex] === false
                    ? "—"
                    : competitor.values[rowIndex]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <BorderBeam
        borderWidth={2}
        duration={15}
        colorFrom="#a3a3a3"
        colorTo="#909090ff"
      />
      <BorderBeam
        delay={7.5}
        borderWidth={2}
        duration={15}
        colorFrom="#a3a3a3"
        colorTo="#909090ff"
      />
    </div>
  );
}
