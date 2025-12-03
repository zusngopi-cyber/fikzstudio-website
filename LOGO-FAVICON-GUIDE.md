# How to Add Your Logo and Favicon 🎨

## Quick Overview
This guide will help you add your custom logo and favicon to your Fikz Studio website.

---

## Part 1: Adding Your Favicon (Browser Tab Icon)

### What is a Favicon?
The small icon that appears in the browser tab, bookmarks, and mobile home screen.

### Step 1: Prepare Your Favicon Files

You'll need these files (I'll show you how to create them):

1. **favicon.ico** (16x16, 32x32, 48x48 px) - For older browsers
2. **favicon-16x16.png** - Small size
3. **favicon-32x32.png** - Medium size
4. **apple-touch-icon.png** (180x180 px) - For iOS devices
5. **android-chrome-192x192.png** - For Android
6. **android-chrome-512x512.png** - For Android (high-res)

### Step 2: Create Favicon Files

**Option A: Use Online Tool (Easiest)**
1. Go to https://realfavicongenerator.net/
2. Upload your logo (square image, at least 512x512 px)
3. Customize settings if needed
4. Click "Generate your Favicons and HTML code"
5. Download the favicon package

**Option B: Use Figma/Photoshop**
1. Create a square canvas (512x512 px)
2. Add your logo
3. Export as PNG in different sizes:
   - 16x16 px → favicon-16x16.png
   - 32x32 px → favicon-32x32.png
   - 180x180 px → apple-touch-icon.png
   - 192x192 px → android-chrome-192x192.png
   - 512x512 px → android-chrome-512x512.png

### Step 3: Add Files to Your Project

1. **Place all favicon files in the `public` folder:**
   ```
   public/
   ├── favicon.ico
   ├── favicon-16x16.png
   ├── favicon-32x32.png
   ├── apple-touch-icon.png
   ├── android-chrome-192x192.png
   └── android-chrome-512x512.png
   ```

2. **Update `app/layout.tsx`:**

Add this to the `<head>` section by updating the metadata:

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

### Step 4: Create site.webmanifest (Optional but Recommended)

Create `public/site.webmanifest`:

```json
{
  "name": "Fikz Studio",
  "short_name": "Fikz Studio",
  "icons": [
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#6366f1",
  "background_color": "#ffffff",
  "display": "standalone"
}
```

---

## Part 2: Adding Your Logo to Navigation

### Step 1: Prepare Your Logo

**Logo Requirements:**
- **Format:** PNG with transparent background (recommended) or SVG
- **Size:** At least 200x200 px (will be scaled down)
- **Aspect Ratio:** Square or horizontal (max 3:1 ratio)

### Step 2: Add Logo to Project

1. **Place your logo in the `public` folder:**
   ```
   public/
   └── logo.png  (or logo.svg)
   ```

### Step 3: Update Navigation Component

**Option A: Replace the "F" icon with your logo image**

Open `components/NavigationModern.tsx` and find this section (around line 45):

**Current Code:**
```tsx
<Link href="/" className="flex items-center gap-3 group">
  <div className="bg-primary-500 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg">
    F
  </div>
  <div>
    <div className="text-xl font-bold text-secondary-900">
      Fikz Studio
    </div>
    <div className="text-xs text-gray-600 -mt-0.5">Digital Agency</div>
  </div>
</Link>
```

**Replace with:**
```tsx
<Link href="/" className="flex items-center gap-3 group">
  <img 
    src="/logo.png" 
    alt="Fikz Studio Logo" 
    className="h-10 w-auto"
  />
  <div>
    <div className="text-xl font-bold text-secondary-900">
      Fikz Studio
    </div>
    <div className="text-xs text-gray-600 -mt-0.5">Digital Agency</div>
  </div>
</Link>
```

**Option B: Logo only (no text)**

```tsx
<Link href="/" className="flex items-center group">
  <img 
    src="/logo.png" 
    alt="Fikz Studio" 
    className="h-12 w-auto hover:scale-105 transition-transform"
  />
</Link>
```

**Option C: Logo with text on the side**

