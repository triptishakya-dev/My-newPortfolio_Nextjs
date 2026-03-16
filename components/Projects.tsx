const projects = [
  {
    num: "01",
    title: "AI Voice Interview Platform",
    desc: "End-to-end AI interview platform with real-time voice via VAPI — sub-2s response latency. Gemini API for dynamic question generation and automated post-interview scoring. No separate backend needed for voice orchestration.",
    tech: ["Next.js", "VAPI", "Gemini API", "Shadcn/ui", "Tailwind CSS"],
    link: "https://github.com/triptishakya-dev",
    featured: true,
  },
  {
    num: "02",
    title: "Chat with PDF (RAG)",
    desc: "Full-stack RAG pipeline with context-aware document Q&A. Async PDF ingestion via BullMQ + Valkey, semantic retrieval from QdrantDB.",
    tech: ["Next.js", "Express.js", "LangChain", "QdrantDB", "BullMQ", "Docker"],
    link: "https://github.com/triptishakya-dev",
  },
  {
    num: "03",
    title: "Doc Search System",
    desc: "Semantic document search handling 500+ concurrent PDF ingestion jobs. Vector retrieval from QdrantDB, documents served from AWS S3.",
    tech: ["Next.js", "QdrantDB", "AWS S3", "Redis", "Valkey", "Docker"],
    link: "https://github.com/triptishakya-dev",
  },
  {
    num: "04",
    title: "Resume Analyzer",
    desc: "AI-driven ATS scoring, keyword density, formatting checks and job-role alignment. Results delivered in under 200ms.",
    tech: ["Next.js", "Gemini API", "Tailwind CSS"],
    link: "https://github.com/triptishakya-dev",
  },
  {
    num: "05",
    title: "Donation Platform",
    desc: "Production NGO platform serving 5,000+ MAU. Full admin dashboard, Razorpay integration, and automated receipt emails via Resend.",
    tech: ["Next.js", "PostgreSQL", "Prisma", "Razorpay", "Tailwind CSS"],
    link: "https://plantoempower.org",
    live: true,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-8 md:px-16 py-28 bg-[#1f2937]">
      <div className="flex items-end justify-between mb-12">
        <div>
          <p className="text-emerald-400 text-xs font-semibold tracking-[0.2em] uppercase flex items-center gap-3 mb-4">
            Projects <span className="block w-10 h-px bg-emerald-400" />
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">Selected Work</h2>
        </div>
        <a href="https://github.com/triptishakya-dev" target="_blank" rel="noopener noreferrer"
          className="hidden md:inline-flex border border-white/8 hover:border-emerald-500/30 text-white/40 hover:text-emerald-400 font-display text-xs font-semibold tracking-widest uppercase px-5 py-3 rounded-sm transition-all duration-200">
          All on GitHub →
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
        {projects.map((project) => (
          <div key={project.num}
            className={`group relative bg-[#111827] hover:bg-[#1f2937] p-8 transition-colors duration-300 overflow-hidden ${project.featured ? "md:col-span-2" : ""}`}>
            {/* Accent line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-emerald-500 to-teal-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            {project.featured && <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-emerald-500 to-teal-400" />}

            <div className="text-white/18 font-display text-xs font-bold tracking-widest uppercase mb-6">
              {project.num}{project.featured && " — Featured"}
            </div>
            <h3 className={`font-display font-bold tracking-tight mb-3 leading-snug ${project.featured ? "text-2xl" : "text-xl"}`}>
              {project.title}
            </h3>
            <p className="text-white/38 text-sm leading-relaxed mb-5">{project.desc}</p>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.tech.map((t) => (
                <span key={t} className="text-xs px-2.5 py-1 bg-white/4 border border-white/6 text-white/35 rounded-sm">{t}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-emerald-400 hover:gap-3 transition-all duration-200">
              {project.live ? "Live Site →" : "GitHub →"}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
