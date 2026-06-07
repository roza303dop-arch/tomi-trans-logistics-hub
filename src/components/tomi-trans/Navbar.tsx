import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";

import { Button } from "@/components/ui/button";

const sections = [
  { href: "#o-nas", label: "O nas" },
  { href: "#uslugi", label: "Usługi" },
  { href: "#dlaczego-my", label: "Dlaczego my" },
  { href: "#zasieg", label: "Zasięg" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5",
      ].join(" ")}
    >
      <div className="section-inner">
        <div
          className={[
            "flex items-center justify-between rounded-lg border px-4 py-3 backdrop-blur-xl transition-all duration-300 md:px-6",
            scrolled
              ? "border-border/80 bg-[oklch(0.22_0.01_285/0.96)] shadow-[0_18px_48px_-28px_color-mix(in_oklab,var(--primary)_22%,transparent)]"
              : "border-border/70 bg-[oklch(0.2_0.01_285/0.9)]",
          ].join(" ")}
        >
          <a href="#start" className="flex items-center gap-3" aria-label="Tomi-Trans — strona główna">
            <span className="flex h-10 w-10 items-center justify-center rounded-md border border-primary/40 bg-primary/12 font-display text-lg font-bold text-primary">
              TT
            </span>
            <span>
              <span className="block font-display text-2xl uppercase leading-none text-foreground">
                Tomi-Trans
              </span>
              <span className="block text-[0.7rem] uppercase tracking-[0.24em] text-muted-foreground">
                Transport w całej UE
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Nawigacja główna">
            {sections.map((section) => (
              <a key={section.href} href={section.href} className="nav-link">
                {section.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a href="tel:+48694135711" className="nav-link inline-flex items-center gap-2">
              <Phone className="size-4" />
              694 135 711
            </a>
            <Button asChild variant="hero" size="lg">
              <a href="#kontakt">Zapytaj o wycenę</a>
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border/70 bg-surface text-foreground transition-colors hover:border-primary/50 hover:text-primary lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        <div
          className={[
            "overflow-hidden rounded-lg border border-border/70 bg-background/92 backdrop-blur-xl transition-all duration-300 lg:hidden",
            open ? "mt-3 max-h-[24rem] opacity-100" : "max-h-0 opacity-0",
          ].join(" ")}
        >
          <nav className="flex flex-col p-4" aria-label="Nawigacja mobilna">
            {sections.map((section) => (
              <a
                key={section.href}
                href={section.href}
                className="border-b border-border/60 py-3 text-sm font-medium text-foreground last:border-b-0"
                onClick={() => setOpen(false)}
              >
                {section.label}
              </a>
            ))}
            <div className="mt-4 flex flex-col gap-3">
              <Button asChild variant="hero" size="lg">
                <a href="#kontakt" onClick={() => setOpen(false)}>
                  Zapytaj o wycenę
                </a>
              </Button>
              <Button asChild variant="chrome" size="lg">
                <a href="tel:+48694135711" onClick={() => setOpen(false)}>
                  Zadzwoń teraz
                </a>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
