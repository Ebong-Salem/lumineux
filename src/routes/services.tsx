import { createFileRoute, Link } from "@tanstack/react-router";
import { Home, Building2, Sofa, Hammer, HardHat, Compass, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Lumière Architecture" },
      {
        name: "description",
        content:
          "Architecture résidentielle et commerciale, design d'intérieur, rénovation, suivi de chantier et conseil. Un accompagnement sur mesure.",
      },
      { property: "og:title", content: "Services — Lumière Architecture" },
      { property: "og:description", content: "Six expertises au service de vos projets." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const services = [
  {
    icon: Home,
    title: "Architecture résidentielle",
    body:
      "Villas, maisons individuelles et résidences privées. Un dessin sur mesure, guidé par vos usages et le caractère du lieu.",
  },
  {
    icon: Building2,
    title: "Architecture commerciale",
    body:
      "Bureaux, hôtels, boutiques et équipements. Des espaces professionnels pensés pour l'image et le confort des utilisateurs.",
  },
  {
    icon: Sofa,
    title: "Design d'intérieur",
    body:
      "Aménagement et scénographie intérieure. Mobilier sur mesure, matières nobles et éclairage étudié dans le moindre détail.",
  },
  {
    icon: Hammer,
    title: "Rénovation",
    body:
      "Restructuration et réhabilitation d'ouvrages existants, avec un soin particulier apporté au patrimoine et aux matériaux d'origine.",
  },
  {
    icon: HardHat,
    title: "Suivi de chantier",
    body:
      "Direction d'exécution, coordination des entreprises et contrôle qualité jusqu'à la livraison de votre projet.",
  },
  {
    icon: Compass,
    title: "Conseil",
    body:
      "Études de faisabilité, missions d'assistance à maîtrise d'ouvrage et accompagnement stratégique en amont de vos projets.",
  },
];

function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Six expertises complémentaires."
        intro="De l'étude de faisabilité à la livraison, nous couvrons l'ensemble de la chaîne de conception — avec la même exigence à chaque étape."
      />

      <section className="pb-32">
        <div className="container-x">
          <div className="grid gap-px bg-border border border-border">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal
                  key={s.title}
                  delay={(i % 3) * 80}
                  className="bg-background"
                >
                  <article className="group h-full p-10 md:p-12 flex flex-col">
                    <div className="flex items-start justify-between">
                      <div className="size-14 border border-border flex items-center justify-center text-gold group-hover:bg-ink group-hover:text-bone group-hover:border-ink transition-colors duration-500">
                        <Icon size={22} strokeWidth={1.2} />
                      </div>
                      <span className="font-display text-sm text-muted-foreground">
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="mt-10 font-display text-3xl tracking-tight">
                      {s.title}
                    </h3>
                    <p className="mt-4 text-muted-foreground leading-relaxed flex-1">
                      {s.body}
                    </p>
                    <Link
                      to="/contact"
                      className="mt-10 inline-flex items-center gap-2 text-[0.72rem] tracking-[0.2em] uppercase link-underline self-start"
                    >
                      En savoir plus <ArrowUpRight size={14} />
                    </Link>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-x">
          <Reveal>
            <div className="grid gap-10 md:grid-cols-12 md:items-end border-t border-border pt-16">
              <div className="md:col-span-7">
                <p className="eyebrow">Processus</p>
                <h2 className="mt-6 font-display text-4xl md:text-5xl tracking-tight">
                  Quatre étapes, une méthode.
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-12 md:grid-cols-4">
            {[
              { n: "01", t: "Écoute", d: "Analyse du site, du programme et des envies." },
              { n: "02", t: "Esquisse", d: "Premières intentions, volumes et matières." },
              { n: "03", t: "Développement", d: "Études techniques et permis de construire." },
              { n: "04", t: "Réalisation", d: "Suivi de chantier et livraison." },
            ].map((step, i) => (
              <Reveal key={step.n} delay={i * 80}>
                <div className="border-t border-foreground pt-8">
                  <p className="font-display text-gold text-xl">{step.n}</p>
                  <h3 className="mt-4 font-display text-2xl">{step.t}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {step.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
