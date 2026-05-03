import { useEffect, useRef, useState } from "react";

/**
 * Returns a ref + visible flag.
 * Element fades/slides in once it enters the viewport (one-shot).
 *
 * Usage:
 *   const { ref, visible } = useReveal<HTMLDivElement>();
 *   <div ref={ref} className={`reveal ${visible ? "visible" : ""}`} />
 */
export function useReveal<T extends Element = HTMLElement>(options?: {
  threshold?: number;
  rootMargin?: string;
}) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: options?.threshold ?? 0.15,
        rootMargin: options?.rootMargin ?? "0px 0px -80px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options?.threshold, options?.rootMargin]);

  return { ref, visible };
}
