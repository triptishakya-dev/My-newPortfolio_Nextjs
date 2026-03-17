const experiences = [
  {
    period: "2024 — Present",
    role: "Full Stack Developer — NGO Platforms",
    company: "PlanToEmpower & Jonojivan",
    highlight: "5,000+ MAU across both platforms",
    desc: "Built and maintain two production donation platforms for NGOs focused on women empowerment, child rights, and community development. Integrated Razorpay payment gateway with automated receipt delivery via Resend Email API. Developed a full admin dashboard with pagination, sorting, and donor management. Built a dynamic no-code page builder enabling marketing to launch campaigns without developer involvement.",
    pills: ["Next.js", "PostgreSQL", "Prisma ORM", "MongoDB", "Razorpay", "Resend API", "Vercel"],
  },
  {
    period: "2022 — Present",
    role: "Freelance Full Stack Developer",
    company: "Remote · Web Development & Consulting",
    highlight: "₹60,000+ earned · 100% client retention",
    desc: "Delivered custom full-stack web applications for multiple clients — business websites, admin dashboards, and e-commerce integrations. Managed end-to-end delivery from requirements to post-launch support. Also sold Next.js boilerplates and React component kits on Gumroad and CodeCanyon, earning ₹8,300+ in passive income.",
    pills: ["Next.js", "MongoDB", "React.js", "Tailwind CSS", "Vercel"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-8 md:px-16 py-20 pt-0 bg-[#111827]">
      <p className="text-emerald-400 text-xs font-semibold tracking-[0.2em] uppercase flex items-center gap-3 mb-4 mt-10">
        Experience <span className="block w-10 h-px bg-emerald-400" />
      </p>
      <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-14">Work History</h2>

      <div>
        {experiences.map((exp, i) => (
          <div key={i} className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-12 py-10 border-t border-white/6 last:border-b group">
            <div className="text-xs text-white/25 font-medium md:pt-1">{exp.period}</div>
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-sm mb-4">
                <span className="text-emerald-400">↑</span>
                {exp.highlight}
              </div>
              <div className="flex items-center gap-3 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                <h3 className="font-display text-lg font-bold tracking-tight">{exp.role}</h3>
              </div>
              <p className="text-teal-400 text-sm mb-4 ml-5">{exp.company}</p>
              <p className="text-white/40 text-sm leading-relaxed mb-5 ml-5">{exp.desc}</p>
              <div className="flex flex-wrap gap-2 ml-5">
                {exp.pills.map((p) => (
                  <span key={p} className="text-xs px-3 py-1 bg-emerald-500/8 border border-emerald-500/20 text-emerald-400 rounded-sm">{p}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
