import { useMemo } from "react";

export function Footer() {
  const lastUpdated = useMemo(
    () =>
      new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "short",
        day: "2-digit",
      })
        .format(new Date())
        .toUpperCase(),
    []
  );

  return (
    <footer>
      <div className="wrap">
        <div className="footer-inner">
          <span>© {new Date().getFullYear()} Emmanuel Danladi</span>
          <span>Made in Kaduna, NG</span>
          <span>Last updated: {lastUpdated}</span>
        </div>
      </div>
    </footer>
  );
}
