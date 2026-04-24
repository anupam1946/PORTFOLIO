import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { projects } from '../data';

const CATS = ['All', 'Full Stack', 'Frontend', 'Web App'];

export default function Work() {
  const { isDark } = useTheme();
  const [active, setActive] = useState('All');
  const gridRef = useRef(null);

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  useEffect(() => {
    gsap.fromTo('.page-header-item',
      { y: 35, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
    );
  }, []);

  useEffect(() => {
    if (!gridRef.current) return;
    gsap.fromTo(gridRef.current.children,
      { y: 30, opacity: 0, scale: 0.98 },
      { y: 0, opacity: 1, scale: 1, duration: 0.45, stagger: 0.07, ease: 'power2.out' }
    );
  }, [active]);

  const bg   = isDark ? 'bg-zinc-950' : 'bg-white';
  const card = isDark ? 'bg-zinc-900 border-white/8 hover:border-indigo-500/40' : 'bg-white border-zinc-200 hover:border-indigo-300';

  return (
    <main className={bg}>
      <div className="section-container pt-28 pb-24">

        {/* Header */}
        <div className="max-w-2xl mb-14">
          <span className="page-header-item block font-mono text-xs text-indigo-500 uppercase tracking-widest mb-3">Portfolio</span>
          <h1 className={`page-header-item font-display font-extrabold leading-none tracking-tight mb-4 ${isDark ? 'text-white' : 'text-zinc-900'}`}
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
            Work & Projects
          </h1>
          <p className={`page-header-item text-lg leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            A curated collection of projects — from full-stack applications to polished frontend experiments.
          </p>
        </div>

        {/* Filter */}
        <div className="page-header-item flex flex-wrap gap-2 mb-10">
          {CATS.map(cat => (
            <button key={cat} onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                active === cat
                  ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25'
                  : isDark
                    ? 'bg-zinc-900 text-zinc-400 border border-white/5 hover:border-white/15 hover:text-white'
                    : 'bg-zinc-100 text-zinc-600 border border-zinc-200 hover:bg-zinc-200'
              }`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(project => (
            <div key={project.id}
              className={`group flex flex-col rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${card} ${
                isDark ? 'hover:shadow-indigo-500/10' : 'hover:shadow-indigo-100'
              }`}>
              <div className="h-1" style={{ background: project.color }} />
              <div className="flex flex-col flex-1 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className={`font-mono text-[11px] uppercase tracking-wider ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
                      {project.category} · {project.year}
                    </span>
                    <h3 className={`font-display font-bold text-xl mt-1 ${isDark ? 'text-white' : 'text-zinc-900'}`}>{project.title}</h3>
                    <p className="text-indigo-500 text-sm font-medium">{project.subtitle}</p>
                  </div>
                  {project.featured && (
                    <span className={`shrink-0 text-[10px] font-mono px-2 py-1 rounded-full uppercase tracking-wider ${isDark ? 'bg-indigo-500/10 text-indigo-400' : 'bg-indigo-50 text-indigo-600'}`}>
                      Featured
                    </span>
                  )}
                </div>

                <p className={`text-sm leading-relaxed flex-1 mb-5 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>{project.desc}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map(tag => (
                    <span key={tag} className={`tag-pill ${isDark ? 'bg-zinc-800 text-zinc-400' : 'bg-zinc-100 text-zinc-600'}`}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className={`flex items-center gap-4 pt-4 border-t ${isDark ? 'border-white/5' : 'border-zinc-100'}`}>
                  <a href={project.live} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-semibold text-indigo-500 hover:text-indigo-400 transition-colors">
                    <ArrowUpRight size={15} /> Live Demo
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className={`text-sm transition-colors ${isDark ? 'text-zinc-500 hover:text-zinc-300' : 'text-zinc-400 hover:text-zinc-700'}`}>
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24">
            <p className={`text-lg ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>No projects in this category yet.</p>
          </div>
        )}
      </div>
    </main>
  );
}
