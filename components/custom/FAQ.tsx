// default components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// data
import { FaqItem } from "@/app/data";

export default function FAQ({ data }: { data: FaqItem[] }) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-0"
    >
      {data.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-xl">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance text-lg">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
