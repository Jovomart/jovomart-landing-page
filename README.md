# JOVO Next.js + Tailwind

Nigeria's #1 Campus Marketplace - converted from vanilla HTML/CSS/JS to **Next.js 14 App Router** with **Tailwind CSS**.

---

## Project Structure

```
jovo-next/
├── app/
│   ├── globals.css          # Tailwind base + custom utilities
│   ├── layout.tsx           # Root layout, metadata, fonts, JSON-LD
│   └── page.tsx             # Home page (assembles all sections)
│
├── components/
│   ├── layout/
│   │   ├── AnnouncementBar.tsx
│   │   ├── Header.tsx        # Sticky header, cat-nav, cart badge
│   │   ├── MobileMenu.tsx    # Slide-in drawer
│   │   └── Footer.tsx
│   │
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── TrustSection.tsx
│   │   ├── FlashSalesSection.tsx
│   │   ├── CategoriesSection.tsx
│   │   ├── FeaturedProductsSection.tsx
│   │   ├── SellerBanner.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── AppSection.tsx
│   │   └── NewsletterSection.tsx
│   │
│   └── ui/
│       ├── PageLoader.tsx
│       ├── BackToTop.tsx
│       ├── ProductCard.tsx
│       └── toast.ts          # Imperative toast utility
│
├── data/
│   └── index.ts              # Products, flash items, testimonials, categories
│
├── hooks/
│   ├── useCountdown.ts       # Live countdown timer
│   └── useScrollAnimation.ts # IntersectionObserver scroll reveals + counters
│
├── types/
│   └── index.ts
│
├── public/
│   └── images/
│       └── Jovo_official_logo.png  ← copy your logo here
│
├── tailwind.config.ts
├── next.config.ts
├── postcss.config.js
├── tsconfig.json
└── package.json
```

---

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Add your logo
#    Copy your logo to: public/images/Jovo_official_logo.png

# 3. Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Key improvements over vanilla HTML

| Feature | Vanilla | Next.js |
|---|---|---|
| SEO metadata | Manual `<meta>` tags | `export const metadata` - auto-injected |
| JSON-LD schema | Inline in HTML | `layout.tsx` - clean & typed |
| Fonts | Google CDN `<link>` | `next/font/google` - zero layout shift |
| Images | Plain `<img>` | `next/image` - lazy, responsive, optimised |
| Code splitting | One big JS file | Automatic per-route + per-component |
| Cart state | Global `let` var | Custom event bus - works across components |
| TypeScript | ✗ | ✓ Full types for all data models |

---

## Adding your logo

The original site used `images/Jovo_official_logo.png`. Place your logo at:

```
public/images/Jovo_official_logo.png
```

The Header, Footer, and App section will pick it up automatically.  
Currently the header shows the text-based logo as fallback. To switch:

```tsx
// In Header.tsx, replace the text logo with:
import Image from 'next/image'
<Image src="/images/Jovo_official_logo.png" alt="JOVO" width={160} height={40} />
```

---

## Environment

- Next.js 14 (App Router)
- React 18
- Tailwind CSS 3
- TypeScript 5
- Font Awesome (React)
- `next/font` for Google Fonts
- `next/image` for optimised images
