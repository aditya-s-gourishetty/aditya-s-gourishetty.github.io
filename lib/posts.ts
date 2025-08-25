import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

export type PostFrontmatter = {
  title: string
  date: string       // string only
  summary: string    // string only (empty if missing)
  draft: boolean     // boolean only (false if missing)
}

const postsDir = path.join(process.cwd(), 'content', 'blog')

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDir)) return []
  return fs.readdirSync(postsDir)
    .filter(f => f.endsWith('.mdx') || f.endsWith('.md'))
    .map(f => f.replace(/\.(mdx|md)$/,'').toLowerCase())
}

function toIsoDateString(d: unknown): string {
  if (typeof d === 'string') return d                // e.g., "2025-08-25"
  if (d instanceof Date) return d.toISOString().slice(0, 10)
  return ''                                          // fallback
}

export function getPostBySlug(slug: string) {
  const fullPathMdx = path.join(postsDir, slug + '.mdx')
  const fullPathMd  = path.join(postsDir, slug + '.md')
  const filePath = fs.existsSync(fullPathMdx) ? fullPathMdx : fullPathMd
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)

  const fm = data as Record<string, unknown>
  const frontmatter: PostFrontmatter = {
    title: String(fm.title ?? ''),
    date: toIsoDateString(fm.date),
    summary: typeof fm.summary === 'string' ? fm.summary : '',
    draft: fm.draft === true,  // defaults to false if not present
  }

  return { frontmatter, content, slug }
}

export function getSortedPosts() {
  const slugs = getAllPostSlugs()
  const posts = slugs.map(slug => getPostBySlug(slug))
    .filter(p => !p.frontmatter.draft)
  return posts.sort((a, b) =>
    (new Date(b.frontmatter.date).getTime() || 0) -
    (new Date(a.frontmatter.date).getTime() || 0)
  )
}
