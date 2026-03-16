const techs = ["Next.js","React.js","TypeScript","Node.js","PostgreSQL","Docker","AWS","LangChain","Gemini API","Prisma","RAG Pipelines","BullMQ","QdrantDB","Socket.io","Razorpay","Vercel"];

export default function Marquee() {
  const doubled = [...techs, ...techs];
  return (
    <div className="border-y border-white/5 bg-[#1f2937] py-4 overflow-hidden">
      <div className="flex gap-12 whitespace-nowrap animate-marquee" style={{ width: "max-content" }}>
        {doubled.map((tech, i) => (
          <span key={i} className="inline-flex items-center gap-10">
            <span className="font-display text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-white">{tech}</span>
            <span className="text-emerald-500/40 text-xs">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
