"use client";
import { useEffect, useRef } from "react";

export function useReveal() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); } }),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    el.querySelectorAll(".reveal").forEach((r) => observer.observe(r));
    if (el.classList.contains("reveal")) observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}
