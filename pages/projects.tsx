import Layout from '../components/Layout'

export default function Projects() {
  return (
    <Layout>
      <h1 className="text-2xl font-semibold">Projects</h1>
      <ul className="mt-4 list-disc pl-6 space-y-3">
        <li><strong>HeteroSTEAL</strong> — Model extraction for HGNNs (OGB-MAG). <a href="#">Code</a></li>
        <li><strong>m-height Regression</strong> — DL over LP-derived targets (500k samples). <a href="#">Repo</a></li>
      </ul>
    </Layout>
  )
}
