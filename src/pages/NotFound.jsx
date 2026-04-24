import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ArrowLeft } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function NotFound() {
  const { isDark } = useTheme();

  useEffect(() => {
    gsap.fromTo('.nf-item',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: 'power3.out', delay: 0.2 }
    );
  }, []);

  return (
    <main className={`min-h-screen flex items-center justify-center ${isDark ? 'bg-zinc-950' : 'bg-white'}`}>
      <div className="section-container text-center">
        <div className="nf-item font-display font-extrabold gradient-text select-none leading-none mb-6"
          style={{ fontSize: 'clamp(7rem, 20vw, 14rem)' }}>
          404
        </div>
        <h1 className={`nf-item font-display font-bold text-3xl mb-4 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
          Page Not Found
        </h1>
        <p className={`nf-item text-lg mb-10 max-w-md mx-auto ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>
          Looks like this page is taking break right now and go to the Himalayas for a vacation. Let's get you back on intial track.
        </p>
        <div className="nf-item">
          <Link to="/" className="btn-primary">
            <ArrowLeft size={18} /> Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
