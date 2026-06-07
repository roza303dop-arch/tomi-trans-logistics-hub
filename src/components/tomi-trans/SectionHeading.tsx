interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <header className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <p className="section-kicker">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      <p className="section-copy">{description}</p>
    </header>
  );
}
