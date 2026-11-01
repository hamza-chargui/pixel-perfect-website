import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import type { CategoryId } from "@/data/site";
import { Header } from "@/components/joulia/Header";
import { Hero } from "@/components/joulia/Hero";
import { Categories } from "@/components/joulia/Categories";
import { About } from "@/components/joulia/About";
import { Gallery } from "@/components/joulia/Gallery";
import { ContactBanner } from "@/components/joulia/ContactBanner";
import { Footer } from "@/components/joulia/Footer";
import { SearchDialog } from "@/components/joulia/SearchDialog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Joulia Concept + — Meubles & Décoration à Sfax" },
      { name: "description", content: "Mobilier élégant et décoration raffinée à Sfax, Tunisie. Séjours, chambres, salles à manger et décoration." },
      { property: "og:title", content: "Joulia Concept + — L'art de vivre chez soi" },
      { property: "og:description", content: "Mobilier élégant, décoration raffinée pour un intérieur qui vous ressemble." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [filter, setFilter] = useState<CategoryId | "all">("all");
  const [search, setSearch] = useState(false);
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header onSearch={() => setSearch(true)} />
      <main>
        <Hero />
        <Categories onSelect={setFilter} />
        <About />
        <Gallery filter={filter} setFilter={setFilter} />
        <ContactBanner />
      </main>
      <Footer />
      {search && <SearchDialog onClose={() => setSearch(false)} onPick={setFilter} />}
    </div>
  );
}
