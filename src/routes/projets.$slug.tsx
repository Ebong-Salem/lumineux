import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getProject, projects } from "@/lib/projects";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/projets/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData, params }) => {
    const p = loaderData?.project;
    const title = p ? `${p.name} — Lumière Architecture` : "Projet — Lumière Architecture";
    const description = p ? p.description.slice(0, 155) : "";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/projets/${params.slug}` },
        ...(p ? [{ property: "og:image", content: p.cover }] : []),
      ],
      links: [{ rel: "canonical", href: `/projets/${params.slug}` }],
    };
  },
  component: ProjectPage,
  notFoundComponent: () => (
    <div className="min-h-[60vh] flex items-center justify-center container-x pt-40">
      <div className="text-center">
        <p className="eyebrow">Projet introuvable</p>
        <h1 className="mt-6 font-display text-5xl">Ce projet n'existe pas.</h1>
        <Link to="/realisations" className="btn-primary mt-10">
          Voir les réalisations
        </Link>
      </div>
    </div>
  ),
});

function ProjectPage() {
  const { project: p } = Route.useLoaderData();
  const idx = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <>
      {/* BANNER */}
      <section className="relative h-[90svh] min-h-[520px] w-full overflow-hidden bg-ink">
        <img
          src={p.cover}
          alt={p.name}
          width={1600}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/10 to-ink/70" />
        <div className="relative z-10 h-full container-x flex flex-col justify-end pb-16 md:pb-24">
          <Reveal><p className="eyebrow text-gold-soft">{p.type}</p></Reveal>
          <Reveal delay={100}>
            <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl tracking-tight text-bone leading-[0.95]">
              {p.name}
            </h1>
          </Reveal>
        </div>
      </section>

      {/* META */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="container-x grid gap-8 md:grid-cols-4">
          {[
            { label: "Lieu", value: p.city },
            { label: "Type", value: p.type },
            { label: "Surface", value: p.surface },
            { label: "Année", value: p.year },
          ].map((item, i) => (
            <Reveal key={item.label} delay={i * 60}>
              <div>
                <p className="eyebrow">{item.label}</p>
                <p className="mt-3 font-display text-2xl">{item.value}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="py-24 md:py-32">
        <div className="container-x grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <Reveal><p className="eyebrow">Le projet</p></Reveal>
          </div>
          <div className="md:col-span-8">
            <Reveal delay={80}>
              <p className="font-display text-2xl md:text-3xl leading-[1.3] tracking-tight">
                {p.description}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* GALLERY IMAGE FULL */}
      <section className="pb-24 md:pb-32">
        <div className="w-full">
          <Reveal>
            <img
              src={p.gallery[1] ?? p.cover}
              alt=""
              width={1600}
              height={1200}
              loading="lazy"
              className="w-full h-[70vh] object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* OBJECTIVES / CHALLENGES / SOLUTIONS */}
      <section className="pb-24 md:pb-32">
        <div className="container-x grid gap-16 md:grid-cols-3">
          {[
            { title: "Objectifs", list: p.objectives },
            { title: "Défis", list: p.challenges },
            { title: "Solutions", list: p.solutions },
          ].map((block, i) => (
            <Reveal key={block.title} delay={i * 100}>
              <div className="border-t border-foreground pt-8">
                <h3 className="font-display text-2xl tracking-tight">{block.title}</h3>
                <ul className="mt-6 space-y-4">
                  {block.list.map((item: string, j: number) => (
                    <li key={j} className="flex gap-4 text-muted-foreground">
                      <span className="text-gold font-display shrink-0">0{j + 1}</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SECOND FULL IMAGE */}
      <section className="pb-24 md:pb-32">
        <div className="container-x grid gap-6 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={p.gallery[2] ?? p.cover}
                alt=""
                width={1600}
                height={1200}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal className="md:col-span-5 md:mt-24" delay={100}>
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={p.gallery[0] ?? p.cover}
                alt=""
                width={1600}
                height={1200}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* RESULT */}
      <section className="pb-32">
        <div className="container-x grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <Reveal><p className="eyebrow">Résultat</p></Reveal>
          </div>
          <div className="md:col-span-8">
            <Reveal delay={80}>
              <p className="font-display text-2xl md:text-3xl leading-[1.3]">
                {p.result}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* NEXT */}
      <section className="pb-32">
        <div className="container-x flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-t border-border pt-12">
          <Link
            to="/realisations"
            className="inline-flex items-center gap-3 text-[0.78rem] tracking-[0.18em] uppercase link-underline"
          >
            <ArrowLeft size={14} /> Toutes les réalisations
          </Link>
          <Link
            to="/projets/$slug"
            params={{ slug: next.slug }}
            className="group text-right"
          >
            <p className="eyebrow">Projet suivant</p>
            <p className="mt-3 font-display text-3xl md:text-4xl inline-flex items-center gap-4">
              {next.name}
              <ArrowRight
                size={20}
                className="transition-transform duration-500 group-hover:translate-x-2"
              />
            </p>
          </Link>
        </div>
      </section>
    </>
  );
}
