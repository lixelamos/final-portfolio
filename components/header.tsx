"use client";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
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
    <header className="header">
      <a className="monogram" href="#" aria-label="Kipkorir Amos home">
        <span className="brand-mark" aria-hidden="true">
          a.
        </span>
        Kipkorir Amos
      </a>
      <nav aria-label="Main navigation">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
      <button
        className="theme-button"
        onClick={theme}
        aria-label={dark ? "Use light theme" : "Use dark theme"}
      >
        {dark ? <Sun size={19} /> : <Moon size={19} />}
      </button>
    </header>
  );
}
