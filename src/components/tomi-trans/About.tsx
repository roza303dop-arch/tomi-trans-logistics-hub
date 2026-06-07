import { ShieldCheck, Waypoints } from "lucide-react";

import { SectionHeading } from "./SectionHeading";
import { StatCounter } from "./StatCounter";
const BLACK_TRUCK_BG = "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80";

export function About() {

  return (
    <section id="o-nas" className="section-band section-cut-top">
      <div className="section-inner grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="O nas"
            title="Polska baza, europejski zasięg i operacyjne podejście do każdego kursu"
            description="Działamy z Bestwiny i obsługujemy przewozy w całej Unii Europejskiej. Łączymy doświadczenie transportowe z praktyczną organizacją zleceń, tak aby klient miał pewność terminu, ładunku i kontaktu na każdym etapie realizacji."
          />

          <div className="mt-8 space-y-4 text-base leading-7 text-muted-foreground">
            <p>
              Tomi-Trans to firma skoncentrowana na niezawodnych przewozach oraz budowaniu
              długofalowych relacji z klientami biznesowymi. Stawiamy na jasne warunki,
              profesjonalną obsługę i płynny przepływ informacji.
            </p>
            <p>
              Nasza praca to nie tylko przewóz towaru. To planowanie trasy, koordynacja,
              bezpieczeństwo ładunku i gotowość do reagowania, gdy liczy się czas.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="glass-panel p-5 sm:p-6">
              <ShieldCheck className="size-8 text-primary" />
              <h3 className="mt-4 font-display text-2xl uppercase text-foreground">
                Bezpieczny przewóz
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Zabezpieczony proces, dbałość o dokumentację i odpowiedzialne prowadzenie
                każdego zlecenia.
              </p>
            </div>
            <div className="glass-panel p-5 sm:p-6">
              <Waypoints className="size-8 text-primary" />
              <h3 className="mt-4 font-display text-2xl uppercase text-foreground">
                Kontrola trasy
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Od wyjazdu po rozładunek utrzymujemy operacyjny rytm pracy i stały kontakt z
                klientem.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <StatCounter value={27} label="państw UE w zasięgu" />
            <StatCounter value={5} label="kluczowych obszarów usług" />
            <StatCounter value={1} label="partner do obsługi całej Europy" />
          </div>
        </div>

        <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-border/70">
          <div
            role="img"
            aria-label="Czarna ciężarówka Tomi-Trans"
            className="absolute inset-0 h-full w-full"
            style={{ backgroundImage: `url(${BLACK_TRUCK_BG})`, backgroundSize: "cover", backgroundPosition: "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <p className="section-kicker">Bestwina / Polska</p>
            <p className="max-w-md text-sm leading-6 text-foreground/88">
              Lokalna odpowiedzialność, europejskie ambicje i nowoczesny standard pracy floty.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
