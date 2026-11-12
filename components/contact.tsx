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
      className="contact wrap"
      aria-labelledby="contact-title"
    >
      <p className="eyebrow">03 / START A CONVERSATION</p>
      <div className="contact-heading">
        <h2 id="contact-title">
          Have something
          <br />
          <em>worth building?</em>
        </h2>
        <div>
          <p>
            For development work, collaborations, or a conversation about your
            next idea.
          </p>
          <a className="button button-dark" href={`mailto:${profile.email}`}>
            Let’s talk <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
      <div className="contact-bottom">
        <div className="email-row">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <button onClick={copy} aria-label="Copy email address">
            <span aria-live="polite">{copied ? "Copied ✓" : "Copy ↗"}</span>
          </button>
        </div>
        <div className="social-links">
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  );
}
