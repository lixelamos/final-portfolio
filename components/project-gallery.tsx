"use client";

import { useState } from "react";
import Image from "next/image";
import { projects, categories, type Category, type Project } from "@/lib/content";

function ProjectDetails({ project }: { project: Project }) {
  return (
    <details className="project-details">
      <summary>A closer look <span aria-hidden="true">+</span></summary>
      <div className="project-notes">
        <h4>The application</h4>
        <p>{project.context}</p>
        <h4>{project.slug === "pelini" ? "My contribution" : "Implementation"}</h4>
        <p>{project.detail}</p>
        <ul>{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
        <p className="screenshot-note">
          Screenshot: {project.screenshotCaption}.
          {project.liveNote && ` ${project.liveNote} for application features.`}
        </p>
      </div>
    </details>
  );
}

export default function ProjectGallery() {
  const [category, setCategory] = useState<Category>("All work");
  const visible = projects.filter((project) => category === "All work" || project.category === category);

  return (
    <>
      <div className="project-toolbar">
        <div className="project-filters" role="group" aria-label="Filter projects">
          {categories
            .filter((value) => value === "All work" || projects.some((project) => project.category === value))
            .map((value) => (
              <button key={value} className={category === value ? "active" : ""} aria-pressed={category === value} onClick={() => setCategory(value)}>
                {value}<span>{value === "All work" ? projects.length : projects.filter((project) => project.category === value).length}</span>
              </button>
            ))}
        </div>
        <span className="project-count" aria-live="polite">{String(visible.length).padStart(2, "0")} PROJECTS</span>
      </div>
      <div className="project-grid">
        {visible.map((project) => {
          const featured = project.slug === "flowdock";
          return (
            <article className={`project project-${project.slug} ${featured ? "project-featured" : ""}`} key={project.slug} aria-labelledby={`project-${project.slug}`}>
              <a className="project-image" href={project.url} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name} live site`}>
                <Image src={project.screenshot} alt={`${project.name}: ${project.screenshotCaption}`} width={1280} height={720} sizes={featured ? "(max-width: 800px) 92vw, 720px" : "(max-width: 560px) 92vw, 560px"} quality={85} />
                <span className="image-arrow" aria-hidden="true">↗</span>
              </a>
              <div className="project-body">
                <div className="project-overline"><span>{String(projects.indexOf(project) + 1).padStart(2, "0")} / {project.category}</span>{featured && <span>FEATURED</span>}</div>
                <h3 id={`project-${project.slug}`}><a href={project.url} target="_blank" rel="noreferrer">{project.name}</a></h3>
                <p className="project-summary">{project.description}</p>
                <p className="project-stack">{project.stack.join(" · ")}</p>
                <div className="project-links">
                  <a href={project.url} target="_blank" rel="noreferrer">Live site ↗</a>
                  {project.github && <a href={project.github} target="_blank" rel="noreferrer">Source code ↗</a>}
                </div>
                {!featured && <ProjectDetails project={project} />}
              </div>
              {featured && <ProjectDetails project={project} />}
            </article>
          );
        })}
      </div>
    </>
  );
}
