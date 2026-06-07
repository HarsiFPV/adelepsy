import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, ExternalLink, Phone } from "lucide-react";

const CALENDAR_URL = "https://app.cal.eu/adelepincemaille-psy-5bqwyr/30min";
const EMBED_URL = `${CALENDAR_URL}?embed=true&layout=month_view`;

export const Route = createFileRoute("/rendez-vous")({
  head: () => ({
    meta: [
      { title: "Prendre rendez-vous — Adèle Pincemaille, Psychologue" },
      {
        name: "description",
        content:
          "Prenez rendez-vous en ligne ou par téléphone avec Adèle Pincemaille, psychologue clinicienne à Vendenheim.",
      },
    ],
  }),
  component: RendezVousPage,
});

function RendezVousPage() {
  return (
    <section className="container-wide py-16 sm:py-24">
      <header className="mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-accent">Réservation</p>
        <h1 className="mt-4 font-serif text-5xl text-foreground sm:text-6xl">
          Prendre rendez-vous
        </h1>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          Consultez les disponibilités et choisissez directement le créneau qui vous convient.
        </p>
      </header>

      <div className="mx-auto mt-10 flex max-w-3xl flex-col gap-4 rounded-lg border border-border/60 bg-secondary/40 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-accent/15 p-3">
            <Phone className="h-5 w-5 text-accent" aria-hidden="true" />
          </div>
          <div>
            <p className="font-serif text-lg text-foreground">Vous préférez appeler ?</p>
            <p className="text-sm text-muted-foreground">
              Laissez un message si nécessaire, je vous rappellerai.
            </p>
          </div>
        </div>
        <a
          href="tel:+33749217835"
          className="inline-flex shrink-0 items-center justify-center rounded-md border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
        >
          07 49 21 78 35
        </a>
      </div>

      <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-xl border border-border/60 bg-card shadow-sm">
        <div className="flex items-center gap-3 border-b border-border/60 px-5 py-4 sm:px-7">
          <div className="rounded-full bg-accent/15 p-2.5">
            <CalendarDays className="h-5 w-5 text-accent" aria-hidden="true" />
          </div>
          <div>
            <h2 className="font-serif text-xl text-foreground">Choisir un créneau</h2>
            <p className="text-sm text-muted-foreground">
              La réservation est confirmée directement dans l’agenda.
            </p>
          </div>
        </div>

        <iframe
          src={EMBED_URL}
          title="Agenda de prise de rendez-vous d’Adèle Pincemaille"
          className="h-[760px] w-full bg-white sm:h-[820px]"
          loading="eager"
          allow="payment"
        />
      </div>

      <p className="mx-auto mt-5 max-w-2xl text-center text-sm text-muted-foreground">
        L’agenda ne s’affiche pas ?{" "}
        <a
          href={CALENDAR_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 font-medium text-accent underline-offset-4 hover:underline"
        >
          Ouvrir la réservation dans un nouvel onglet
          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </p>
    </section>
  );
}
