"use client";
import { useState } from "react";
import { profile } from "@/lib/content";
export default function Contact() {
    const [copied, setCopied] = useState(false);
    async function copy() { try {
        await navigator.clipboard.writeText(profile.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }
    catch {
        window.location.href = `mailto:${profile.email}`;
    } }
    return <section id="contact" className="contact" aria-labelledby="contact-title"><span className="section-index">03 / YOUR TURN</span><div className="contact-heading"><h2 id="contact-title">Got a project?<br /><a href={`mailto:${profile.email}`}>Let’s talk<span aria-hidden="true">↗</span></a></h2><p>Development work, collaborations,<br />or a conversation about something you’re building.</p></div><div className="contact-bottom"><div className="email-row"><a href={`mailto:${profile.email}`}>{profile.email}</a><button onClick={copy} aria-label="Copy email address"><span aria-live="polite">{copied ? 'Copied ✓' : 'Copy ↗'}</span></button></div><div className="social-links"><a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div></section>;
}
