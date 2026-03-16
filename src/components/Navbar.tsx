"use client";
import { useEffect, useState } from "react";

const links = ["About", "Experience", "Projects", "Skills", "Achievements", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-5 transition-all duration-300 ${scrolled ? "bg-[#111827]/90 backdrop-blur-xl border-b border-white/5" : "bg-transparent"}`}>
      <a href="#home" className="font-display text-lg font-bold tracking-tight text-white">
        T<span className="text-emerald-400">.</span>Shakya
      </a>
      <ul className="hidden md:flex items-center gap-10">
        {links.map((link) => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`} className="text-xs font-medium tracking-widest uppercase text-white/35 hover:text-emerald-400 transition-colors duration-200">
              {link}
            </a>
          </li>
        ))}
      </ul>
      <a href="mailto:triptishakya.2001@gmail.com" className="hidden md:inline-flex items-center bg-emerald-500 hover:bg-emerald-400 text-[#111827] font-display text-xs font-bold tracking-widest uppercase px-5 py-2.5 rounded-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(245,158,11,0.35)]">
        Hire Me
      </a>
    </nav>
  );
}
