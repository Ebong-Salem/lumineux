import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import studioImg from "@/assets/studio.jpg";
import { projects } from "@/lib/projects";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lumière Architecture — Nous concevons des espaces qui inspirent" },
      {
        name: "description",
        content:
          "Cabinet d'architecture contemporain. Résidentiel, tertiaire, design d'intérieur et suivi de chantier. Découvrez nos réalisations.",
      },
    ],
  }),
  component: Home,
});

const stats = [
  { value: "120+", label: "Projets réalisés" },
  { value: "18", label: "Années d'expérience" },
  { value: "25", label: "Architectes partenaires" },
  { value: "98%", label: "Clients satisfaits" },
];

const testimonials = [
  {
    quote:
      "Un accompagnement d'une rare exigence. Chaque détail a été pensé avec finesse, du premier croquis à la remise des clés.",
    author: "Camille Rousseau",
    role: "Villa Horizon — Saint-Tropez",
  },
  {
    quote:
      "Lumière Architecture a su traduire notre vision avec une élégance rare. Le résultat dépasse nos attentes.",
    author: "Julien Marchand",
    role: "Résidence Atlas — Marseille",
  },
  {
    quote:
      "Une équipe à l'écoute, rigoureuse, et un sens du détail que l'on retrouve rarement. Nous recommandons sans réserve.",
    author: "Élise Bertrand",
    role: "Espace Horizon — Lyon",
  },
];

