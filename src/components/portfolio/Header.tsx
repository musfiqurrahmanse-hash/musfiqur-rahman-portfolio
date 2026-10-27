import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "@/content/portfolio";

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "research", label: "Research" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${scrolled || open ? "border-b bg-background/85 backdrop-blur-md" : "bg-transparent"}`}
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 rounded bg-primary px-3 py-2 text-primary-foreground">
        Skip to content
      </a>
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="font-display text-2xl font-semibold tracking-tight" aria-label={`${profile.name} — home`}>
          {profile.initials}
          <span className="text-teal">.</span>
        </a>
        <ul className="hidden items-center gap-7 md:flex">
          {navItems.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} className="text-sm text-muted-foreground transition hover:text-foreground">
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="rounded-md p-2 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {open && (
        <ul id="mobile-nav" className="mx-auto max-w-6xl px-5 pb-5 md:hidden animate-in fade-in slide-in-from-top-2">
          {navItems.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} onClick={() => setOpen(false)} className="block border-b py-3 text-base">
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
