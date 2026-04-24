# Anupam K.C — Portfolio Website

Built with **Vite + React + Tailwind CSS + GSAP**

## 🚀 Quick Start

```bash
npm install
npm run dev       # Local dev server at http://localhost:5173
npm run build     # Production build → dist/
npm run preview   # Preview production build locally
```

## 🌐 Deploy to Cloudflare Pages (Free)

1. Push this repo to GitHub
2. Go to [Cloudflare Pages](https://pages.cloudflare.com)
3. Click **Create a project** → Connect to Git → Select your repo
4. Set build settings:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Click **Save and Deploy**
6. Add your custom domain in **Settings → Custom Domains**
7. SSL is automatic via Cloudflare

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx       # Sticky nav with dark/light toggle + mobile menu
│   ├── Footer.jsx       # Footer with links, socials
│   └── Layout.jsx       # Page wrapper
├── context/
│   └── ThemeContext.jsx  # Dark/light mode state (persisted to localStorage)
├── data/
│   └── index.js         # All your content: projects, blogs, books, personal info
├── pages/
│   ├── Home.jsx         # Hero, stats, featured work, blog, CTA
│   ├── About.jsx        # Bio, skills, experience, education
│   ├── Work.jsx         # Filterable project grid
│   ├── Blog.jsx         # Blog list + detail view
│   ├── Books.jsx        # Book notes
│   ├── Contact.jsx      # Contact form + info
│   └── NotFound.jsx     # 404 page
└── index.css            # Global styles + Tailwind
```

## ✏️ Customizing Your Content

All content lives in **`src/data/index.js`** — just edit:
- `personalInfo` — name, bio, skills, experience, education, social links
- `projects` — add/edit your projects
- `blogs` — add your blog posts
- `books` — update your reading list

## 🎨 Pages Included

| Page | Route |
|------|-------|
| Home | `/` |
| About | `/about` |
| Work / Projects | `/work` |
| Blog List | `/blog` |
| Blog Detail | `/blog/:id` |
| Book Notes | `/books` |
| Contact | `/contact` |
| 404 | `*` |

## 🛠 Tech Stack

- **Vite** — blazing fast dev/build
- **React 18** — UI framework
- **Tailwind CSS v4** — utility styling
- **GSAP** — scroll + entrance animations
- **React Router v6** — client-side routing
- **Lucide React** — icons
- **Google Fonts** — Syne (display) + DM Sans (body) + DM Mono
