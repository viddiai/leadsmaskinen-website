"use client";

import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { HERO } from "@/lib/constants";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-white-soft to-white"
    >
      {/* Jigsaw pattern background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "url(/jigsaw.svg)",
          backgroundSize: "192px 192px",
        }}
      />

      {/* Subtle decorative circles */}
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-orange/5 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-orange/5 blur-3xl" />

      <div
        className="relative mx-auto text-center"
        style={{
          maxWidth: "var(--max-w-content)",
          padding: "8rem clamp(1rem, 3vw, 2rem) 4rem",
        }}
      >
        <AnimateOnScroll>
          <span className="inline-block rounded-full bg-orange-light px-4 py-1.5 text-sm font-medium text-orange">
            {HERO.badge}
          </span>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <h1 className="text-hero mx-auto mt-6 max-w-4xl font-[family-name:var(--font-display)] font-extrabold text-graphite">
            {HERO.title}
          </h1>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2}>
          <p className="text-body-lg mx-auto mt-6 max-w-2xl text-steel">
            {HERO.subtitle}
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.3}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="#cta-final" size="lg">
              {HERO.cta}
            </Button>
            <Button href="#process" variant="ghost" size="lg">
              {HERO.ctaSecondary} &darr;
            </Button>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.4}>
          <p className="mt-8 text-sm text-steel/70">{HERO.trust}</p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
