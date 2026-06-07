import { z } from "zod";
import { LoaderCircle, Mail, MapPinned, Phone, SquareArrowOutUpRight } from "lucide-react";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";

import { SectionHeading } from "./SectionHeading";

const formSchema = z.object({
  name: z.string().trim().min(1, "Podaj imię"),
  company: z.string().trim().optional(),
  email: z.string().trim().email("Podaj poprawny adres e-mail"),
  phone: z.string().trim().optional(),
  message: z.string().trim().min(1, "Napisz wiadomość"),
});

type FormValues = z.infer<typeof formSchema>;
type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
  message: "",
};

export function Contact() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const mapLink = useMemo(
    () =>
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent("Ul. Wincentego Witosa 153, Bestwina, 43-512, Poland"),
    [],
  );

  const handleChange = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    if (status !== "idle") {
      setStatus("idle");
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const parsed = formSchema.safeParse(values);
    if (!parsed.success) {
      const nextErrors: FormErrors = {};
      parsed.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof FormValues;
        if (!nextErrors[key]) {
          nextErrors[key] = issue.message;
        }
      });
      setErrors(nextErrors);
      return;
    }

    setSubmitting(true);
    setStatus("idle");

    try {
      const response = await fetch("https://formspree.io/f/mojzenrz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(parsed.data),
      });

      if (!response.ok) {
        throw new Error("Form submit failed");
      }

      setStatus("success");
      setValues(initialValues);
      setErrors({});
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="kontakt" className="section-band">
      <div className="section-inner grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Kontakt"
            title="Porozmawiajmy o trasie, terminie i najlepszym modelu przewozu"
            description="Napisz do nas lub zadzwoń — wrócimy z odpowiedzią i pomożemy dopasować rozwiązanie do charakteru Twojego ładunku."
          />

          <div className="mt-8 space-y-4">
            <a href="tel:+48694135711" className="contact-card">
              <span className="contact-icon">
                <Phone className="size-5 text-primary" />
              </span>
              <span>
                <span className="contact-label">Telefon</span>
                <span className="contact-value">694 135 711</span>
              </span>
            </a>

            <a href="mailto:biuro@tomi-trans.pl" className="contact-card">
              <span className="contact-icon">
                <Mail className="size-5 text-primary" />
              </span>
              <span>
                <span className="contact-label">E-mail</span>
                <span className="contact-value">biuro@tomi-trans.pl</span>
              </span>
            </a>

            <a href={mapLink} target="_blank" rel="noreferrer" className="contact-card">
              <span className="contact-icon">
                <MapPinned className="size-5 text-primary" />
              </span>
              <span>
                <span className="contact-label">Adres</span>
                <span className="contact-value">
                  Ul. Wincentego Witosa 153, Bestwina, 43-512, Poland
                </span>
              </span>
              <SquareArrowOutUpRight className="ml-auto size-4 text-muted-foreground" />
            </a>
          </div>

          <div className="mt-6 glass-panel p-6">
            <h3 className="font-display text-2xl uppercase text-foreground">Social i szybki kontakt</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Obserwuj flotę Tomi-Trans i skontaktuj się z nami również przez Facebook.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button asChild variant="chrome">
                <a
                  href="https://www.facebook.com/profile.php?id=100057443110108"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </Button>
              <Button asChild variant="hero">
                <a href="tel:+48694135711">Zadzwoń teraz</a>
              </Button>
            </div>
          </div>
        </div>

        <div className="glass-panel p-6 sm:p-8">
          <h3 className="font-display text-[2rem] uppercase leading-none text-foreground">
            Formularz kontaktowy
          </h3>
          <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
            Opisz ładunek, kierunek lub model współpracy. Odpowiemy najszybciej, jak to możliwe.
          </p>

          <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Imię"
                name="name"
                value={values.name}
                error={errors.name}
                onChange={(value) => handleChange("name", value)}
                required
              />
              <Field
                label="Firma"
                name="company"
                value={values.company ?? ""}
                error={errors.company}
                onChange={(value) => handleChange("company", value)}
              />
              <Field
                label="Email"
                name="email"
                type="email"
                value={values.email}
                error={errors.email}
                onChange={(value) => handleChange("email", value)}
                required
              />
              <Field
                label="Telefon"
                name="phone"
                type="tel"
                value={values.phone}
                error={errors.phone}
                onChange={(value) => handleChange("phone", value)}
              />
            </div>

            <label className="field-wrap">
              <span className="field-label">Wiadomość</span>
              <textarea
                name="message"
                value={values.message}
                onChange={(event) => handleChange("message", event.target.value)}
                className="field-input min-h-40 resize-none"
                placeholder="Opisz trasę, typ ładunku lub oczekiwany termin."
                required
              />
              {errors.message ? <span className="field-error">{errors.message}</span> : null}
            </label>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <Button type="submit" variant="hero" size="xl" disabled={submitting}>
                {submitting ? (
                  <>
                    <LoaderCircle className="size-4 animate-spin" />
                    Wysyłanie...
                  </>
                ) : (
                  "Wyślij"
                )}
              </Button>

              <div className="min-h-6 text-sm" aria-live="polite">
                {status === "success" ? (
                  <p className="status-success">
                    Wiadomość wysłana! Odezwiemy się wkrótce.
                  </p>
                ) : null}
                {status === "error" ? (
                  <p className="status-error">
                    Błąd wysyłki. Spróbuj ponownie lub zadzwoń do nas.
                  </p>
                ) : null}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

interface FieldProps {
  label: string;
  name: string;
  value: string;
  error: string | undefined;
  type?: string;
  required?: boolean;
  onChange: (value: string) => void;
}

function Field({ label, name, value, error, type = "text", required = false, onChange }: FieldProps) {
  return (
    <label className="field-wrap">
      <span className="field-label">{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="field-input"
        required={required}
      />
      {error ? <span className="field-error">{error}</span> : null}
    </label>
  );
}
