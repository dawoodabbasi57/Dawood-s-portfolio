import { BookOpen, Compass, Hammer } from "lucide-react";
import { about, personalInfo } from "@/data/portfolio";
import { Badge, Reveal, Section, SectionHeading } from "./primitives";

export function About() {
  return (
    <Section id="about">
      <Reveal>
        <SectionHeading
          index="01"
          title="About me"
          subtitle={about.headline}
        />
      </Reveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <div className="space-y-4">
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="font-display text-lg font-semibold">
                {personalInfo.name}
              </p>

              <p className="mt-1 text-sm text-muted-foreground">
                {personalInfo.title}
              </p>

              <dl className="mt-5 space-y-3 text-sm">
                <div className="flex justify-between gap-4 border-t border-border pt-3">
                  <dt className="text-muted-foreground">Location</dt>
                  <dd className="text-right font-medium">
                    {personalInfo.location}
                  </dd>
                </div>

                <div className="flex justify-between gap-4 border-t border-border pt-3">
                  <dt className="text-muted-foreground">Email</dt>
                  <dd className="truncate text-right font-medium">
                    {personalInfo.email}
                  </dd>
                </div>

                <div className="flex justify-between gap-4 border-t border-border pt-3">
                  <dt className="text-muted-foreground">Phone</dt>
                  <dd className="text-right font-medium">
                    {personalInfo.phone}
                  </dd>
                </div>

                <div className="flex justify-between gap-4 border-t border-border pt-3">
                  <dt className="text-muted-foreground">Status</dt>
                  <dd className="text-right font-medium text-primary">
                    {personalInfo.availability}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="flex items-center gap-2 text-sm font-semibold">
                <BookOpen
                  className="h-4 w-4 text-primary"
                  aria-hidden="true"
                />
                Currently learning
              </p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {about.currentlyLearning.map((item) => (
                  <li key={item}>
                    <Badge>{item}</Badge>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="space-y-5">
            {about.paragraphs.map((p) => (
              <p
                key={p}
                className="text-base leading-relaxed text-muted-foreground"
              >
                {p}
              </p>
            ))}

            <div className="grid gap-4 pt-2 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-5">
                <p className="flex items-center gap-2 text-sm font-semibold">
                  <Hammer
                    className="h-4 w-4 text-primary"
                    aria-hidden="true"
                  />
                  What I build
                </p>

                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {about.whatIBuild.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-card p-5">
                <p className="flex items-center gap-2 text-sm font-semibold">
                  <Compass
                    className="h-4 w-4 text-primary"
                    aria-hidden="true"
                  />
                  Career goals
                </p>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {about.goals}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}