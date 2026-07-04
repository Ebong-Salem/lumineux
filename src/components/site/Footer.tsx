import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-ink text-bone mt-32">
      <div className="container-x py-24">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-baseline gap-3">
              <span className="font-display text-3xl">Lumière</span>
              <span className="text-[0.68rem] tracking-[0.28em] uppercase text-bone/60">
                Architecture
              </span>
            </div>
            <p className="mt-8 max-w-md text-bone/70 leading-relaxed">
              Cabinet d'architecture indépendant, nous concevons des lieux
              habités par la lumière — résidences, espaces professionnels et
              projets sur mesure.
            </p>
          </div>

          <div className="lg:col-span-3">
            <p className="eyebrow text-gold-soft">Studio</p>
            <address className="mt-6 not-italic text-bone/75 leading-loose">
              18 rue des Arts<br />
              75008 Paris, France
            </address>
            <a
              href="tel:+33142000000"
              className="mt-4 block link-underline text-bone/75 hover:text-bone"
            >
              +33 1 42 00 00 00
            </a>
            <a
              href="mailto:studio@lumiere-architecture.fr"
              className="mt-1 block link-underline text-bone/75 hover:text-bone"
            >
              studio@lumiere-architecture.fr
            </a>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow text-gold-soft">Navigation</p>
            <ul className="mt-6 space-y-3 text-bone/75">
              <li><Link to="/a-propos" className="link-underline">À propos</Link></li>
              <li><Link to="/services" className="link-underline">Services</Link></li>
              <li><Link to="/realisations" className="link-underline">Réalisations</Link></li>
              <li><Link to="/contact" className="link-underline">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow text-gold-soft">Suivre</p>
            <div className="mt-6 flex gap-4">
              <a href="#" aria-label="Instagram" className="size-10 inline-flex items-center justify-center border border-bone/20 hover:bg-bone hover:text-ink transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" aria-label="LinkedIn" className="size-10 inline-flex items-center justify-center border border-bone/20 hover:bg-bone hover:text-ink transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="#" aria-label="Facebook" className="size-10 inline-flex items-center justify-center border border-bone/20 hover:bg-bone hover:text-ink transition-colors">
                <Facebook size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-bone/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[0.72rem] tracking-[0.14em] uppercase text-bone/50">
          <p>© {new Date().getFullYear()} Lumière Architecture — Tous droits réservés</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-bone">Mentions légales</a>
            <a href="#" className="hover:text-bone">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
