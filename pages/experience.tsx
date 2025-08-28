import Layout from "../components/Layout";
import SEO from "../components/SEO";
import fs from "node:fs";
import path from "node:path";
import { useId, useState } from "react";

type Role = {
  title: string;
  company: string;
  url?: string;
  location?: string;
  start: string;
  end: string;
  bullets: string[];
  tech?: string[];
};

export async function getStaticProps() {
  const file = path.join(process.cwd(), "data", "experience.json");
  const raw = fs.readFileSync(file, "utf8");
  const roles: Role[] = JSON.parse(raw);
  return { props: { roles } };
}

function slugifyCompany(name: string) {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function Dot() {
  return (
    <span className="relative flex h-3 w-3 items-center justify-center">
      <span className="absolute inline-flex h-3 w-3 rounded-full bg-teal-400"></span>
      <span className="absolute inline-flex h-5 w-5 rounded-full opacity-30 bg-teal-400 blur-[2px]"></span>
    </span>
  );
}

function HoverCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="pointer-events-none absolute left-6 top-6 z-10 hidden max-w-xl rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-xl group-hover:block">
      {children}
    </div>
  );
}

function TechPills({ tech }: { tech?: string[] }) {
  if (!tech || tech.length === 0) return null;
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {tech.map((t, i) => (
        <span
          key={i}
          className="text-xs px-2 py-1 rounded-full bg-[var(--card)] border border-[var(--border)]"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

function CompanyBadge({ role, size = 28 }: { role: Role; size?: number }) {
  const [failed, setFailed] = useState(false);
  const src = `/logos/${slugifyCompany(role.company)}.png`;
  // Use <img> to allow dynamic src + easy onError fallback
  const img = !failed ? (
    <img
      src={src}
      alt={`${role.company} logo`}
      width={size}
      height={size}
      className="h-[28px] w-[28px] rounded-md object-contain border border-[var(--border)] bg-[var(--card)]"
      onError={() => setFailed(true)}
    />
  ) : (
    <div
      aria-hidden
      style={{ width: size, height: size }}
      className="grid place-items-center rounded-md border border-[var(--border)] bg-[var(--card)] text-[10px] text-[var(--muted)]"
      title={role.company}
    >
      {role.company.slice(0, 2).toUpperCase()}
    </div>
  );

  const contents = (
    <div className="flex items-center gap-2">
      {img}
      <span className="font-semibold">{role.company}</span>
    </div>
  );

  return role.url ? (
    <a
      href={role.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
      aria-label={`Visit ${role.company} website`}
      title={role.company}
    >
      {img}
      <span className="font-semibold underline decoration-dotted underline-offset-4">
        {role.company}
      </span>
      <span className="sr-only">(opens in new tab)</span>
    </a>
  ) : (
    contents
  );
}

function TimelineItem({ role, isLast }: { role: Role; isLast: boolean }) {
  const summaryId = useId();
  return (
    <li className="relative pl-10 group">
      <span
        aria-hidden
        className={`absolute left-[5px] top-0 h-full w-[2px] ${
          isLast ? "bg-transparent" : "bg-[var(--border)]"
        }`}
      />
      <span className="absolute left-0 top-[6px]">
        <Dot />
      </span>

      <div className="flex flex-wrap items-center gap-3">
        <h3 className="font-semibold">
          {role.title} <span className="text-[var(--muted)]">·</span>
        </h3>
        <CompanyBadge role={role} />
        <span className="ml-auto text-sm text-[var(--muted)]">
          {role.start} — {role.end}
        </span>
      </div>
      {role.location && (
        <p className="text-sm text-[var(--muted)] mt-0.5">{role.location}</p>
      )}

      <div className="relative">
        <HoverCard>
          <div className="flex items-start gap-3">
            <CompanyBadge role={role} size={24} />
            <div>
              <h4 className="font-medium">{role.title}</h4>
              <p className="text-sm text-[var(--muted)]">
                {role.start} — {role.end}
                {role.location ? ` • ${role.location}` : ""}
              </p>
            </div>
          </div>
          <ul className="mt-3 list-disc pl-5 space-y-1">
            {role.bullets.map((b, j) => (
              <li key={j} className="text-sm">
                {b}
              </li>
            ))}
          </ul>
          <TechPills tech={role.tech} />
        </HoverCard>
      </div>

      <details className="mt-2 md:hidden">
        <summary
          id={summaryId}
          className="cursor-pointer select-none text-sm text-teal-400 underline decoration-dotted underline-offset-4"
        >
          More details
        </summary>
        <div className="mt-2 rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
          <ul className="list-disc pl-5 space-y-1">
            {role.bullets.map((b, j) => (
              <li key={j} className="text-sm">
                {b}
              </li>
            ))}
          </ul>
          <TechPills tech={role.tech} />
        </div>
      </details>
    </li>
  );
}

export default function Experience({ roles }: { roles: Role[] }) {
  return (
    <Layout>
      <SEO
        title="Experience — Aditya S. Gourishetty"
        description="Professional experience and internships."
      />
      <h1 className="text-2xl font-semibold">Professional Experience</h1>
      <p className="mt-2 text-sm text-[var(--muted)]">
        Hover on desktop (or tap “More details” on mobile) to see
        responsibilities and tech.
      </p>
      <ol className="relative mt-6 space-y-6">
        {roles.map((r, i) => (
          <TimelineItem
            key={`${r.title}-${r.company}-${i}`}
            role={r}
            isLast={i === roles.length - 1}
          />
        ))}
      </ol>
    </Layout>
  );
}
