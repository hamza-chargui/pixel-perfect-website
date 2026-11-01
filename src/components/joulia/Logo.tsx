export function Logo({ tagline = false }: { tagline?: boolean }) {
  return (
    <span className="inline-flex flex-col items-center leading-none">
      <span className="font-serif text-[2rem] tracking-[0.02em] sm:text-[2.3rem]">JOULIA</span>
      <span className="mt-0.5 text-[0.62rem] tracking-[0.45em] pl-[0.45em]">CONCEPT</span>
      {tagline && <span className="mt-1.5 text-[0.48rem] tracking-[0.2em]">MEUBLES &amp; DÉCORATION</span>}
    </span>
  );
}
