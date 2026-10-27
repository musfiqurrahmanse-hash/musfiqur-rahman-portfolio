import { useEffect, useRef, type ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  muted,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
  muted?: boolean;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={muted ? "bg-muted/60 border-y" : ""}>
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal">{eyebrow}</p>
          <h2 id={`${id}-title`} className="mt-3 text-3xl font-medium md:text-5xl">
            {title}
          </h2>
          {intro && <p className="mt-4 max-w-2xl text-muted-foreground">{intro}</p>}
        </Reveal>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-xl border bg-card p-6 shadow-card transition duration-300 hover:-translate-y-0.5 hover:border-primary/30 ${className}`}
    >
      {children}
    </div>
  );
}

export function PlaceholderCard({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <div className="flex flex-col justify-center rounded-xl border-2 border-dashed border-border p-6 text-muted-foreground">
      <p className="font-mono text-xs uppercase tracking-widest">+ {title}</p>
      {children && <div className="mt-2 text-sm">{children}</div>}
    </div>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full bg-secondary px-2.5 py-1 font-mono text-[11px] text-secondary-foreground">
      {children}
    </span>
  );
}

export function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline underline-offset-4"
    >
      {children}
      <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
      <span className="sr-only">(opens in new tab)</span>
    </a>
  );
}

export function Badge({ children, tone = "default" }: { children: ReactNode; tone?: "default" | "teal" }) {
  return (
    <span
      className={`rounded-md px-2 py-0.5 text-xs font-medium ${tone === "teal" ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground border"}`}
    >
      {children}
    </span>
  );
}
