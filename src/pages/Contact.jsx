import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { Mail, MapPin, Send, GitBranch, ExternalLink, Globe, CheckCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const SOCIALS = [
  { icon: GitBranch,    href: 'https://github.com/anupam1946/',     label: 'GitHub' },
  { icon: ExternalLink, href: 'https://linkedin.com/in/anupam-chettri-3b1617323/', label: 'LinkedIn' },
  { icon: Globe,        href: 'https://twitter.com/anupamkc',    label: 'Twitter' },
];

export default function Contact() {
  const { isDark } = useTheme();
  const [form, setForm]     = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [sent, setSent]     = useState(false);

  useEffect(() => {
    gsap.fromTo('.contact-item',
      { y: 35, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
    );
  }, []);

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
  e.preventDefault();
  setLoading(true);

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: import.meta.env.VITE_API_KEY,
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      }),
    });

    const data = await res.json();

    if (data.success) {
      setSent(true);
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSent(false), 6000);
    } else {
      alert('Something went wrong. Please try again or email me directly.');
    }
  } catch (err) {
    alert('Network error. Please try again.');
  } finally {
    setLoading(false);
  }
};

  const bg    = isDark ? 'bg-zinc-950' : 'bg-white';
  const card  = isDark ? 'bg-zinc-900 border-white/5' : 'bg-zinc-50 border-zinc-200';
  const input = `w-full px-4 py-3.5 rounded-xl border text-sm outline-none transition-all duration-200 ${
    isDark
      ? 'bg-zinc-900 border-white/8 focus:border-indigo-500/50 text-white placeholder-zinc-600'
      : 'bg-white border-zinc-200 focus:border-indigo-400 text-zinc-900 placeholder-zinc-400'
  }`;

  return (
    <main className={bg}>
      <div className="section-container pt-28 pb-24">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="contact-item block font-mono text-xs text-indigo-500 uppercase tracking-widest mb-3">Contact ME</span>
          <h1 className={`contact-item font-display font-extrabold leading-none tracking-tight mb-4 ${isDark ? 'text-white' : 'text-zinc-900'}`}
            style={{ fontSize: 'clamp(2.8rem, 7vw, 5rem)' }}>
            Let's work<br />
            <span className="gradient-text">together.</span>
          </h1>
          <p className={`contact-item text-lg leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Whether you have a project idea, a job opportunity, or just want to say hi — I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">

          {/* ── FORM (3 cols) ── */}
          <div className="contact-item lg:col-span-3">
            {sent ? (
              <div className={`flex flex-col items-center justify-center min-h-96 rounded-2xl border p-12 text-center ${card}`}>
                <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-5">
                  <CheckCircle size={32} className="text-indigo-500" />
                </div>
                <h3 className={`font-display font-bold text-2xl mb-2 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                  Message Sent!
                </h3>
                <p className={`text-base ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Honeypot — spam protection */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
                      Your Name
                    </label>
                    <input name="name" value={form.name} onChange={handleChange} required
                      placeholder="John Doe" className={input} />
                  </div>
                  <div>
                    <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
                      Email Address
                    </label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} required
                      placeholder="john@example.com" className={input} />
                  </div>
                </div>
                <div>
                  <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
                    Subject
                  </label>
                  <input name="subject" value={form.subject} onChange={handleChange} required
                    placeholder="Project Collaboration / Job Opportunity / Just saying hi..." className={input} />
                </div>
                <div>
                  <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
                    Message
                  </label>
                  <textarea name="message" value={form.message} onChange={handleChange} required
                    rows={7} placeholder="Tell me about your project, timeline, and budget..."
                    className={`${input} resize-none`} />
                </div>
                <button type="submit" disabled={loading}
                  className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl bg-indigo-500 hover:bg-indigo-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-base transition-all duration-200 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:-translate-y-0.5">
                  {loading
                    ? <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    : <><Send size={17} /> Send Message</>
                  }
                </button>
              </form>
            )}
          </div>

          {/* ── INFO (2 cols) ── */}
          <div className="contact-item lg:col-span-2 space-y-5">

            {/* Email */}
            <div className={`rounded-2xl border p-6 ${card}`}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-indigo-500" />
                </div>
                <span className={`font-mono text-xs uppercase tracking-wider ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>Email</span>
              </div>
              <a href="mailto:anupamchettri67@gmail.com"
                className={`text-sm font-medium transition-colors ${isDark ? 'text-zinc-300 hover:text-indigo-400' : 'text-zinc-700 hover:text-indigo-600'}`}>
                anupamchettri67@gmail.com
              </a>
            </div>

            {/* Location */}
            <div className={`rounded-2xl border p-6 ${card}`}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-indigo-500" />
                </div>
                <span className={`font-mono text-xs uppercase tracking-wider ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>Location</span>
              </div>
              <p className={`text-sm font-medium ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>Bhairahawa, Nepal</p>
              <p className={`text-xs mt-1 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>UTC+5:45 · Available remotely</p>
            </div>

            {/* Social */}
            <div className={`rounded-2xl border p-6 ${card}`}>
              <span className={`block font-mono text-xs uppercase tracking-wider mb-4 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>Find Me On</span>
              <div className="flex gap-3">
                {SOCIALS.map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 ${
                      isDark ? 'bg-zinc-800 hover:bg-indigo-500 text-zinc-400 hover:text-white' : 'bg-zinc-200 hover:bg-indigo-500 text-zinc-600 hover:text-white'
                    }`}>
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className={`rounded-2xl border p-6 ${isDark ? 'bg-indigo-500/5 border-indigo-500/20' : 'bg-indigo-50 border-indigo-100'}`}>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse" />
                <span className="text-indigo-500 font-semibold text-sm">Currently Available</span>
              </div>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                Open to freelance projects and full-time opportunities. I typically respond within 24 hours.
              </p>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
