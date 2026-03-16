const certs = [
  {
    icon: "🧠",
    title: "Google AI Essentials",
    issuer: "Google — Generative AI, Prompt Engineering, Responsible AI, LLM Applications",
    year: "2025",
    accentBg: "bg-orange-500/10",
  },
  {
    icon: "⚡",
    title: "Building with the Claude API",
    issuer: "Anthropic Academy — Claude API, Prompt Engineering, LLM Integration, Anthropic Models",
    year: "2025",
    accentBg: "bg-amber-500/10",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="px-8 md:px-16 pb-24 pt-0">
      <p className="text-amber-400 text-xs font-semibold tracking-[0.2em] uppercase flex items-center gap-3 mb-4">
        Certifications <span className="block w-10 h-px bg-amber-400" />
      </p>
      <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-10">Credentials</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certs.map((cert) => (
          <div key={cert.title}
            className="relative flex gap-5 items-start bg-[#100c00] border border-white/6 hover:border-amber-500/20 rounded-sm p-6 overflow-hidden transition-all duration-300 group">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-amber-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className={`w-12 h-12 rounded-sm ${cert.accentBg} flex items-center justify-center text-xl flex-shrink-0`}>
              {cert.icon}
            </div>
            <div>
              <div className="font-display text-base font-bold mb-1">{cert.title}</div>
              <div className="text-white/30 text-xs mb-3 leading-relaxed">{cert.issuer}</div>
              <div className="text-xs font-bold tracking-widest uppercase text-amber-400">{cert.year}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
