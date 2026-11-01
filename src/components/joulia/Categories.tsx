import { ArrowRight, Armchair, BedDouble, Flower2, UtensilsCrossed } from "lucide-react";
import { categories, type CategoryId } from "@/data/site";
import { Reveal } from "./Reveal";

const icons = { sejours: Armchair, chambres: BedDouble, salles: UtensilsCrossed, decoration: Flower2 };

export function Categories({ onSelect }: { onSelect: (id: CategoryId) => void }) {
  return (
    <section id="collections" className="mx-auto max-w-[1400px] scroll-mt-20 px-5 py-6 sm:px-10 lg:px-[4.5rem]">
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5">
        {categories.map((c, i) => {
          const Icon = icons[c.id];
          return (
            <Reveal key={c.id} delay={i * 80}>
              <a
                href="#galerie"
                onClick={() => onSelect(c.id)}
                className="group relative block aspect-[4/3.1] overflow-hidden rounded-md text-primary-foreground shadow-sm"
              >
                <img src={c.image} alt={c.label} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute inset-0 bg-card-overlay" />
                <span className="absolute inset-x-0 bottom-0 flex items-end justify-between p-3 sm:p-4">
                  <span>
                    <Icon className="mb-1 h-6 w-6" strokeWidth={1.2} />
                    <span className="block text-sm sm:text-base">{c.label}</span>
                  </span>
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-background text-foreground transition-transform group-hover:translate-x-0.5">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </span>
              </a>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
