import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageSquare, Phone } from "lucide-react";

export const Route = createFileRoute("/rendez-vous")({
  head: () => ({
    meta: [
      { title: "Prendre rendez-vous — Adèle Pincemaille, Psychologue" },
      {
        name: "description",
        content:
          "Pour prendre rendez-vous avec Adèle Pincemaille, psychologue clinicienne à Vendenheim, contactez-la par e-mail, appel ou SMS.",
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
          Pour prendre rendez-vous, veuillez me contacter par e-mail, appel ou SMS.
        </p>
      </header>

      <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-border/60 bg-card p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-accent/15 p-3">
              <Phone className="h-5 w-5 text-accent" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-accent">Téléphone</p>
              <a
                href="tel:+33749217835"
                className="mt-1 block font-serif text-2xl text-foreground transition-colors hover:text-accent"
              >
                07 49 21 78 35
              </a>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Laissez-moi un message si nécessaire, je vous rappellerai.
          </p>
          <div className="mt-6 grid gap-3">
            <a
              href="tel:+33749217835"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Appeler
            </a>
            <a
              href="sms:+33749217835"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <MessageSquare className="h-4 w-4" aria-hidden="true" />
              Envoyer un SMS
            </a>
          </div>
        </div>

        <div className="rounded-xl border border-border/60 bg-card p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-accent/15 p-3">
              <Mail className="h-5 w-5 text-accent" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-[0.2em] text-accent">E-mail</p>
              <a
                href="mailto:adelepincemaille.psy@gmail.com"
                className="mt-1 block break-all font-serif text-xl text-foreground transition-colors hover:text-accent sm:text-2xl"
              >
                adelepincemaille.psy@gmail.com
              </a>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Écrivez-moi pour convenir ensemble d’un rendez-vous.
          </p>
          <a
            href="mailto:adelepincemaille.psy@gmail.com"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Envoyer un e-mail
          </a>
        </div>
      </div>
    </section>
  );
}
