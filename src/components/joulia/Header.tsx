import { useEffect, useState } from "react";
import { Menu, MapPin, Phone, Search, ShoppingBag, X } from "lucide-react";
import { contact, navLinks } from "@/data/site";
import { Logo } from "./Logo";

export function Header({ onSearch }: { onSearch: () => void }) {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#accueil");

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const left = navLinks.filter((l) => l.label === "Accueil" || l.label === "Collections");
  const right = navLinks.filter((l) => !left.includes(l));
  const link = (l: (typeof navLinks)[number]) => (
    <a
      key={l.href}
      href={l.href}
      onClick={() => setActive(l.href)}
      className={`relative py-1 text-[0.8rem] transition-opacity hover:opacity-70 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:bg-current after:transition-transform ${active === l.href ? "after:scale-x-100" : "after:scale-x-0"}`}
    >
      {l.label}
    </a>
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${solid ? "bg-background/95 text-foreground shadow-sm backdrop-blur" : "text-primary-foreground"}`}
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-[1fr_auto_1fr] items-center px-5 py-4 sm:px-10 lg:px-[4.5rem]">
        <div className="flex items-center gap-8">
          <button aria-label="Ouvrir le menu" className="lg:hidden" onClick={() => setOpen(true)}>
            <Menu className="h-6 w-6" />
          </button>
          <div className="hidden items-center gap-5 text-[0.7rem] xl:flex">
            <a href={`tel:+${contact.phoneIntl}`} className="flex items-center gap-2 hover:opacity-70">
              <Phone className="h-4 w-4" /> {contact.phone}
            </a>
            <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> {contact.location}</span>
          </div>
          <nav className="ml-auto hidden gap-8 lg:flex">{left.map(link)}</nav>
        </div>
        <a href="#accueil" aria-label="Joulia Concept + accueil" className="mx-8 lg:mx-14"><Logo /></a>
        <div className="flex items-center gap-8">
          <nav className="hidden gap-8 lg:flex">{right.map(link)}</nav>
          <div className="ml-auto flex items-center gap-4">
            <button aria-label="Rechercher" onClick={onSearch} className="hover:opacity-70"><Search className="h-5 w-5" /></button>
            <a aria-label="Commander sur WhatsApp" href={contact.whatsapp()} target="_blank" rel="noreferrer" className="hover:opacity-70"><ShoppingBag className="h-5 w-5" /></a>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-background text-foreground animate-in fade-in">
          <div className="flex items-center justify-between px-5 py-4">
            <Logo />
            <button aria-label="Fermer le menu" onClick={() => setOpen(false)}><X className="h-6 w-6" /></button>
          </div>
          <nav className="flex flex-1 flex-col items-center justify-center gap-7">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="font-serif text-4xl">{l.label}</a>
            ))}
          </nav>
          <div className="flex justify-center gap-6 pb-10 text-sm text-muted-foreground">
            <a href={`tel:+${contact.phoneIntl}`}>{contact.phone}</a><span>{contact.location}</span>
          </div>
        </div>
      )}
    </header>
  );
}
