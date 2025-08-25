import Layout from '../../components/Layout'
import { getSortedPosts } from '../../lib/posts'
import PostCard from '../../components/PostCard'

export async function getStaticProps() {
  const posts = getSortedPosts()
  return { props: { posts } }
}

export default function BlogIndex({ posts }: any) {
  return (
    <Layout>
      <h1 className="text-2xl font-semibold">Blog</h1>
      <div className="mt-4">
        {posts.length === 0 && <p className="text-zinc-400">No posts yet.</p>}
        {posts.map((p: any) => (
          <PostCard key={p.slug} slug={p.slug} title={p.frontmatter.title} date={p.frontmatter.date} summary={p.frontmatter.summary || ''} />
        ))}
      </div>
    </Layout>
  )
}
