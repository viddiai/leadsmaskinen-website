import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SITE } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Integritetspolicy",
};

export default function IntegritetspolicyPage() {
  return (
    <SectionWrapper className="min-h-screen pt-32">
      <div className="prose mx-auto max-w-3xl">
        <h1 className="text-h1 font-[family-name:var(--font-display)] font-extrabold text-graphite">
          Integritetspolicy
        </h1>
        <p className="text-body text-steel mt-4">
          Senast uppdaterad: februari 2026
        </p>

        <h2 className="text-h3 mt-8 font-semibold text-graphite">
          1. Ansvarig
        </h2>
        <p className="text-body text-steel">
          {SITE.name} ({SITE.founder}) är ansvarig för behandlingen av
          personuppgifter som beskrivs i denna policy.
        </p>

        <h2 className="text-h3 mt-8 font-semibold text-graphite">
          2. Vilka uppgifter vi samlar in
        </h2>
        <p className="text-body text-steel">
          Vi samlar in uppgifter som du frivilligt lämnar till oss via formulär
          på vår webbplats, såsom namn och e-postadress. Vi samlar även in
          teknisk information som IP-adress och webbläsartyp via cookies och
          analysverktyg.
        </p>

        <h2 className="text-h3 mt-8 font-semibold text-graphite">
          3. Syfte med behandlingen
        </h2>
        <p className="text-body text-steel">
          Vi använder dina uppgifter för att besvara förfrågningar, skicka
          begärt material (guider, analyser), och förbättra vår webbplats och
          våra tjänster.
        </p>

        <h2 className="text-h3 mt-8 font-semibold text-graphite">
          4. Laglig grund
        </h2>
        <p className="text-body text-steel">
          Behandlingen baseras på ditt samtycke (artikel 6.1a GDPR) när du
          skickar in formulär, och på berättigat intresse (artikel 6.1f) för
          webbplatsanalys.
        </p>

        <h2 className="text-h3 mt-8 font-semibold text-graphite">
          5. Dina rättigheter
        </h2>
        <p className="text-body text-steel">
          Du har rätt att begära tillgång till, rättelse av, eller radering av
          dina personuppgifter. Kontakta oss på{" "}
          <a href={`mailto:${SITE.email}`} className="text-orange hover:underline">
            {SITE.email}
          </a>{" "}
          för att utöva dina rättigheter.
        </p>

        <h2 className="text-h3 mt-8 font-semibold text-graphite">
          6. Cookies
        </h2>
        <p className="text-body text-steel">
          Vi använder cookies för att analysera trafik och förbättra
          användarupplevelsen. Du kan hantera dina cookie-inställningar i din
          webbläsare.
        </p>

        <h2 className="text-h3 mt-8 font-semibold text-graphite">
          7. Kontakt
        </h2>
        <p className="text-body text-steel">
          Frågor om denna integritetspolicy besvaras via{" "}
          <a href={`mailto:${SITE.email}`} className="text-orange hover:underline">
            {SITE.email}
          </a>
          .
        </p>
      </div>
    </SectionWrapper>
  );
}
