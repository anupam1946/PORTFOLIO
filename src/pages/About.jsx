import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Mail, GitBranch, ExternalLink, Download, Briefcase, GraduationCap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const { isDark } = useTheme();

  useEffect(() => {
    gsap.fromTo('.about-item',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
    );
    gsap.fromTo('.timeline-item',
      { x: -30, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, stagger: 0.12, ease: 'power2.out',
        scrollTrigger: { trigger: '.timeline-section', start: 'top 80%' } }
    );
    gsap.fromTo('.skill-card',
      { y: 25, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power2.out',
        scrollTrigger: { trigger: '.skills-section', start: 'top 80%' } }
    );
  }, []);

  const bg    = isDark ? 'bg-zinc-950' : 'bg-white';
  const bgAlt = isDark ? 'bg-zinc-900/40' : 'bg-zinc-50';
  const card  = isDark ? 'bg-zinc-900 border-white/5' : 'bg-white border-zinc-200';

  return (
    <main className={bg}>
      <div className="section-container pt-28 pb-24">

        {/* ── HEADER ── */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 lg:mb-24">
          {/* Left Content */}
          <div>
            <div className="about-item">
              <span className="font-mono text-xs text-indigo-500 uppercase tracking-widest">About Me</span>
            </div>
            <h1 className={`about-item font-display font-extrabold leading-none tracking-tight mt-3 mb-6 ${isDark ? 'text-white' : 'text-zinc-900'}`}
              style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)' }}>
              The person<br />behind the{' '}
              <span className="gradient-text">code.</span>
            </h1>

            <div className={`about-item flex flex-wrap items-center gap-5 mb-8 ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
              <span className="flex items-center gap-2 text-sm">
                <MapPin size={15} className="text-indigo-500" /> {personalInfo.location}
              </span>
              <a href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-sm hover:text-indigo-500 transition-colors">
                <Mail size={15} className="text-indigo-500" /> {personalInfo.email}
              </a>
            </div>

            <div className={`about-item whitespace-pre-line space-y-4 text-lg leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
              {personalInfo.longBio}
            </div>

            <div className="about-item flex flex-wrap items-center gap-3 mt-8">
              <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer"
                className={`btn-secondary ${isDark ? 'border-white/10 text-zinc-300 hover:border-white/20' : 'border-zinc-200 text-zinc-700 hover:border-zinc-300'}`}>
                <GitBranch size={15} /> GitHub
              </a>
              <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer"
                className="btn-primary">
                <ExternalLink size={15} /> LinkedIn
              </a>
              <a href="/cv.pdf"
                className={`btn-secondary ${isDark ? 'border-white/10 text-zinc-300 hover:border-white/20' : 'border-zinc-200 text-zinc-700 hover:border-zinc-300'}`}>
                <Download size={15} /> Download CV
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="about-item hidden lg:flex items-center justify-center">
            <div className={`relative w-full max-w-lg aspect-square rounded-2xl overflow-hidden ${isDark ? 'bg-zinc-900/50' : 'bg-indigo-50/30'}`}>
              <img
                src={personalInfo.photo}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay effect */}
              <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-zinc-950 via-transparent' : 'from-white/40 via-transparent'}`} />
            </div>
          </div>
        </div>

        {/* ── SKILLS ── */}
        <section className="skills-section mb-20">
          <h2 className={`font-display font-bold text-2xl mb-8 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
            Skills & Technologies
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {personalInfo.skills.map(group => (
              <div key={group.category} className={`skill-card card-base p-6 ${card}`}>
                <h3 className={`font-display font-bold text-xs uppercase tracking-widest mb-4 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map(skill => (
                    <span key={skill}
                      className={`tag-pill ${isDark ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20' : 'bg-indigo-50 text-indigo-600 border border-indigo-100'}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── EXPERIENCE ── */}
        <section className="timeline-section mb-20">
          <div className="flex items-center gap-3 mb-10">
            <span className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center">
              <Briefcase size={18} className="text-indigo-500" />
            </span>
            <h2 className={`font-display font-bold text-2xl ${isDark ? 'text-white' : 'text-zinc-900'}`}>Experience</h2>
          </div>

          <div className="relative pl-6 border-l-2 border-indigo-500/25 space-y-6">
            {personalInfo.experience.map((exp, i) => (
              <div key={i} className="timeline-item relative">
                {/* Dot */}
                <div className="absolute -left-[1.45rem] top-6 w-3 h-3 rounded-full bg-indigo-500 ring-4 ring-offset-2 ring-indigo-500/20"
                  style={{ ringOffsetColor: isDark ? '#09090b' : '#fff' }} />

                <div className={`card-base p-6 ${card}`}>
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className={`font-display font-bold text-lg ${isDark ? 'text-white' : 'text-zinc-900'}`}>{exp.role}</h3>
                      <p className="text-indigo-500 font-medium text-sm">{exp.company} · {exp.location}</p>
                    </div>
                    <span className={`shrink-0 font-mono text-xs px-3 py-1.5 rounded-full ${isDark ? 'bg-white/5 text-zinc-400' : 'bg-zinc-100 text-zinc-500'}`}>
                      {exp.period}
                    </span>
                  </div>
                  <p className={`text-sm leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── EDUCATION ── */}
        <section>
          <div className="flex items-center gap-3 mb-10">
            <span className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center">
              <GraduationCap size={18} className="text-indigo-500" />
            </span>
            <h2 className={`font-display font-bold text-2xl ${isDark ? 'text-white' : 'text-zinc-900'}`}>Education</h2>
          </div>

          {personalInfo.education.map((edu, i) => (
            <div key={i} className={`card-base p-7 ${card}`}>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className={`font-display font-bold text-xl mb-1 ${isDark ? 'text-white' : 'text-zinc-900'}`}>{edu.degree}</h3>
                  <p className="text-indigo-500 font-medium">{edu.college}</p>
                  <p className={`text-sm mt-1 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>{edu.institution} · {edu.location}</p>
                </div>
                <div className="text-right shrink-0">
                  <span className={`font-mono text-xs px-3 py-1.5 rounded-full ${isDark ? 'bg-white/5 text-zinc-400' : 'bg-zinc-100 text-zinc-500'}`}>
                    {edu.period}
                  </span>
                  <p className={`text-sm font-semibold mt-3 ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>Percentage: {edu.Percent}</p>
                </div>
              </div>
            </div>
          ))}
        </section>

      </div>
    </main>
  );
}
