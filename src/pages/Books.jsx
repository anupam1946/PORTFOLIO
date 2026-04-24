import { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { Star, BookOpen, ArrowLeft } from 'lucide-react';
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
    <Link
      to={`/books/${book.id}`}
      className={`book-card group flex flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${
        isDark
          ? 'bg-zinc-900 border-white/5 hover:border-indigo-500/30 hover:shadow-indigo-500/10'
          : 'bg-white border-zinc-200 hover:border-indigo-200 hover:shadow-zinc-200'
      }`}>
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex-1 min-w-0">
          <h3 className={`font-display font-bold text-lg leading-tight group-hover:text-indigo-500 transition-colors ${isDark ? 'text-white' : 'text-zinc-900'}`}>{book.title}</h3>
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
    </Link>
  );
}

export function BookList() {
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

export function BookDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const book = books.find(b => b.id === parseInt(id));
  const prevBook = books.find(b => b.id === parseInt(id) - 1);
  const nextBook = books.find(b => b.id === parseInt(id) + 1);

  useEffect(() => {
    gsap.fromTo(
      '.detail-item',
      { y: 35, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.2,
      },
    );
  }, [id]);

  const bg = isDark ? 'bg-zinc-950' : 'bg-white';

  if (!book)
    return (
      <main className={`${bg} min-h-screen flex items-center justify-center`}>
        <div className="text-center">
          <p
            className={`text-xl mb-6 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}
          >
            Book not found
          </p>
          <button onClick={() => navigate('/books')} className="btn-primary">
            <ArrowLeft size={16} /> Back to Books
          </button>
        </div>
      </main>
    );

  return (
    <main className={bg}>
      <div className="section-container pt-28 pb-24">
        <div className="max-w-3xl mx-auto">
          <button
            onClick={() => navigate('/books')}
            className={`detail-item flex items-center gap-2 text-sm mb-10 transition-colors ${isDark ? 'text-zinc-500 hover:text-white' : 'text-zinc-400 hover:text-zinc-900'}`}
          >
            <ArrowLeft size={15} /> Back to Books
          </button>

          <div className="detail-item mb-8">
            <span className={`block font-mono text-xs text-indigo-500 uppercase tracking-widest mb-3`}>
              {book.status}
            </span>
            <h1
              className={`font-display font-extrabold leading-tight mb-4 ${isDark ? 'text-white' : 'text-zinc-900'}`}
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
            >
              {book.title}
            </h1>
            <p className={`text-lg font-medium ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
              by {book.author} • {book.year}
            </p>
          </div>

          <div className="detail-item flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <Stars rating={book.rating} />
              <span className={`text-sm font-medium ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                {book.rating}/5 rating
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {book.tags.map(tag => (
                <span
                  key={tag}
                  className={`tag-pill ${isDark ? 'bg-indigo-500/10 text-indigo-400' : 'bg-indigo-50 text-indigo-600'}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className={`detail-item space-y-6 mb-12 prose ${isDark ? 'prose-invert' : ''}`}>
            <div>
              <h2 className={`font-display font-bold text-xl mb-3 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                My Thoughts
              </h2>
              <p className={`text-lg leading-relaxed ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                {book.note}
              </p>
            </div>

            <div>
              <h2 className={`font-display font-bold text-xl mb-3 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                About the Book
              </h2>
              <p className={`text-lg leading-relaxed ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                {book.description}
              </p>
            </div>

            <div>
              <h2 className={`font-display font-bold text-xl mb-3 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                Key Takeaways
              </h2>
              <p className={`text-lg leading-relaxed ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                {book.details}
              </p>
            </div>
          </div>

          {(prevBook || nextBook) && (
            <div className="detail-item grid sm:grid-cols-2 gap-4 pt-12 border-t border-white/10">
              {prevBook ? (
                <Link
                  to={`/books/${prevBook.id}`}
                  className={`group flex flex-col p-4 rounded-lg transition-all ${isDark ? 'bg-zinc-900 hover:bg-zinc-800' : 'bg-zinc-50 hover:bg-zinc-100'}`}
                >
                  <span className={`text-xs font-mono uppercase tracking-widest mb-2 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
                    ← Previous Book
                  </span>
                  <p className={`font-display font-bold group-hover:text-indigo-500 transition-colors ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                    {prevBook.title}
                  </p>
                </Link>
              ) : (
                <div />
              )}
              {nextBook ? (
                <Link
                  to={`/books/${nextBook.id}`}
                  className={`group flex flex-col p-4 rounded-lg transition-all text-right ${isDark ? 'bg-zinc-900 hover:bg-zinc-800' : 'bg-zinc-50 hover:bg-zinc-100'}`}
                >
                  <span className={`text-xs font-mono uppercase tracking-widest mb-2 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
                    Next Book →
                  </span>
                  <p className={`font-display font-bold group-hover:text-indigo-500 transition-colors ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                    {nextBook.title}
                  </p>
                </Link>
              ) : (
                <div />
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default BookList;
