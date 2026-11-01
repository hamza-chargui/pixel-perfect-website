import { ArrowRight, Mouse } from "lucide-react";
import { images } from "@/data/site";

export function Hero() {
  return (
    <section id="accueil" className="relative flex min-h-[640px] items-center overflow-hidden text-primary-foreground lg:h-[100svh] lg:max-h-[860px]">
      <img src={images.hero} alt="Showroom Joulia Concept +" width={1920} height={960} className="absolute inset-0 h-full w-full object-cover object-[65%_center]" />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative mx-auto w-full max-w-[1400px] px-5 pt-24 pb-24 sm:px-10 lg:px-[4.5rem]">
        <div className="max-w-xl animate-rise">
          <p className="eyebrow flex items-center gap-4">Joulia Concept + <span className="h-px w-36 bg-primary-foreground/40" /></p>
          <h1 className="mt-6 font-serif text-[3.4rem] font-medium leading-[0.95] sm:text-[4.6rem] lg:text-[5.2rem]">
            L'art de vivre<br />chez soi.
          </h1>
          <p className="mt-7 max-w-sm text-[1.05rem] leading-relaxed text-primary-foreground/90">
            Mobilier élégant, décoration raffinée pour un intérieur qui vous ressemble.
          </p>
          <a href="#collections" className="group mt-8 inline-flex items-center gap-3 rounded-full bg-background px-7 py-3.5 text-[0.82rem] font-medium text-foreground transition-all hover:bg-secondary hover:shadow-lg">
            Découvrir nos collections <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        <a href="#collections" className="absolute bottom-8 left-5 flex items-center gap-2 text-[0.72rem] hover:opacity-70 sm:left-10 lg:left-[4.5rem]">
          <Mouse className="h-6 w-6 animate-bounce" strokeWidth={1.2} /> Scroller
        </a>
      </div>
    </section>
  );
}
