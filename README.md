# Manoj Kumar — PHP / Laravel Developer Portfolio

A modern, responsive portfolio website built with React 19, TypeScript, Vite, and Tailwind CSS v4. Showcases 4+ years of full-stack development experience with Laravel, React, Next.js, and SEO expertise.

## 🚀 Features

- **Interactive UI** — Smooth animations with Framer Motion, custom cursor, scroll reveals
- **Performance Optimized** — Single-file production build via `vite-plugin-singlefile`
- **SEO Optimized** — Complete meta tags, Open Graph, Twitter Cards, JSON-LD schema, sitemap, robots.txt
- **Analytics Ready** — Google Analytics 4 integration (add `VITE_GA_ID` to `.env`)
- **Responsive Design** — Mobile-first, works across all device sizes
- **Accessible** — WCAG AA compliant, keyboard navigable, reduced motion support

## 🛠 Tech Stack

| Category | Technologies |
|----------|--------------|
| **Frontend** | React 19, TypeScript, Vite 7 |
| **Styling** | Tailwind CSS v4, CSS Variables |
| **Animation** | Framer Motion |
| **Icons** | Lucide React |
| **Utilities** | clsx, tailwind-merge |
| **Build** | Vite, vite-plugin-singlefile |
| **Analytics** | Google Analytics 4 (gtag.js) |

## 📦 Project Structure

```
├── public/
│   ├── images/          # Project screenshots & portrait
│   ├── robots.txt       # Crawler directives
│   └── sitemap.xml      # XML sitemap for search engines
├── src/
│   ├── components/      # React components
│   │   ├── About.tsx
│   │   ├── BrandIcons.tsx
│   │   ├── Contact.tsx
│   │   ├── Cursor.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── GoogleAnalytics.tsx
│   │   ├── Hero.tsx
│   │   ├── Marquee.tsx
│   │   ├── Navbar.tsx
│   │   ├── Preloader.tsx
│   │   ├── Projects.tsx
│   │   ├── Reveal.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── SeoSection.tsx
│   │   └── Skills.tsx
│   ├── data.ts          # Portfolio data (profile, skills, experience, projects, SEO)
│   ├── utils/
│   │   └── cn.ts        # Class name utility
│   ├── App.tsx          # Root component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles + Tailwind
├── index.html           # Complete SEO meta tags, OG, Twitter, JSON-LD
├── .env.example         # Environment variables template
├── package.json
├── tsconfig.json
├── vite.config.ts
└── .gitignore
```

## 🏃 Getting Started

### Prerequisites
- Node.js 18+
- npm / pnpm / yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd php-laravel-developer-resume

# Install dependencies
npm install

# Copy environment template
cp .env.example .env

# Add your Google Analytics 4 Measurement ID to .env
# VITE_GA_ID=G-XXXXXXXXXX

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🔍 SEO Implementation

### Technical SEO (Complete)
| Element | File | Status |
|---------|------|--------|
| Meta title/description/keywords | `index.html` | ✅ |
| Canonical URL | `index.html` | ✅ |
| Open Graph (profile type) | `index.html` | ✅ |
| Twitter Card (summary_large_image) | `index.html` | ✅ |
| JSON-LD Person schema | `index.html` | ✅ |
| robots.txt | `public/robots.txt` | ✅ |
| sitemap.xml | `public/sitemap.xml` | ✅ |
| Semantic HTML5 | Components | ✅ |
| Schema.org JobPosting | `Experience.tsx` | ✅ |
| Schema.org SoftwareApplication | `Projects.tsx` | ✅ |
| Preload critical assets | `index.html` | ✅ |

### Content SEO (In Progress)
- **OG Image**: Create `public/images/og-portrait.jpg` (1200×630px)
- **Blog/Articles**: Add articles section for long-tail keyword traffic
- **Image Optimization**: WebP/AVIF versions with `<picture>` elements

## 📝 Customization

All portfolio content lives in [`src/data.ts`](src/data.ts):

- **Profile** — Name, role, contact info, social links, tech stack
- **Stats** — Years of experience, projects delivered, technologies mastered
- **Skills** — Grouped by category with icons, descriptions, and technology lists
- **Experience** — Work history with roles, companies, achievements, tags
- **Projects** — Featured projects with images, features, tech stack
- **SEO** — Capabilities, audit scores, and check results
- **Education** — Degree, school, period
- **Languages** — Spoken languages and proficiency

### Adding Project Images

Place images in `public/images/` and reference them in `data.ts`:
```typescript
image: "/images/your-image.jpg"
```

### Google Analytics Setup
1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get Measurement ID (G-XXXXXXXXXX) from Admin → Data Streams → Web
3. Add to `.env`: `VITE_GA_ID=G-XXXXXXXXXX`
4. Deploy and verify in GA4 Real-time reports

## 🎨 Key Components

| Component | Purpose |
|-----------|---------|
| `Hero` | Landing section with animated intro, parallax portrait |
| `About` | Profile summary with stats |
| `Skills` | Categorized skill groups with icons |
| `Experience` | Timeline with Schema.org JobPosting markup |
| `Projects` | Showcase with Schema.org SoftwareApplication markup |
| `SeoSection` | SEO capabilities & audit scores visualization |
| `Education` | Education background |
| `Contact` | Contact form & social links |
| `Navbar` | Sticky navigation with smooth scroll |
| `Preloader` | Initial page load animation |
| `Cursor` | Custom animated cursor (desktop) |
| `Marquee` | Infinite scrolling tech stack |
| `GoogleAnalytics` | GA4 integration |

## 📱 Responsive Breakpoints

Tailwind CSS v4 default breakpoints:
- `sm` — 640px
- `md` — 768px
- `lg` — 1024px
- `xl` — 1280px
- `2xl` — 1536px

## 🔧 Configuration Files

- **`vite.config.ts`** — Vite + React + Tailwind + single-file plugin
- **`tsconfig.json`** — TypeScript strict mode configuration
- **`package.json`** — Scripts and dependencies
- **`.env.example`** — Environment variables template

## 🚀 Deploy Checklist

- [ ] Deploy to custom domain (Netlify/Vercel/GitHub Pages)
- [ ] Update `canonical` URL in `index.html` to your domain
- [ ] Update `og:image` URL in `index.html` to your domain
- [ ] Create `public/images/og-portrait.jpg` (1200×630px)
- [ ] Add `VITE_GA_ID` to production environment variables
- [ ] Submit to Google Search Console + Bing Webmaster Tools
- [ ] Request indexing for homepage
- [ ] Verify structured data with [Rich Results Test](https://search.google.com/test/rich-results)

## 📄 License

MIT License — feel free to use as a template for your own portfolio.

## 👤 Author

**Manoj Kumar**  
PHP / Laravel Full-Stack Developer  
📧 manoj.kumar23official@gmail.com  
📱 +91 87009 56484  
🔗 [LinkedIn](https://linkedin.com/in/manoj-kumar-b0a602197) • [GitHub](https://github.com/Manoj-Kumar1996)