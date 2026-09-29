import { Award, ExternalLink } from "lucide-react";
import { certifications } from "@/data/portfolio";
import { Badge, EmptyState, Reveal, Section, SectionHeading } from "./primitives";

export function Certifications() {
  return (
    <Section id="certifications">
      <Reveal>
        <SectionHeading
          index="05"
          title="Certifications"
          subtitle="Credentials earned through courses and programs."
        />
      </Reveal>

      <div className="mt-12">
        {certifications.length === 0 ? (
          <EmptyState message="Certifications coming soon." />
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((c, i) => (
              <Reveal key={c.title} delay={i * 60}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/40">
                  {c.image ? (
                    <img
                      src={c.image}
                      alt={`${c.title} certificate`}
                      loading="lazy"
                      className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="bg-grid grid aspect-[16/10] w-full place-items-center border-b border-border">
                      <Award className="h-8 w-8 text-primary/70" aria-hidden="true" />
                    </div>
                  )}

                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-base leading-snug font-semibold">{c.title}</h3>
                    <p className="mt-1 text-sm text-primary">{c.organization}</p>
                    <p className="mt-1 font-mono text-xs text-muted-foreground">
                      {c.issueDate}
                      {c.expirationDate ? ` — ${c.expirationDate}` : ""}
                    </p>

                    {c.description ? (
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {c.description}
                      </p>
                    ) : null}

                    {c.credentialId ? (
                      <p className="mt-3 font-mono text-xs text-muted-foreground">
                        ID: {c.credentialId}
                      </p>
                    ) : null}

                    {c.skills && c.skills.length > 0 ? (
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {c.skills.map((s) => (
                          <li key={s}>
                            <Badge>{s}</Badge>
                          </li>
                        ))}
                      </ul>
                    ) : null}

                    {c.credentialUrl ? (
                      <a
                        href={c.credentialUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="mt-5 inline-flex items-center gap-1.5 self-start text-sm font-medium text-primary underline-offset-4 hover:underline"
                      >
                        View Credential
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
