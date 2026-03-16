const credentials = [
  {
    icon: "🚀",
    title: "Self-Taught Developer",
    issuer: "Learned everything from first principles. Built and shipped production-grade apps within 6 months of learning Next.js.",
    year: "2022 — Present",
    accentBg: "bg-emerald-500/10",
  },
  {
    icon: "💼",
    title: "Freelancer",
    issuer: "Delivering end-to-end full-stack web applications, admin dashboards, and AI integrations for global clients.",
    year: "2022 — Present",
    accentBg: "bg-teal-500/10",
  },
  {
    icon: "🧠",
    title: "Google AI Essentials",
    issuer: "Google — Generative AI, Prompt Engineering, Responsible AI, LLM Applications.",
    year: "2025",
    accentBg: "bg-blue-500/10",
  },
  {
    icon: "⚡",
    title: "Building with the Claude API",
    issuer: "Anthropic Academy — Claude API, Prompt Engineering, LLM Integration, Anthropic Models.",
    year: "2025",
    accentBg: "bg-rose-500/10",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="px-8 md:px-16 py-28 bg-[#111827]">
      <p className="text-emerald-400 text-xs font-semibold tracking-[0.2em] uppercase flex items-center gap-3 mb-6">
        Path &amp; Credentials <span className="block w-10 h-px bg-emerald-400" />
      </p>
      <h2 className="font-display text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-14">My Journey</h2>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_450px] gap-12 items-stretch">
        
        {/* Left Column: Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {credentials.map((cred) => (
            <div key={cred.title}
              className="relative flex flex-col gap-6 items-start bg-[#1f2937] border border-white/6 hover:border-emerald-500/30 rounded-md p-8 overflow-hidden transition-all duration-300 group shadow-lg">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500/50 to-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className={`w-16 h-16 rounded-xl ${cred.accentBg} flex items-center justify-center text-3xl flex-shrink-0 shadow-inner border border-white/5`}>
                {cred.icon}
              </div>
              
              <div className="flex-1 mt-1">
                <div className="flex flex-col gap-3 mb-2">
                  <h3 className="font-display text-xl font-bold tracking-tight text-white">{cred.title}</h3>
                  <span className="text-xs font-bold tracking-widest uppercase px-3 py-1 bg-white/5 text-emerald-400 rounded-full border border-white/10 w-fit">{cred.year}</span>
                </div>
                <p className="text-white/40 text-[0.95rem] leading-relaxed mt-3">{cred.issuer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Photo */}
        <div className="relative w-full h-[500px] lg:h-auto rounded-md overflow-hidden border border-white/10 group">
          <div className="absolute inset-0 bg-emerald-500/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <img 
            src="/images/profile.png" 
            alt="Tripti working at her setup" 
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
          {/* Fallback pattern if image is missing/loading */}
          <div className="absolute inset-0 -z-10 bg-[#1f2937] flex items-center justify-center">
            <span className="text-white/20 text-sm font-display uppercase tracking-widest">Setup Photo</span>
          </div>
          {/* Decorative overlay effects */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-80 z-10" />
          <div className="absolute bottom-6 left-6 right-6 z-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#111827]/80 backdrop-blur-sm border border-white/10 rounded-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold tracking-widest uppercase text-white/70">Building from BLR</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
