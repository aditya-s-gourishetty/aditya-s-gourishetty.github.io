import Link from "next/link";
import { LINKS } from "../constants/links";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[rgba(2,6,23,.6)] backdrop-blur">
        <div className="max-w-5xl mx-auto w-full px-6 sm:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight">
            Aditya S. Gourishetty
          </Link>
          <nav className="space-x-4 text-sm" aria-label="Primary">
            <Link href="/experience">Experience</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      {/* MAIN */}
      <main className="flex-1">
        <div className="max-w-5xl mx-auto w-full px-6 sm:px-8 py-8">
          {children}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-[var(--border)]">
        <div className="max-w-5xl mx-auto w-full px-6 sm:px-8 py-8">
          <nav className="recruiter-bar mb-6" aria-label="Recruiter actions">
            <a className="recruiter-btn" href={`mailto:${LINKS.email}`}>
              Email
            </a>
            <a
              className="recruiter-btn"
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              className="recruiter-btn"
              href={LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </nav>

          <div className="text-sm text-[var(--muted)]">
            {new Date().getFullYear()} Aditya S. Gourishetty
          </div>
        </div>
      </footer>
    </div>
  );
}
