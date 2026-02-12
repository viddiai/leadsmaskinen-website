"use client";

import { Target, LayoutTemplate, Workflow } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { PROCESS_STEPS } from "@/lib/constants";

const iconMap = { Target, LayoutTemplate, Workflow } as const;

export function ProcessSection() {
  return (
    <SectionWrapper id="process">
      <SectionHeading
        title="Så här bygger vi din leadmotor – steg för steg."
        subtitle="Tre steg. En komplett kedja. Från okänd kontakt till kvalificerat möte."
      />

      <div className="relative grid gap-8 lg:grid-cols-3">
        {/* Connecting line (desktop only) */}
        <div className="absolute top-16 left-[16.67%] right-[16.67%] hidden h-0.5 bg-grey-light lg:block" />

        {PROCESS_STEPS.map((step, i) => {
          const Icon = iconMap[step.icon as keyof typeof iconMap];
          return (
            <AnimateOnScroll key={step.step} delay={i * 0.15}>
              <div className="relative text-center">
                {/* Step circle */}
                <div className="relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-orange text-white shadow-lg">
                  <Icon className="h-7 w-7" />
                </div>

                {/* Step number */}
                <span className="mb-2 inline-block text-sm font-bold uppercase tracking-wider text-orange">
                  Steg {step.step}
                </span>

                <h3 className="text-h3 mb-3 font-semibold text-graphite">
                  {step.title}
                </h3>
                <p className="text-body mx-auto max-w-xs text-steel">
                  {step.description}
                </p>
              </div>
            </AnimateOnScroll>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
