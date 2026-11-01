// Central content & image registry — replace temporary photos with client photos here.
import hero from "@/assets/hero-showroom.jpg";
import living from "@/assets/living-room.jpg";
import bedroom from "@/assets/bedroom.jpg";
import dining from "@/assets/dining-room.jpg";
import decoration from "@/assets/decoration.jpg";
import salon from "@/assets/salon-grand.jpg";
import banner from "@/assets/banner-sofa.jpg";

export const contact = {
  phone: "26 935 477",
  phoneIntl: "21626935477",
  location: "Sfax, Tunisie",
  whatsapp: (msg = "Bonjour Joulia Concept +, je souhaite des informations.") =>
    `https://wa.me/21626935477?text=${encodeURIComponent(msg)}`,
};

export const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Collections", href: "#collections" },
  { label: "À propos", href: "#a-propos" },
  { label: "Galerie", href: "#galerie" },
  { label: "Contact", href: "#contact" },
];

export const images = { hero, about: bedroom, banner };

export type CategoryId = "sejours" | "chambres" | "salles" | "decoration";

export const categories: { id: CategoryId; label: string; image: string }[] = [
  { id: "sejours", label: "Séjours", image: living },
  { id: "chambres", label: "Chambres", image: bedroom },
  { id: "salles", label: "Salles à manger", image: dining },
  { id: "decoration", label: "Décoration", image: decoration },
];

export const gallery: { image: string; alt: string; category: CategoryId }[] = [
  { image: salon, alt: "Grand salon lumineux", category: "sejours" },
  { image: dining, alt: "Salle à manger en noyer", category: "salles" },
  { image: bedroom, alt: "Chambre aux tons beiges", category: "chambres" },
  { image: living, alt: "Séjour avec canapé bouclé", category: "sejours" },
  { image: decoration, alt: "Vases et objets décoratifs", category: "decoration" },
  { image: hero, alt: "Showroom Joulia Concept +", category: "sejours" },
];
