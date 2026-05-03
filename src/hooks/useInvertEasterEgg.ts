import { useEffect } from "react";

/**
 * Press 'i' (no modifiers) to toggle a global palette inversion.
 * Pure DOM side effect — no state stored in React.
 */
export function useInvertEasterEgg(): void {
  useEffect(() => {
    let inverted = false;
    const handler = (e: KeyboardEvent) => {
      if (e.key !== "i" || e.metaKey || e.ctrlKey || e.altKey) return;
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      inverted = !inverted;
      document.documentElement.style.filter = inverted
        ? "invert(1) hue-rotate(180deg)"
        : "";
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);
}
