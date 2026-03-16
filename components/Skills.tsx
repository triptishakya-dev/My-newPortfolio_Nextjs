const groups = [
  { title: "Frontend", skills: [{ n: "Next.js 14", h: true }, { n: "React.js", h: true }, { n: "TypeScript", h: true }, { n: "Tailwind CSS" }, { n: "Shadcn/ui" }, { n: "Framer Motion" }, { n: "Zustand" }, { n: "Context API" }] },
  { title: "Backend & APIs", skills: [{ n: "Node.js", h: true }, { n: "Express.js", h: true }, { n: "REST APIs" }, { n: "JWT Auth" }, { n: "Socket.io" }, { n: "BullMQ" }, { n: "Valkey" }] },
  { title: "Database", skills: [{ n: "PostgreSQL", h: true }, { n: "MongoDB", h: true }, { n: "Prisma ORM" }, { n: "QdrantDB" }, { n: "Redis" }, { n: "MySQL" }] },
  { title: "DevOps & Cloud", skills: [{ n: "Docker", h: true }, { n: "AWS S3", h: true }, { n: "AWS ECS/ECR" }, { n: "AWS EC2" }, { n: "Lambda" }, { n: "GitHub Actions" }, { n: "CI/CD" }, { n: "Vercel" }] },
  { title: "AI & ML", skills: [{ n: "LangChain", h: true }, { n: "Gemini API", h: true }, { n: "RAG Pipelines" }, { n: "Vector Embeddings" }, { n: "VAPI" }, { n: "Prompt Engineering" }] },
  { title: "Testing & Tools", skills: [{ n: "Jest" }, { n: "Vitest" }, { n: "React Testing Lib" }, { n: "Git / GitHub" }, { n: "Razorpay" }, { n: "Resend API" }] },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#111827] px-8 md:px-16 py-24">
      <p className="text-emerald-400 text-xs font-semibold tracking-[0.2em] uppercase flex items-center gap-3 mb-4">
        Skills <span className="block w-10 h-px bg-emerald-400" />
      </p>
      <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-3">Technical Stack</h2>
      <p className="text-white/30 text-base mb-14">Production-tested tools I use to build real things.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
        {groups.map((group) => (
          <div key={group.title} className="bg-[#111827] hover:bg-[#1f2937] p-7 transition-colors duration-300 group">
            <div className="text-white/22 group-hover:text-emerald-400/50 font-display text-xs font-bold tracking-[0.15em] uppercase mb-5 transition-colors flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-emerald-500 opacity-60" />
              {group.title}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {group.skills.map((skill) => (
                <span key={skill.n}
                  className={`text-xs font-medium px-3 py-1.5 border rounded-sm transition-all duration-200 cursor-default ${skill.h ? "border-emerald-500/30 text-emerald-400 bg-emerald-500/8 hover:bg-emerald-500/15" : "border-white/7 text-white/40 hover:border-emerald-500/30 hover:text-emerald-400"}`}>
                  {skill.n}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
