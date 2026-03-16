"use client";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Update CSS variables for the spotlight effect position
    containerRef.current.style.setProperty("--mouse-x", `${x}px`);
    containerRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section 
      id="home" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center px-8 md:px-16 overflow-hidden"
    >
      {/* Grid bg that reacts to mouse hover */}
      <div 
        className="absolute inset-0 z-0 transition-opacity duration-300" 
        style={{ 
          backgroundImage: "linear-gradient(rgba(16,185,129,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.06) 1px, transparent 1px)", 
          backgroundSize: "64px 64px", 
          // Default mask (desktop starts hidden/subtle until hover, fallback for mobile)
          maskImage: "radial-gradient(circle at var(--mouse-x, 30%) var(--mouse-y, 50%), black 0%, transparent 40%)",
          WebkitMaskImage: "radial-gradient(circle at var(--mouse-x, 30%) var(--mouse-y, 50%), black 0%, transparent 40%)"
        }} 
      />
      {/* Emerald glow */}
      <div className="absolute z-0 pointer-events-none animate-glow-pulse" style={{ width: "800px", height: "800px", borderRadius: "50%", background: "radial-gradient(circle, rgba(16,185,129,0.10) 0%, transparent 65%)", top: "-200px", left: "-300px" }} />
      {/* Teal glow secondary */}
      <div className="absolute z-0 pointer-events-none" style={{ width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(20,184,166,0.06) 0%, transparent 70%)", bottom: "-100px", left: "400px" }} />

      <div className="relative z-10 max-w-4xl pointer-events-none">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-3 text-emerald-400 text-xs font-semibold tracking-[0.2em] uppercase mb-7" style={{ animation: "fadeUp 0.8s 0.2s both" }}>
          <span className="block w-6 h-px bg-emerald-400" />
          Full Stack Developer — Bengaluru, India
        </div>

        {/* Name */}
        <h1 className="font-display font-extrabold leading-[0.88] tracking-tight mb-7" style={{ fontSize: "clamp(3.8rem, 9vw, 8rem)", animation: "fadeUp 0.8s 0.4s both" }}>
          Tripti
          <br />
          <span className="gradient-text">Shakya</span>
        </h1>

        {/* Tagline */}
        <p className="text-[1.05rem] font-light text-white/45 max-w-xl leading-relaxed mb-10" style={{ animation: "fadeUp 0.8s 0.6s both" }}>
          Building <span className="text-white font-normal">scalable web applications</span> from React to AWS.
          Specialized in Next.js, AI integrations &amp; production systems serving{" "}
          <span className="text-white font-normal">5,000+ monthly users.</span>
        </p>

        {/* CTAs */}
        <div className="flex items-center flex-wrap gap-4" style={{ animation: "fadeUp 0.8s 0.8s both" }}>
          <a href="#projects" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-[#111827] font-display text-sm font-bold tracking-widest uppercase px-8 py-4 rounded-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_10px_35px_rgba(16,185,129,0.3)]">
            View Projects
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 border border-white/10 hover:border-emerald-500/40 text-white/70 hover:text-emerald-400 font-display text-sm font-semibold tracking-widest uppercase px-8 py-4 rounded-sm transition-all duration-200 hover:bg-emerald-500/5">
            Get In Touch
          </a>
        </div>
      </div>

      {/* Stats — bottom right */}
      <div className="absolute right-16 bottom-14 hidden lg:flex gap-14" style={{ animation: "fadeUp 0.8s 1s both" }}>
        {[
          { num: "2+", label: "Years Exp." },
          { num: "5K+", label: "Monthly Users" },
          { num: "₹60K+", label: "Freelance Earned" },
        ].map((s) => (
          <div key={s.label} className="text-right">
            <span className="block font-display text-[2.2rem] font-extrabold gradient-text tracking-tight leading-none mb-1">{s.num}</span>
            <span className="text-[0.65rem] text-white/25 uppercase tracking-widest">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
