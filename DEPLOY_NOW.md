# Quick Start: Deploy to Cloudflare Pages

## ⚡ 3-Minute Deployment Guide

### Step 1: Prepare Your Project ✅
Your project is already set up! Everything needed is ready:
- ✅ `package.json` with build scripts
- ✅ `vite.config.js` with optimizations
- ✅ `wrangler.toml` configuration
- ✅ `_redirects` for SPA routing
- ✅ `.gitignore` properly configured

### Step 2: Build Locally (Verify Everything Works)
```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview the production build
npm run preview
```

**Expected Output:**
```
✓ 1234 modules transformed
✓ built in 12.34s
➜  Local: http://localhost:4173
```

✅ If you see the site at `localhost:4173`, you're good to go!

### Step 3: Deploy to Cloudflare Pages (SUPER EASY!)

#### Option A: GitHub-Connected Deployment (EASIEST - Recommended)

1. **Go to Cloudflare Dashboard:**
   - Visit: https://dash.cloudflare.com
   - Sign up or login (no credit card needed!)

2. **Create Pages Project:**
   - Click **Pages** (left sidebar)
   - Click **Create a project** → **Connect to Git**
   - Click **Connect GitHub** → Authorize Cloudflare
   - Select **motho6643-debug** organization
   - Select **btns** repository
   - Click **Begin setup**

3. **Configure Build Settings:**
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Environment variables:** (leave empty for now)
   - Click **Save and Deploy**

4. **Wait for Deployment:**
   - Cloudflare will automatically build and deploy
   - Takes 2-5 minutes
   - You'll get a free `.pages.dev` domain!

#### Option B: Manual Deployment (If GitHub not available)

```bash
# Install Wrangler CLI
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy directly
wrangler pages deploy dist/
```

### Step 4: Your Site is LIVE! 🎉

Your site is now deployed at:
```
https://btns-XXXXXX.pages.dev
```

✅ Automatic HTTPS
✅ Global CDN
✅ Zero setup costs
✅ Automatic deployments on git push

---

## 🔍 Verify Deployment

1. Visit your `.pages.dev` URL
2. Check all pages load:
   - [ ] Homepage
   - [ ] Navigation links
   - [ ] Images display
   - [ ] Forms work (if any)
3. Open DevTools (F12) → Console
   - [ ] No errors
   - [ ] No warnings

## 🎯 Optional: Add Custom Domain

1. Go to Cloudflare Dashboard → Your Project → **Settings**
2. Click **Custom domains**
3. Enter your domain (e.g., `btns.com`)
4. Follow DNS configuration steps

## ❓ Troubleshooting

| Issue | Solution |
|-------|----------|
| **Build fails** | Run `npm run build` locally first to see errors |
| **Page shows 404** | Check `_redirects` file exists in root |
| **Assets not loading** | Clear browser cache (Ctrl+Shift+Del) |
| **Site looks broken** | Check Network tab in DevTools (F12) |

## 📊 Free Tier Includes

✅ Unlimited bandwidth
✅ Unlimited sites  
✅ Unlimited builds (500/month)
✅ Free SSL/TLS
✅ Global CDN
✅ Automatic git deployments
✅ 30 analytics requests per minute

---

## 🚀 Next Deployments

After this initial setup, future deployments are **automatic**!

Just push to GitHub:
```bash
git add .
git commit -m "update: add new features"
git push origin main
```

Cloudflare automatically:
1. Detects the push
2. Builds your project
3. Deploys to production
4. No additional steps needed!

---

**That's it! Your site is now live on Cloudflare Pages! 🎊**
