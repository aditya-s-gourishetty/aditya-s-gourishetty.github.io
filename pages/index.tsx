import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Link from "next/link";
import { LINKS } from "../constants/links";
import ProfileCard from "components/ProfileCard";

export default function Home() {
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Aditya S. Gourishetty",
    url: "https://aditya-s-gourishetty.github.io",
    sameAs: [LINKS.github, LINKS.linkedin],

    alumniOf: { "@type": "CollegeOrUniversity", name: "Texas A&M University" },
    jobTitle: "Software Engineer / ML Platform",
  };
  return (
    <Layout>
      <SEO
        title="Aditya S. Gourishetty"
        description="CS grad student with 3 years industry experience. Software Engineering, ML platforms, graph ML, and security."
        jsonLd={personLd}
      />
      <section className="mt-12 flex justify-center mb-12">
        <ProfileCard />
      </section>
      <section className="text-center">
        <p className="mt-4 text-[var(--muted)] max-w-2xl mx-auto leading-relaxed">
          Hey, I’m Aditya 👋 — a CS Master’s student at Texas A&amp;M (’26) who
          builds at the intersection of{" "}
          <strong>ML systems, cloud platforms, and security</strong>.
          <br />
          <br />I spent 3 years at <strong>
            Epsilon (Publicis Groupe)
          </strong>{" "}
          engineering cloud-native ML platforms — from APIs and testing
          frameworks to scalable pipelines on AWS/Databricks that powered
          marketing analytics at scale. Along the way, I’ve also interned at{" "}
          <strong>Paycom, MakeMyTrip, and Cognirel</strong>, working on projects
          ranging from recommendation engines to clickstream dashboards to deep
          learning models. This fall, I’ll be joining <strong>Amazon</strong> as
          a software engineering intern.
          <br />
          <br />
          My current research focuses on <strong>adversarial security</strong> —
          creating adversarial samples for malware dynamic analysis and probing
          the robustness of heterogeneous GNNs.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <a
            href="/Aditya_Gourishetty_Resume.pdf"
            className="recruiter-btn primary"
          >
            Download Resume
          </a>
          <Link href="/experience" className="recruiter-btn">
            View Experience
          </Link>
          <Link href="/projects" className="recruiter-btn">
            Key Projects
          </Link>
        </div>
      </section>
      <section className="mt-12">
        <h2 className="text-xl font-semibold">Quick Highlights</h2>
        <div className="mt-4 grid sm:grid-cols-3 gap-4">
          <div className="teal-card">
            <p className="text-sm">
              3 yrs Software Engineer — ML Platform (Publicis/Epsilon)
            </p>
          </div>
          <div className="teal-card">
            <p className="text-sm">
              Cloud: AWS, Terraform, Databricks, Docker, CI/CD
            </p>
          </div>
          <div className="teal-card">
            <p className="text-sm">
              Research: Heterogeneous GNNs, adversarial methods
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
