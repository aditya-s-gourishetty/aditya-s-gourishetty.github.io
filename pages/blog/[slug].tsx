import Layout from '../../components/Layout'
import { getAllPostSlugs, getPostBySlug } from '../../lib/posts'
import { MDXRemote } from 'next-mdx-remote'
import { compileMdx } from '../../lib/mdx'

export async function getStaticPaths() {
  const slugs = getAllPostSlugs()
  return { paths: slugs.map(slug => ({ params: { slug } })), fallback: false }
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  const mdxSource = await compileMdx(post.content)
  return { props: { post, mdxSource } }
}

export default function BlogPost({ post, mdxSource }: any) {
  return (
    <Layout>
      <article>
        <h1 className="text-3xl font-bold">{post.frontmatter.title}</h1>
        <p className="text-sm text-zinc-400">{new Date(post.frontmatter.date).toLocaleDateString()}</p>
        <div className="prose prose-invert max-w-none mt-6">
          <MDXRemote {...mdxSource} />
        </div>
      </article>
    </Layout>
  )
}
