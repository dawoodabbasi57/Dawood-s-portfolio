import { skills } from "@/data/portfolio";
import { EmptyState, Reveal, Section, SectionHeading } from "./primitives";

export function Skills() {
  const hasSkills = skills.some((c) => c.items.length > 0);

  return (
    <Section id="skills">
      <Reveal>
        <SectionHeading
          index="02"
          title="Skills & tools"
          subtitle="Technologies I work with and continue to deepen."
        />
      </Reveal>

      <div className="mt-12">
        {hasSkills ? (
          <div className="grid gap-5 sm:grid-cols-2">
            {skills
              .filter((c) => c.items.length > 0)
              .map((cat, i) => (
                <Reveal key={cat.category} delay={i * 60}>
                  <div className="h-full rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary/40">
                    <div className="flex items-center gap-3">
                      <h3 className="font-display text-base font-semibold">{cat.category}</h3>
                      <span className="h-px flex-1 bg-border" aria-hidden="true" />
                      <span className="font-mono text-xs text-muted-foreground">
                        {String(cat.items.length).padStart(2, "0")}
                      </span>
                    </div>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {cat.items.map((s) => (
                        <li
                          key={s.name}
                          className="rounded-lg border border-border bg-muted/40 px-3 py-1.5 text-sm font-medium text-foreground/90 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
                          title={s.note}
                        >
                          {s.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
          </div>
        ) : (
          <EmptyState message="Skills are being added soon." />
        )}
      </div>
    </Section>
  );
}
