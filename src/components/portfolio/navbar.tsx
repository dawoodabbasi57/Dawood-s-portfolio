import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun, FileDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { personalInfo, resume, sections } from "@/data/portfolio";
import { useTheme } from "@/hooks/use-theme";
import { useActiveSection } from "@/hooks/use-active-section";

const ids = sections.map((s) => s.id);

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const { theme, toggle, mounted } = useTheme();
  const active = useActiveSection(ids);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);

      const max =
        document.documentElement.scrollHeight - window.innerHeight;

      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div
        className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-primary/80"
        style={{ transform: `scaleX(${progress / 100})` }}
        aria-hidden="true"
      />

      <nav
        aria-label="Main"
        className="mx-auto grid w-full max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-4 px-5 py-3.5 sm:px-8"
      >
        <a
          href="#home"
          className="flex min-w-0 items-center gap-2.5 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        >
          <span className="grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-lg border border-primary/30 bg-primary/10">
            {personalInfo.logoImage ? (
              <img
  src={personalInfo.logoImage}
  alt={`${personalInfo.name} logo`}
  className="h-full w-full object-cover"
/>
            ) : (
              <span className="font-display text-sm font-bold text-primary">
                {personalInfo.initials}
              </span>
            )}
          </span>

          <span className="hidden truncate font-display text-sm font-semibold sm:block">
            {personalInfo.name}
          </span>
        </a>

        <ul className="hidden items-center justify-center gap-0.5 lg:flex">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={cn(
                  "relative rounded-md px-2.5 py-2 text-[13px] font-medium transition-colors",
                  active === s.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
                aria-current={active === s.id ? "true" : undefined}
              >
                {s.label}

                <span
                  className={cn(
                    "absolute inset-x-2.5 -bottom-0.5 h-0.5 rounded-full bg-primary transition-transform duration-300",
                    active === s.id ? "scale-x-100" : "scale-x-0",
                  )}
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={toggle}
            aria-label="Toggle colour theme"
            className="grid h-9 w-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            {mounted && theme === "dark" ? (
              <Sun className="h-4 w-4 rotate-0 transition-transform duration-300" />
            ) : (
              <Moon className="h-4 w-4 transition-transform duration-300" />
            )}
          </button>

          <a
            href={resume.url}
            download
            className="hidden items-center gap-1.5 rounded-lg bg-primary px-3.5 py-2 text-[13px] font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none sm:inline-flex"
          >
            <FileDown className="h-3.5 w-3.5" aria-hidden="true" />
            Resume
          </a>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none lg:hidden"
          >
            {open ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-border/70 bg-background/95 backdrop-blur-xl lg:hidden">
          <ul className="mx-auto grid w-full max-w-6xl gap-1 px-5 py-4 sm:px-8">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                    active === s.id
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground",
                  )}
                >
                  {s.label}
                </a>
              </li>
            ))}

            <li>
              <a
                href={resume.url}
                download
                className="mt-1 inline-flex items-center gap-2 rounded-lg bg-primary px-3.5 py-2.5 text-sm font-medium text-primary-foreground"
              >
                <FileDown className="h-4 w-4" aria-hidden="true" />
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}