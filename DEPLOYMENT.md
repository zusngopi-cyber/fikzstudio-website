# Deployment Guide

## Quick Deploy to Vercel (5 minutes)

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/fikzstudio-website.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js
   - Click "Deploy"
   - Done! Your site is live in ~2 minutes

3. **Add Custom Domain:**
   - Go to Project Settings → Domains
   - Add `fikzstudio.com`
   - Update DNS records as shown
   - SSL certificate auto-generated

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Alternative: Deploy to Netlify

1. **Push to GitHub** (same as above)

2. **Deploy on Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import from Git"
   - Select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy"

## Alternative: Deploy to Cloudflare Pages

1. **Push to GitHub** (same as above)

2. **Deploy on Cloudflare:**
   - Go to Cloudflare Pages
   - Click "Create a project"
   - Connect GitHub repository
   - Build settings:
     - Framework: Next.js
     - Build command: `npm run build`
     - Output directory: `.next`
   - Click "Save and Deploy"

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify contact form works
- [ ] Test WhatsApp button
- [ ] Check mobile responsiveness
- [ ] Run Lighthouse audit (aim for 90+)
- [ ] Verify sitemap.xml is accessible
- [ ] Test 404 page
- [ ] Add Google Analytics (optional)
- [ ] Submit sitemap to Google Search Console

## Performance Optimization

Your site is already optimized, but you can:

1. **Enable Analytics:**
   - Add Google Analytics ID to environment variables
   - Update `app/layout.tsx` with GA script

2. **Add Image Optimization:**
   - Use Next.js Image component (already implemented)
   - Images auto-optimized by Vercel

3. **Monitor Performance:**
   - Use Vercel Analytics (free)
   - Monitor Core Web Vitals
   - Set up error tracking (Sentry)

## Troubleshooting

### Build Fails
- Check Node.js version (18+)
- Run `npm install` locally
- Test `npm run build` locally

### CSS Not Loading
- Clear browser cache
- Check Tailwind config
- Verify `globals.css` is imported

### 404 Errors
- Check file paths are correct
- Verify all pages have proper exports
- Check Next.js routing structure

## Need Help?

Contact: fikzstudiowork@gmail.com
