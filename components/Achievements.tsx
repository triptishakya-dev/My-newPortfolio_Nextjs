const achievements = [
  { num: "₹60K+", label: "Freelance Revenue", sub: "Earned across multiple client engagements with 100% retention rate" },
  { num: "5,000+", label: "Monthly Active Users", sub: "Across PlanToEmpower and Jonojivan NGO donation platforms" },
  { num: "₹8.3K+", label: "Passive Income", sub: "From Next.js boilerplates and React kits on Gumroad and CodeCanyon" },
];

export default function Achievements() {
  return (
    <section id="achievements" className="px-8 md:px-16 py-24 pt-0 bg-[#1f2937] pt-10">
      <p className="text-emerald-400 text-xs font-semibold tracking-[0.2em] uppercase flex items-center gap-3 mb-4 ">
        Achievements <span className="block w-10 h-px bg-emerald-400" />
      </p>
      <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-12">By the Numbers</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
        {achievements.map((a) => (
          <div key={a.num} className="bg-[#111827] hover:bg-[#1f2937] p-10 transition-colors duration-300 group">
            <div className="font-display text-5xl font-extrabold gradient-text tracking-tight leading-none mb-4">{a.num}</div>
            <div className="text-white font-semibold text-base mb-2">{a.label}</div>
            <div className="text-white/30 text-sm leading-relaxed">{a.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
