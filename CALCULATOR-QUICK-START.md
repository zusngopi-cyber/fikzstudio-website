# ⚡ Cost Calculator - Quick Start

## 🎯 What You Got

A complete, professional cost calculator system that:
- Shows popup banner after 3 seconds
- 5-step wizard for clients
- Real-time cost calculation
- SST (6%) included
- PDF download
- WhatsApp integration
- Email option
- Full contact form

---

## 🚀 How to Use

### It's Already Live!
1. Go to your homepage
2. Wait 3 seconds
3. Banner appears bottom-right
4. Click "Start Calculator"
5. Done! ✅

---

## 💰 Pricing Structure

### Base Packages:
- **Landing Page**: RM 999
- **Business Website**: RM 2,999
- **E-Commerce**: RM 5,999
- **Custom Solution**: RM 8,999

### Additional Costs:
- **Extra Pages**: RM 200/page
- **SEO**: +RM 500
- **Blog**: +RM 800
- **Booking**: +RM 1,500
- **Payment Gateway**: +RM 2,000
- **Custom Design**: +RM 1,500
- **Premium Design**: +RM 3,000
- **Logo**: +RM 500
- **Content Writing**: +RM 800

### SST:
- Automatically adds 6%
- Shows in breakdown
- Included in total

---

## 📝 Client Journey

1. **Banner Popup** (3 seconds)
2. **Step 1**: Choose project type
3. **Step 2**: Select pages & features
4. **Step 3**: Choose design & extras
5. **Step 4**: Enter contact info
6. **Step 5**: See summary & submit

---

## 📤 Submission Options

### 1. WhatsApp (Recommended)
- Opens WhatsApp directly
- Pre-filled message
- All details included
- Goes to: +60127075391

### 2. Download PDF
- Professional quote
- Branded PDF
- All details included
- Client can save/print

### 3. Email
- Ready for backend
- Needs API setup
- (Currently shows alert)

---

## 🎨 Features

✅ Professional design
✅ Smooth animations
✅ Progress bar
✅ Form validation
✅ Mobile responsive
✅ Real-time calculation
✅ SST included
✅ Multiple submission options

---

## ⚙️ Customize Pricing

Edit: `components/CostCalculatorModal.tsx`

Find these sections:
```typescript
// Line ~50: Project costs
const projectCosts = {
  'landing': 999,  // Change here
  'business': 2999,
  // ...
}

// Line ~60: Feature costs
const featureCosts = {
  'seo': 500,  // Change here
  'blog': 800,
  // ...
}

// Line ~10: SST rate
const SST_RATE = 0.06  // Change here
```

---

## 🔧 Change WhatsApp Number

Edit: `components/CostCalculatorModal.tsx`

Find line ~120:
```typescript
const url = `https://wa.me/60127075391?text=...`
// Change 60127075391 to your number
```

---

## 📊 Example Quote

**Client Selects:**
- Business Website
- 10 pages
- SEO + Blog
- Custom Design
- Logo

**Result:**
```
Subtotal: RM 7,299.00
SST (6%): RM 437.94
Total: RM 7,736.94
```

---

## ✅ Test It Now!

1. Open: `http://localhost:3000`
2. Wait 3 seconds
3. Click banner
4. Complete calculator
5. Test WhatsApp/PDF

---

## 🎉 Done!

Your professional cost calculator is ready!

Clients can now:
- Calculate costs instantly
- Get transparent pricing
- Download PDF quotes
- Contact you directly

**Start getting qualified leads! 🚀**
