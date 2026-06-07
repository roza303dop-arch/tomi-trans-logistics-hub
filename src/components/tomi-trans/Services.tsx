import { Boxes, Globe2, Route, Truck, Warehouse } from "lucide-react";

import { SectionHeading } from "./SectionHeading";

const services = [
  {
    title: "Transport krajowy",
    description:
      "Sprawna organizacja przewozów na terenie Polski — od powtarzalnych tras po zlecenia wymagające szybkiej reakcji.",
    icon: Truck,
  },
  {
    title: "Transport międzynarodowy",
    description:
      "Obsługa przewozów na terenie całej Unii Europejskiej z dbałością o termin, dokumenty i ciągłość komunikacji.",
    icon: Globe2,
  },
  {
    title: "Transport drobnicowy",
    description:
      "Elastyczne rozwiązania dla mniejszych partii towaru, kiedy liczy się efektywność kosztowa i dobra koordynacja.",
    icon: Boxes,
  },
  {
    title: "Transport całopojazdowy",
    description:
      "Dedykowane przewozy pełnych ładunków dla klientów oczekujących maksymalnej kontroli i bezpośredniej realizacji.",
    icon: Route,
  },
  {
    title: "Logistyka i spedycja",
    description:
      "Wsparcie operacyjne w planowaniu trasy, organizacji przewozu i dopasowaniu modelu transportu do konkretnego ładunku.",
    icon: Warehouse,
  },
];

export function Services() {
  return (
    <section id="uslugi" className="section-band section-cut-bottom">
      <div className="section-inner">
        <SectionHeading
          eyebrow="Usługi"
          title="Transport skrojony pod rytm biznesu, nie odwrotnie"
          description="Budujemy ofertę wokół realnych potrzeb operacyjnych. Dzięki temu obsługujemy zarówno stałe zlecenia, jak i transport wymagający elastycznego podejścia, szybkiego startu i pewnej koordynacji na trasie."
          align="center"
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {services.map(({ title, description, icon: Icon }) => (
            <article key={title} className="service-card">
              <div className="service-icon-wrap">
                <Icon className="size-6 text-primary" />
              </div>
              <h3 className="mt-6 font-display text-[1.65rem] uppercase leading-none text-foreground">
                {title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
