import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/a-propos", label: "À propos" },
  { to: "/services", label: "Services" },
  { to: "/realisations", label: "Réalisations" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
          <span className="font-display text-xl tracking-tight text-foreground">
            Lumière
          </span>
          <span className="hairline hidden sm:inline-block" />
          <span className="hidden sm:inline text-[0.68rem] tracking-[0.28em] uppercase text-muted-foreground">
            Architecture
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="link-underline text-[0.78rem] tracking-[0.18em] uppercase text-foreground/80 hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/contact" className="btn-primary hidden md:inline-flex text-[0.7rem]!">
            Demander un devis
          </Link>
          <button
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            className="lg:hidden inline-flex size-11 items-center justify-center text-foreground"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-500 ${
          open ? "max-h-[100vh]" : "max-h-0"
        }`}
      >
        <nav className="container-x flex flex-col gap-6 py-10 border-t border-border">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="font-display text-3xl text-foreground"
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-4 self-start">
            Demander un devis
          </Link>
        </nav>
      </div>
    </header>
  );
}
