import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Database, FileText, GraduationCap, Award } from "lucide-react";
import {
  profile, socials, interests, skills, projects, projectCategories, research,
  datasets, education, certifications, achievements, type ProjectCategory,
} from "@/content/portfolio";
import { Header } from "@/components/portfolio/Header";
import { ContactForm } from "@/components/portfolio/Contact";
import { Section, Card, PlaceholderCard, Tag, ExtLink, Badge, Reveal } from "@/components/portfolio/ui";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Md. Musfiqur Rahman — CSE Student, ML & Software" },
      { name: "description", content: "Portfolio of Md. Musfiqur Rahman, CSE undergraduate at AIUB exploring machine learning, research and software development." },
      { property: "og:title", content: "Md. Musfiqur Rahman — Portfolio" },
      { property: "og:description", content: "Projects, research and coursework by Md. Musfiqur Rahman, CSE undergraduate at AIUB." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [filter, setFilter] = useState<"all" | ProjectCategory>("all");
  const shown = projects.filter((p) => filter === "all" || p.category === filter);

  return (
    <>
      <Header />
      <main id="main">
        {/* HERO */}
        <section id="home" className="relative overflow-hidden">
          <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-24 pt-16 md:grid-cols-[1.4fr_1fr] md:pt-28">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal">{profile.tagline}</p>
              <h1 className="mt-5 text-5xl font-medium leading-[1.05] md:text-7xl">
                Md. Musfiqur<br /><em className="font-normal text-primary">Rahman</em>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground">{profile.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projects" className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90">
                  Explore Projects <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
                <a href="#contact" className="rounded-lg border bg-card px-5 py-3 text-sm font-medium transition hover:border-primary/40">
                  Contact Me
                </a>
              </div>
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2" aria-label="Profiles">
                {socials.map((s) => (
                  <li key={s.label}><ExtLink href={s.href}>{s.label}</ExtLink></li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="hidden justify-center md:flex">
              <div className="relative grid h-72 w-72 place-items-center rounded-full border bg-card shadow-card" aria-hidden>
                <div className="absolute inset-4 rounded-full border border-dashed border-teal/40" />
                <span className="font-display text-8xl font-medium text-foreground">
                  M<span className="text-primary">R</span>
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ABOUT */}
        <Section id="about" eyebrow="01 — About" title="A bit about me" muted>
          <div className="grid gap-10 md:grid-cols-2">
            <Reveal className="space-y-4 text-lg leading-relaxed">
              {profile.about.map((p, i) => <p key={i}>{p}</p>)}
            </Reveal>
            <Reveal>
              <h3 className="text-xl font-medium">Areas of interest</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {interests.map((i) => (
                  <li key={i} className="rounded-full border bg-card px-4 py-2 text-sm">{i}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Section>

        {/* SKILLS */}
        <Section id="skills" eyebrow="02 — Skills" title="Tools & technologies" intro="Grouped by area. Only confirmed technologies are listed; more will be added.">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((g) => (
              <Reveal key={g.title}>
                <Card className="h-full">
                  <h3 className="text-lg font-medium">{g.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {g.items.length ? g.items.map((s) => <Tag key={s}>{s}</Tag>) : (
                      <p className="text-sm text-muted-foreground">Details coming soon</p>
                    )}
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* PROJECTS */}
        <Section id="projects" eyebrow="03 — Projects" title="Selected work" intro="A mix of research, software and coursework repositories on GitHub." muted>
          <div role="group" aria-label="Filter projects" className="mb-8 flex flex-wrap gap-2">
            {projectCategories.map((c) => (
              <button key={c.id} onClick={() => setFilter(c.id)} aria-pressed={filter === c.id}
                className={`rounded-full border px-4 py-1.5 text-sm transition ${filter === c.id ? "border-primary bg-primary text-primary-foreground" : "bg-card hover:border-primary/40"}`}>
                {c.label}
              </button>
            ))}
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {shown.map((p) => (
              <Card key={p.title} className="flex flex-col">
                <div className="flex items-center justify-between gap-2">
                  <Badge tone="teal">{projectCategories.find((c) => c.id === p.category)?.label}</Badge>
                </div>
                <h3 className="mt-4 text-xl font-medium leading-snug">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.description}</p>
                {p.tags && <div className="mt-4 flex flex-wrap gap-1.5">{p.tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>}
                {p.repo && <div className="mt-5"><ExtLink href={p.repo}>View repository</ExtLink></div>}
              </Card>
            ))}
            <PlaceholderCard title="More projects will be added">
              Follow progress on <ExtLink href="https://github.com/Musfiq53062">GitHub</ExtLink>
            </PlaceholderCard>
          </div>
        </Section>

        {/* RESEARCH */}
        <Section id="research" eyebrow="04 — Research" title="Research & publications" intro="Publications, ongoing work and presentations. Statuses are updated as work progresses.">
          <div className="grid gap-5 md:grid-cols-2">
            {research.map((r) => (
              <Card key={r.title}>
                <div className="flex flex-wrap items-center gap-2">
                  <FileText className="h-4 w-4 text-teal" aria-hidden />
                  <Badge tone="teal">{r.kind}</Badge>
                  <Badge>{r.status}</Badge>
                  <Badge>{r.year ?? "Year: TBA"}</Badge>
                </div>
                <h3 className="mt-4 text-xl font-medium leading-snug">{r.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{r.abstract}</p>
                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                  {r.doi && <ExtLink href={`https://doi.org/${r.doi}`}>DOI</ExtLink>}
                  {r.paperLink && <ExtLink href={r.paperLink}>Paper</ExtLink>}
                  {r.dataset && <ExtLink href={r.dataset.href}>{r.dataset.label}</ExtLink>}
                  {r.code && <ExtLink href={r.code}>Code</ExtLink>}
                </div>
              </Card>
            ))}
            <PlaceholderCard title="Add research item">
              Title · Status (Ongoing / Preprint / Published) · Year · Abstract · DOI / paper link · Dataset · Code link
            </PlaceholderCard>
          </div>

          <h3 className="mt-16 flex items-center gap-2 text-2xl font-medium">
            <Database className="h-5 w-5 text-teal" aria-hidden /> Datasets
          </h3>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {datasets.map((d) => (
              <Card key={d.title}>
                <h4 className="font-display text-xl font-medium">{d.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{d.description}</p>
                <div className="mt-5 flex gap-5">
                  {d.link && <ExtLink href={d.link}>View on Mendeley Data</ExtLink>}
                  {d.doi && <ExtLink href={`https://doi.org/${d.doi}`}>DOI</ExtLink>}
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* EDUCATION */}
        <Section id="education" eyebrow="05 — Education" title="Education & achievements" muted>
          <div className="space-y-5">
            {education.map((e) => (
              <Card key={e.institution} className="flex gap-5">
                <GraduationCap className="mt-1 h-6 w-6 shrink-0 text-primary" aria-hidden />
                <div>
                  <h3 className="text-xl font-medium">{e.institution}</h3>
                  <p className="mt-1">{e.degree}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{e.period ?? "Dates: add later"}</p>
                  {e.details && <p className="mt-2 text-sm text-muted-foreground">{e.details}</p>}
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {[{ t: "Certifications", items: certifications }, { t: "Achievements", items: achievements }].map(({ t, items }) => (
              <div key={t}>
                <h3 className="flex items-center gap-2 text-2xl font-medium"><Award className="h-5 w-5 text-teal" aria-hidden />{t}</h3>
                <div className="mt-5 grid gap-4">
                  {items.map((a) => (
                    <Card key={a.title}>
                      <h4 className="font-medium">{a.title}</h4>
                      <p className="text-sm text-muted-foreground">{[a.issuer, a.year].filter(Boolean).join(" · ")}</p>
                      {a.link && <div className="mt-2"><ExtLink href={a.link}>View</ExtLink></div>}
                    </Card>
                  ))}
                  <PlaceholderCard title={`${t} coming soon`}>Verified entries will be added here.</PlaceholderCard>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* CONTACT */}
        <Section id="contact" eyebrow="06 — Contact" title="Let's connect">
          <ContactForm />
        </Section>
      </main>

      <footer className="border-t">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <ul className="flex flex-wrap gap-5">
            {socials.map((s) => <li key={s.label}><ExtLink href={s.href}>{s.label}</ExtLink></li>)}
          </ul>
        </div>
      </footer>
    </>
  );
}
