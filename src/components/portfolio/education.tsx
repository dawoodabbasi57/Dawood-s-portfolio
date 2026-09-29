import { ExternalLink, MapPin } from "lucide-react";
import { education } from "@/data/portfolio";
import { EmptyState, Reveal, Section, SectionHeading } from "./primitives";

export function EducationSection() {
  return (
    <Section id="education">
      <Reveal>
        <SectionHeading
          index="04"
          title="Education"
          subtitle="Academic background and studies."
        />
      </Reveal>

      <div className="mt-12">
        {education.length === 0 ? (
          <EmptyState message="Education details coming soon." />
        ) : (
          <div className="grid gap-5 lg:grid-cols-2">
            {education.map((item, i) => (
              <Reveal
                key={`${item.degree}-${item.institution}`}
                delay={i * 60}
              >
                <article className="h-full rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary/40">
                  <div className="flex items-start gap-4">

                    {/* Institution Logo */}
                    <span className="grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-xl border border-primary/25 bg-primary/10">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={`${item.institution} logo`}
                          className="h-full w-full object-cover"
                          onError={(e) => {
                            const img = e.currentTarget;
                            img.style.display = "none";

                            const fallback =
                              img.parentElement?.querySelector(
                                "[data-logo-fallback]",
                              );

                            if (fallback) {
                              fallback.classList.remove("hidden");
                            }
                          }}
                        />
                      ) : null}

                      <span
                        data-logo-fallback
                        className={
                          item.image
                            ? "hidden font-display text-sm font-bold text-primary"
                            : "font-display text-sm font-bold text-primary"
                        }
                      >
                        {item.institution
                          .split(" ")
                          .map((word) => word[0])
                          .join("")
                          .slice(0, 2)
                          .toUpperCase()}
                      </span>
                    </span>

                    {/* Education Details */}
                    <div className="min-w-0">
                      <h3 className="font-display text-base font-semibold">
                        {item.degree}
                      </h3>

                      <p className="mt-1 text-sm text-primary">
                        {item.url ? (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="inline-flex items-center gap-1 hover:underline"
                          >
                            {item.institution}
                            <ExternalLink
                              className="h-3.5 w-3.5"
                              aria-hidden="true"
                            />
                          </a>
                        ) : (
                          item.institution
                        )}
                      </p>

                      <p className="mt-2 flex flex-wrap items-center gap-3 font-mono text-xs text-muted-foreground">
                        <span>
                          {item.start} — {item.end}
                        </span>

                        {item.location ? (
                          <span className="inline-flex items-center gap-1">
                            <MapPin
                              className="h-3.5 w-3.5"
                              aria-hidden="true"
                            />
                            {item.location}
                          </span>
                        ) : null}
                      </p>

                      {item.description ? (
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                          {item.description}
                        </p>
                      ) : null}
                    </div>

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