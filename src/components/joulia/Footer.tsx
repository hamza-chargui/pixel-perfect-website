import { ArrowUp, MapPin, Phone } from "lucide-react";
import { contact, navLinks } from "@/data/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-6 bg-espresso text-espresso-foreground">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-10 lg:px-[4.5rem]">
        <div className="flex flex-col items-center gap-8 py-8 lg:flex-row lg:justify-between">
          <a href="#accueil" aria-label="Retour à l'accueil"><Logo tagline /></a>
          <nav className="flex flex-wrap justify-center text-[0.72rem]">
            {navLinks.map((l, i) => (
              <a key={l.href} href={l.href} className={`px-3 hover:opacity-70 ${i ? "border-l border-espresso-foreground/40" : ""}`}>{l.label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-8 text-[0.72rem]">
            <a href={`tel:+${contact.phoneIntl}`} className="flex items-center gap-2 hover:opacity-70"><Phone className="h-4 w-4" /> {contact.phone}</a>
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {contact.location}</span>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 border-t border-espresso-foreground/15 py-4 text-[0.62rem]">
          <p>© {new Date().getFullYear()} Joulia Concept +. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <span>Conçu avec ♡ par <strong className="tracking-wide">ORIGIN</strong></span>
            <a href="#accueil" aria-label="Haut de page" className="grid h-8 w-8 place-items-center rounded-full border border-espresso-foreground/40 hover:bg-espresso-foreground/10"><ArrowUp className="h-3.5 w-3.5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
