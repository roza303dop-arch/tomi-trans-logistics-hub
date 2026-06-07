import { Ship, Truck, Waypoints } from "lucide-react";

import { SectionHeading } from "./SectionHeading";

const hubs = [
  { name: "Warszawa", left: "58%", top: "34%" },
  { name: "Berlin", left: "44%", top: "31%" },
  { name: "Rotterdam", left: "30%", top: "22%" },
  { name: "Paryż", left: "27%", top: "38%" },
  { name: "Mediolan", left: "35%", top: "56%" },
  { name: "Madryt", left: "14%", top: "67%" },
  { name: "Wiedeń", left: "49%", top: "44%" },
  { name: "Bukareszt", left: "67%", top: "52%" },
  { name: "Wilno", left: "63%", top: "19%" },
];

export function Coverage() {

  return (
    <section id="zasieg" className="section-band section-cut-top">
      <div className="section-inner grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Zasięg"
            title="Sieć połączeń obejmująca całą Unię Europejską"
            description="Pracujemy na trasach, które łączą Polskę z kluczowymi rynkami UE. Dzięki temu możemy elastycznie planować przewozy i budować niezawodne łańcuchy transportowe dla różnych branż."
          />

          <div className="coverage-map mt-8">
            <div className="absolute inset-0 opacity-80" aria-hidden="true">
              <svg viewBox="0 0 100 100" className="h-full w-full text-primary/40">
                <path d="M15 66 C25 58, 28 43, 39 38 S58 24, 66 31 S78 45, 85 47" fill="none" stroke="currentColor" strokeWidth="0.55" strokeDasharray="1.2 1.8" />
                <path d="M30 22 C40 28, 45 34, 52 41 S67 57, 73 60" fill="none" stroke="currentColor" strokeWidth="0.55" strokeDasharray="1.2 1.8" />
                <path d="M19 68 C35 60, 40 57, 50 47 S66 35, 77 22" fill="none" stroke="currentColor" strokeWidth="0.55" strokeDasharray="1.2 1.8" />
                <path d="M38 56 C45 53, 50 52, 58 51 S69 49, 78 51" fill="none" stroke="currentColor" strokeWidth="0.55" strokeDasharray="1.2 1.8" />
              </svg>
            </div>

            {hubs.map((hub) => (
              <div key={hub.name} className="route-node" style={{ left: hub.left, top: hub.top }}>
                <span className="route-dot" />
                <span className="route-label">{hub.name}</span>
              </div>
            ))}

            <div className="absolute bottom-5 left-5 max-w-sm rounded-lg border border-border/70 bg-background/76 p-4 backdrop-blur-md">
              <p className="font-display text-2xl uppercase text-foreground">PL / UE / Trasy stałe i dedykowane</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Sprawnie łączymy południe Polski z głównymi korytarzami transportowymi Europy.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="relative h-[260px] overflow-hidden rounded-lg border border-border/70 bg-gradient-to-br from-surface via-background to-surface">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--primary)/0.18),transparent_60%)]" aria-hidden="true" />
            <Truck className="absolute left-[-2rem] bottom-[-2rem] size-[18rem] text-primary/15" strokeWidth={1} aria-hidden="true" />
          </div>

          <div className="glass-panel p-6">
            <div className="flex items-start gap-4">
              <Waypoints className="mt-1 size-6 text-primary" />
              <div>
                <h3 className="font-display text-2xl uppercase text-foreground">Korytarze operacyjne</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Niemcy, Beneluks, Francja, Włochy, Europa Środkowa i Południowa — tam, gdzie liczy się sprawna logistyka i pewna organizacja przewozu.
                </p>
              </div>
            </div>
          </div>
          <div className="relative h-[220px] overflow-hidden rounded-lg border border-border/70 bg-gradient-to-br from-background via-surface to-background">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_60%,hsl(var(--primary)/0.16),transparent_60%)]" aria-hidden="true" />
            <Ship className="absolute right-[-1rem] top-[-1rem] size-[16rem] text-primary/15" strokeWidth={1} aria-hidden="true" />
          </div>

          <div className="glass-panel p-6">
            <div className="flex items-start gap-4">
              <Ship className="mt-1 size-6 text-primary" />
              <div>
                <h3 className="font-display text-2xl uppercase text-foreground">Multikierunkowa mobilność</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Łączymy transport drogowy z praktycznym planowaniem dłuższych tras, aby dowozić ładunki skutecznie także na wymagających kierunkach europejskich.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
