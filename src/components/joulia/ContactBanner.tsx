import { ArrowRight } from "lucide-react";
import { contact, images } from "@/data/site";
import { Reveal } from "./Reveal";

export function ContactBanner() {
  return (
    <section id="contact" className="mx-auto max-w-[1400px] scroll-mt-24 px-5 pt-6 pb-6 sm:px-10 lg:px-16">
      <Reveal className="relative overflow-hidden rounded-xl">
        <img src={images.banner} alt="" loading="lazy" width={1920} height={640} className="absolute inset-0 h-full w-full object-cover object-right" />
        <div className="absolute inset-0 bg-banner-overlay" />
        <div className="relative flex flex-col gap-5 px-7 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-16 lg:px-[4.5rem]">
          <h2 className="font-serif text-[1.6rem] font-medium leading-[1.1] sm:text-[1.75rem]">
            Transformez votre intérieur<br />avec Joulia Concept +
          </h2>
          <a href={contact.whatsapp()} target="_blank" rel="noreferrer" className="group inline-flex w-fit items-center gap-3 rounded-full bg-primary px-5 py-2.5 text-[0.72rem] font-medium text-primary-foreground transition-colors hover:bg-walnut">
            Contactez-nous <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
