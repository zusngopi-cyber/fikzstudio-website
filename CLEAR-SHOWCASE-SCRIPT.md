# 🗑️ Clear Showcase Data - Browser Console Script

## If you need to manually clear showcase data from browser:

### Method 1: Use Admin Panel (Recommended)
1. Go to: `http://localhost:3000/admin/showcase`
2. Click red "Clear All" button
3. Confirm twice
4. Done!

---

### Method 2: Browser Console (Manual)

1. Open browser console (F12)
2. Paste this code:
```javascript
localStorage.removeItem('showcase');
location.reload();
```
3. Press Enter
4. Page refreshes with empty showcase

---

### Method 3: Clear ALL localStorage

⚠️ **WARNING**: This clears EVERYTHING (blog, projects, etc.)

```javascript
localStorage.clear();
location.reload();
```

---

## ✅ Verify It's Cleared

Check storage in console:
```javascript
console.log(localStorage.getItem('showcase'));
// Should show: null
```

---

## 🚀 Ready to Add New Items!

After clearing, go to:
`http://localhost:3000/admin/showcase`

And start adding fresh showcase items! 🎨
