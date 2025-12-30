import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { ComparisonData } from "@/app/data";

export default function ComparisonTable({ data }: { data: ComparisonData }) {
  return (
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
  );
}
