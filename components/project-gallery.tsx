"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { projects, categories, type Category } from "@/lib/content";

export default function ProjectGallery() {
  const [category, setCategory] = useState<Category>("All work");
  const [selected, setSelected] = useState("flowdock");
  useEffect(() => {
    function followProjectLink() {
      const slug = window.location.hash.replace("#project-", "");
      if (projects.some((p) => p.slug === slug)) {
        setCategory("All work");
        setSelected(slug);
      }
    }
    followProjectLink();
    window.addEventListener("hashchange", followProjectLink);
    return () => window.removeEventListener("hashchange", followProjectLink);
  }, []);
  const visible = projects.filter(
    (p) => category === "All work" || p.category === category,
  );
  const project = visible.find((p) => p.slug === selected) ?? visible[0];
  useEffect(() => {
    if (window.location.hash === `#project-${selected}`) {
      document.getElementById("project-viewer")?.scrollIntoView();
    }
  }, [selected]);
  return (
    <>
      <div className="project-toolbar">
        <div
          className="project-filters"
          role="group"
          aria-label="Filter projects"
        >
          {categories
            .filter(
              (c) => c === "All work" || projects.some((p) => p.category === c),
            )
            .map((c) => (
              <button
                key={c}
                aria-pressed={category === c}
                onClick={() => setCategory(c)}
              >
                {c}
                <span>
                  {c === "All work"
                    ? projects.length
                    : projects.filter((p) => p.category === c).length}
                </span>
              </button>
            ))}
        </div>
        <span className="catalogue-label">THE PROJECT INDEX ↙</span>
      </div>
      <div className="project-explorer">
        <div
          className="project-index"
          role="group"
          aria-label="Choose a project"
        >
          {visible.map((p) => (
            <button
              key={p.slug}
              className={p.slug === project.slug ? "selected" : ""}
              aria-pressed={p.slug === project.slug}
              aria-controls="project-viewer"
              onClick={() => setSelected(p.slug)}
            >
              <span className="index-number">
                {String(projects.indexOf(p) + 1).padStart(2, "0")}
              </span>
              <span className="index-name">
                {p.name}
                <small>{p.label.toLowerCase()}</small>
              </span>
              <span className="index-arrow" aria-hidden="true">
                ↗
              </span>
            </button>
          ))}
          <p className="index-note">
            Select a project to explore its interface, purpose, and
            implementation.
          </p>
        </div>
        <article
          className={`project-viewer project-${project.slug}`}
          id="project-viewer"
          aria-labelledby={`project-${project.slug}`}
        >
          <div className="project-stage">
            <div className="stage-label">
              <span>{project.role}</span>
              <span>
                {String(projects.indexOf(project) + 1).padStart(2, "0")} /{" "}
                {String(projects.length).padStart(2, "0")}
              </span>
            </div>
            <a
              className="project-image"
              href={project.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit ${project.name} live site`}
            >
              <Image
                key={project.slug}
                src={project.screenshot}
                alt={`${project.name}: ${project.screenshotCaption}`}
                width={1280}
                height={720}
                sizes="(max-width: 800px) 90vw, 65vw"
              />
              <span className="preview-visit">Visit live site ↗</span>
            </a>
            <p className="screenshot-note">
              {project.screenshotCaption}
              {project.liveNote
                ? ` · ${project.liveNote} for application features`
                : ""}
            </p>
          </div>
          <div className="project-story" aria-live="polite">
            <div className="story-heading">
              <div>
                <p className="eyebrow">{project.category}</p>
                <h3 id={`project-${project.slug}`}>{project.name}</h3>
              </div>
              <a
                className="circle-link"
                href={project.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${project.name}`}
              >
                ↗
              </a>
            </div>
            <p className="project-summary">{project.description}</p>
            <div className="story-columns">
              <div>
                <h4>The purpose</h4>
                <p>{project.context}</p>
              </div>
              <div>
                <h4>My contribution</h4>
                <p>{project.detail}</p>
              </div>
            </div>
            <div className="project-bottom">
              <p className="project-stack">{project.stack.join(" / ")}</p>
              {project.github && (
                <a
                  className="quiet-link"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  Source code ↗
                </a>
              )}
            </div>
            <details className="project-details">
              <summary>
                Project details <span aria-hidden="true">+</span>
              </summary>
              <ul>
                {project.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </details>
          </div>
        </article>
      </div>
    </>
  );
}
