import { useMemo, useState } from "react";
import { ArrowUpRight, Github, ImageIcon, Star } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Badge, EmptyState, Reveal, Section, SectionHeading } from "./primitives";


const filters = ["All", "Web", "Mobile", "AI", "UI/UX", "Other"] as const;

function ProjectMedia({ project, className }: { project: Project; className?: string }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`${project.title} preview`}
        loading="lazy"
        className={cn("h-full w-full object-cover transition-transform duration-500", className)}
      />
    );
  }
  return (
    <div className="bg-grid grid h-full w-full place-items-center bg-muted/40">
      <div className="text-center">
        <ImageIcon className="mx-auto h-6 w-6 text-primary/70" aria-hidden="true" />
        <p className="mt-2 font-mono text-[11px] text-muted-foreground">add project image</p>
      </div>
    </div>
  );
}

function Links({ project }: { project: Project }) {
  if (!project.liveUrl && !project.githubUrl) return null;
  return (
    <div className="mt-5 flex flex-wrap items-center gap-3">
      {project.liveUrl ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          Live Demo
          <ArrowUpRight
            className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
            aria-hidden="true"
          />
        </a>
      ) : null}
      {project.githubUrl ? (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
        >
          <Github className="h-4 w-4" aria-hidden="true" />
          Source Code
        </a>
      ) : null}
    </div>
  );
}

export function FeaturedProject() {
  const featured = projects.find((p) => p.featured);
  if (!featured) return null;

  return (
    <Section id="featured">
      <Reveal>
        <SectionHeading
          index="06"
          title="Featured project"
          subtitle="A closer look at the work I'm most proud of."
        />
      </Reveal>

      <Reveal delay={80}>
        <article className="mt-12 overflow-hidden rounded-3xl border border-border bg-card lg:grid lg:grid-cols-[1.1fr_1fr]">
          <div className="relative aspect-[16/10] overflow-hidden border-b border-border lg:aspect-auto lg:border-r lg:border-b-0">
            <ProjectMedia project={featured} />
            <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-background/85 px-3 py-1 text-xs font-medium text-primary backdrop-blur">
              <Star className="h-3.5 w-3.5" aria-hidden="true" />
              Featured
            </span>
          </div>

          <div className="p-7 sm:p-9">
            <p className="font-mono text-xs text-muted-foreground">
              {featured.category}
              {featured.date ? ` · ${featured.date}` : ""}
              {featured.status ? ` · ${featured.status}` : ""}
            </p>
            <h3 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">
              {featured.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {featured.description}
            </p>

            {featured.highlights && featured.highlights.length > 0 ? (
              <ul className="mt-5 space-y-2">
                {featured.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>
            ) : null}

            <div className="mt-5 flex flex-wrap gap-2">
              {featured.technologies.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>

            <Links project={featured} />
          </div>
        </article>
      </Reveal>
    </Section>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  const visible = useMemo(
    () => projects.filter((p) => filter === "All" || p.category === filter),
    [filter],
  );

  if (projects.length === 0) {
    return (
      <Section id="projects">
        <Reveal>
          <SectionHeading
            index="07"
            title="Projects"
            subtitle="Things I've designed and built."
          />
        </Reveal>
        <EmptyState message="Projects coming soon." />
      </Section>
    );
  }

  return (
    <Section id="projects">
      <Reveal>
        <SectionHeading
          index="07"
          title="Projects"
          subtitle="A selection of things I've designed and built."
        />
      </Reveal>

      <Reveal delay={60}>
        <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={cn(
                "rounded-lg border px-3.5 py-1.5 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                filter === f
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground",
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </Reveal>

      {visible.length === 0 ? (
        <EmptyState message={`No ${filter} projects yet — check back soon.`} />
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
                  <ProjectMedia
                    project={p}
                    className="group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="font-mono text-[11px] text-muted-foreground">
                    {p.category}
                    {p.date ? ` · ${p.date}` : ""}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.technologies.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                  <Links project={p} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      )}
    </Section>
  );
}
