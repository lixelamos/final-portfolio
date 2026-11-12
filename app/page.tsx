import Image from "next/image";
import Header from "@/components/header";
import ProjectGallery from "@/components/project-gallery";
import Contact from "@/components/contact";
import { profile, secondaryInterest, projects } from "@/lib/content";

export default function Page() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <section className="intro" aria-labelledby="intro-title">
          <p className="section-label">Full stack developer · Nairobi, Kenya</p>
          <h1 id="intro-title">
            Kipkorir
            <br />
            <em>Amos.</em>
          </h1>
          <div className="intro-text">
            <p>
              I build web applications, from React interfaces to APIs and
              databases.
            </p>
            <p>
              Recent work includes FlowDock’s product website, a collections
              platform, and an application for field teams. I work with
              TypeScript, Node.js, and Python.
            </p>
          </div>
          <div className="intro-links">
            <a href="#work">
              Browse my work <span aria-hidden="true">↓</span>
            </a>
            <a href={profile.resume} target="_blank" rel="noreferrer">
              Résumé <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
        <section
          id="work"
          className="work section"
          aria-labelledby="work-title"
        >
          <div className="section-title">
            <h2 id="work-title">Selected work</h2>
            <span>01—{String(projects.length).padStart(2, "0")}</span>
          </div>
          <ProjectGallery />
          <a
            className="inline-link more-github"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            All repositories on GitHub ↗
          </a>
        </section>
        <section
          id="about"
          className="section about"
          aria-labelledby="about-title"
        >
          <div className="section-title">
            <h2 id="about-title">A bit about me</h2>
            <span>Beyond the repos</span>
          </div>
          <div className="about-layout">
            <div className="about-copy">
              <p>
                I’m a developer based in Nairobi. I work across frontend and
                backend development, using React, Vue, Node.js, and Python.
              </p>
              <p>
                I like applications with a clear purpose: tracking what’s
                happening in a field, keeping inventory organised, or helping
                someone study offline.
              </p>
              <p className="tool-note">
                Usually working with
                <br />
                <span>
                  TypeScript, React, Next.js, Express, Python, Flask, SQL, Git.
                </span>
              </p>
            </div>
            <figure className="portrait">
              <Image
                src="/images/amos.jpg"
                alt="Kipkorir Amos"
                width={180}
                height={180}
              />
              <figcaption>Kipkorir Amos</figcaption>
            </figure>
          </div>
          <aside
            className="secondary-interest"
            aria-labelledby="interest-title"
          >
            <div className="interest-label">Also interested in</div>
            <div>
              <h3 id="interest-title">E-learning & content digitisation</h3>
              <p>
                Alongside development, I curate course content and turn
                curricula into interactive learning modules using Articulate
                360, H5P, Canva, and SCORM.
              </p>
              <a
                className="inline-link"
                href={secondaryInterest.url}
                target="_blank"
                rel="noreferrer"
              >
                My e-learning portfolio ↗
              </a>
            </div>
          </aside>
        </section>
        <Contact />
        <footer>
          <span>© {new Date().getFullYear()} Kipkorir Amos</span>
          <a href="#">Back to top ↑</a>
        </footer>
      </main>
    </div>
  );
}
