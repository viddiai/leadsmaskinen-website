"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const BENEFITS = [
  "Formulera ett värdeerbjudande som faktiskt övertygar svenska beslutsfattare",
  "Fånga upp potentiella kunder innan de är redo att köpa",
  "Eliminera friktion som dödar affärer",
  "Bygga systematiskt förtroende genom sociala bevis",
  "Skapa handlingsdriven kommunikation som leder till avslut",
  "Strukturera komplex information utan att överväldiga",
  "Använda avancerade strategier för dramatisk tillväxt",
];

export function GuideSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    // TODO: Connect to email service
    setTimeout(() => setStatus("success"), 1000);
  };

  return (
    <SectionWrapper id="guide" background="white">
      <AnimateOnScroll>
        <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-grey-light bg-white-soft shadow-[var(--shadow-card)]">
          <div className="grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-5 lg:gap-12">
            {/* Cover image */}
            <div className="flex justify-center lg:col-span-2">
              <img
                src="/guide-cover.png"
                alt="7 beprövade sätt att öka konverteringen och vinna fler affärer"
                className="w-full max-w-xs rounded-lg shadow-[var(--shadow-card-hover)]"
              />
            </div>

            {/* Content */}
            <div className="lg:col-span-3">
              <h2 className="font-[family-name:var(--font-display)] text-h3 font-bold text-graphite">
                7 beprövade sätt att öka konverteringen och vinna fler affärer
              </h2>

              <p className="mt-4 font-semibold text-graphite">Denna guide ger dig</p>
              <p className="mt-1 text-sm text-steel">Konkreta verktyg för att:</p>

              <ul className="mt-3 space-y-2">
                {BENEFITS.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2 text-sm text-steel">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange" />
                    {benefit}
                  </li>
                ))}
              </ul>

              <p className="mt-5 flex items-start gap-2 rounded-lg bg-orange-light px-4 py-3 text-sm text-graphite">
                <span className="flex-shrink-0">💡</span>
                Kom ihåg: Varje kapitel avslutas med &quot;3 saker du kan göra imorgon&quot; – konkreta åtgärder som ger omedelbar effekt.
              </p>

              {status === "success" ? (
                <div className="mt-6 rounded-lg bg-success/10 px-4 py-3 text-center font-semibold text-success">
                  Kolla din inkorg – guiden är på väg!
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6">
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <input
                      type="email"
                      required
                      placeholder="Din e-postadress"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 rounded-md border border-grey-light bg-white px-4 py-3 text-sm text-graphite placeholder:text-steel/50 focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20"
                    />
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-md bg-orange px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-orange-hover disabled:opacity-70"
                    >
                      {status === "loading" ? "Skickar..." : "Hämta guiden"}
                    </button>
                  </div>
                  <p className="mt-2 text-xs text-steel">
                    Vi behandlar dina uppgifter enligt vår{" "}
                    <a href="/integritetspolicy/" className="underline hover:text-graphite">
                      integritetspolicy
                    </a>
                    .
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </SectionWrapper>
  );
}
