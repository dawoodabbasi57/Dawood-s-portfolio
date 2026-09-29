import { ExternalLink, MapPin } from "lucide-react";
import { experience } from "@/data/portfolio";
import { Badge, EmptyState, Reveal, Section, SectionHeading } from "./primitives";

export function ExperienceSection() {
  return (
    <Section id="experience">
      <Reveal>
        <SectionHeading
          index="03"
          title="Experience"
          subtitle="Roles and hands-on work over time."
        />
      </Reveal>

      <div className="mt-12">
        {experience.length === 0 ? (
          <EmptyState message="Professional experience coming soon." />
        ) : (
          <ol className="relative space-y-8 border-l border-border pl-6 sm:pl-8">
            {experience.map((item, i) => (
              <li key={`${item.role}-${item.company}`} className="relative">
                <span
                  className="absolute top-6 -left-[31px] h-2.5 w-2.5 rounded-full border-2 border-background bg-primary sm:-left-[39px]"
                  aria-hidden="true"
                />
                <Reveal delay={i * 60}>
                  <article className="rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary/40">
                    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                      <div className="min-w-0">
                        <h3 className="font-display text-lg font-semibold">{item.role}</h3>
                        <p className="mt-0.5 text-sm text-primary">
                          {item.url ? (
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noreferrer noopener"
                              className="inline-flex items-center gap-1 hover:underline"
                            >
                              {item.company}
                              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                            </a>
                          ) : (
                            item.company
                          )}
                        </p>
                      </div>
                      <span className="shrink-0 rounded-md border border-border px-2.5 py-1 font-mono text-xs text-muted-foreground">
                        {item.start} — {item.end}
                      </span>
                    </div>

                    {item.location ? (
                      <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                        <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                        {item.location}
                      </p>
                    ) : null}

                    {item.description ? (
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    ) : null}

                    {item.responsibilities && item.responsibilities.length > 0 ? (
                      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                        {item.responsibilities.map((r) => (
                          <li key={r} className="flex gap-2">
                            <span
                              className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary"
                              aria-hidden="true"
                            />
                            {r}
                          </li>
                        ))}
                      </ul>
                    ) : null}

                    {item.technologies && item.technologies.length > 0 ? (
                      <ul className="mt-5 flex flex-wrap gap-2">
                        {item.technologies.map((t) => (
                          <li key={t}>
                            <Badge>{t}</Badge>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        )}
      </div>
    </Section>
  );
}
