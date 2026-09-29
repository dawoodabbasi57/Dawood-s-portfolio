import { useEffect, useState } from "react";
import { ArrowRight, FileDown, MapPin } from "lucide-react";
import { personalInfo, resume, stats } from "@/data/portfolio";
import { Reveal, SocialLinks } from "./primitives";
import { ProfileImage } from "./profile-image";

function useTypedRole(roles: string[]) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index % roles.length] ?? "";
    const done = !deleting && text === current;
    const cleared = deleting && text === "";

    const timeout = window.setTimeout(
      () => {
        if (done) {
          setDeleting(true);
        } else if (cleared) {
          setDeleting(false);
          setIndex((i) => (i + 1) % roles.length);
        } else {
          setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
        }
      },
      done ? 1600 : deleting ? 40 : 80,
    );

    return () => window.clearTimeout(timeout);
  }, [text, deleting, index, roles]);

  return text;
}

export function Hero() {
  const typed = useTypedRole(personalInfo.roles);

  return (
    <section id="home" className="relative overflow-hidden scroll-mt-24">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 pt-32 pb-20 sm:px-8 sm:pt-40 lg:grid-cols-[1.15fr_0.85fr] lg:pb-28">
        <div className="min-w-0">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
              {personalInfo.availability}
            </span>
          </Reveal>

          <Reveal delay={60}>
            <p className="mt-7 font-mono text-sm text-primary">{personalInfo.greeting}</p>
            <h1 className="mt-2 font-display text-4xl leading-[1.05] font-bold tracking-tight text-foreground sm:text-6xl">
              {personalInfo.name}
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-4 font-display text-xl font-medium text-foreground/90 sm:text-2xl">
              {personalInfo.title}
            </p>
            <p className="mt-2 font-mono text-sm text-muted-foreground sm:text-base" aria-live="polite">
              <span className="text-primary">&gt;</span> {typed}
              <span className="type-caret text-primary">_</span>
            </p>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              {personalInfo.intro}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                View My Work
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
              <a
                href={resume.url}
                download
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                <FileDown className="h-4 w-4" aria-hidden="true" />
                {resume.downloadLabel}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-1 py-3 text-sm font-medium text-primary underline-offset-4 hover:underline"
              >
                Get in Touch
              </a>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-8">
              <SocialLinks />
            </div>
          </Reveal>

          <Reveal delay={360}>
            <p className="mt-6 flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
              {personalInfo.location}
            </p>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="relative mx-auto w-full max-w-sm">
            <div
              className="absolute -inset-4 rounded-[2rem] border border-primary/20"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-xl shadow-primary/5">
              <ProfileImage />
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-border bg-card px-3 py-3.5 text-center"
                >
                  <p className="font-display text-xl font-bold text-primary">{s.value}</p>
                  <p className="mt-1 text-[11px] leading-tight text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}