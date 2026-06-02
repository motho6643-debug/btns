# Quick Start: Deploy to Cloudflare Pages

## ⚡ 3-Minute Deployment Guide

### Step 1: Prepare Your Project ✅
Your project is already set up! Everything needed is ready:
- ✅ `package.json` with build scripts
- ✅ `vite.config.js` with optimizations
- ✅ `wrangler.toml` configuration
- ✅ `_redirects` for SPA routing
- ✅ `.gitignore` properly configured

### Step 2: Build & Test Locally
```bash
npm install
npm run build
npm run preview
```

**Expected:** Site loads at http://localhost:4173 with no errors ✅

### Step 3: Deploy to Cloudflare Pages

1. **Go to:** https://dash.cloudflare.com
2. **Sign up FREE** (no credit card needed)
3. **Click:** Pages → Create project → Connect to Git
4. **Select:** motho6643-debug/btns repository
5. **Build settings:**
   - Build command: `npm run build`
   - Output directory: `dist`
6. **Click:** Save and Deploy

### Step 4: Your Site is LIVE! 🎉

Once deployment completes, your site is at:
```
https://btns-[random-id].pages.dev
```

✅ Automatic HTTPS
✅ Global CDN
✅ Zero cost
✅ Auto-deploy on git push

---

## ✅ Verify Your Deployment

1. Visit your `.pages.dev` URL
2. Check:
   - [ ] Page loads completely
   - [ ] All images display
   - [ ] Navigation works
   - [ ] No console errors (F12)

## 🎯 Optional: Add Custom Domain

1. Dashboard → Your Project → Settings
2. Custom domains → Add domain
3. Follow DNS setup

## 🔄 Future Updates (Automatic!)

After first deployment, just push to GitHub:
```bash
git add .
git commit -m "your changes"
git push origin main
```

Cloudflare automatically rebuilds and deploys! No extra steps needed.

---

**That's it! Your site is live! 🚀**