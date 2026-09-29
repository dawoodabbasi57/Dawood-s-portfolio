import {
  Code,
  Database,
  Layers,
  Monitor,
  Plug,
  Smartphone,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/data/portfolio";
import { EmptyState, Reveal, Section, SectionHeading } from "./primitives";

const iconMap: Record<string, LucideIcon> = {
  smartphone: Smartphone,
  code: Code,
  monitor: Monitor,
  layers: Layers,
  plug: Plug,
  database: Database,
};

export function Services() {
  return (
    <Section id="services">
      <Reveal>
        <SectionHeading
          index="08"
          title="Services"
          subtitle="How I can help on a project or team."
        />
      </Reveal>

      <div className="mt-12">
        {services.length === 0 ? (
          <EmptyState message="Services coming soon." />
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const Icon = iconMap[s.icon] ?? Sparkles;
              return (
                <Reveal key={s.title} delay={i * 50}>
                  <article className="group h-full rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40">
                    <span className="grid h-11 w-11 place-items-center rounded-xl border border-primary/25 bg-primary/10 transition-colors group-hover:bg-primary/15">
                      <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 font-display text-base font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {s.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        )}
      </div>
    </Section>
  );
}
