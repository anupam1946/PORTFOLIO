import { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { Award, ArrowLeft, ArrowRight, Calendar, ExternalLink } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { achievements } from '../data';

function AchievementCard({ achievement, isDark }) {
  return (
    <Link
      to={`/achievements/${achievement.id}`}
      className={`achievement-card group flex flex-col rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${
        isDark
          ? 'bg-zinc-900 border-white/5 hover:border-indigo-500/30 hover:shadow-indigo-500/10'
          : 'bg-white border-zinc-200 hover:border-indigo-200 hover:shadow-zinc-200'
      }`}>
      
      {/* Image */}
      {achievement.image && (
        <div className="relative w-full h-48 overflow-hidden bg-zinc-200 dark:bg-zinc-800">
          <img 
            src={achievement.image} 
            alt={achievement.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
      )}

      <div className="p-6 flex-1 flex flex-col">
        {/* Color bar */}
        <div className="h-1 w-12 rounded-full mb-4" style={{ background: achievement.color }} />

        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex-1 min-w-0">
            <h3 className={`font-display font-bold text-lg leading-tight group-hover:text-indigo-500 transition-colors ${
              isDark ? 'text-white' : 'text-zinc-900'
            }`}>
              {achievement.title}
            </h3>
            <p className={`text-sm mt-1 font-medium ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
              {achievement.issuer}
            </p>
          </div>
          <div className="shrink-0 p-2 rounded-lg" style={{ backgroundColor: `${achievement.color}15` }}>
            <Award size={20} style={{ color: achievement.color }} />
          </div>
        </div>

        <div className={`flex items-center gap-2 text-xs mb-4 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
          <Calendar size={13} /> {achievement.date}
          {achievement.expiryDate && <span>· Expires: {achievement.expiryDate}</span>}
        </div>

        <p className={`text-sm leading-relaxed mb-4 flex-1 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
          {achievement.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {achievement.tags.map(tag => (
            <span key={tag} className={`tag-pill text-[11px] ${
              isDark ? 'bg-zinc-800 text-zinc-400' : 'bg-zinc-100 text-zinc-600'
            }`}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export function AchievementList() {
  const { isDark } = useTheme();

  useEffect(() => {
    gsap.fromTo('.achievements-header',
      { y: 35, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
    );
    gsap.fromTo('.achievement-card',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.09, ease: 'power2.out', delay: 0.5 }
    );
  }, []);

  const featured = achievements.filter(a => a.featured);
  const other = achievements.filter(a => !a.featured);
  const bg = isDark ? 'bg-zinc-950' : 'bg-white';

  return (
    <main className={bg}>
      <div className="section-container pt-28 pb-24">
        <div className="max-w-3xl mx-auto">

          <div className="mb-14">
            <span className="achievements-header block font-mono text-xs text-indigo-500 uppercase tracking-widest mb-3">
              Certifications
            </span>
            <h1 className={`achievements-header font-display font-extrabold leading-none tracking-tight mb-4 ${
              isDark ? 'text-white' : 'text-zinc-900'
            }`}
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
              Achievements & Certifications
            </h1>
            <p className={`achievements-header text-lg leading-relaxed ${
              isDark ? 'text-zinc-400' : 'text-zinc-600'
            }`}>
              Certifications, awards, and credentials that showcase my continuous learning and expertise.
            </p>
          </div>

          {featured.length > 0 && (
            <section className="mb-12">
              <div className={`flex items-center gap-2.5 mb-6 font-display font-bold text-sm uppercase tracking-widest ${
                isDark ? 'text-zinc-400' : 'text-zinc-500'
              }`}>
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse" />
                Featured Certifications
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {featured.map(achievement => (
                  <AchievementCard key={achievement.id} achievement={achievement} isDark={isDark} />
                ))}
              </div>
            </section>
          )}

          {other.length > 0 && (
            <section>
              <div className={`flex items-center gap-2.5 mb-6 font-display font-bold text-sm uppercase tracking-widest ${
                isDark ? 'text-zinc-400' : 'text-zinc-500'
              }`}>
                Other Certifications
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {other.map(achievement => (
                  <AchievementCard key={achievement.id} achievement={achievement} isDark={isDark} />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </main>
  );
}

export function AchievementDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const achievement = achievements.find(a => a.id === parseInt(id));
  const prevAchievement = achievements.find(a => a.id === parseInt(id) - 1);
  const nextAchievement = achievements.find(a => a.id === parseInt(id) + 1);

  useEffect(() => {
    gsap.fromTo('.detail-item',
      { y: 35, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
    );
  }, [id]);

  const bg = isDark ? 'bg-zinc-950' : 'bg-white';

  if (!achievement)
    return (
      <main className={`${bg} min-h-screen flex items-center justify-center`}>
        <div className="text-center">
          <p className={`text-xl mb-6 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Achievement not found
          </p>
          <button onClick={() => navigate('/achievements')} className="btn-primary">
            <ArrowLeft size={16} /> Back to Achievements
          </button>
        </div>
      </main>
    );

  return (
    <main className={bg}>
      <div className="section-container pt-28 pb-24">
        <button
          onClick={() => navigate('/achievements')}
          className={`detail-item inline-flex items-center gap-2 mb-8 text-indigo-500 hover:text-indigo-400 transition-colors`}>
          <ArrowLeft size={16} /> Back
        </button>

        <div className="max-w-2xl">
          {/* Header */}
          <div className="detail-item mb-8">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h1 className={`font-display font-extrabold leading-none tracking-tight ${
                  isDark ? 'text-white' : 'text-zinc-900'
                }`}
                  style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
                  {achievement.title}
                </h1>
                <p className={`text-lg mt-2 font-semibold ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  {achievement.issuer}
                </p>
              </div>
              <div className="shrink-0 p-4 rounded-xl" style={{ backgroundColor: `${achievement.color}15` }}>
                <Award size={32} style={{ color: achievement.color }} />
              </div>
            </div>

            <div className={`flex flex-wrap items-center gap-4 text-sm mb-6 ${
              isDark ? 'text-zinc-500' : 'text-zinc-500'
            }`}>
              <span className="flex items-center gap-1.5">
                <Calendar size={16} /> {achievement.date}
              </span>
              {achievement.expiryDate && (
                <span className="flex items-center gap-1.5">
                  Expires: {achievement.expiryDate}
                </span>
              )}
              {achievement.credentialUrl !== '#' && (
                <a href={achievement.credentialUrl} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-indigo-500 hover:text-indigo-400 transition-colors">
                  View Credential <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>

          {/* Certificate Image */}
          {achievement.image && (
            <div className="detail-item mb-8 rounded-2xl overflow-hidden border"
              style={{ borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgb(229,231,235)' }}>
              <img 
                src={achievement.image} 
                alt={achievement.title}
                className="w-full h-auto object-cover"
              />
              <p className={`text-xs text-center py-3 ${isDark ? 'bg-zinc-900 text-zinc-500' : 'bg-zinc-50 text-zinc-400'}`}>
                Certificate/Badge Image - Replace with your actual certificate
              </p>
            </div>
          )}

          {/* Details */}
          <div className={`detail-item rounded-2xl p-8 border mb-8 ${
            isDark ? 'bg-zinc-900 border-white/5' : 'bg-zinc-50 border-zinc-200'
          }`}>
            <h2 className={`font-display font-bold text-lg mb-4 ${
              isDark ? 'text-white' : 'text-zinc-900'
            }`}>
              About this certification
            </h2>
            <p className={`leading-relaxed text-base mb-4 ${
              isDark ? 'text-zinc-400' : 'text-zinc-700'
            }`}>
              {achievement.details}
            </p>

            <div className="flex flex-wrap gap-2">
              {achievement.tags.map(tag => (
                <span key={tag} className={`tag-pill ${
                  isDark ? 'bg-zinc-800 text-zinc-400' : 'bg-white border border-zinc-200 text-zinc-600'
                }`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Credential ID */}
          {achievement.credentialId && (
            <div className={`detail-item p-4 rounded-lg border ${
              isDark ? 'bg-zinc-900/50 border-white/5' : 'bg-zinc-50 border-zinc-200'
            }`}>
              <p className={`text-xs font-mono uppercase tracking-widest ${
                isDark ? 'text-zinc-500' : 'text-zinc-400'
              }`}>
                Credential ID
              </p>
              <p className={`font-mono font-semibold mt-1 ${
                isDark ? 'text-white' : 'text-zinc-900'
              }`}>
                {achievement.credentialId}
              </p>
            </div>
          )}

          {/* Navigation */}
          {(prevAchievement || nextAchievement) && (
            <div className="detail-item flex items-center justify-between gap-4 mt-12 pt-8 border-t"
              style={{ borderColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgb(229,231,235)' }}>
              {prevAchievement ? (
                <Link to={`/achievements/${prevAchievement.id}`}
                  className="group flex items-center gap-2 text-indigo-500 hover:text-indigo-400 transition-colors">
                  <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                  Previous
                </Link>
              ) : <div />}
              {nextAchievement && (
                <Link to={`/achievements/${nextAchievement.id}`}
                  className="group flex items-center gap-2 text-indigo-500 hover:text-indigo-400 transition-colors">
                  Next
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
