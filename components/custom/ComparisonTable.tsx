import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { ComparisonData } from "@/app/data";

import { BorderBeam } from "@/components/ui/border-beam"

export default function ComparsionTable({ data }: { data: ComparisonData }) {
  return (
    <div className="relative rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-left">Features</TableHead>
            {data.competitors.map((competitor) => (
              <TableHead
                key={competitor.name}
                className={`text-center ${competitor.highlighted ? "bg-neutral-200 text-black" : ""}`}
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
                  className={`text-center ${competitor.highlighted ? "font-medium bg-neutral-200 text-black" : ""}`}
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
      <BorderBeam borderWidth={2} duration={15} colorFrom="#a3a3a3" colorTo="#909090ff" />
      <BorderBeam delay={7.5} borderWidth={2} duration={15} colorFrom="#a3a3a3" colorTo="#909090ff" />
    </div>
  );
}
