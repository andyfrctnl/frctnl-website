import Link from "next/link";

/**
 * Text-based recreation of the FRCTNL mark (condensed, notched-corner wordmark).
 * The client's source logo file is a pasted image we don't have as an asset —
 * swap this for the real SVG/PNG in public/ once it's exported.
 */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`font-display inline-flex items-center text-2xl tracking-wide text-on-dark ${className}`}
      aria-label="FRCTNL — home"
    >
      FRCTNL
    </Link>
  );
}

export function Badge({ size = 40 }: { size?: number }) {
  return (
    <div
      className="notch-sm flex flex-none items-center justify-center bg-signal"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <span
        className="font-display text-ink"
        style={{ fontSize: size * 0.42, lineHeight: 1 }}
      >
        F
      </span>
    </div>
  );
}
