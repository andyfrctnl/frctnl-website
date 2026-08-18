import Image from "next/image";
import Link from "next/link";

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center ${className}`}
      aria-label="FRCTNL — home"
    >
      <Image
        src="/brand/frctnl-mark.png"
        alt="FRCTNL"
        width={140}
        height={140}
        priority
        className="h-9 w-9 sm:h-10 sm:w-10"
      />
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
