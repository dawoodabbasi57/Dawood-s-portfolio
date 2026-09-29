import { ExternalLink, Trophy } from "lucide-react";
import { achievements } from "@/data/portfolio";
import { EmptyState, Reveal, Section, SectionHeading } from "./primitives";

export function Achievements() {
  return (
    <Section id="achievements">
      <Reveal>
        <SectionHeading
          index="09"
          title="Achievements"
          subtitle="Milestones, competitions and recognition."
        />
      </Reveal>

      <div className="mt-12">
        {achievements.length === 0 ? (
          <EmptyState message="More achievements coming soon." />
        ) : (
          <div className="grid gap-5 sm:grid-cols-2">
            {achievements.map((a, i) => (
              <Reveal key={a.title} delay={i * 60}>
                <article className="flex h-full gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary/40">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-primary/25 bg-primary/10">
                    <Trophy className="h-5 w-5 text-primary" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-base font-semibold">{a.title}</h3>
                    <p className="mt-1 font-mono text-xs text-muted-foreground">
                      {[a.organization, a.date].filter(Boolean).join(" · ")}
                    </p>
                    {a.description ? (
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {a.description}
                      </p>
                    ) : null}
                    {a.url ? (
                      <a
                        href={a.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 hover:underline"
                      >
                        Learn more
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    ) : null}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
