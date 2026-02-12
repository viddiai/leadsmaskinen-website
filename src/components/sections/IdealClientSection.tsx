"use client";

import { Check, X } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { IDEAL_FIT, POOR_FIT } from "@/lib/constants";

export function IdealClientSection() {
  return (
    <SectionWrapper id="ideal-client" background="soft">
      <SectionHeading
        title="Vi passar bäst för..."
        subtitle="Leadsmaskinen är byggd för specifika B2B-företag. Är du rätt match?"
      />

      <div className="mx-auto grid max-w-3xl gap-8 lg:grid-cols-2">
        <AnimateOnScroll delay={0}>
          <div className="rounded-lg border-2 border-success/30 bg-success/5 p-6">
            <h3 className="text-h3 mb-4 flex items-center gap-2 font-semibold text-graphite">
              <Check className="h-6 w-6 text-success" />
              Bra match
            </h3>
            <ul className="space-y-3">
              {IDEAL_FIT.map((item) => (
                <li key={item} className="flex gap-3 text-body">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                  <span className="text-steel">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.15}>
          <div className="rounded-lg border-2 border-red-200 bg-red-50 p-6">
            <h3 className="text-h3 mb-4 flex items-center gap-2 font-semibold text-graphite">
              <X className="h-6 w-6 text-red-400" />
              Passar sämre
            </h3>
            <ul className="space-y-3">
              {POOR_FIT.map((item) => (
                <li key={item} className="flex gap-3 text-body">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
                  <span className="text-steel">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimateOnScroll>
      </div>
    </SectionWrapper>
  );
}
