# Fikzstudio CMS Guide

## Overview
This is a custom-built CMS for managing your Fikzstudio website content. All changes you make in the admin panel will **automatically reflect on your website** in real-time!

## 🚀 How It Works

When you publish content in the CMS:
1. **Projects** → Automatically appear on `/work` page
2. **Blog Posts** → Automatically appear on `/blog` page  
3. **Pages** → Accessible via their custom slugs
4. **Code Snippets** → Injected into your website when active

**No deployment needed!** Changes are instant because the website reads directly from your browser's localStorage.

## Features

### 1. Dashboard
- View statistics and recent activity
- Quick access to all CMS features
- See total projects, blog posts, and media files

### 2. Projects Management
- Add, edit, and delete portfolio projects
- Upload project images
- Add custom fields (client, duration, budget, technologies, results)
- Organize by categories and tags
- **Published projects appear instantly on `/work` page**
- Each project gets its own detail page at `/work/[id]`

### 3. Blog Posts Management
- Write and publish blog posts
- Add featured images
- Organize with categories and tags
- Rich text content with HTML support
- Draft or publish status
- **Published posts appear instantly on `/blog` page**
- Each post gets its own page at `/blog/[slug]`
- Category filtering on blog page
- Related posts automatically shown

### 4. Pages Management
- Create and manage custom pages
- Choose from different templates (default, home, about, contact)
- Add custom fields for dynamic content
- Control page status (published/draft)
- Custom slugs for SEO-friendly URLs

### 5. Media Library
- Upload and manage images
- Copy image URLs for use in projects/posts
- View file sizes and upload dates
- Delete unused media files
- **Uploaded images can be used anywhere on your site**

### 6. Code Snippets
- Add custom CSS, JavaScript, or HTML
- Control where snippets are injected (head, body, footer)
- Enable/disable snippets without deleting them
- Perfect for analytics, custom styling, or third-party scripts

### 7. Settings
- Change admin password
- Export/import data for backup
- View security information
- Backup all your content as JSON

## Security Features
- 🔐 Encrypted password storage
- ⏱️ Rate limiting (5 attempts per 15 minutes)
- 🔒 Auto-lock after failed attempts
- 🛡️ Secure session management

## Getting Started

### First Login
1. Navigate to `/admin`
2. Default password: `fikzstudio2024`
3. **⚠️ Change your password immediately in Settings!**

### Adding Your First Project
1. Go to **Projects** in the sidebar
2. Click "➕ Add New Project"
3. Fill in the details:
   - Title (required)
   - Category
   - Description
   - Tags (comma-separated)
   - Upload an image
   - Add custom fields (client, duration, budget, etc.)
4. Click "💾 Save Project"
5. **Visit `/work` to see it live!**

### Writing Your First Blog Post
1. Go to **Blog Posts** in the sidebar
2. Click "✍️ Write New Post"
3. Fill in the details:
   - Title (auto-generates slug)
   - Excerpt (summary)
   - Content (HTML supported)
   - Upload featured image
   - Add categories and tags
   - Set status to "Published"
4. Click "🚀 Publish Post"
5. **Visit `/blog` to see it live!**

### Uploading Media
1. Go to **Media** in the sidebar
2. Click "📤 Upload Files"
3. Select one or multiple images
4. Hover over an image and click "📋 Copy" to get the URL
5. Use the copied URL in your projects or blog posts

## Managing Content

### Data Storage
- All content is stored locally in your browser's localStorage
- This means changes are instant - no server needed!
- Data persists even when you close the browser
- **Important:** Data is browser-specific (Chrome, Firefox, etc.)

### Backup & Restore
1. Go to **Settings**
2. Click "📥 Export All Data" to download a backup
3. Save the JSON file somewhere safe
4. To restore: Click "Import Data" and select your backup file

### Best Practices
- ✅ Backup your data weekly
- ✅ Use descriptive titles and slugs for SEO
- ✅ Add alt text to images (in the title field)
- ✅ Categorize blog posts for better organization
- ✅ Test code snippets before activating
- ✅ Keep your password secure

## Content Publishing Workflow

### For Projects:
1. Create project in admin
2. Add all details and images
3. Save → **Instantly visible on `/work`**
4. Users can click to see full details at `/work/[id]`

### For Blog Posts:
1. Write post in admin
2. Add featured image, categories, tags
3. Set status to "Published"
4. Save → **Instantly visible on `/blog`**
5. Users can read full post at `/blog/[slug]`
6. Related posts automatically shown

### For Code Snippets:
1. Create snippet in admin
2. Choose type (CSS/JS/HTML) and location
3. Enable the snippet
4. Save → **Instantly injected into your website**

## Troubleshooting

### Content not showing on website?
- Make sure status is set to "Published" (for blog posts)
- Refresh the page (Ctrl+F5 or Cmd+Shift+R)
- Check browser console for errors

### Lost your data?
- Data is stored in browser localStorage
- If you cleared browser data, it's gone unless you have a backup
- Always keep regular backups!

### Can't login?
- Wait 15 minutes if you're locked out
- Clear browser cache and try again
- If you forgot password, you'll need to reset localStorage

### Images not loading?
- Images are stored as base64 in localStorage
- Very large images may cause issues
- Try compressing images before upload
- Recommended: Keep images under 2MB

## Tips & Tricks

### SEO Optimization
- Use descriptive titles with keywords
- Write compelling excerpts for blog posts
- Add relevant categories and tags
- Use clean, readable slugs (auto-generated from titles)

### Content Organization
- Use categories for broad topics (Tech, Design, Business)
- Use tags for specific topics (React, SEO, WordPress)
- Keep category names consistent
- Limit to 2-3 categories per post

### Image Management
- Upload images to Media Library first
- Copy URLs and use in projects/posts
- Delete unused images to save space
- Use descriptive file names

### Performance
- localStorage has ~5-10MB limit per domain
- Compress images before upload
- Don't store too many large images
- Export and clean old content periodically

## Need Help?

If you encounter issues:
1. Check the browser console for errors (F12)
2. Try exporting your data and refreshing
3. Clear browser cache and try again
4. Make sure you're using a modern browser (Chrome, Firefox, Safari, Edge)

---

**Remember:** This CMS is designed for simplicity and instant updates. All your content is stored locally and appears on your website immediately when published. No complex deployment process needed!
