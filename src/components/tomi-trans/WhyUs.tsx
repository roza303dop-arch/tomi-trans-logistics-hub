import {
  BadgeEuro,
  Clock3,
  Headset,
  Map,
  Shield,
  Sparkles,
} from "lucide-react";

import { SectionHeading } from "./SectionHeading";

const advantages = [
  {
    title: "Doświadczenie",
    description: "Operacyjne podejście do transportu i znajomość realiów pracy na europejskich trasach.",
    icon: Sparkles,
  },
  {
    title: "Punktualność",
    description: "Priorytetem jest terminowa realizacja i przewidywalny przebieg każdego zlecenia.",
    icon: Clock3,
  },
  {
    title: "Zasięg UE",
    description: "Obsługujemy kierunki na terenie całej Unii Europejskiej, bez ograniczania się do kilku rynków.",
    icon: Map,
  },
  {
    title: "Profesjonalna obsługa",
    description: "Jasna komunikacja, szybkie odpowiedzi i kontakt, który wspiera klienta na każdym etapie.",
    icon: Headset,
  },
  {
    title: "Ubezpieczony ładunek",
    description: "Bezpieczeństwo przewozu i odpowiedzialne podejście do towaru to fundament naszej pracy.",
    icon: Shield,
  },
  {
    title: "Konkurencyjne ceny",
    description: "Efektywnie planujemy transport tak, by zachować dobrą relację kosztu do jakości obsługi.",
    icon: BadgeEuro,
  },
];

export function WhyUs() {
  return (
    <section id="dlaczego-my" className="section-band">
      <div className="section-inner">
        <SectionHeading
          eyebrow="Dlaczego my"
          title="Przewaga zbudowana na dyscyplinie operacyjnej i europejskiej skali działania"
          description="Tomi-Trans jest partnerem dla firm, które oczekują nie tylko samego transportu, ale także przewidywalności, odpowiedzialności i wysokiej kultury współpracy."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {advantages.map(({ title, description, icon: Icon }) => (
            <article key={title} className="feature-row">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-primary/30 bg-primary/12">
                <Icon className="size-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-2xl uppercase text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
