"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const API_URL =
  "https://konverteringsoptimerare-production.up.railway.app/api";

export interface CriterionAnalysis {
  criterion: string;
  criterion_label: string;
  score: number;
  explanation: string;
}

export interface LeadMagnet {
  text: string;
  url: string;
  type: string;
  is_gated: boolean;
}

export interface FormData {
  id: string;
  action: string;
  method: string;
  fields: { type: string; name: string; placeholder?: string; required?: boolean }[];
  submit_text: string;
  type: string;
  has_email_field: boolean;
  has_name_field: boolean;
}

export interface CtaButton {
  text: string;
  tag: string;
  href: string;
}

export interface ReportData {
  report_id: number;
  url: string;
  company_name: string;
  company_description: string;
  overall_score: number;
  issues_count: number;
  detected_industry: string;
  industry_label: string;
  short_description: string;
  logical_verdict: string | null;
  final_hook: string;
  lead_magnets_analysis: string | null;
  forms_analysis: string | null;
  cta_analysis: string | null;
  criteria_explanations: Record<string, string>;
  lead_magnets: LeadMagnet[];
  forms: FormData[];
  cta_buttons: CtaButton[];
  social_proof: unknown[];
  criteria_analysis: CriterionAnalysis[];
  summary_assessment: string;
  recommendations: string[];
  ai_generated: boolean;
  created_at: string;
}

type ReportState = "loading" | "error" | "ready";

const MAX_POLLS = 30;
const POLL_INTERVAL = 2000;

export function useReport(id: string | null, token: string | null) {
  const [state, setState] = useState<ReportState>("loading");
  const [report, setReport] = useState<ReportData | null>(null);
  const [error, setError] = useState("");
  const pollCountRef = useRef(0);
  const pollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const fetchReport = useCallback(
    async (isPolling = false) => {
      if (!id || !token) {
        setError("Ingen rapport-ID eller token angiven");
        setState("error");
        return;
      }

      try {
        const res = await fetch(
          `${API_URL}/report/${id}?token=${token}`
        );

        if (!res.ok) {
          const data = await res.json().catch(() => null);
          throw new Error(
            data?.detail || "Kunde inte ladda rapporten"
          );
        }

        const data: ReportData = await res.json();
        setReport(data);
        setState("ready");

        // Poll if AI analysis not complete
        if (!data.ai_generated && pollCountRef.current < MAX_POLLS) {
          pollCountRef.current++;
          pollTimerRef.current = setTimeout(() => {
            fetchReport(true);
          }, POLL_INTERVAL);
        }
      } catch (err) {
        if (!isPolling) {
          setError(
            err instanceof Error ? err.message : "Något gick fel"
          );
          setState("error");
        }
      }
    },
    [id, token]
  );

  useEffect(() => {
    if (id && token) {
      pollCountRef.current = 0;
      fetchReport();
    }

    return () => {
      if (pollTimerRef.current) {
        clearTimeout(pollTimerRef.current);
      }
    };
  }, [id, token, fetchReport]);

  return { state, report, error };
}
