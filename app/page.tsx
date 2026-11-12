import Image from "next/image";
import Header from "@/components/header";
import ProjectGallery from "@/components/project-gallery";
import Contact from "@/components/contact";
import { profile, secondaryInterest, projects } from "@/lib/content";
export default function Page() {
    return (<div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <section className="hero" aria-labelledby="intro-title">
          <div className="hero-top"><span>FULL STACK DEVELOPER</span><span>NAIROBI, KENYA / 2026</span></div>
          <div className="hero-composition">
            <div className="hero-type"><h1 id="intro-title"><span>KIPKORIR</span><strong>AMOS<span className="name-period">.</span></strong></h1><p>Web applications.<br />From interface to infrastructure.</p></div>
            <figure className="hero-portrait"><div className="portrait-corner" aria-hidden="true"/><Image src="/images/amos.jpg" alt="Kipkorir Amos" width={267} height={267} priority/><figcaption><span>AMOS / NAIROBI</span><span>PORTRAIT</span></figcaption></figure>
          </div>
          <div className="hero-bottom"><p>I’m Amos, a developer building product websites, business software, and tools for everyday work.</p><a className="primary-link" href="#work">Explore my work <span aria-hidden="true">↘</span></a><a className="resume-link" href={profile.resume} target="_blank" rel="noreferrer">View résumé ↗</a></div>
          <div className="hero-baseline"><span>REACT + TYPESCRIPT</span><span>NODE.JS + PYTHON</span><a href="#work">SELECTED WORK BELOW ↓</a></div>
        </section>
        <section id="work" className="work" aria-labelledby="work-title">
          <div className="section-intro"><span className="section-index">01 / THE WORK</span><div className="section-heading"><h2 id="work-title">Selected<br /><em>projects.</em></h2><p>Product websites, business software,<br />and tools for focused work.</p></div></div>
          <ProjectGallery />
          <a className="all-repos" href={profile.github} target="_blank" rel="noreferrer"><span>More code, experiments, and works in progress.</span><strong>Find me on GitHub ↗</strong></a>
        </section>
        <section id="about" className="about" aria-labelledby="about-title"><div className="about-inner"><span className="section-index">02 / A LITTLE CONTEXT</span><div className="about-grid"><h2 id="about-title">Who’s<br /><em>Amos?</em></h2><div className="about-copy"><p>I’m Kipkorir Amos, based in Nairobi. I work across frontend and backend development, using React, Vue, Node.js, and Python.</p><p>I’m interested in software with a clear purpose: getting a Mac workspace ready, managing collections, or helping field teams record what’s happening on the ground.</p><div className="toolkit"><h3>On my desk</h3><p>TypeScript / React / Next.js / Express / Python / Flask / SQL / Git</p></div><a href={profile.resume} className="text-link" target="_blank" rel="noreferrer">The résumé version ↗</a></div></div><aside className="secondary-interest" aria-labelledby="interest-title"><span>ALSO IN MY WORLD</span><div><h3 id="interest-title">E-learning &<br />content digitisation</h3><p>Alongside development, I curate course content and turn curricula into interactive learning modules with Articulate 360, H5P, Canva, and SCORM.</p></div><a href={secondaryInterest.url} target="_blank" rel="noreferrer">Explore this side of my work <span aria-hidden="true">↗</span></a></aside></div></section>
        <Contact />
      </main>
      <footer><a className="footer-name" href="#">KIPKORIR AMOS</a><span>© {new Date().getFullYear()} · NAIROBI, KENYA</span><a href="#">BACK TO TOP ↑</a></footer>
    </div>);
}
