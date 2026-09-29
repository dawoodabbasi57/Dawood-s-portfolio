import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/navbar";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Skills } from "@/components/portfolio/skills";
import { ExperienceSection } from "@/components/portfolio/experience";
import { EducationSection } from "@/components/portfolio/education";
import { Certifications } from "@/components/portfolio/certifications";
import { FeaturedProject, Projects } from "@/components/portfolio/projects";
import { Services } from "@/components/portfolio/services";
import { Achievements } from "@/components/portfolio/achievements";
import { Contact } from "@/components/portfolio/contact";
import { BackToTop, Footer } from "@/components/portfolio/footer";
import { personalInfo } from "@/data/portfolio";

const title = `${personalInfo.name} — ${personalInfo.title}`;
const description = personalInfo.intro;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <ExperienceSection />
        <EducationSection />
        <Certifications />
        <FeaturedProject />
        <Projects />
        <Services />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
