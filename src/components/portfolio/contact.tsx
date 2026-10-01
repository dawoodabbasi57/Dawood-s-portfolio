import { useState, type FormEvent } from "react";

import { Check, Copy, Mail, MapPin, Send } from "lucide-react";

import { toast } from "sonner";

import { contact, personalInfo } from "@/data/portfolio";

import { Reveal, Section, SectionHeading, SocialLinks } from "./primitives";

type Fields = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function validate(values: Fields): Errors {
  const errors: Errors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (values.subject.trim().length < 3) {
    errors.subject = "Please add a short subject.";
  }

  if (values.message.trim().length < 10) {
    errors.message = "Please write at least 10 characters.";
  }

  return errors;
}

const fieldClass =
  "w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none";

export function Contact() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [copied, setCopied] = useState(false);
  const [sending, setSending] = useState(false);

  const set =
    (key: keyof Fields) =>
    (e: { target: { value: string } }) => {
      setValues((v) => ({
        ...v,
        [key]: e.target.value,
      }));

      // Remove the error for this field while the user is correcting it.
      setErrors((current) => ({
        ...current,
        [key]: undefined,
      }));
    };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const found = validate(values);

    setErrors(found);

    if (Object.keys(found).length > 0) {
      return;
    }

    setSending(true);

    try {
      const response = await fetch("https://formspree.io/f/xnpnrrrp", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          subject: values.subject.trim(),
          message: values.message.trim(),
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(
          data?.errors?.[0]?.message ||
            "Something went wrong. Please try again.",
        );
      }

      toast.success("Message sent successfully!");

      setValues(empty);
      setErrors({});
    } catch (error) {
      console.error("Contact form error:", error);

      toast.error(
        error instanceof Error
          ? error.message
          : "Unable to send your message. Please try again.",
      );
    } finally {
      setSending(false);
    }
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(personalInfo.email);

      setCopied(true);

      toast.success("Email address copied.");

      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Couldn't copy — please copy it manually.");
    }
  }

  return (
    <Section id="contact">
      <Reveal>
        <SectionHeading
          index="10"
          title={contact.heading}
          subtitle={contact.text}
        />
      </Reveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <div className="space-y-4">
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="flex items-center gap-2 text-sm font-semibold">
                <Mail
                  className="h-4 w-4 text-primary"
                  aria-hidden="true"
                />
                Email
              </p>

              <div className="mt-3 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="truncate text-sm text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
                >
                  {personalInfo.email}
                </a>

                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label="Copy email address"
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                >
                  {copied ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="flex items-center gap-2 text-sm font-semibold">
                <MapPin
                  className="h-4 w-4 text-primary"
                  aria-hidden="true"
                />
                Location
              </p>

              <p className="mt-3 text-sm text-muted-foreground">
                {personalInfo.location}
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="text-sm font-semibold">Elsewhere</p>

              <SocialLinks className="mt-3" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-2xl border border-border bg-card p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-1.5 block text-sm font-medium"
                >
                  Name
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={values.name}
                  onChange={set("name")}
                  placeholder="Your name"
                  className={fieldClass}
                  aria-invalid={!!errors.name}
                />

                {errors.name ? (
                  <p className="mt-1.5 text-xs text-destructive">
                    {errors.name}
                  </p>
                ) : null}
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-1.5 block text-sm font-medium"
                >
                  Email
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={set("email")}
                  placeholder="you@example.com"
                  className={fieldClass}
                  aria-invalid={!!errors.email}
                />

                {errors.email ? (
                  <p className="mt-1.5 text-xs text-destructive">
                    {errors.email}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="contact-subject"
                className="mb-1.5 block text-sm font-medium"
              >
                Subject
              </label>

              <input
                id="contact-subject"
                name="subject"
                type="text"
                value={values.subject}
                onChange={set("subject")}
                placeholder="What's this about?"
                className={fieldClass}
                aria-invalid={!!errors.subject}
              />

              {errors.subject ? (
                <p className="mt-1.5 text-xs text-destructive">
                  {errors.subject}
                </p>
              ) : null}
            </div>

            <div className="mt-5">
              <label
                htmlFor="contact-message"
                className="mb-1.5 block text-sm font-medium"
              >
                Message
              </label>

              <textarea
                id="contact-message"
                name="message"
                rows={6}
                value={values.message}
                onChange={set("message")}
                placeholder="Tell me about your project or opportunity…"
                className={fieldClass}
                aria-invalid={!!errors.message}
              />

              {errors.message ? (
                <p className="mt-1.5 text-xs text-destructive">
                  {errors.message}
                </p>
              ) : null}
            </div>

            <button
              type="submit"
              disabled={sending}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none disabled:opacity-60 sm:w-auto"
            >
              <Send className="h-4 w-4" aria-hidden="true" />

              {sending ? "Sending…" : "Send Message"}
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}