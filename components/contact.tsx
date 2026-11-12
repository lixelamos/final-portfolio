"use client";
import { useState } from "react";
import { profile } from "@/lib/content";
export default function Contact() {
  const [copied, setCopied] = useState(false);
  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }
  return (
    <section
      id="contact"
      className="section contact"
      aria-labelledby="contact-title"
    >
      <div className="section-title">
        <h2 id="contact-title">Get in touch</h2>
        <span>Say hello</span>
      </div>
      <p>
        For development work, collaborations, or a question about a project:
      </p>
      <div className="email-row">
        <a href={`mailto:${profile.email}`}>{profile.email} ↗</a>
        <button onClick={copy} aria-label="Copy email address">
          <span aria-live="polite">{copied ? "Copied" : "Copy address"}</span>
        </button>
      </div>
      <a
        className="inline-link"
        href={profile.linkedin}
        target="_blank"
        rel="noreferrer"
      >
        Or find me on LinkedIn ↗
      </a>
    </section>
  );
}
