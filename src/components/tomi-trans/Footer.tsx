export function Footer() {
  return (
    <footer className="border-t border-border/60 pb-8 pt-10">
      <div className="section-inner">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.9fr]">
          <div>
            <p className="font-display text-4xl uppercase text-foreground">Tomi-Trans</p>
            <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
              Transport i logistyka dla firm, które oczekują europejskiego zasięgu,
              terminowej realizacji i pewnego partnera operacyjnego.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Nawigacja</p>
            <nav className="mt-4 flex flex-col gap-3 text-sm">
              <a href="#o-nas" className="nav-link w-fit">O nas</a>
              <a href="#uslugi" className="nav-link w-fit">Usługi</a>
              <a href="#dlaczego-my" className="nav-link w-fit">Dlaczego my</a>
              <a href="#kontakt" className="nav-link w-fit">Kontakt</a>
            </nav>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Kontakt</p>
            <div className="mt-4 space-y-3 text-sm text-foreground/90">
              <p>
                <a href="tel:+48694135711" className="nav-link w-fit">694 135 711</a>
              </p>
              <p>
                <a href="mailto:biuro@tomi-trans.pl" className="nav-link w-fit">
                  biuro@tomi-trans.pl
                </a>
              </p>
              <p className="max-w-xs text-muted-foreground">
                Ul. Wincentego Witosa 153, Bestwina, 43-512, Poland
              </p>
              <p>
                <a
                  href="https://www.facebook.com/profile.php?id=100057443110108"
                  target="_blank"
                  rel="noreferrer"
                  className="nav-link w-fit"
                >
                  Facebook
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border/60 pt-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Tomi-Trans. Wszelkie prawa zastrzeżone.</p>
          <p>Transport krajowy i międzynarodowy na terenie całej Unii Europejskiej.</p>
        </div>
      </div>
    </footer>
  );
}
