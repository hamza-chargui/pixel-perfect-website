import { ArrowRight, Gem, Heart, Home } from "lucide-react";
import { images } from "@/data/site";
import { Reveal } from "./Reveal";

const values = [
  { icon: Gem, label: "Qualité\nPremium" },
  { icon: Home, label: "Design Élégant" },
  { icon: Heart, label: "Confort Absolu" },
];

export function About() {
  return (
    <section id="a-propos" className="mt-6 grid scroll-mt-20 bg-secondary/40 lg:grid-cols-[46%_1fr]">
      <img src={images.about} alt="Chambre élégante Joulia Concept +" loading="lazy" width={1024} height={768} className="h-72 w-full object-cover sm:h-96 lg:h-full lg:min-h-[340px]" />
      <Reveal className="grid items-center gap-10 px-5 py-14 sm:px-10 md:grid-cols-[1fr_auto] lg:px-12 xl:pr-[4.5rem]">
        <div>
          <p className="eyebrow flex items-center gap-3">À propos de Joulia Concept + <span className="h-px w-20 bg-foreground/30" /></p>
          <h2 className="mt-5 font-serif text-[2.1rem] font-medium leading-[1.05] sm:text-[2.6rem]">
            Une passion pour<br />le beau et le bien-être
          </h2>
          <p className="mt-5 max-w-sm text-[0.82rem] leading-relaxed text-muted-foreground">
            Chez Joulia Concept +, nous croyons que chaque intérieur raconte une histoire. Notre mission est de vous offrir des meubles de qualité, un design raffiné et un confort inégalé.
          </p>
          <a href="#contact" className="group mt-7 inline-flex items-center gap-3 rounded-full bg-primary px-5 py-2.5 text-[0.72rem] font-medium text-primary-foreground transition-colors hover:bg-walnut">
            En savoir plus <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        <ul className="flex flex-wrap gap-6 md:flex-col md:gap-7 md:border-l md:border-foreground/25 md:pl-7">
          {values.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-3 text-[0.82rem]">
              <Icon className="h-6 w-6 shrink-0" strokeWidth={1.2} />
              <span className="whitespace-pre-line leading-tight">{label}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
