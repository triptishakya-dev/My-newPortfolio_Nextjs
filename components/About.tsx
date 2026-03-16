const tags = ["Next.js 14","TypeScript","AWS","LangChain","Gemini API","Docker","PostgreSQL","QdrantDB","Prisma","BullMQ"];

export default function About() {
  return (
    <section id="about" className="px-8 md:px-16 py-28 bg-[#1f2937]">
      <p className="text-emerald-400 text-xs font-semibold tracking-[0.2em] uppercase flex items-center gap-3 mb-12">
        About <span className="block w-10 h-px bg-emerald-400" />
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05] mb-8">
            Self-taught.<br />
            <span className="gradient-text">Production-grade.</span>
          </h2>
          <div className="space-y-4 text-white/45 leading-relaxed text-[0.95rem]">
            <p>I&apos;m a Full Stack Developer based in Bengaluru with <span className="text-white">2+ years of experience</span> building and shipping real products — without a CS degree.</p>
            <p>From a <span className="text-white">BA LLB background</span>, I taught myself everything from React to AWS deployments, shipping my first client project within 6 months of learning Next.js.</p>
            <p>My focus is on <span className="text-white">AI-integrated web applications</span> — combining full-stack engineering with LLMs, vector databases, and real-time pipelines.</p>
          </div>
          <div className="flex flex-wrap gap-2 mt-7">
            {tags.map((tag) => (
              <span key={tag} className="text-xs font-medium px-3 py-1.5 border border-white/8 text-white/35 rounded-sm hover:border-emerald-500/40 hover:text-emerald-400 transition-all duration-200 cursor-default">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right — card */}
        <div className="relative bg-[#1f2937] border border-white/6 rounded-sm p-8 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-emerald-500 to-teal-400" />
          <div className="mb-7">
            <span className="font-display text-5xl font-extrabold gradient-text tracking-tight leading-none">5,000+</span>
            <p className="text-white/35 text-sm mt-1.5">Monthly active users across production platforms</p>
          </div>
          <hr className="border-white/6 my-6" />
          {[
            { label: "Location", value: "Bengaluru, India" },
            { label: "Status", value: "Open to opportunities", emerald: true },
            { label: "Focus", value: "Full Stack + AI" },
            { label: "Education", value: "BA LLB, 2024" },
            { label: "Passive Income", value: "₹8,300+ (Gumroad / CodeCanyon)" },
          ].map(({ label, value, emerald }) => (
            <div key={label} className="flex justify-between items-center py-2.5 border-b border-white/5 last:border-0">
              <span className="text-xs text-white/25 uppercase tracking-wider">{label}</span>
              <span className={`text-sm font-medium ${emerald ? "text-emerald-400" : "text-white"}`}>{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
