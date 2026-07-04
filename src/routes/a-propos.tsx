import { createFileRoute } from "@tanstack/react-router";
import studioImg from "@/assets/studio.jpg";
import interior1 from "@/assets/interior-1.jpg";
import { Reveal } from "@/components/site/Reveal";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — Lumière Architecture" },
      {
        name: "description",
        content:
          "Découvrez le cabinet Lumière Architecture, notre mission, notre vision et les valeurs qui guident nos projets depuis 2007.",
      },
      { property: "og:title", content: "À propos — Lumière Architecture" },
      { property: "og:description", content: "Notre mission, notre vision, nos valeurs." },
      { property: "og:url", content: "/a-propos" },
    ],
    links: [{ rel: "canonical", href: "/a-propos" }],
  }),
  component: About,
});

const values = [
  {
    title: "Écoute",
    body:
      "Chaque projet commence par une conversation. Comprendre les usages, les envies et le contexte est notre point de départ.",
  },
  {
    title: "Rigueur",
    body:
      "De la faisabilité à la livraison, nous portons une attention constante aux délais, aux budgets et à la qualité d'exécution.",
  },
  {
    title: "Matière",
    body:
      "Nous privilégions des matériaux sincères, choisis pour leur pérennité, leur texture et la manière dont ils captent la lumière.",
  },
  {
    title: "Sobriété",
    body:
      "Nous cherchons la juste réponse plutôt que le geste spectaculaire. La beauté naît de la clarté du dessin.",
  },
];

function About() {
  return (
    <>
      <PageHeader
        eyebrow="À propos"
        title="Un cabinet à taille humaine, une exigence sans compromis."
        intro="Fondé à Paris en 2007, Lumière Architecture réunit une équipe pluridisciplinaire au service de projets résidentiels, tertiaires et culturels en France et à l'international."
      />

      <section className="pb-24">
        <div className="container-x">
          <Reveal>
            <div className="img-zoom aspect-[16/9] md:aspect-[21/9]">
              <img
                src={studioImg}
                alt="Studio Lumière Architecture à Paris"
                width={1600}
                height={1200}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="py-24 md:py-32">
        <div className="container-x grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <Reveal><p className="eyebrow">Notre mission</p></Reveal>
          </div>
          <div className="md:col-span-8">
            <Reveal delay={80}>
              <p className="font-display text-2xl md:text-4xl leading-[1.2] tracking-tight">
                Concevoir des lieux justes — ancrés dans leur territoire,
                accordés à leurs usagers, ouverts sur la lumière — et
                accompagner nos clients avec une exigence constante, du
                premier croquis à la remise des clés.
              </p>
            </Reveal>
          </div>
        </div>
        <div className="container-x grid gap-16 md:grid-cols-12 mt-20">
          <div className="md:col-span-4">
            <Reveal><p className="eyebrow">Notre vision</p></Reveal>
          </div>
          <div className="md:col-span-8">
            <Reveal delay={80}>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                Nous croyons à une architecture sobre et généreuse : sobre
                dans ses moyens, ses matériaux et son empreinte ; généreuse
                dans les usages, les vues et les expériences qu'elle offre.
                Nous plaçons la lumière naturelle, la qualité des matériaux
                et la relation au paysage au cœur de chacun de nos projets.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section className="py-24 md:py-32 bg-sand">
        <div className="container-x">
          <div className="max-w-2xl">
            <Reveal><p className="eyebrow">Valeurs</p></Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-display text-4xl md:text-6xl tracking-tight">
                Quatre convictions qui guident notre travail.
              </h2>
            </Reveal>
          </div>
          <div className="mt-20 grid gap-x-10 gap-y-16 md:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="border-t border-border pt-8">
                  <div className="flex items-baseline gap-6">
                    <span className="font-display text-gold text-2xl">
                      0{i + 1}
                    </span>
                    <h3 className="font-display text-3xl tracking-tight">{v.title}</h3>
                  </div>
                  <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECOND IMAGE */}
      <section className="py-24 md:py-32">
        <div className="container-x grid gap-16 lg:grid-cols-2 items-center">
          <div>
            <Reveal><p className="eyebrow">Le studio</p></Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-display text-4xl md:text-5xl leading-[1.1] tracking-tight">
                Un atelier ouvert, où le dessin reste le langage commun.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 text-muted-foreground leading-relaxed max-w-lg">
                Nos bureaux parisiens accueillent une équipe d'une quinzaine
                de collaborateurs : architectes, designers, chefs de projet,
                paysagistes. Nous privilégions la collaboration directe avec
                les artisans, les ingénieurs et les entreprises pour garantir
                la fidélité de l'exécution au projet dessiné.
              </p>
            </Reveal>
          </div>
          <Reveal delay={80}>
            <div className="img-zoom aspect-[4/5]">
              <img
                src={interior1}
                alt="Espace intérieur lumineux"
                width={1600}
                height={1200}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