```tsx
<Link href="/" className="flex items-center gap-2 group">
  <img 
    src="/logo.png" 
    alt="Fikz Studio Logo" 
    className="h-10 w-auto"
  />
  <span className="text-2xl font-bold text-secondary-900">
    Fikz Studio
  </span>
</Link>
```

---

## Part 3: Adding Logo to Footer

Open `components/Footer.tsx` and update the logo section similarly.

**Find this section:**
```tsx
<div className="text-2xl font-bold text-white mb-4">Fikz Studio</div>
```

**Replace with:**
```tsx
<img 
  src="/logo.png" 
  alt="Fikz Studio" 
  className="h-12 w-auto mb-4"
/>
```

---

## Quick Setup Checklist

### ✅ Favicon Setup:
- [ ] Create favicon files (use realfavicongenerator.net)
- [ ] Place files in `public/` folder
- [ ] Update `app/layout.tsx` metadata
- [ ] Create `site.webmanifest` (optional)
- [ ] Test in browser (clear cache if needed)

### ✅ Logo Setup:
- [ ] Prepare logo file (PNG or SVG)
- [ ] Place `logo.png` in `public/` folder
- [ ] Update `components/NavigationModern.tsx`
- [ ] Update `components/Footer.tsx` (optional)
- [ ] Test on all pages

---

## File Structure After Setup

```
your-project/
├── public/
│   ├── favicon.ico
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── apple-touch-icon.png
│   ├── android-chrome-192x192.png
│   ├── android-chrome-512x512.png
│   ├── site.webmanifest
│   ├── logo.png  ← Your logo
│   └── robots.txt
├── app/
│   └── layout.tsx  ← Updated with favicon metadata
└── components/
    ├── NavigationModern.tsx  ← Updated with logo
    └── Footer.tsx  ← Updated with logo (optional)
```

---

## Testing Your Changes

### Test Favicon:
1. Clear browser cache (Ctrl + Shift + Delete)
2. Visit your website
3. Check browser tab for your favicon
4. Check bookmarks
5. Test on mobile (add to home screen)

### Test Logo:
1. Visit homepage
2. Check navigation bar
3. Scroll down (check sticky nav)
4. Test on mobile (open menu)
5. Check footer

---

## Troubleshooting

### Favicon Not Showing?
1. **Clear browser cache** (Ctrl + Shift + Delete)
2. **Hard refresh** (Ctrl + Shift + R)
3. Check file names match exactly
4. Check files are in `public/` folder
5. Restart development server

### Logo Not Showing?
1. Check file path: `/logo.png` (must start with `/`)
2. Check file is in `public/` folder
3. Check file name matches exactly (case-sensitive)
4. Try different image format (PNG vs SVG)
5. Check image isn't corrupted

### Logo Too Big/Small?
Adjust the `className` height:
```tsx
className="h-8 w-auto"   // Small (32px)
className="h-10 w-auto"  // Medium (40px)
className="h-12 w-auto"  // Large (48px)
className="h-16 w-auto"  // Extra Large (64px)
```

---

## Advanced: Using Next.js Image Component

For better performance, use Next.js Image component:

```tsx
import Image from 'next/image'

<Link href="/" className="flex items-center gap-3 group">
  <Image 
    src="/logo.png" 
    alt="Fikz Studio Logo" 
    width={40}
    height={40}
    className="w-auto h-10"
  />
  <div>
    <div className="text-xl font-bold text-secondary-900">
      Fikz Studio
    </div>
    <div className="text-xs text-gray-600 -mt-0.5">Digital Agency</div>
  </div>
</Link>
```

---

## Quick Commands

### After adding files, rebuild:
\`\`\`bash
npm run build
\`\`\`

### Start development server:
\`\`\`bash
npm run dev
\`\`\`

---

## Need Help?

### Common Issues:
1. **"Image not found"** → Check file is in `public/` folder
2. **"Favicon not updating"** → Clear browser cache
3. **"Logo too blurry"** → Use higher resolution image
4. **"Logo wrong size"** → Adjust `className="h-X"`

### File Naming:
- ✅ `logo.png` or `logo.svg`
- ✅ `favicon.ico`
- ❌ `Logo.png` (wrong case)
- ❌ `my logo.png` (spaces not recommended)

---

**Last Updated:** ${new Date().toLocaleDateString()}
**Status:** Ready to implement!
