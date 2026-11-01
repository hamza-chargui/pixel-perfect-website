import { useState } from "react";
import { X } from "lucide-react";
import { categories, type CategoryId } from "@/data/site";

export function SearchDialog({ onClose, onPick }: { onClose: () => void; onPick: (id: CategoryId) => void }) {
  const [q, setQ] = useState("");
  const norm = (s: string) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const res = categories.filter((c) => norm(c.label).includes(norm(q)));
  return (
    <div className="fixed inset-0 z-[60] bg-espresso/60 p-4 pt-24 animate-in fade-in" onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} className="mx-auto max-w-lg rounded-lg bg-background p-6 shadow-xl">
        <div className="flex items-center gap-3 border-b pb-3">
          <input autoFocus value={q} onChange={(e) => setQ(e.target.value)} placeholder="Rechercher une collection…" className="flex-1 bg-transparent font-serif text-2xl outline-none" />
          <button aria-label="Fermer" onClick={onClose}><X className="h-5 w-5" /></button>
        </div>
        <ul className="mt-3">
          {res.map((c) => (
            <li key={c.id}>
              <a href="#galerie" onClick={() => { onPick(c.id); onClose(); }} className="flex items-center gap-4 rounded p-2 hover:bg-secondary">
                <img src={c.image} alt="" className="h-12 w-16 rounded object-cover" /> {c.label}
              </a>
            </li>
          ))}
          {!res.length && <li className="p-2 text-sm text-muted-foreground">Aucun résultat.</li>}
        </ul>
      </div>
    </div>
  );
}
