import { useEffect, useState } from "react";

/**
 * Returns the current time as "HH:MM" in the given timezone, refreshing every
 * `intervalMs` (default 30s). Designed for the masthead clock.
 */
export function useLocalTime(timeZone: string, intervalMs = 30_000): string {
  const format = () =>
    new Intl.DateTimeFormat("en-GB", {
      timeZone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(new Date());

  const [time, setTime] = useState(format);

  useEffect(() => {
    const id = window.setInterval(() => setTime(format()), intervalMs);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeZone, intervalMs]);

  return time;
}