function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const el = heroRef.current;
      if (!el) return;
      const y = window.scrollY;
      if (y < window.innerHeight) {
        el.style.transform = `translate3d(0, ${y * 0.25}px, 0) scale(${1 + y * 0.0004})`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const featured = projects.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink">
        <div ref={heroRef} className="absolute inset-0 will-change-transform">
          <img
            src={heroImg}
            alt="Villa contemporaine baignée par la lumière du couchant"
            width={1920}
            height={1280}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/10 to-ink/70" />
        </div>

        <div className="relative z-10 h-full container-x flex flex-col justify-end pb-16 md:pb-24">
          <Reveal>
            <p className="eyebrow text-gold-soft">Lumière Architecture — Depuis 2007</p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.92] tracking-tight text-bone max-w-5xl">
              Nous concevons des espaces qui inspirent.
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 max-w-xl text-bone/85 text-lg leading-relaxed">
              Architecture contemporaine, design d'intérieur et accompagnement
              sur mesure pour vos projets résidentiels et professionnels.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/realisations" className="btn-light">
                Découvrir nos réalisations <ArrowRight size={14} />
              </Link>
              <Link
                to="/contact"
                className="btn-light"
                style={{ background: "transparent", color: "var(--bone)" }}
              >
                Nous contacter
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-8 right-6 md:right-12 z-10 text-bone/60 text-[0.65rem] tracking-[0.28em] uppercase">
          Défiler
        </div>
      </section>

      {/* INTRO / MANIFESTO */}
      <section className="py-28 md:py-40">
        <div className="container-x grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <Reveal>
              <p className="eyebrow">Le cabinet</p>
            </Reveal>
          </div>
          <div className="md:col-span-8">
            <Reveal delay={80}>
              <p className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.15] tracking-tight">
                Depuis près de deux décennies, nous imaginons des lieux
                habités par la lumière, ancrés dans leur territoire et pensés
                pour durer. Chaque projet est un dialogue — entre les usages,
                la matière et le paysage.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <Link
                to="/a-propos"
                className="mt-10 inline-flex items-center gap-3 text-[0.78rem] tracking-[0.18em] uppercase link-underline"
              >
                Découvrir notre approche <ArrowUpRight size={14} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="pb-28 md:pb-40">
        <div className="container-x">
          <div className="flex items-end justify-between mb-16">
            <div>
              <Reveal>
                <p className="eyebrow">Sélection</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-6 font-display text-4xl md:text-6xl tracking-tight">
                  Projets récents
                </h2>
              </Reveal>
            </div>
            <Reveal delay={160} className="hidden md:block">
              <Link
                to="/realisations"
                className="text-[0.78rem] tracking-[0.18em] uppercase link-underline inline-flex items-center gap-2"
              >
                Toutes les réalisations <ArrowRight size={14} />
              </Link>
            </Reveal>
          </div>

          <div className="grid gap-x-8 gap-y-20 md:grid-cols-12">
            {featured.map((p, i) => (
              <Reveal
                key={p.slug}
                delay={i * 100}
                className={
                  i === 0
                    ? "md:col-span-7"
                    : i === 1
                    ? "md:col-span-5 md:mt-32"
                    : "md:col-span-8 md:col-start-3"
                }
              >
                <Link to="/projets/$slug" params={{ slug: p.slug }} className="group block">
                  <div className="img-zoom aspect-[4/3] bg-muted">
                    <img
                      src={p.cover}
                      alt={p.name}
                      width={1600}
                      height={1200}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="mt-6 flex items-baseline justify-between gap-6">
                    <div>
                      <h3 className="font-display text-2xl md:text-3xl tracking-tight">{p.name}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {p.city} — {p.type}
                      </p>
                    </div>
                    <ArrowUpRight
                      className="shrink-0 text-foreground transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                      size={22}
                    />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SPLIT */}
      <section className="py-28 md:py-40 bg-sand">
        <div className="container-x grid gap-16 lg:grid-cols-2 items-center">
          <Reveal>
            <div className="img-zoom aspect-[4/5]">
              <img
                src={studioImg}
                alt="Le studio Lumière Architecture"
                width={1600}
                height={1200}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <div>
            <Reveal><p className="eyebrow">À propos</p></Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05]">
                Une architecture qui écoute avant de dessiner.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 text-muted-foreground leading-relaxed max-w-lg">
                Fondé en 2007 à Paris, notre cabinet réunit architectes,
                designers et ingénieurs autour d'une même conviction : chaque
                lieu mérite une réponse singulière. Nous accompagnons nos
                clients de l'esquisse à la livraison, avec une attention
                constante portée à la matière, à la lumière et à l'usage.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <Link to="/a-propos" className="btn-ghost mt-10">
                En savoir plus
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-28 md:py-32 bg-ink text-bone">
        <div className="container-x">
          <div className="grid gap-12 md:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <div className="border-t border-bone/15 pt-8">
                  <p className="font-display text-6xl md:text-7xl text-bone">
                    {s.value}
                  </p>
                  <p className="mt-4 text-[0.75rem] tracking-[0.2em] uppercase text-bone/60">
                    {s.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 md:py-40">
        <div className="container-x">
          <Reveal><p className="eyebrow">Témoignages</p></Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 font-display text-4xl md:text-6xl tracking-tight max-w-3xl">
              Ils nous ont fait confiance.
            </h2>
          </Reveal>

          <div className="mt-20 grid gap-10 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.author} delay={i * 100}>
                <figure className="h-full flex flex-col">
                  <span className="font-display text-5xl text-gold leading-none">"</span>
                  <blockquote className="mt-6 font-display text-xl leading-relaxed flex-1">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-8 pt-6 border-t border-border">
                    <p className="text-sm font-medium">{t.author}</p>
                    <p className="text-xs text-muted-foreground mt-1 tracking-wide">
                      {t.role}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-32">
        <div className="container-x">
          <Reveal>
            <div className="bg-ink text-bone px-8 py-20 md:px-20 md:py-28 text-center">
              <p className="eyebrow text-gold-soft">Votre projet</p>
              <h2 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl tracking-tight max-w-4xl mx-auto leading-[1.05]">
                Parlons de votre prochain lieu.
              </h2>
              <Link to="/contact" className="btn-light mt-12">
                Demander un devis <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
