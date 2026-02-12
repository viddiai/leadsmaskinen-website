"use client";

import { useState } from "react";
import { X, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useExitIntent } from "@/hooks/useExitIntent";

export function ExitIntentModal() {
  const { triggered, dismiss } = useExitIntent();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to webhook/backend
    console.log("Exit intent lead:", { email });
    setSubmitted(true);
    setTimeout(dismiss, 2500);
  };

  if (!triggered) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-graphite/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-md rounded-xl bg-white p-8 shadow-2xl">
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 text-steel hover:text-graphite cursor-pointer"
          aria-label="Stäng"
        >
          <X className="h-5 w-5" />
        </button>

        {!submitted ? (
          <>
            <span className="inline-block rounded-full bg-orange-light px-3 py-1 text-xs font-medium text-orange">
              Gratis guide
            </span>
            <h2 className="text-h3 mt-4 font-bold text-graphite">
              Innan du går – ladda ner vår guide
            </h2>
            <p className="mt-2 text-body text-steel">
              7 beprövade sätt att öka konverteringen och vinna fler B2B-affärer.
            </p>
            <form onSubmit={handleSubmit} className="mt-6 space-y-3">
              <input
                type="email"
                placeholder="Din e-postadress"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-md border border-grey-light px-4 py-3 text-graphite placeholder:text-steel/50 focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20"
              />
              <Button fullWidth>Ladda ner guiden gratis</Button>
            </form>
            <p className="mt-3 text-center text-xs text-steel/50">
              Vi delar aldrig din e-post.
            </p>
          </>
        ) : (
          <div className="text-center py-4">
            <Check className="mx-auto h-10 w-10 text-success" />
            <h2 className="text-h3 mt-3 font-semibold text-graphite">Tack!</h2>
            <p className="mt-1 text-body text-steel">
              Kolla din inbox.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
