import Layout from '../components/Layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <section>
        <h1 className="text-3xl font-bold">Hi, I'm Your Name 👋</h1>
        <p className="mt-3 text-zinc-300">MSCS @ University. ML Platforms • Graph ML • Security.</p>
        <div className="mt-6 flex gap-3">
          <Link href="/projects" className="px-3 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700">Projects</Link>
          <Link href="/blog" className="px-3 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700">Blog</Link>
          <Link href="/publications" className="px-3 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700">Publications</Link>
        </div>
      </section>
    </Layout>
  )
}
