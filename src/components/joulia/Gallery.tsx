import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { categories, gallery, type CategoryId } from "@/data/site";
import { Reveal } from "./Reveal";

export function Gallery({ filter, setFilter }: { filter: CategoryId | "all"; setFilter: (f: CategoryId | "all") => void }) {
  const items = filter === "all" ? gallery.slice(0, 4) : gallery.filter((g) => g.category === filter);
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((o) => (o! + 1) % items.length);
      if (e.key === "ArrowLeft") setOpen((o) => (o! - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, items.length]);

  const tabs: { id: CategoryId | "all"; label: string }[] = [{ id: "all", label: "Tout" }, ...categories];

  return (
    <section id="galerie" className="mx-auto max-w-[1400px] scroll-mt-20 px-5 pt-8 pb-8 sm:px-10 lg:px-16">
      <Reveal className="text-center">
        <p className="eyebrow flex items-center justify-center gap-6"><span className="h-px w-24 bg-foreground/30" />Nos collections<span className="h-px w-24 bg-foreground/30" /></p>
        <h2 className="mt-2 font-serif text-[2.2rem] font-medium sm:text-[2.6rem]">Des espaces inspirants</h2>
        <div className="mt-3 flex flex-wrap justify-center gap-x-5 gap-y-1 text-[0.75rem]">
          {tabs.map((t) => (
            <button key={t.id} onClick={() => setFilter(t.id)} className={`py-1 transition-colors ${filter === t.id ? "border-b border-foreground text-foreground" : "text-muted-foreground hover:text-foreground"}`}>
              {t.label}
            </button>
          ))}
        </div>
      </Reveal>
      <div className="mt-5 grid grid-cols-2 gap-2.5 lg:grid-cols-4">
        {items.map((g, i) => (
          <Reveal key={g.alt} delay={i * 80}>
            <button onClick={() => setOpen(i)} aria-label={`Agrandir : ${g.alt}`} className="group relative block aspect-[4/3] w-full overflow-hidden">
              <img src={g.image} alt={g.alt} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <span className="absolute right-3 bottom-3 grid h-5 w-5 place-items-center rounded-full bg-background/90 text-foreground"><ArrowRight className="h-3 w-3" /></span>
            </button>
          </Reveal>
        ))}
      </div>

      {open !== null && items[open] && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-espresso/90 p-4 animate-in fade-in" onClick={() => setOpen(null)}>
          <button aria-label="Fermer" className="absolute top-5 right-5 text-espresso-foreground"><X className="h-7 w-7" /></button>
          <button aria-label="Précédente" onClick={(e) => { e.stopPropagation(); setOpen((open - 1 + items.length) % items.length); }} className="absolute left-3 text-espresso-foreground sm:left-8"><ChevronLeft className="h-9 w-9" /></button>
          <figure onClick={(e) => e.stopPropagation()} className="max-w-5xl">
            <img src={items[open].image} alt={items[open].alt} className="max-h-[80vh] w-auto rounded-sm object-contain" />
            <figcaption className="mt-3 text-center font-serif text-xl text-espresso-foreground">{items[open].alt}</figcaption>
          </figure>
          <button aria-label="Suivante" onClick={(e) => { e.stopPropagation(); setOpen((open + 1) % items.length); }} className="absolute right-3 text-espresso-foreground sm:right-8"><ChevronRight className="h-9 w-9" /></button>
        </div>
      )}
    </section>
  );
}
