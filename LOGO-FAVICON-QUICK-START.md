# Logo & Favicon - Quick Start 🚀

## 5-Minute Setup

### Step 1: Prepare Your Files (2 minutes)

**You need:**
1. Your logo image (PNG or SVG)
2. Favicon files (use https://realfavicongenerator.net/)

### Step 2: Add Files (1 minute)

Place these in the `public/` folder:
```
public/
├── logo.png  ← Your logo
├── favicon.ico
├── favicon-16x16.png
├── favicon-32x32.png
├── apple-touch-icon.png
├── android-chrome-192x192.png
└── android-chrome-512x512.png
```

### Step 3: Update Code (2 minutes)

**A) Update `app/layout.tsx`:**

Find this:
```typescript
export const metadata: Metadata = {
  title: 'Fikz Studio - Digital Marketing Agency',
  description: 'Professional web design, SEO, and digital marketing services',
}
```

Replace with:
```typescript
export const metadata: Metadata = {
  title: 'Fikz Studio - Digital Marketing Agency',
  description: 'Professional web design, SEO, and digital marketing services',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}
```

**B) Update `components/NavigationModern.tsx`:**

Find this (around line 45):
```tsx
<div className="bg-primary-500 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg">
  F
</div>
```

Replace with:
```tsx
<img 
  src="/logo.png" 
  alt="Fikz Studio Logo" 
  className="h-10 w-auto"
/>
```

### Step 4: Test

```bash
npm run build
npm run dev
```

Visit http://localhost:3000 and check:
- ✅ Logo in navigation
- ✅ Favicon in browser tab

---

## That's It! 🎉

Your logo and favicon are now live!

---

## Quick Fixes

### Logo too big?
```tsx
className="h-8 w-auto"  // Smaller
```

### Logo too small?
```tsx
className="h-12 w-auto"  // Bigger
```

### Favicon not showing?
1. Clear browser cache (Ctrl + Shift + Delete)
2. Hard refresh (Ctrl + Shift + R)

---

## Tools You Need

### Generate Favicons:
🔗 https://realfavicongenerator.net/

### Optimize Images:
🔗 https://tinypng.com/

### Convert to SVG:
🔗 https://convertio.co/png-svg/

---

**Time to Complete:** 5 minutes
**Difficulty:** Easy ⭐
**Files to Edit:** 2 files
