# Fikzstudio Agency Website

Modern, high-performance agency website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- ⚡ Lightning-fast performance (Lighthouse 90+)
- 🎨 Modern, professional design
- 📱 Fully responsive (mobile-first)
- 🔍 SEO optimized with sitemap & metadata
- ♿ Accessible (WCAG compliant)
- 🚀 Deployed on Vercel CDN

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel
- **Analytics:** Google Analytics 4 (ready)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy

Or use Vercel CLI:

```bash
npm i -g vercel
vercel
```

### Environment Variables

Create `.env.local` for local development:

```
NEXT_PUBLIC_WP_API_URL=your-wordpress-url
NEXT_PUBLIC_GA_ID=your-ga-id
```

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── page.tsx         # Homepage
│   ├── services/        # Services page
│   ├── work/            # Portfolio page
│   ├── blog/            # Blog page
│   ├── about/           # About page
│   ├── contact/         # Contact page
│   └── layout.tsx       # Root layout
├── components/          # Reusable components
├── public/              # Static assets
└── tailwind.config.js   # Tailwind configuration
```

## Contact

- **Email:** fikzstudiowork@gmail.com
- **Phone:** 012-707 5391
- **WhatsApp:** +60 12-707 5391

## License

© 2024 Fikzstudio. All rights reserved.
