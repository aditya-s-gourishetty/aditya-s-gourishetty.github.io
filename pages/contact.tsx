import Layout from "../components/Layout";
import { LINKS } from "../constants/links";

export default function Contact() {
  return (
    <Layout>
      <h1 className="text-2xl font-semibold">Contact</h1>
      <p className="mt-2">
        Email: <a href={`mailto:${LINKS.email}`}>{LINKS.email}</a>
      </p>
      <p className="mt-1">
        GitHub: <a href={LINKS.github}>@aditya-s-gourishetty</a>
      </p>
      <p className="mt-1">
        LinkedIn: <a href={LINKS.linkedin}>aditya-gourishetty</a>
      </p>
    </Layout>
  );
}
