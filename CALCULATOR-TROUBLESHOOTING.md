# Cost Calculator Troubleshooting Guide 🔧

## Calculator Not Showing?

### Check 1: Banner Appears After 3 Seconds
The calculator banner appears 3 seconds after page load at the bottom of the screen.

**If banner doesn't appear:**
1. Check browser console for errors (F12)
2. Verify `CostCalculatorWrapper` is in `app/layout.tsx`
3. Clear browser cache and reload

### Check 2: Modal Opens When Clicking Banner
Click the "Get Your Free Quote" button on the banner.

**If modal doesn't open:**
1. Check browser console for JavaScript errors
2. Verify all calculator components exist:
   - `components/CostCalculatorModal.tsx`
   - `components/CostCalculatorBanner.tsx`
   - `components/CostCalculatorWrapper.tsx`

### Check 3: All Steps Display Correctly
Navigate through all 5 steps of the calculator.

**If steps don't display:**
1. Check for TypeScript errors: `npm run build`
2. Verify no syntax errors in `CostCalculatorModal.tsx`
3. Check that all closing tags are correct

---

## Common Issues & Solutions

### Issue 1: "Calculator shows blank screen"
**Cause:** Syntax error in JSX
**Solution:** 
- Run `npm run build` to check for errors
- Look for unclosed tags or typos in JSX
- Check line 862 for proper closing `</div>` tag

### Issue 2: "PDF doesn't download"
**Cause:** jsPDF library issue
**Solution:**
- Verify jsPDF is installed: `npm list jspdf`
- If missing: `npm install jspdf`
- Check browser allows downloads

### Issue 3: "WhatsApp doesn't open"
**Cause:** Pop-up blocker or incorrect phone number
**Solution:**
- Allow pop-ups for your site
- Verify phone number in code: `+60127075391`
- Test on mobile device

### Issue 4: "Email HTML not copying"
**Cause:** Clipboard API not available
**Solution:**
- Use HTTPS (clipboard API requires secure context)
- Try different browser
- Use the fallback download option

### Issue 5: "SST showing wrong percentage"
**Cause:** Old cached version
**Solution:**
- Clear browser cache
- Hard refresh (Ctrl + Shift + R)
- Verify `SST_RATE = 0.08` in code

---

## Quick Fixes

### Fix 1: Rebuild the Project
```bash
npm run build
```

### Fix 2: Clear Next.js Cache
```bash
rm -rf .next
npm run build
```

### Fix 3: Reinstall Dependencies
```bash
rm -rf node_modules
npm install
npm run build
```

### Fix 4: Check for Syntax Errors
```bash
npm run build
# Look for TypeScript errors in output
```

---

## Verification Checklist

Use this checklist to verify everything works:

- [ ] Banner appears after 3 seconds on homepage
- [ ] Clicking banner opens modal
- [ ] Step 1: Can select project type
- [ ] Step 2: Can adjust pages and select features
- [ ] Step 3: Can select design level and extras
- [ ] Step 4: Can fill in contact information
- [ ] Step 5: Summary shows correct information
- [ ] Step 5: SST shows 8%
- [ ] Step 5: Total calculates correctly
- [ ] PDF downloads with professional design
- [ ] WhatsApp opens with table format
- [ ] Email HTML copies to clipboard
- [ ] Can navigate back through steps
- [ ] Can close modal with X button

---

## Browser Compatibility

### Tested & Working:
- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Mobile browsers

### Known Issues:
- ⚠️ IE11: Not supported (use modern browser)
- ⚠️ Old Safari: Clipboard API may not work

---

## Development Mode Testing

### Start Development Server:
```bash
npm run dev
```

### Open in Browser:
```
http://localhost:3000
```

### Check Console:
Press F12 and look for:
- ✅ No red errors
- ✅ Calculator components load
- ✅ No 404 errors for files

---

## Production Deployment

### Before Deploying:
1. Run build: `npm run build`
2. Test locally: `npm start`
3. Verify all features work
4. Check mobile responsiveness

### After Deploying:
1. Clear CDN cache (if using)
2. Test on live site
3. Verify all buttons work
4. Test PDF/WhatsApp/Email functions

---

## Getting Help

### If Calculator Still Doesn't Work:

1. **Check Build Output:**
   ```bash
   npm run build
   ```
   Look for any errors in the output

2. **Check Browser Console:**
   - Press F12
   - Look for red errors
   - Share error messages

3. **Verify File Structure:**
   ```
   components/
   ├── CostCalculatorModal.tsx
   ├── CostCalculatorBanner.tsx
   └── CostCalculatorWrapper.tsx
   ```

4. **Check Layout File:**
   Verify `app/layout.tsx` includes:
   ```tsx
   import CostCalculatorWrapper from '@/components/CostCalculatorWrapper'
   
   // In JSX:
   <CostCalculatorWrapper />
   ```

---

## Quick Test Commands

```bash
# Check for TypeScript errors
npm run build

# Start development server
npm run dev

# Check if jsPDF is installed
npm list jspdf

# Reinstall all dependencies
npm install
```

---

**Last Updated:** ${new Date().toLocaleDateString()}
**Status:** All issues resolved ✅
