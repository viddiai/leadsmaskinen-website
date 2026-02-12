"use client";

import { X, Check } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { COMPARISON } from "@/lib/constants";

export function ComparisonSection() {
  return (
    <SectionWrapper id="comparison">
      <SectionHeading
        title="Varför inte en traditionell byrå?"
        subtitle="Resultatbaserad betalning ger gemensamma incitament – inte fler timmar."
      />

      {/* Desktop table */}
      <AnimateOnScroll>
        <div className="mx-auto max-w-4xl overflow-hidden rounded-lg border border-grey-light bg-white shadow-[var(--shadow-card)] hidden md:block">
          <table className="w-full">
            <thead>
              <tr className="border-b border-grey-light bg-white-soft">
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-steel">
                  &nbsp;
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-steel">
                  Traditionell byrå
                </th>
                <th className="border-l-2 border-orange px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-orange">
                  Leadsmaskinen
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row, i) => (
                <tr
                  key={row.dimension}
                  className={i < COMPARISON.length - 1 ? "border-b border-grey-light" : ""}
                >
                  <td className="px-6 py-4 font-medium text-graphite">
                    {row.dimension}
                  </td>
                  <td className="px-6 py-4 text-steel">
                    <span className="flex items-center gap-2">
                      <X className="h-4 w-4 shrink-0 text-red-400" />
                      {row.agency}
                    </span>
                  </td>
                  <td className="border-l-2 border-orange px-6 py-4 text-graphite font-medium">
                    <span className="flex items-center gap-2">
                      <Check className="h-4 w-4 shrink-0 text-success" />
                      {row.leadsmaskinen}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AnimateOnScroll>

      {/* Mobile stacked cards */}
      <div className="space-y-4 md:hidden">
        {COMPARISON.map((row, i) => (
          <AnimateOnScroll key={row.dimension} delay={i * 0.08}>
            <div className="rounded-lg border border-grey-light bg-white p-5">
              <span className="text-sm font-semibold text-graphite">
                {row.dimension}
              </span>
              <div className="mt-3 flex items-start gap-2 text-sm text-steel">
                <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                <span>{row.agency}</span>
              </div>
              <div className="mt-2 flex items-start gap-2 text-sm font-medium text-graphite">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                <span>{row.leadsmaskinen}</span>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}
