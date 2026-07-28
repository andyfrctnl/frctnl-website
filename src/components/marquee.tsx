export function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-forest-line/60 bg-forest/40 py-4">
      <div className="flex w-max animate-marquee gap-10 motion-reduce:animate-none">
        {loop.map((item, i) => (
          <span
            key={i}
            className="font-display flex items-center gap-10 whitespace-nowrap text-2xl text-on-dark-muted sm:text-3xl"
          >
            {item}
            <span className="text-signal" aria-hidden="true">
              ·
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
