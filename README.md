# Manoj Kumar — PHP / Laravel Developer Portfolio

A modern, responsive portfolio website built with React 19, TypeScript, Vite, and Tailwind CSS v4. Showcases 4+ years of full-stack development experience with Laravel, React, Next.js, and SEO expertise.

## 🚀 Features

- **Interactive UI** — Smooth animations with Framer Motion, custom cursor, scroll reveals
- **Performance Optimized** — Single-file production build via `vite-plugin-singlefile`
- **SEO Ready** — Meta tags, Open Graph, structured data, semantic HTML
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

## 📦 Project Structure

```
├── public/
│   └── images/          # Project screenshots & portrait
├── src/
│   ├── components/      # React components
│   │   ├── About.tsx
│   │   ├── BrandIcons.tsx
│   │   ├── Contact.tsx
│   │   ├── Cursor.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
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
├── index.html
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

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

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

## 🎨 Key Components

| Component | Purpose |
|-----------|---------|
| `Hero` | Landing section with animated intro |
| `About` | Profile summary with stats |
| `Skills` | Categorized skill groups with icons |
| `Experience` | Timeline of professional experience |
| `Projects` | Showcase of featured work |
| `SeoSection` | SEO capabilities & audit scores |
| `Education` | Education background |
| `Contact` | Contact form & social links |
| `Navbar` | Sticky navigation with smooth scroll |
| `Preloader` | Initial page load animation |
| `Cursor` | Custom animated cursor |
| `Marquee` | Infinite scrolling tech stack |

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

## 📄 License

MIT License — feel free to use as a template for your own portfolio.

## 👤 Author

**Manoj Kumar**  
PHP / Laravel Full-Stack Developer  
📧 manoj.kumar23official@gmail.com  
📱 +91 87009 56484  
🔗 [LinkedIn](https://linkedin.com/in/manoj-kumar-b0a602197) • [GitHub](https://github.com/Manoj-Kumar1996)