import Link from 'next/link'

export default function PostCard({
  slug, title, date, summary
}: { slug: string; title: string; date: string; summary: string; }) {
  return (
    <article className="border border-zinc-800 rounded-2xl p-4 mb-4">
      <h3 className="text-lg font-semibold">
        <Link href={`/blog/${slug}`}>{title}</Link>
      </h3>
      <p className="text-xs text-zinc-400">{new Date(date).toLocaleDateString()}</p>
      <p className="mt-2 text-sm text-zinc-200">{summary}</p>
    </article>
  )
}
