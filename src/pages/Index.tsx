import { Facebook, Mail, MapPin, Phone } from "lucide-react";

import { About } from "@/components/tomi-trans/About";
const ROADSIDE_BG = "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80";
import { Contact } from "@/components/tomi-trans/Contact";
import { Coverage } from "@/components/tomi-trans/Coverage";
import { Footer } from "@/components/tomi-trans/Footer";
import { Hero } from "@/components/tomi-trans/Hero";
import { Navbar } from "@/components/tomi-trans/Navbar";
import { Services } from "@/components/tomi-trans/Services";
import { WhyUs } from "@/components/tomi-trans/WhyUs";


export default function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <section className="border-y border-border/50 bg-surface/80 py-4 backdrop-blur-md">
          <div className="section-inner grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <a href="tel:+48694135711" className="ticker-item">
              <Phone className="size-4 text-primary" />
              694 135 711
            </a>
            <a href="mailto:biuro@tomi-trans.pl" className="ticker-item">
              <Mail className="size-4 text-primary" />
              biuro@tomi-trans.pl
            </a>
            <div className="ticker-item">
              <MapPin className="size-4 text-primary" />
              Bestwina, Polska
            </div>
            <a
              href="https://www.facebook.com/profile.php?id=100057443110108"
              target="_blank"
              rel="noreferrer"
              className="ticker-item"
            >
              <Facebook className="size-4 text-primary" />
              Zobacz nas na Facebooku
            </a>
          </div>
        </section>

        <About />
        <Services />
        <WhyUs />
        <Coverage />

        <section className="section-band">
          <div className="section-inner grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="relative h-[360px] overflow-hidden rounded-lg border border-border/70">
              <div role="img" aria-label="Tomi-Trans w drodze" className="absolute inset-0 h-full w-full" style={{ backgroundImage: `url(${ROADSIDE_BG})`, backgroundSize: "cover", backgroundPosition: "center" }} />
            </div>
            <aside className="glass-panel flex flex-col justify-between p-6 sm:p-8">
              <div>
                <p className="section-kicker">Operacyjna gotowość</p>
                <h2 className="section-title max-w-none">
                  Partner dla firm, które potrzebują sprawnego transportu bez chaosu.
                </h2>
                <p className="section-copy max-w-none">
                  Od pierwszego kontaktu po dostawę stawiamy na porządek działań, terminowość
                  i przewidywalny standard współpracy. To właśnie wyróżnia Tomi-Trans na tle
                  schematycznych stron i ofert konkurencji.
                </p>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div>
                  <p className="font-stats text-4xl text-primary">24/7</p>
                  <p className="mt-2 text-sm text-muted-foreground">kontakt w sprawie zleceń</p>
                </div>
                <div>
                  <p className="font-stats text-4xl text-primary">UE</p>
                  <p className="mt-2 text-sm text-muted-foreground">obsługa całej wspólnoty</p>
                </div>
                <div>
                  <p className="font-stats text-4xl text-primary">B2B</p>
                  <p className="mt-2 text-sm text-muted-foreground">partnerskie podejście do firm</p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
