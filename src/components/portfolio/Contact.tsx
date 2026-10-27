import { useState, type FormEvent } from "react";
import { z } from "zod";
import { profile, socials } from "@/content/portfolio";
import { Card, ExtLink } from "./ui";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(10, "Message should be at least 10 characters").max(1000),
});
type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const field =
  "mt-1.5 w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/20";

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Errors = {};
      r.error.issues.forEach((i) => (errs[i.path[0] as keyof Errors] = i.message));
      setErrors(errs);
      setDone(false);
      return;
    }
    setErrors({});
    setDone(true);
    e.currentTarget.reset();
  }

  return (
    <div className="grid gap-8 md:grid-cols-5">
      <div className="md:col-span-2 space-y-4">
        <p className="text-muted-foreground">
          The best way to reach me right now is through one of my profiles below.
        </p>
        <ul className="space-y-2">
          {socials.map((s) => (
            <li key={s.label}>
              <ExtLink href={s.href}>{s.label}</ExtLink>
              {s.placeholder && <span className="ml-2 text-xs text-muted-foreground">(link coming soon)</span>}
            </li>
          ))}
        </ul>
        {profile.email ? (
          <a href={`mailto:${profile.email}`} className="text-primary underline">{profile.email}</a>
        ) : (
          <p className="text-sm text-muted-foreground">Email: add details later.</p>
        )}
      </div>
      <Card className="md:col-span-3 hover:translate-y-0">
        <p className="mb-5 rounded-md bg-accent px-3 py-2 text-xs text-accent-foreground">
          Front-end demo: this form validates input but does not send messages yet.
        </p>
        <form onSubmit={onSubmit} noValidate className="space-y-4">
          {(["name", "email"] as const).map((k) => (
            <div key={k}>
              <label htmlFor={k} className="text-sm font-medium capitalize">{k}</label>
              <input id={k} name={k} type={k === "email" ? "email" : "text"} className={field}
                aria-invalid={!!errors[k]} aria-describedby={errors[k] ? `${k}-err` : undefined} />
              {errors[k] && <p id={`${k}-err`} className="mt-1 text-xs text-destructive">{errors[k]}</p>}
            </div>
          ))}
          <div>
            <label htmlFor="message" className="text-sm font-medium">Message</label>
            <textarea id="message" name="message" rows={5} className={field}
              aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-err" : undefined} />
            {errors.message && <p id="message-err" className="mt-1 text-xs text-destructive">{errors.message}</p>}
          </div>
          <button type="submit" className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90">
            Check message
          </button>
          <div role="status" aria-live="polite">
            {done && (
              <p className="text-sm text-teal">
                Looks good! This demo can't deliver messages yet — please reach out via LinkedIn or GitHub.
              </p>
            )}
          </div>
        </form>
      </Card>
    </div>
  );
}
