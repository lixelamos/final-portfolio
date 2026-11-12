"use client";
import { useState } from "react";
import Image from "next/image";
import { projects, categories, type Category } from "@/lib/content";
export default function ProjectGallery() {
  const [category, setCategory] = useState<Category>("All work");
  const visible = projects.filter(
    (p) => category === "All work" || p.category === category,
  );
  return (
    <>
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
              className={category === c ? "active" : ""}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        <span className="project-count" aria-live="polite">
          {visible.length} projects
        </span>
      </div>
      <div className="case-studies">
        {visible.map((p) => (
          <article
            className="case-study"
            key={p.slug}
            aria-labelledby={`project-${p.slug}`}
          >
            <div className="case-heading">
              <span className="case-index">
                {String(projects.indexOf(p) + 1).padStart(2, "0")}
              </span>
              <h3 id={`project-${p.slug}`}>{p.name}</h3>
              <span className="case-category">{p.category}</span>
            </div>
            <figure className="project-figure">
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit ${p.name} live site`}
              >
                <Image
                  src={p.screenshot}
                  alt={`${p.name}: ${p.screenshotCaption}`}
                  width={1280}
                  height={720}
                  sizes="(max-width: 700px) 92vw, 720px"
                  quality={85}
                />
                <span className="screenshot-action">Open live site ↗</span>
              </a>
              <figcaption>{p.screenshotCaption}</figcaption>
            </figure>
            <p className="case-summary">{p.description}</p>
            <div className="case-explanation">
              <div>
                <h4>The application</h4>
                <p>{p.context}</p>
              </div>
              <div>
                <h4>
                  {p.slug === "pelini" ? "My contribution" : "Implementation"}
                </h4>
                <p>{p.detail}</p>
              </div>
            </div>
            <ul className="case-highlights" aria-label={`${p.name} features`}>
              {p.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <div className="case-bottom">
              <span className="case-stack">{p.stack.join(" / ")}</span>
              <div className="case-links">
                <a href={p.url} target="_blank" rel="noreferrer">
                  Live site ↗
                </a>
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer">
                    Source ↗
                  </a>
                )}
              </div>
            </div>
            {p.liveNote && (
              <p className="case-access">
                {p.liveNote} for application features.
              </p>
            )}
          </article>
        ))}
      </div>
    </>
  );
}
