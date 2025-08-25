import { serialize } from 'next-mdx-remote/serialize'

export async function compileMdx(source: string) {
  return serialize(source, {
    scope: {},
    mdxOptions: { remarkPlugins: [], rehypePlugins: [] }
  })
}
