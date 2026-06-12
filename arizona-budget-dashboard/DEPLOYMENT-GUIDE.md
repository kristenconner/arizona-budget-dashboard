# 🚀 Deployment Guide - Arizona Budget Dashboard

## Quick Deploy Options

### Option 1: GitHub Pages (Recommended - FREE)

GitHub Pages provides free hosting for static websites. Your dashboard will be accessible at:
`https://yourusername.github.io/arizona-budget-dashboard`

#### Steps:

1. **Create a GitHub Account** (if you don't have one)
   - Go to https://github.com
   - Sign up for free

2. **Create a New Repository**
   - Click the "+" icon → "New repository"
   - Name it: `arizona-budget-dashboard`
   - Make it Public
   - Don't initialize with README
   - Click "Create repository"

3. **Upload Your Files**
   
   **Option A: Using GitHub Web Interface (Easiest)**
   - On your new repository page, click "uploading an existing file"
   - Drag and drop ALL files from `C:/Users/KristenConner/Desktop/arizona-budget-dashboard/`
   - Include: `index.html`, `styles.css`, `data.js`, `app.js`, `README.md`
   - Click "Commit changes"

   **Option B: Using Git Command Line**
   ```bash
   cd C:/Users/KristenConner/Desktop/arizona-budget-dashboard
   git init
   git add .
   git commit -m "Initial commit - Arizona Budget Dashboard"
   git branch -M main
   git remote add origin https://github.com/yourusername/arizona-budget-dashboard.git
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Go to your repository Settings
   - Scroll down to "Pages" section (left sidebar)
   - Under "Source", select "main" branch
   - Click "Save"
   - Wait 2-3 minutes for deployment

5. **Get Your Link**
   - Your dashboard will be live at:
   - `https://yourusername.github.io/arizona-budget-dashboard`
   - Share this link with anyone!

---

### Option 2: Netlify (Also FREE, Drag & Drop)

Netlify offers free hosting with a custom subdomain.

#### Steps:

1. **Go to Netlify**
   - Visit https://www.netlify.com
   - Sign up for free (can use GitHub account)

2. **Deploy**
   - Click "Add new site" → "Deploy manually"
   - Drag the entire `arizona-budget-dashboard` folder
   - Wait 30 seconds for deployment

3. **Get Your Link**
   - Netlify will give you a link like: `https://random-name-12345.netlify.app`
   - You can customize the subdomain in Site settings
   - Share this link!

---

### Option 3: Vercel (FREE, Optimized for React)

#### Steps:

1. **Go to Vercel**
   - Visit https://vercel.com
   - Sign up for free

2. **Deploy**
   - Click "Add New" → "Project"
   - Import from GitHub (or drag & drop)
   - Click "Deploy"

3. **Get Your Link**
   - Vercel provides: `https://arizona-budget-dashboard.vercel.app`
   - Share this link!

---

### Option 4: Azure Static Web Apps (FREE Tier)

If you want a Microsoft solution:

1. Go to https://portal.azure.com
2. Create a Static Web App
3. Upload your files
4. Get your link: `https://yourapp.azurestaticapps.net`

---

## 📝 Pre-Deployment Checklist

Before deploying, ensure these files are in your folder:

```
arizona-budget-dashboard/
├── index.html          ✓ Main page
├── styles.css          ✓ Styling
├── data.js            ✓ Budget data
├── app.js             ✓ Functionality
├── README.md          ✓ Documentation
├── QUICK-START.md     ✓ User guide
└── package.json       ✓ Metadata
```

---

## 🔗 Sharing Your Dashboard

Once deployed, you can share your link:

### For GitHub Pages:
```
https://yourusername.github.io/arizona-budget-dashboard
```

### For Netlify:
```
https://arizona-budget-dashboard.netlify.app
```

### For Vercel:
```
https://arizona-budget-dashboard.vercel.app
```

---

## 🎯 Recommended: GitHub Pages

**Why GitHub Pages?**
- ✅ Completely free
- ✅ No credit card required
- ✅ Easy to update (just upload new files)
- ✅ Professional URL
- ✅ Reliable hosting
- ✅ Can add custom domain later

---

## 📱 Testing Your Deployed Site

After deployment, test:
1. Open the link in different browsers
2. Test on mobile device
3. Click through all departments
4. Test export functionality
5. Verify all charts load

---

## 🔄 Updating Your Dashboard

### For GitHub Pages:
1. Make changes to your local files
2. Go to your GitHub repository
3. Click "Add file" → "Upload files"
4. Upload the changed files
5. Changes go live in 1-2 minutes

### For Netlify/Vercel:
1. Drag and drop updated folder
2. Changes go live immediately

---

## 🌐 Custom Domain (Optional)

If you want a custom domain like `budget.arizona.gov`:

1. Purchase domain from:
   - Namecheap (~$10/year)
   - Google Domains (~$12/year)
   - GoDaddy (~$15/year)

2. Point domain to your hosting:
   - GitHub Pages: Add CNAME file
   - Netlify: Add custom domain in settings
   - Vercel: Add domain in project settings

---

## 🔒 Security Notes

- Dashboard is read-only (no user data collected)
- All data is static (no database)
- No sensitive information exposed
- Safe to share publicly

---

## 💡 Quick Start (Fastest Method)

**Netlify Drag & Drop (2 minutes):**

1. Go to https://app.netlify.com/drop
2. Drag your `arizona-budget-dashboard` folder
3. Get instant link
4. Done! Share the link

---

## 📞 Need Help?

If you encounter issues:

1. **GitHub Pages not working?**
   - Check that index.html is in the root folder
   - Verify Pages is enabled in Settings
   - Wait 5 minutes for DNS propagation

2. **Charts not showing?**
   - Check browser console for errors
   - Ensure Chart.js CDN is accessible
   - Try different browser

3. **Styling broken?**
   - Verify styles.css is in same folder as index.html
   - Check file names match exactly (case-sensitive)

---

## 🎉 You're Ready!

Choose your deployment method above and get your shareable link in minutes!

**Recommended for beginners:** Netlify Drag & Drop
**Recommended for long-term:** GitHub Pages