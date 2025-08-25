import Layout from '../components/Layout'

export default function Contact() {
  return (
    <Layout>
      <h1 className="text-2xl font-semibold">Contact</h1>
      <p className="mt-2">Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
      <p className="mt-1">GitHub: <a href="https://github.com/your-username">@your-username</a></p>
      <p className="mt-1">LinkedIn / Scholar links here.</p>
    </Layout>
  )
}
