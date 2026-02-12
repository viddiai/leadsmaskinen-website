"use client";

import { useState, useEffect, useCallback } from "react";

export function useExitIntent() {
  const [triggered, setTriggered] = useState(false);

  const handleMouseLeave = useCallback(
    (e: MouseEvent) => {
      if (triggered) return;
      if (e.clientY <= 0) {
        const shown = sessionStorage.getItem("exit-intent-shown");
        if (!shown) {
          setTriggered(true);
          sessionStorage.setItem("exit-intent-shown", "1");
        }
      }
    },
    [triggered]
  );

  useEffect(() => {
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [handleMouseLeave]);

  const dismiss = useCallback(() => setTriggered(false), []);

  return { triggered, dismiss };
}
