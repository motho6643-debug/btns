# 🚀 DEPLOY TO CYBERPANEL - COMPLETE GUIDE

## What is CyberPanel?

CyberPanel is a free, open-source hosting control panel. It's perfect for:
- ✅ Free hosting (on Linux servers)
- ✅ Node.js applications
- ✅ Custom domains
- ✅ SSL certificates
- ✅ Full control over server

---

## 📋 Prerequisites

Before deploying to CyberPanel, you need:

1. **A Linux Server** with CyberPanel installed
   - Digital Ocean ($5-6/month)
   - Linode ($5/month)
   - Vultr ($2.50/month)
   - Or any Linux VPS
   
2. **CyberPanel Installed** on your server
   - Installation: https://cyberpanel.net/installation-guide/

3. **Your Git Repository** (GitHub - already done ✅)

---

## 🎯 STEP-BY-STEP DEPLOYMENT

### Step 1: Build Your Project Locally

```bash
npm install
npm run build
```

**Result:** `dist/` folder created with production files

### Step 2: Set Up Your Server (One-time only)

**Option A: Using Existing CyberPanel Server**
- Go to your CyberPanel dashboard
- Login with your credentials

**Option B: Create New Server (if you don't have one)**
```bash
# Example on DigitalOcean
1. Create Ubuntu 22.04 LTS droplet (4GB RAM recommended)
2. SSH into your server
3. Download & install CyberPanel:
   
   curl -sS https://n.cyberpanel.net/install.sh | bash
   
4. After installation, access: https://YOUR_SERVER_IP:8090
```

### Step 3: Create Website in CyberPanel

**In CyberPanel Dashboard:**

1. **Navigate to:** Websites → Add Website
2. **Enter:**
   - Domain: `your-domain.com` (or use free cyberpanel.io subdomain)
   - Email: Your email
   - Node.js App: Select "Yes" (if using Node.js)
   - Package: Choose available storage
3. **Click:** Create Website

### Step 4: Deploy Your Application

**Option A: Using Git (Recommended - Auto-updates)**

```bash
# SSH into your server
ssh root@YOUR_SERVER_IP

# Navigate to application directory
cd /home/YOUR_USERNAME/public_html/YOUR_DOMAIN

# Clone your repository
git clone https://github.com/motho6643-debug/btns.git .

# Install dependencies
npm install

# Build project
npm run build

# Install PM2 (Process Manager)
npm install -g pm2

# Start application with PM2
pm2 start "npm run preview" --name btns

# Save PM2 startup
pm2 startup
pm2 save
```

**Option B: Manual Upload**

1. Build locally: `npm run build`
2. Upload `dist/` folder via FTP/SFTP
3. Configure Node.js in CyberPanel

### Step 5: Configure Node.js in CyberPanel

**In CyberPanel Dashboard:**

1. **Websites** → Select your domain
2. **Node.js Configuration**
3. **Settings:**
   - App Type: Node.js
   - Node Port: 3000 (or any available port)
   - App File: `index.js` or use PM2
   - SSL: Enable (free Let's Encrypt)
4. **Save**

### Step 6: Create Express Server (if needed)

If your app needs a Node.js server, create `index.js`:

```javascript
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from dist
app.use(express.static(path.join(__dirname, 'dist')));

// SPA fallback - send index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

### Step 7: Start Your Application

```bash
# Via CyberPanel UI or command line:
pm2 start index.js --name btns
pm2 save

# Or use npm start if configured in package.json:
pm2 start "npm start" --name btns
```

### Step 8: Configure Reverse Proxy (IMPORTANT!)

**In CyberPanel:**

1. **Websites** → Your Domain → **Reverse Proxy**
2. **Add Reverse Proxy Rule:**
   ```
   Location: /
   Proxy Address: http://127.0.0.1:3000
   ```
3. **Save & Restart**

### Step 9: Enable HTTPS

**In CyberPanel:**

1. **SSL** → **Install AutoSSL**
2. Select your domain
3. Click "Issue SSL"
4. Wait for certificate (5-10 minutes)

### Step 10: Test Your Site

1. Visit: `https://your-domain.com`
2. Verify:
   - [ ] Site loads completely
   - [ ] All pages accessible
   - [ ] Images display
   - [ ] HTTPS working
   - [ ] No console errors (F12)

---

## 🔄 Keeping Site Updated

### Auto-Deploy from GitHub

**Set up webhook in GitHub:**

1. **GitHub Repository Settings** → Webhooks
2. **Add Webhook:**
   - Payload URL: `https://your-cyberpanel-domain/deploy`
   - Content Type: application/json
   - Trigger: On push

**On Server, create deploy script:**

```bash
#!/bin/bash
cd /home/username/public_html/your-domain
git pull origin main
npm install
npm run build
pm2 restart btns
```

---

## 📊 CyberPanel Hosting Costs

| Provider | Server Cost | CyberPanel |
|----------|------------|-----------|
| DigitalOcean | $5-12/month | FREE |
| Linode | $5/month | FREE |
| Vultr | $2.50/month | FREE |
| AWS EC2 | $5-20/month | FREE |
| **Total** | **~$5-20/month** | **$0** |

---

## 🐛 Troubleshooting

### Site Shows 502 Bad Gateway
- Check Node.js is running: `pm2 status`
- Verify reverse proxy settings
- Check port configuration

### Site Won't Build
```bash
# SSH into server
cd /your/app/directory
npm install
npm run build
```

### Port Already in Use
```bash
# Find process using port 3000
lsof -i :3000

# Kill process
kill -9 PID
```

### PM2 Not Working
```bash
# Check PM2 status
pm2 status

# View logs
pm2 logs btns

# Restart
pm2 restart btns
```

### SSL Certificate Won't Issue
1. Ensure domain points to server IP
2. DNS records propagated (24-48 hours)
3. Try again from CyberPanel SSL panel

---

## 📞 Useful Commands

```bash
# Process Management
pm2 start app.js
pm2 stop btns
pm2 restart btns
pm2 delete btns
pm2 logs btns
pm2 status

# Git Operations
git clone https://github.com/motho6643-debug/btns.git
git pull origin main
git status

# Node.js
npm install
npm run build
npm run dev

# System
systemctl status nginx
systemctl restart nginx
curl http://localhost:3000
```

---

## 🎯 Recommended Setup

**Best for beginners:**
1. Use Cloudflare Pages (this doc)
2. No server management needed
3. Completely free
4. Global CDN

**For more control:**
1. Set up CyberPanel server
2. Deploy via Git
3. Full customization
4. Small monthly cost ($5-20)

---

## ✅ Deployment Checklist

- [ ] Project builds locally without errors
- [ ] Git repository created and pushed
- [ ] CyberPanel dashboard accessed
- [ ] Website created in CyberPanel
- [ ] Code deployed to server
- [ ] Node.js configured
- [ ] Reverse proxy set up
- [ ] SSL certificate installed
- [ ] Site loads on browser
- [ ] All pages accessible
- [ ] Custom domain working (optional)
- [ ] Auto-deploy webhook configured (optional)

---

## 📚 Additional Resources

- **CyberPanel Docs:** https://docs.cyberpanel.net/
- **Node.js Hosting:** https://nodejs.org/en/docs/guides/nodejs-web-app/
- **PM2 Documentation:** https://pm2.keymetrics.io/
- **Let's Encrypt:** https://letsencrypt.org/

---

## 🚀 You're Ready!

Choose your deployment option:
- **Option 1 (Easiest):** Cloudflare Pages - [See DEPLOY_NOW.md](./DEPLOY_NOW.md)
- **Option 2 (More Control):** CyberPanel - Follow this guide

Both are great options! Start with whichever fits your needs. 🎉
