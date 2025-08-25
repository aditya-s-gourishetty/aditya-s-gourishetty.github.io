import Link from 'next/link'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-zinc-800">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="font-semibold">Your Name</Link>
          <nav className="space-x-4 text-sm">
            <Link href="/projects">Projects</Link>
            <Link href="/publications">Publications</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-4 py-8">{children}</div>
      </main>
      <footer className="border-t border-zinc-800">
        <div className="max-w-3xl mx-auto px-4 py-6 text-sm text-zinc-400">
          © {new Date().getFullYear()} Your Name
        </div>
      </footer>
    </div>
  )
}
