import { useEffect, useState } from "react";
import { ArrowRight, PhoneCall } from "lucide-react";

import { Button } from "@/components/ui/button";
const HERO_BG = "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1600&q=80";

const rotatingWords = ["międzynarodowy", "terminowy", "dedykowany", "europejski"];

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setWordIndex((current) => (current + 1) % rotatingWords.length);
    }, 2200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="start" className="hero-screen relative flex min-h-[100svh] items-end overflow-hidden pt-28">
      <div
        aria-label="Tomi-Trans flota w trasie"
        role="img"
        className="absolute inset-0 h-full w-full"
        style={{ backgroundImage: `url(${HERO_BG})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div className="hero-overlay absolute inset-0" aria-hidden="true" />
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div className="hero-amber-glow absolute inset-x-0 top-[12%] h-64" aria-hidden="true" />


      <div className="section-inner relative z-10 flex w-full pb-10 md:pb-14 lg:pb-18">
        <div className="max-w-2xl pl-4 sm:pl-8 md:pl-12 lg:pl-16">
          <p className="section-kicker fade-up">Transport / Spedycja / Logistyka</p>
          <h1 className="hero-title hero-title--compact fade-up [animation-delay:120ms]">
            Ruch, który dowozi
            <br />
            Twój ładunek przez całą Unię Europejską.
          </h1>
          <p className="hero-copy fade-up [animation-delay:220ms]">
            Tomi-Trans realizuje przewozy krajowe i międzynarodowe z Polski do każdego
            kierunku w UE — z naciskiem na terminowość, klarowną komunikację i pewną
            organizację trasy.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row fade-up [animation-delay:320ms]">
            <Button asChild variant="hero" size="xl">
              <a href="#kontakt">
                Zapytaj o wycenę
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button asChild variant="chrome" size="xl">
              <a href="#o-nas">
                Poznaj nas
                <PhoneCall className="size-4" />
              </a>
            </Button>
          </div>

          <div className="mt-8 inline-flex min-h-[2.5rem] items-center rounded-md border border-primary/30 bg-background/36 px-4 py-3 backdrop-blur-md fade-up [animation-delay:420ms]">
            <span className="text-sm uppercase tracking-[0.26em] text-muted-foreground">
              Fokus:
            </span>
            <span className="ml-3 font-display text-2xl uppercase text-primary transition-opacity duration-500 sm:text-3xl">
              {rotatingWords[wordIndex]}
            </span>
          </div>

          <div className="mt-12 grid gap-4 border-t border-border/60 pt-6 text-sm text-foreground/90 sm:grid-cols-3 fade-up [animation-delay:520ms]">
            <div>
              <p className="font-stats text-3xl text-primary">PL → UE</p>
              <p className="mt-2 text-muted-foreground">Stała obsługa tras krajowych i międzynarodowych.</p>
            </div>
            <div>
              <p className="font-stats text-3xl text-primary">FTL / LTL</p>
              <p className="mt-2 text-muted-foreground">Elastyczne dopasowanie od drobnicy po pełne ładunki.</p>
            </div>
            <div>
              <p className="font-stats text-3xl text-primary">TOMI-TRANS</p>
              <p className="mt-2 text-muted-foreground">Nowoczesna flota i kontakt, który nie znika po starcie zlecenia.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
