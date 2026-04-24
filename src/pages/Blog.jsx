import { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ArrowLeft, ArrowRight, Clock, Calendar, Tag } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { blogs } from '../data';

export function BlogList() {
  const { isDark } = useTheme();

  useEffect(() => {
    gsap.fromTo('.blog-header-item',
      { y: 35, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
    );
    gsap.fromTo('.blog-card',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out', delay: 0.5 }
    );
  }, []);

  const bg   = isDark ? 'bg-zinc-950' : 'bg-white';
  const card = isDark ? 'bg-zinc-900 border-white/5 hover:border-indigo-500/30' : 'bg-white border-zinc-200 hover:border-indigo-200';

  return (
    <main className={bg}>
      <div className="section-container pt-28 pb-24">

        <div className="max-w-3xl mx-auto">
          <div className="mb-14">
            <span className="blog-header-item block font-mono text-xs text-indigo-500 uppercase tracking-widest mb-3">Writing</span>
            <h1 className={`blog-header-item font-display font-extrabold leading-none tracking-tight mb-4 ${isDark ? 'text-white' : 'text-zinc-900'}`}
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
              Blog & Articles
            </h1>
            <p className={`blog-header-item text-lg leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Thoughts on web development, design, tech, and the occasional personal essay.
            </p>
          </div>

          <div className="space-y-5">
            {blogs.map(blog => (
              <Link key={blog.id} to={`/blog/${blog.id}`}
                className={`blog-card group flex flex-col p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${card} ${isDark ? 'hover:shadow-indigo-500/10' : 'hover:shadow-zinc-200'}`}>

                <div className={`flex flex-wrap items-center gap-4 text-xs font-mono mb-3 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
                  <span className="flex items-center gap-1.5"><Calendar size={11} /> {blog.date}</span>
                  <span className="flex items-center gap-1.5"><Clock size={11} /> {blog.readTime}</span>
                </div>

                <h2 className={`font-display font-bold text-xl mb-2 group-hover:text-indigo-500 transition-colors ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                  {blog.title}
                </h2>
                <p className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  {blog.excerpt}
                </p>

                <div className="flex flex-wrap gap-2">
                  {blog.tags.map(tag => (
                    <span key={tag} className={`tag-pill flex items-center gap-1 ${isDark ? 'bg-zinc-800 text-zinc-400' : 'bg-zinc-100 text-zinc-500'}`}>
                      <Tag size={10} /> {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const blog = blogs.find(b => b.id === parseInt(id));
  const prevBlog = blogs.find(b => b.id === parseInt(id) - 1);
  const nextBlog = blogs.find(b => b.id === parseInt(id) + 1);

  useEffect(() => {
    gsap.fromTo('.detail-item',
      { y: 35, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
    );
  }, [id]);

  const bg = isDark ? 'bg-zinc-950' : 'bg-white';

  if (!blog) return (
    <main className={`${bg} min-h-screen flex items-center justify-center`}>
      <div className="text-center">
        <p className={`text-xl mb-6 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>Post not found</p>
        <button onClick={() => navigate('/blog')} className="btn-primary">
          <ArrowLeft size={16} /> Back to Blog
        </button>
      </div>
    </main>
  );

  return (
    <main className={bg}>
      <div className="section-container pt-28 pb-24">
        <div className="max-w-3xl mx-auto">

          <button onClick={() => navigate('/blog')}
            className={`detail-item flex items-center gap-2 text-sm mb-10 transition-colors ${isDark ? 'text-zinc-500 hover:text-white' : 'text-zinc-400 hover:text-zinc-900'}`}>
            <ArrowLeft size={15} /> Back to Blog
          </button>

          <div className={`detail-item flex flex-wrap items-center gap-4 text-xs font-mono mb-5 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
            <span className="flex items-center gap-1.5"><Calendar size={11} /> {blog.date}</span>
            <span className="flex items-center gap-1.5"><Clock size={11} /> {blog.readTime}</span>
          </div>

          <h1 className={`detail-item font-display font-extrabold leading-tight mb-6 ${isDark ? 'text-white' : 'text-zinc-900'}`}
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            {blog.title}
          </h1>

          <div className="detail-item flex flex-wrap gap-2 mb-10">
            {blog.tags.map(tag => (
              <span key={tag} className={`tag-pill ${isDark ? 'bg-indigo-500/10 text-indigo-400' : 'bg-indigo-50 text-indigo-600'}`}>
                {tag}
              </span>
            ))}
          </div>

          <div className={`detail-item prose max-w-none text-base leading-relaxed space-y-5 ${isDark ? 'text-zinc-400' : 'text-zinc-700'}`}>
            <p className="text-lg font-medium">{blog.excerpt}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
          </div>

          <div className={`mt-16 pt-8 border-t flex items-center justify-between gap-4 ${isDark ? 'border-white/10' : 'border-zinc-100'}`}>
            {prevBlog ? (
              <Link to={`/blog/${prevBlog.id}`}
                className={`flex items-center gap-2 text-sm font-medium transition-colors ${isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-500 hover:text-zinc-900'}`}>
                <ArrowLeft size={15} /> {prevBlog.title.slice(0, 30)}…
              </Link>
            ) : <div />}
            {nextBlog && (
              <Link to={`/blog/${nextBlog.id}`}
                className={`flex items-center gap-2 text-sm font-medium transition-colors ${isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-500 hover:text-zinc-900'}`}>
                {nextBlog.title.slice(0, 30)}… <ArrowRight size={15} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
