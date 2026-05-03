import { useEffect, useRef } from "react";

/**
 * Custom cursor: a dot tracking the mouse + a lagging ring.
 * Adds a `.hover` class to both when the pointer is over an interactive element.
 * Disabled on touch/coarse-pointer devices via CSS.
 */
export function Cursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    const tick = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      raf = requestAnimationFrame(tick);
    };

    document.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);

    // Hover state for interactive targets (event delegation on document)
    const HOVER_SELECTOR =
      "a, button, .work-row, .discipline, .stack-cell, .pill, .nav-link";

    const onOver = (e: Event) => {
      const target = e.target as Element | null;
      if (target && target.closest(HOVER_SELECTOR)) {
        dot.classList.add("hover");
        ring.classList.add("hover");
      }
    };
    const onOut = (e: Event) => {
      const target = e.target as Element | null;
      if (target && target.closest(HOVER_SELECTOR)) {
        dot.classList.remove("hover");
        ring.classList.remove("hover");
      }
    };

    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}
