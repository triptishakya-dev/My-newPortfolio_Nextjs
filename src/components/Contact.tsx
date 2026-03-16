const links = [
  { icon: "✉", label: "Email", value: "triptishakya.2001@gmail.com", href: "mailto:triptishakya.2001@gmail.com" },
  { icon: "in", label: "LinkedIn", value: "linkedin.com/in/triptishakya", href: "https://linkedin.com/in/triptishakya" },
  { icon: "gh", label: "GitHub", value: "github.com/triptishakya-dev", href: "https://github.com/triptishakya-dev" },
  { icon: "↗", label: "Portfolio", value: "triptishakya.space", href: "https://www.triptishakya.space" },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-white/5 px-8 md:px-16 py-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <p className="text-amber-400 text-xs font-semibold tracking-[0.2em] uppercase flex items-center gap-3 mb-8">
            Contact <span className="block w-10 h-px bg-amber-400" />
          </p>
          <h2 className="font-display font-extrabold tracking-tight leading-[0.9] mb-7"
            style={{ fontSize: "clamp(2.8rem, 5.5vw, 5rem)" }}>
            Let&apos;s build<br />
            <span className="gradient-text">something</span><br />
            great.
          </h2>
          <p className="text-white/35 leading-relaxed mb-9 max-w-md text-[0.95rem]">
            Currently open to full-time roles, freelance projects, and internship opportunities — especially in Bengaluru.
            If you&apos;re building with AI or need a reliable full-stack engineer, let&apos;s talk.
          </p>
          <a href="mailto:triptishakya.2001@gmail.com"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#0a0800] font-display text-sm font-bold tracking-widest uppercase px-8 py-4 rounded-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_10px_35px_rgba(245,158,11,0.3)]">
            Send me an email
          </a>
        </div>

        {/* Right */}
        <div className="space-y-3">
          {links.map((link) => (
            <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-[#100c00] border border-white/6 hover:border-amber-500/30 hover:bg-amber-500/4 p-5 rounded-sm transition-all duration-200">
              <span className="w-8 text-center font-display text-sm font-bold text-white/25 group-hover:text-amber-400 transition-colors">{link.icon}</span>
              <div>
                <div className="text-xs text-white/22 uppercase tracking-wider mb-0.5">{link.label}</div>
                <div className="text-sm font-medium text-white">{link.value}</div>
              </div>
              <span className="ml-auto text-white/18 group-hover:text-amber-400 group-hover:translate-x-1 transition-all duration-200 text-sm">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
