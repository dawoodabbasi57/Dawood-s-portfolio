import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  Github,
  Linkedin,
  Instagram,
  Youtube,
  Facebook,
  Twitter,
  Mail,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { socialLinks } from "@/data/portfolio";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", shown && "reveal-in", className)}
    >
      {children}
    </div>
  );
}

export function SectionHeading({
  index,
  title,
  subtitle,
  align = "left",
}: {
  index: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <div
        className={cn(
          "flex items-center gap-3 text-xs font-medium tracking-[0.2em] text-primary uppercase",
          align === "center" && "justify-center",
        )}
      >
        <span className="font-mono">{index}</span>
        <span className="h-px w-10 bg-primary/40" aria-hidden="true" />
      </div>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {subtitle ? <p className="mt-3 text-base text-muted-foreground">{subtitle}</p> : null}
    </div>
  );
}

export function Section({
  id,
  children,
  className,
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("scroll-mt-24 border-t border-border/60 py-20 sm:py-28", className)}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

export function EmptyState({ message }: { message: string }) {
  return (
    <div className="mt-12 rounded-2xl border border-dashed border-border bg-card/50 px-6 py-14 text-center">
      <p className="font-mono text-sm text-muted-foreground">{message}</p>
    </div>
  );
}

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-border bg-secondary/60 px-2.5 py-1 text-xs font-medium text-secondary-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}

const socialIcons: Record<string, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  youtube: Youtube,
  facebook: Facebook,
  twitter: Twitter,
  mail: Mail,
};

export function SocialLinks({ className }: { className?: string }) {
  const links = socialLinks.filter((s) => s.url);
  if (links.length === 0) return null;
  return (
    <ul className={cn("flex flex-wrap items-center gap-2", className)}>
      {links.map((s) => {
        const Icon = socialIcons[s.icon] ?? Mail;
        return (
          <li key={s.label}>
            <a
              href={s.url}
              target={s.url.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer noopener"
              aria-label={s.label}
              title={s.label}
              className="grid h-9 w-9 place-items-center rounded-lg border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}