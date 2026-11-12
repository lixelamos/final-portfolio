import Image from "next/image";
import Header from "@/components/header";
import ProjectGallery from "@/components/project-gallery";
import Contact from "@/components/contact";
import { profile, secondaryInterest } from "@/lib/content";

export default function Page() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <section className="hero wrap" aria-labelledby="intro-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> INDEPENDENT DEVELOPER · NAIROBI
            </p>
            <h1 id="intro-title">
              Thoughtful interfaces.
              <br />
              <em>Solid foundations.</em>
            </h1>
            <p className="hero-description">
              I’m Amos. I build product websites and web applications that bring
              clarity to everyday work, from the first interaction to the systems
              behind it.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">
                Explore the work <span aria-hidden="true">↘</span>
              </a>
              <a
                className="quiet-link"
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
              >
                View résumé <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="hero-signature">
              <Image
                src="/images/amos.jpg"
                alt="Kipkorir Amos"
                width={44}
                height={44}
              />
              <p>
                Kipkorir Amos<span>Full stack developer</span>
              </p>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-topline">
              <span>IN FOCUS / 01</span>
              <span>PRODUCT WEBSITE</span>
            </div>
            <a
              className="hero-browser"
              href="https://www.flowdock.space/"
              target="_blank"
              rel="noreferrer"
              aria-label="Explore the live FlowDock website"
            >
              <div className="browser-chrome">
                <span className="window-dots" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
                <span>flowdock.space</span>
                <span aria-hidden="true">↗</span>
              </div>
              <Image
                src="/images/projects/flowdock.png"
                alt="FlowDock website showing its macOS workspace preview"
                width={1280}
                height={720}
                sizes="(max-width: 800px) 92vw, 52vw"
                preload
              />
            </a>
            <div className="visual-caption">
              <div>
                <h2>A better start to the workday.</h2>
                <p>FlowDock · Next.js, TypeScript & MDX</p>
              </div>
              <a href="#work" aria-label="Read about FlowDock">
                ↘
              </a>
            </div>
            <div className="visual-footnote">
              <span>01 — INTERFACE</span>
              <span>02 — INTERACTION</span>
              <span>03 — IMPLEMENTATION</span>
            </div>
          </div>
        </section>
        <div className="discipline-strip wrap">
          <span>Built with purpose, across the stack.</span>
          <p>
            React <b>/</b> TypeScript <b>/</b> Next.js <b>/</b> Node.js <b>/</b>{" "}
            Python
          </p>
        </div>
        <section id="work" className="work wrap" aria-labelledby="work-title">
          <div className="section-intro">
            <p className="eyebrow">01 / SELECTED WORK</p>
            <div className="section-heading">
              <h2 id="work-title">
                Different problems.
                <br />
                <em>Considered solutions.</em>
              </h2>
              <p>
                A closer look at the websites and applications I’ve built, and
                the thinking behind them.
              </p>
            </div>
          </div>
          <ProjectGallery />
          <a
            className="all-repos"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            <span>For the code, experiments, and work in progress.</span>
            <strong>Explore GitHub ↗</strong>
          </a>
        </section>
        <section id="about" className="about" aria-labelledby="about-title">
          <div className="wrap about-grid">
            <div className="about-portrait">
              <Image
                src="/images/amos.jpg"
                alt="Amos outdoors in Nairobi"
                width={267}
                height={267}
                sizes="(max-width: 600px) 70vw, 267px"
              />
              <span>AMOS / NAIROBI, KENYA</span>
            </div>
            <div className="about-copy">
              <p className="eyebrow">02 / THE PERSON BEHIND THE WORK</p>
              <h2 id="about-title">
                Curious about the details.
                <br />
                <em>Focused on the whole.</em>
              </h2>
              <p>
                I’m Kipkorir Amos, a developer based in Nairobi. I work across
                frontend and backend development with React, Vue, Node.js, and
                Python.
              </p>
              <p>
                I’m drawn to software with a clear purpose: preparing a Mac
                workspace, helping teams manage collections, or keeping field
                observations organised. I care about how an interface feels and
                how the system behind it holds together.
              </p>
              <a
                className="quiet-link"
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
              >
                More about my experience ↗
              </a>
            </div>
          </div>
          <aside className="secondary-interest wrap">
            <p className="eyebrow">A SECONDARY INTEREST</p>
            <h3>
              E-learning &<br />
              <em>content digitisation.</em>
            </h3>
            <div>
              <p>
                I also turn curricula into interactive learning modules using
                Articulate 360, H5P, Canva, and SCORM.
              </p>
              <a
                className="quiet-link"
                href={secondaryInterest.url}
                target="_blank"
                rel="noreferrer"
              >
                Explore my learning portfolio ↗
              </a>
            </div>
          </aside>
        </section>
        <Contact />
      </main>
      <footer className="wrap">
        <a href="#" className="footer-name">
          Kipkorir Amos<span>Development, with intention.</span>
        </a>
        <span>© {new Date().getFullYear()} · Nairobi</span>
        <a href="#">Back to top ↑</a>
      </footer>
    </div>
  );
}
