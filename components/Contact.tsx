import { Mail, Linkedin, Github, Globe } from "lucide-react";

const links = [
  { icon: <Mail className="w-5 h-5 text-rose-400" />, label: "Email", value: "triptishakya.2001@gmail.com", href: "mailto:triptishakya.2001@gmail.com" },
  { icon: <Linkedin className="w-5 h-5 text-blue-400" />, label: "LinkedIn", value: "linkedin.com/in/triptishakya", href: "https://linkedin.com/in/triptishakya" },
  { icon: <Github className="w-5 h-5 text-white" />, label: "GitHub", value: "github.com/triptishakya-dev", href: "https://github.com/triptishakya-dev" },
  { icon: <Globe className="w-5 h-5 text-emerald-400" />, label: "Portfolio", value: "triptishakya.space", href: "https://www.triptishakya.space" },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-white/5 px-8 md:px-16 py-28 bg-[#1f2937]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <p className="text-emerald-400 text-xs font-semibold tracking-[0.2em] uppercase flex items-center gap-3 mb-8">
            Contact <span className="block w-10 h-px bg-emerald-400" />
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
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-[#111827] font-display text-sm font-bold tracking-widest uppercase px-8 py-4 rounded-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_10px_35px_rgba(245,158,11,0.3)]">
            Send me an email
          </a>
        </div>

        {/* Right */}
        <div className="space-y-3">
          {links.map((link) => (
            <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-[#1f2937] border border-white/6 hover:border-emerald-500/30 hover:bg-emerald-500/4 p-5 rounded-sm transition-all duration-200">
              <span className="w-8 flex justify-center items-center group-hover:scale-110 transition-transform duration-300">{link.icon}</span>
              <div>
                <div className="text-xs text-white/22 uppercase tracking-wider mb-0.5">{link.label}</div>
                <div className="text-sm font-medium text-white">{link.value}</div>
              </div>
              <span className="ml-auto text-white/18 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all duration-200 text-sm">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
