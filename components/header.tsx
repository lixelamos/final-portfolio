"use client";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { profile } from "@/lib/content";
export default function Header() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    try {
      const value = localStorage.getItem("amos-theme") === "dark";
      setDark(value);
      document.documentElement.dataset.theme = value ? "dark" : "light";
    } catch {}
  }, []);
  function theme() {
    const value = !dark;
    setDark(value);
    document.documentElement.dataset.theme = value ? "dark" : "light";
    try {
      localStorage.setItem("amos-theme", value ? "dark" : "light");
    } catch {}
  }
  return (
    <header className="sidebar">
      <div className="sidebar-top">
        <a className="identity" href="#" aria-label="Kipkorir Amos home">
          Kipkorir Amos<span>Developer</span>
        </a>
        <button
          className="theme-button"
          onClick={theme}
          aria-label={dark ? "Use light theme" : "Use dark theme"}
        >
          {dark ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>
      <nav aria-label="Main navigation">
        <a href="#work">
          <span>01</span>Work
        </a>
        <a href="#about">
          <span>02</span>About
        </a>
        <a href="#contact">
          <span>03</span>Contact
        </a>
      </nav>
      <div className="sidebar-bottom">
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn ↗
        </a>
        <p>
          Nairobi, Kenya
          <br />
          <span>Kenya</span>
        </p>
      </div>
    </header>
  );
}
