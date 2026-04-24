import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ArrowUpRight, Download, Sparkles, Clock, Calendar } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { personalInfo, projects, blogs } from '../data';

gsap.registerPlugin(ScrollTrigger);

const MARQUEE_ITEMS = [
  'React','Node.js','TypeScript','PostgreSQL','Docker','AWS',
  'Figma','Python','Next.js','Tailwind CSS','MongoDB','GraphQL',
];

/* ── Reusable Section Header ── */
function SectionHeader({ eyebrow, title, subtitle, center = false }) {
  const { isDark } = useTheme();
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      <span className="inline-block font-mono text-xs text-indigo-500 uppercase tracking-widest mb-3">
        {eyebrow}
      </span>
      <h2 className={`font-display font-extrabold leading-tight ${isDark ? 'text-white' : 'text-zinc-900'}`}
        style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg max-w-2xl ${center ? 'mx-auto' : ''} ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ── Project Card ── */
function ProjectCard({ project }) {
  const { isDark } = useTheme();
  return (
    <div className={`group flex flex-col rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
      isDark
        ? 'bg-zinc-900 border-white/8 hover:border-indigo-500/40 hover:shadow-indigo-500/10'
        : 'bg-white border-zinc-200 hover:border-indigo-300 hover:shadow-indigo-100'
    }`}>
      {/* Color top bar */}
      <div className="h-1" style={{ background: project.color }} />

      <div className="flex flex-col flex-1 p-6">
        {/* Meta */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <span className={`font-mono text-[11px] uppercase tracking-wider ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
              {project.category} · {project.year}
            </span>
            <h3 className={`font-display font-bold text-xl mt-1 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
              {project.title}
            </h3>
            <p className="text-indigo-500 text-sm font-medium">{project.subtitle}</p>
          </div>
          {project.featured && (
            <span className={`shrink-0 text-[10px] font-mono px-2 py-1 rounded-full uppercase tracking-wider ${
              isDark ? 'bg-indigo-500/10 text-indigo-400' : 'bg-indigo-50 text-indigo-600'
            }`}>Featured</span>
          )}
        </div>

        <p className={`text-sm leading-relaxed flex-1 mb-5 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
          {project.desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map(tag => (
            <span key={tag} className={`tag-pill ${
              isDark ? 'bg-zinc-800 text-zinc-400' : 'bg-zinc-100 text-zinc-600'
            }`}>{tag}</span>
          ))}
        </div>

        {/* Links */}
        <div className={`flex items-center gap-4 pt-4 border-t ${isDark ? 'border-white/5' : 'border-zinc-100'}`}>
          <a href={project.live} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-semibold text-indigo-500 hover:text-indigo-400 transition-colors">
            <ArrowUpRight size={15} /> Live Demo
          </a>
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${isDark ? 'text-zinc-500 hover:text-zinc-300' : 'text-zinc-400 hover:text-zinc-700'}`}>
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
}

/* ── Blog Row ── */
function BlogRow({ blog }) {
  const { isDark } = useTheme();
  return (
    <Link to={`/blog/${blog.id}`}
      className={`group flex items-start justify-between gap-6 py-6 border-b transition-colors ${
        isDark ? 'border-white/5 hover:border-white/10' : 'border-zinc-100 hover:border-zinc-200'
      }`}>
      <div className="flex-1 min-w-0">
        <div className={`flex items-center gap-4 text-xs font-mono mb-2 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
          <span className="flex items-center gap-1"><Calendar size={11} />{blog.date}</span>
          <span className="flex items-center gap-1"><Clock size={11} />{blog.readTime}</span>
        </div>
        <h3 className={`font-display font-bold text-lg leading-snug mb-1 group-hover:text-indigo-500 transition-colors ${isDark ? 'text-white' : 'text-zinc-900'}`}>
          {blog.title}
        </h3>
        <p className={`text-sm leading-relaxed line-clamp-2 ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>
          {blog.excerpt}
        </p>
      </div>
      <ArrowUpRight size={18} className={`shrink-0 mt-1 opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all text-indigo-500`} />
    </Link>
  );
}

/* ══════════════════════════════════════════════ */
/*  HOME PAGE                                     */
/* ══════════════════════════════════════════════ */
export default function Home() {
  const { isDark } = useTheme();
  const heroRef   = useRef(null);
  const statsRef  = useRef(null);
  const worksRef  = useRef(null);
  const blogRef   = useRef(null);

  useEffect(() => {
    /* hero */
    gsap.fromTo('.hero-item',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: 'power3.out', delay: 0.3 }
    );
    /* stats */
    gsap.fromTo(statsRef.current?.children ?? [],
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: statsRef.current, start: 'top 85%' } }
    );
    /* cards */
    gsap.fromTo('.proj-card',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.12, ease: 'power2.out',
        scrollTrigger: { trigger: worksRef.current, start: 'top 80%' } }
    );
    /* blog rows */
    gsap.fromTo('.blog-row',
      { x: -30, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: blogRef.current, start: 'top 80%' } }
    );
  }, []);

  const featuredProjects = projects.filter(p => p.featured);
  const featuredBlogs    = blogs.filter(b => b.featured).slice(0, 3);

  const bg    = isDark ? 'bg-zinc-950' : 'bg-white';
  const bgAlt = isDark ? 'bg-zinc-900/40' : 'bg-zinc-50';

  return (
    <main className={bg}>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
        {/* Soft glow blobs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/8 rounded-full blur-3xl pointer-events-none" />

        <div className="section-container w-full">
          {/* Badge */}
          <div className="hero-item inline-flex items-center gap-2.5 px-4 py-2 rounded-full border mb-8
            bg-indigo-50 border-indigo-200 text-indigo-600
            dark:bg-indigo-500/10 dark:border-indigo-500/30 dark:text-indigo-400 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            <Sparkles size={13} />
            Available for new opportunities
          </div>

          {/* Headline */}
          <h1 className="hero-item font-display font-extrabold leading-none tracking-tight mb-6"
            style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)' }}>
            Designing &<br />
            Building{' '}
            <span className="gradient-text">Digital<br />Experiences.</span>
          </h1>

          {/* Subtext */}
          <p className={`hero-item text-lg md:text-xl max-w-xl leading-relaxed mb-10 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Hi, I'm{' '}
            <span className={`font-semibold ${isDark ? 'text-white' : 'text-zinc-900'}`}>Anupam Pratap Singh K.C</span>
            {' '}— BSc. CSIT Graduate & Full Stack Developer from Kathmandu, Nepal.
            I build fast, beautiful, and accessible web applications.
          </p>

          {/* CTAs */}
          <div className="hero-item flex flex-wrap items-center gap-4">
            <Link to="/work" className="btn-primary">
              View My Work <ArrowRight size={17} />
            </Link>
            <a href="#" className={`btn-secondary ${isDark ? 'border-white/10 text-zinc-300 hover:border-white/20 hover:text-white' : 'border-zinc-200 text-zinc-700 hover:border-zinc-300 hover:bg-zinc-50'}`}>
              <Download size={16} /> Download CV
            </a>
          </div>

          {/* Scroll hint */}
          <div className={`hero-item flex items-center gap-3 mt-16 ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`}>
            <div className="w-10 h-px bg-current" />
            <span className="font-mono text-xs uppercase tracking-widest">Scroll to explore</span>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className={`border-y py-4 overflow-hidden ${isDark ? 'border-white/5 bg-zinc-900/60' : 'border-zinc-100 bg-zinc-50'}`}>
        <div className="flex whitespace-nowrap animate-marquee">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className={`mx-8 font-display font-bold text-sm uppercase tracking-widest ${isDark ? 'text-zinc-700' : 'text-zinc-300'}`}>
              {item} <span className="text-indigo-500 mx-3">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── STATS ── */}
      <section className={`${bgAlt} section-padding`}>
        <div className="section-container">
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { num: '10+',  label: 'Projects Built' },
              { num: '3+',   label: 'Years Coding' },
              { num: '5+',   label: 'Tech Stacks' },
              { num: '2024', label: 'CSIT Graduate' },
            ].map(stat => (
              <div key={stat.label}
                className={`rounded-2xl p-7 text-center border ${isDark ? 'bg-zinc-900 border-white/5' : 'bg-white border-zinc-200'}`}>
                <div className="font-display font-extrabold text-4xl gradient-text mb-1">{stat.num}</div>
                <div className={`font-mono text-xs uppercase tracking-wider ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section className={`${bg} section-padding`} ref={worksRef}>
        <div className="section-container">
          <div className="flex items-end justify-between mb-12">
            <SectionHeader eyebrow="Portfolio" title="Featured Work" />
            <Link to="/work"
              className={`hidden md:flex items-center gap-2 text-sm font-semibold shrink-0 mb-12 transition-colors ${isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-500 hover:text-zinc-900'}`}>
              All Projects <ArrowRight size={15} />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map(project => (
              <div key={project.id} className="proj-card">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
          <div className="mt-8 md:hidden text-center">
            <Link to="/work" className={`inline-flex items-center gap-2 text-sm font-semibold text-indigo-500`}>
              All Projects <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT STRIP ── */}
      <section className={`${bgAlt} section-padding`}>
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                eyebrow="About Me"
                title={<>Turning ideas into <span className="gradient-text">reality</span></>}
                subtitle={personalInfo.bio}
              />
              <Link to="/about"
                className="inline-flex items-center gap-2 text-indigo-500 hover:text-indigo-400 font-semibold transition-colors">
                Read more about me <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {personalInfo.skills.map(group => (
                <div key={group.category}
                  className={`rounded-2xl p-5 border ${isDark ? 'bg-zinc-900 border-white/5' : 'bg-white border-zinc-200'}`}>
                  <h4 className={`font-display font-bold text-xs uppercase tracking-wider mb-3 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
                    {group.category}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map(skill => (
                      <span key={skill}
                        className={`tag-pill text-[11px] ${isDark ? 'bg-zinc-800 text-zinc-400' : 'bg-zinc-100 text-zinc-600'}`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BLOG ── */}
      <section className={`${bg} section-padding`} ref={blogRef}>
        <div className="section-container">
          <div className="flex items-end justify-between mb-2">
            <SectionHeader eyebrow="Writing" title="Latest Posts" />
            <Link to="/blog"
              className={`hidden md:flex items-center gap-2 text-sm font-semibold shrink-0 mb-12 transition-colors ${isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-500 hover:text-zinc-900'}`}>
              All Posts <ArrowRight size={15} />
            </Link>
          </div>
          <div className={`border-t ${isDark ? 'border-white/5' : 'border-zinc-100'}`}>
            {featuredBlogs.map(blog => (
              <div key={blog.id} className="blog-row">
                <BlogRow blog={blog} />
              </div>
            ))}
          </div>
          <div className="mt-6 md:hidden text-center">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500">
              All Posts <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={`${bgAlt} section-padding`}>
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <span className="font-bold text-sm text-indigo-500 uppercase tracking-widest">Let's Connect</span>
            <h2 className={`font-display font-extrabold mt-3 mb-5 ${isDark ? 'text-white' : 'text-zinc-900'}`}
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Have a project in mind?
            </h2>
            <p className={`text-lg mb-10 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
              I'm open to freelance work, full-time roles, and exciting collaborations. Let's build something great together.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary text-base px-8 py-4">
                Get In Touch <ArrowRight size={18} />
              </Link>
              <a href="mailto:anupamchettri67@gmail.com"
                className={`btn-secondary text-base px-8 py-4 ${isDark ? 'border-white/10 text-zinc-300 hover:border-white/20' : 'border-zinc-200 text-zinc-700 hover:border-zinc-300'}`}>
                anupamchettri67@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
