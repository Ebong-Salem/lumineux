import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
};

export function PageHeader({ eyebrow, title, intro }: Props) {
  return (
    <section className="pt-40 pb-16 md:pt-48 md:pb-24">
      <div className="container-x">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <Reveal>
              <p className="eyebrow">{eyebrow}</p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
                {title}
              </h1>
            </Reveal>
          </div>
          {intro && (
            <div className="md:col-span-5 md:pb-4">
              <Reveal delay={160}>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-md md:ml-auto">
                  {intro}
                </p>
              </Reveal>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
