import { Link } from 'react-router-dom';
import { GitBranch, ExternalLink, Globe, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const LINKS = [
  { label: 'Home',    to: '/' },
  { label: 'About',   to: '/about' },
  { label: 'Work',    to: '/work' },
  { label: 'Blog',    to: '/blog' },
  { label: 'Books',   to: '/books' },
  { label: 'Contact', to: '/contact' },
];

const SOCIALS = [
  { icon: GitBranch,   href: 'https://github.com/anupamkc',    label: 'GitHub' },
  { icon: ExternalLink,href: 'https://linkedin.com/in/anupamkc',label: 'LinkedIn' },
  { icon: Globe,       href: 'https://twitter.com/anupamkc',   label: 'Twitter' },
];

export default function Footer() {
  const { isDark } = useTheme();
  const year = new Date().getFullYear();

  return (
    <footer className={`border-t ${isDark ? 'border-white/10 bg-zinc-950' : 'border-zinc-200 bg-zinc-50'}`}>
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-display font-bold select-none">
                AK
              </span>
              <span className={`font-display font-bold text-lg ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                Anupam<span className="text-indigo-500"> KC</span>
              </span>
            </Link>
            <p className={`text-sm leading-relaxed ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>
              Full Stack Developer & UI Designer based in Bhairahawa, Nepal. Open to freelance & full-time opportunities.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className={`font-display font-semibold text-xs uppercase tracking-widest mb-5 ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-y-2.5">
              {LINKS.map(({ label, to }) => (
                <Link key={to} to={to}
                  className={`text-sm link-hover w-fit transition-colors ${isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-500 hover:text-zinc-900'}`}>
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className={`font-display font-bold text-sm uppercase tracking-widest mb-5 ${isDark ? 'text-purple-400' : 'text-purple-500'}`}>
              Get In Touch
            </h4>
            <a href="mailto:anupamchettri67@gmail.com"
              className={`flex items-center gap-1.5 text-sm mb-2 group w-fit transition-colors ${isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-500 hover:text-zinc-900'}`}>
              anupamchettri67@gmail.com
              <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <p className={`text-sm mb-6 ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`}>Bhairahawa, Nepal</p>
            <div className="flex gap-3">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 ${
                    isDark ? 'bg-white/5 hover:bg-indigo-500 text-zinc-400 hover:text-white' : 'bg-zinc-200 hover:bg-indigo-500 text-zinc-600 hover:text-white'
                  }`}>
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-3 ${isDark ? 'border-white/5' : 'border-zinc-200'}`}>
          <p className={`font-mono text-xs ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`}>
            © {year} Anupam Pratap Singh K.C. All rights reserved.
          </p>
          <p className={`font-mono text-xs ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`}>
            Built with React · Vite · Tailwind · GSAP
          </p>
        </div>
      </div>
    </footer>
  );
}
