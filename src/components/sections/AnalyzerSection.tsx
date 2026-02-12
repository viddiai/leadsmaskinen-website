"use client";

import { useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  Loader2,
  Star,
  RotateCcw,
} from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { useAnalyzer, type AnalyzeResult } from "@/hooks/useAnalyzer";

function MiniStarRating({ score }: { score: number }) {
  const rounded = Math.round(score);
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rounded ? "fill-orange text-orange" : "text-grey-light"}`}
        />
      ))}
      <span className="ml-1 text-sm font-medium text-steel">
        {score.toFixed(1)}/5
      </span>
    </div>
  );
}

function CompactResult({
  result,
  onReset,
}: {
  result: AnalyzeResult;
  onReset: () => void;
}) {
  return (
    <Card>
      {/* Header row */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="font-semibold text-graphite">
            {result.company_name || "Analysresultat"}
          </h3>
          {result.industry_label && (
            <span className="text-xs font-medium uppercase tracking-wider text-orange">
              {result.industry_label}
            </span>
          )}
        </div>
        <MiniStarRating score={result.overall_score} />
      </div>

      {/* Top issues preview */}
      {result.logical_errors.length > 0 && (
        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2 text-sm font-medium text-graphite">
            <AlertTriangle className="h-4 w-4 text-red-500" />
            {result.issues_count || result.logical_errors.length} problem
            identifierade
          </div>
          <ul className="space-y-1.5">
            {result.logical_errors.slice(0, 3).map((error, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-steel">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                {error}
              </li>
            ))}
            {result.logical_errors.length > 3 && (
              <li className="text-sm text-steel/60">
                +{result.logical_errors.length - 3} till...
              </li>
            )}
          </ul>
        </div>
      )}

      {/* CTA */}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button href={`/konverteringsanalys/`}>
          Se fullständig analys <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <button
          onClick={onReset}
          className="flex items-center gap-1.5 text-sm text-steel hover:text-graphite cursor-pointer"
        >
          <RotateCcw className="h-3.5 w-3.5" /> Testa en annan
        </button>
      </div>
    </Card>
  );
}

export function AnalyzerSection() {
  const analyzer = useAnalyzer();
  const [hasFocused, setHasFocused] = useState(false);

  return (
    <SectionWrapper id="analysera" background="soft">
      <AnimateOnScroll>
        <SectionHeading
          title="Testa din webbsida gratis"
          subtitle="Ange din URL och få en AI-driven analys av vad som hindrar din webbsida från att konvertera besökare till leads."
        />
      </AnimateOnScroll>

      <AnimateOnScroll delay={0.1}>
        <div className="mx-auto max-w-xl">
          {/* Input state */}
          {(analyzer.state === "idle" || analyzer.state === "loading") && (
            <Card>
              <div className="flex gap-3">
                <input
                  type="url"
                  placeholder="https://din-webbsida.se"
                  value={analyzer.url}
                  onChange={(e) => analyzer.setUrl(e.target.value)}
                  onFocus={() => setHasFocused(true)}
                  onKeyDown={(e) =>
                    e.key === "Enter" &&
                    analyzer.state === "idle" &&
                    analyzer.analyze()
                  }
                  disabled={analyzer.state === "loading"}
                  className="flex-1 rounded-md border border-grey-light px-4 py-3 text-graphite placeholder:text-steel/50 focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20 disabled:opacity-50"
                />
                <Button
                  onClick={analyzer.analyze}
                  className={analyzer.state === "loading" ? "opacity-70" : ""}
                >
                  {analyzer.state === "loading" ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    "Analysera"
                  )}
                </Button>
              </div>
              {analyzer.error && (
                <p className="mt-2 text-sm text-red-500">{analyzer.error}</p>
              )}
              {analyzer.state === "loading" && (
                <p className="mt-3 text-center text-sm text-steel">
                  Analyserar webbsidan... detta kan ta upp till 30 sekunder.
                </p>
              )}
              {hasFocused && analyzer.state === "idle" && !analyzer.error && (
                <p className="mt-2 text-xs text-steel/60">
                  Gratis. Ingen registrering krävs.
                </p>
              )}
            </Card>
          )}

          {/* Result */}
          {analyzer.state === "result" && analyzer.result && (
            <CompactResult
              result={analyzer.result}
              onReset={analyzer.reset}
            />
          )}

          {/* Lead form states redirect to full page */}
          {(analyzer.state === "leadForm" ||
            analyzer.state === "submitting" ||
            analyzer.state === "done") && (
            <Card className="text-center py-8">
              <p className="text-body text-steel">Omdirigerar...</p>
            </Card>
          )}
        </div>
      </AnimateOnScroll>
    </SectionWrapper>
  );
}
