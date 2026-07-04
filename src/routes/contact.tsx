import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Check, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Lumière Architecture" },
      {
        name: "description",
        content:
          "Contactez le cabinet Lumière Architecture pour discuter de votre projet. Devis, rendez-vous en studio ou visite sur site.",
      },
      { property: "og:title", content: "Contact — Lumière Architecture" },
      { property: "og:description", content: "Parlons de votre prochain lieu." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 800);
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Parlons de votre projet."
        intro="Écrivez-nous, appelez le studio, ou prenez rendez-vous pour une première rencontre à Paris. Nous répondons sous 48 h."
      />

      <section className="pb-32">
        <div className="container-x grid gap-16 lg:grid-cols-12">
          {/* FORM */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="border-t border-foreground pt-10">
                {sent ? (
                  <div className="min-h-[420px] flex flex-col items-start justify-center">
                    <div className="size-14 border border-gold text-gold flex items-center justify-center">
                      <Check size={22} />
                    </div>
                    <h2 className="mt-8 font-display text-4xl md:text-5xl tracking-tight">
                      Votre message a bien été envoyé.
                    </h2>
                    <p className="mt-4 text-muted-foreground max-w-md">
                      Nous vous répondrons rapidement, généralement sous 48 heures ouvrées.
                    </p>
                    <button
                      onClick={() => setSent(false)}
                      className="btn-ghost mt-10"
                    >
                      Envoyer un nouveau message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="space-y-10">
                    <div className="grid gap-10 md:grid-cols-2">
                      <Field label="Nom" name="name" required />
                      <Field label="Téléphone" name="phone" type="tel" />
                    </div>
                    <div className="grid gap-10 md:grid-cols-2">
                      <Field label="E-mail" name="email" type="email" required />
                      <div>
                        <label className="eyebrow block">Type de projet</label>
                        <select
                          name="type"
                          required
                          defaultValue=""
                          className="mt-4 w-full bg-transparent border-0 border-b border-input py-3 text-foreground focus:outline-none focus:border-foreground transition-colors"
                        >
                          <option value="" disabled>Sélectionner…</option>
                          <option>Architecture résidentielle</option>
                          <option>Architecture commerciale</option>
                          <option>Design d'intérieur</option>
                          <option>Rénovation</option>
                          <option>Conseil</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="eyebrow block">Message</label>
                      <textarea
                        name="message"
                        rows={5}
                        required
                        placeholder="Parlez-nous de votre projet…"
                        className="mt-4 w-full bg-transparent border-0 border-b border-input py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground transition-colors resize-none"
                      />
                    </div>
                    <button type="submit" disabled={loading} className="btn-primary disabled:opacity-60">
                      {loading ? "Envoi en cours…" : "Envoyer le message"}
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>

          {/* INFO */}
          <div className="lg:col-span-5 lg:pl-8">
            <Reveal delay={100}>
              <div className="bg-ink text-bone p-10 md:p-12">
                <p className="eyebrow text-gold-soft">Studio Paris</p>
                <h3 className="mt-6 font-display text-3xl leading-tight">
                  Nous vous recevons sur rendez-vous.
                </h3>

                <ul className="mt-10 space-y-6 text-bone/85">
                  <li className="flex gap-4">
                    <MapPin className="text-gold-soft shrink-0 mt-1" size={18} />
                    <span>18 rue des Arts<br />75008 Paris, France</span>
                  </li>
                  <li className="flex gap-4">
                    <Phone className="text-gold-soft shrink-0 mt-1" size={18} />
                    <a href="tel:+33142000000" className="link-underline">+33 1 42 00 00 00</a>
                  </li>
                  <li className="flex gap-4">
                    <Mail className="text-gold-soft shrink-0 mt-1" size={18} />
                    <a href="mailto:studio@lumiere-architecture.fr" className="link-underline">
                      studio@lumiere-architecture.fr
                    </a>
                  </li>
                </ul>

                <div className="mt-12 pt-8 border-t border-bone/15">
                  <p className="eyebrow text-gold-soft">Horaires</p>
                  <p className="mt-4 text-bone/80 leading-relaxed">
                    Lundi — Vendredi<br />
                    9 h 00 — 19 h 00
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow block">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-4 w-full bg-transparent border-0 border-b border-input py-3 text-foreground focus:outline-none focus:border-foreground transition-colors"
      />
    </div>
  );
}
