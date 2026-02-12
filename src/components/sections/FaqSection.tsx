"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { FAQ_ITEMS } from "@/lib/constants";

export function FaqSection() {
  return (
    <SectionWrapper id="faq" background="soft">
      <SectionHeading title="Vanliga frågor" />

      <AnimateOnScroll>
        <div className="mx-auto max-w-3xl">
          {FAQ_ITEMS.map((item) => (
            <Accordion
              key={item.question}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </AnimateOnScroll>
    </SectionWrapper>
  );
}
