import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const NAV_LINKS = [
  { label: 'Home',    to: '/' },
  { label: 'About',   to: '/about' },
  { label: 'Work',    to: '/work' },
  { label: 'Blog',    to: '/blog' },
  { label: 'Books',   to: '/books' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const { isDark, toggle } = useTheme();
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location  = useLocation();
  const navRef    = useRef(null);

  /* entrance animation */
  useEffect(() => {
    gsap.fromTo(navRef.current,
      { y: -70, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', delay: 0.1 }
    );
  }, []);

  /* scroll shadow */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* close mobile on route change */
  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  /* lock body when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const bg    = isDark ? 'bg-zinc-950' : 'bg-white';
  const shade = scrolled ? (isDark ? 'border-b border-white/10 shadow-xl shadow-black/20' : 'border-b border-zinc-200 shadow-sm') : '';

  return (
    <>
      {/* ── Navbar ── */}
      <header ref={navRef} className={`fixed top-0 left-0 right-0 z-50 ${bg} ${shade} transition-all duration-300`}>
        <div className="section-container flex items-center justify-between h-16 md:h-18">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-display font-bold text-sm select-none">
              AK
            </span>
            <span className={`font-display font-bold text-base tracking-tight ${isDark ? 'text-white' : 'text-zinc-900'}`}>
              Anupam<span className="text-indigo-500"> KC</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, to }) => {
              const active = location.pathname === to;
              return (
                <Link
                  key={to} to={to}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
                    active
                      ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400'
                      : isDark
                        ? 'text-zinc-400 hover:text-white hover:bg-white/5'
                        : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100'
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggle} aria-label="Toggle theme"
              className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                isDark ? 'text-zinc-400 hover:text-yellow-400 hover:bg-white/5' : 'text-zinc-500 hover:text-indigo-600 hover:bg-zinc-100'
              }`}
            >
              {isDark ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            <Link to="/contact"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-semibold transition-colors shadow-lg shadow-indigo-500/20">
              Hire Me
            </Link>

            <button
              onClick={() => setMobileOpen(v => !v)} aria-label="Menu"
              className={`md:hidden w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                isDark ? 'text-zinc-300 hover:bg-white/5' : 'text-zinc-700 hover:bg-zinc-100'
              }`}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile overlay ── */}
      {mobileOpen && (
        <div
          className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 ${bg}`}
          style={{ backdropFilter: 'blur(20px)' }}
        >
          {NAV_LINKS.map(({ label, to }) => (
            <Link
              key={to} to={to}
              className={`font-display font-bold text-3xl transition-colors ${
                location.pathname === to ? 'text-indigo-500' : isDark ? 'text-white' : 'text-zinc-900'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link to="/contact"
            className="mt-4 px-10 py-3.5 rounded-xl bg-indigo-500 text-white font-semibold text-lg shadow-xl shadow-indigo-500/30">
            Hire Me
          </Link>
        </div>
      )}
    </>
  );
}
