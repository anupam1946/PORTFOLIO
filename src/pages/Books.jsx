import { useEffect } from 'react';
import { gsap } from 'gsap';
import { Star, BookOpen } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { books } from '../data';

function Stars({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map(i => (
        <Star key={i} size={13} className={i <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-zinc-600'} />
      ))}
    </div>
  );
}

function BookCard({ book, isDark }) {
  return (
    <div className={`book-card rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${
      isDark
        ? 'bg-zinc-900 border-white/5 hover:border-white/10 hover:shadow-black/20'
        : 'bg-white border-zinc-200 hover:border-zinc-300 hover:shadow-zinc-100'
    }`}>
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex-1 min-w-0">
          <h3 className={`font-display font-bold text-lg leading-tight ${isDark ? 'text-white' : 'text-zinc-900'}`}>{book.title}</h3>
          <p className={`text-sm mt-1 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>by {book.author} · {book.year}</p>
        </div>
        <div className="flex flex-col items-end gap-2 shrink-0">
          <Stars rating={book.rating} />
          <span className={`text-xs font-mono px-2.5 py-1 rounded-full ${
            book.status === 'Reading'
              ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
              : isDark ? 'bg-zinc-800 text-zinc-500' : 'bg-zinc-100 text-zinc-500'
          }`}>
            {book.status}
          </span>
        </div>
      </div>

      <p className={`text-sm leading-relaxed mb-4 italic ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
        "{book.note}"
      </p>

      <div className="flex flex-wrap gap-2">
        {book.tags.map(tag => (
          <span key={tag} className={`tag-pill ${isDark ? 'bg-zinc-800 text-zinc-500' : 'bg-zinc-100 text-zinc-500'}`}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Books() {
  const { isDark } = useTheme();

  useEffect(() => {
    gsap.fromTo('.books-header',
      { y: 35, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
    );
    gsap.fromTo('.book-card',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.09, ease: 'power2.out', delay: 0.5 }
    );
  }, []);

  const reading = books.filter(b => b.status === 'Reading');
  const read    = books.filter(b => b.status === 'Read');
  const bg = isDark ? 'bg-zinc-950' : 'bg-white';

  return (
    <main className={bg}>
      <div className="section-container pt-28 pb-24">
        <div className="max-w-3xl mx-auto">

          <div className="mb-14">
            <span className="books-header block font-mono text-xs text-indigo-500 uppercase tracking-widest mb-3">Reading</span>
            <h1 className={`books-header font-display font-extrabold leading-none tracking-tight mb-4 ${isDark ? 'text-white' : 'text-zinc-900'}`}
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
              Book Notes
            </h1>
            <p className={`books-header text-lg leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Books I've read and taken notes from — my personal reading list with thoughts and highlights.
            </p>
          </div>

          {reading.length > 0 && (
            <section className="mb-12">
              <div className={`flex items-center gap-2.5 mb-6 font-display font-bold text-sm uppercase tracking-widest ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse" />
                Currently Reading
              </div>
              <div className="space-y-4">
                {reading.map(book => <BookCard key={book.id} book={book} isDark={isDark} />)}
              </div>
            </section>
          )}

          <section>
            <div className={`flex items-center gap-2.5 mb-6 font-display font-bold text-sm uppercase tracking-widest ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
              <BookOpen size={15} /> Completed ({read.length})
            </div>
            <div className="space-y-4">
              {read.map(book => <BookCard key={book.id} book={book} isDark={isDark} />)}
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
