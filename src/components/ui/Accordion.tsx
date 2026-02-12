"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionProps {
  question: string;
  answer: string;
}

export function Accordion({ question, answer }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-grey-light">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-5 text-left cursor-pointer"
      >
        <span className="text-h3 pr-4 font-semibold text-graphite">
          {question}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-steel transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-body text-steel">{answer}</p>
      </div>
    </div>
  );
}
