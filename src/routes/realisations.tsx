import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";
import { Reveal } from "@/components/site/Reveal";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/realisations")({
  head: () => ({
    meta: [
      { title: "Réalisations — Lumière Architecture" },
      {
        name: "description",
        content:
          "Découvrez une sélection de projets signés Lumière Architecture : villas, résidences, tertiaire et design d'intérieur.",
      },
      { property: "og:title", content: "Réalisations — Lumière Architecture" },
      { property: "og:description", content: "Une sélection de nos projets récents." },
      { property: "og:url", content: "/realisations" },
    ],
    links: [{ rel: "canonical", href: "/realisations" }],
  }),
  component: Realisations,
});

function Realisations() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Réalisations"
        intro="Une sélection de projets récents, résidentiels et tertiaires, en France et à l'international."
      />

      <section className="pb-32">
        <div className="container-x">
          <div className="grid gap-x-10 gap-y-24 md:grid-cols-2">
            {projects.map((p, i) => (
              <Reveal
                key={p.slug}
                delay={(i % 2) * 100}
                className={i % 3 === 0 ? "md:mt-0" : i % 3 === 1 ? "md:mt-24" : "md:mt-12"}
              >
                <Link
                  to="/projets/$slug"
                  params={{ slug: p.slug }}
                  className="group block"
                >
                  <div className="img-zoom aspect-[4/5] bg-muted">
                    <img
                      src={p.cover}
                      alt={p.name}
                      width={1600}
                      height={1200}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="mt-8 grid grid-cols-12 gap-4 items-start">
                    <div className="col-span-9">
                      <p className="eyebrow">{p.year} — {p.type}</p>
                      <h3 className="mt-3 font-display text-3xl md:text-4xl tracking-tight">
                        {p.name}
                      </h3>
                      <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted-foreground">
                        <span>{p.city}</span>
                        <span>{p.surface}</span>
                      </div>
                    </div>
                    <div className="col-span-3 flex justify-end pt-2">
                      <span className="inline-flex size-12 items-center justify-center border border-border group-hover:bg-ink group-hover:text-bone group-hover:border-ink transition-colors duration-500">
                        <ArrowUpRight size={16} />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
