# Vercel Deployment Guide

This guide will help you deploy your Around Apex newsletter landing page to Vercel.

## Why Vercel?

✅ **Free hosting** for personal projects  
✅ **Automatic deployments** from GitHub  
✅ **Built-in serverless functions** for your API  
✅ **Global CDN** for fast loading  
✅ **Custom domains** support  
✅ **HTTPS** automatically enabled  
✅ **No server management** required  

## Prerequisites

1. GitHub account
2. Vercel account (free)
3. Your Mailchimp credentials

## Step 1: Prepare Your Code

### 1.1 Push to GitHub
```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit your changes
git commit -m "Ready for Vercel deployment"

# Add your GitHub repository as remote
git remote add origin https://github.com/yourusername/your-repo-name.git

# Push to GitHub
git push -u origin main
```

### 1.2 Verify Your Files
Make sure you have these files in your project:
- ✅ `api/subscribe.js` - Serverless function
- ✅ `vercel.json` - Vercel configuration
- ✅ `package.json` - With build scripts
- ✅ `.env` - With your Mailchimp credentials (for local development)

## Step 2: Deploy to Vercel

### 2.1 Create Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your repositories

### 2.2 Import Your Project
1. In Vercel dashboard, click "New Project"
2. Find your repository and click "Import"
3. Vercel will automatically detect it's a Vite project

### 2.3 Configure Build Settings
Vercel should auto-detect these settings:
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### 2.4 Set Environment Variables
Before deploying, add your Mailchimp credentials:

1. In the project setup, click "Environment Variables"
2. Add these three variables:

```
VITE_MAILCHIMP_API_KEY = your_mailchimp_api_key_here
VITE_MAILCHIMP_SERVER_PREFIX = your_server_prefix_here
VITE_MAILCHIMP_AUDIENCE_ID = your_audience_id_here
```

**Important:** Use the exact variable names above (with `VITE_` prefix).

### 2.5 Deploy
1. Click "Deploy"
2. Wait for the build to complete (usually 1-2 minutes)
3. Your site will be live at `https://your-project-name.vercel.app`

## Step 3: Test Your Deployment

### 3.1 Test the Frontend
1. Visit your Vercel URL
2. Check that the page loads correctly
3. Verify all styling and images are working

### 3.2 Test Email Subscription
1. Try subscribing with a test email
2. Check your Mailchimp audience to confirm the subscription
3. Check the browser console for any errors

### 3.3 Test API Endpoint
You can also test the API directly:
```bash
curl -X POST https://your-project-name.vercel.app/api/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'
```

## Step 4: Custom Domain (Optional)

### 4.1 Add Custom Domain
1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your domain (e.g., `aroundapex.com`)
4. Follow Vercel's DNS instructions

### 4.2 Update DNS
In your domain registrar (where you bought the domain):
- Add a CNAME record pointing to `cname.vercel-dns.com`
- Or add an A record pointing to Vercel's IP

## Step 5: Automatic Deployments

### 5.1 How It Works
- Every time you push to your GitHub repository
- Vercel automatically builds and deploys your site
- You get a preview URL for each deployment
- Production deployments happen automatically

### 5.2 Making Updates
```bash
# Make your changes
# ... edit files ...

# Commit and push
git add .
git commit -m "Update newsletter content"
git push

# Vercel automatically deploys the changes!
```

## Troubleshooting

### Common Issues

1. **Build Fails**
   - Check the build logs in Vercel dashboard
   - Make sure all dependencies are in `package.json`
   - Verify your build command is correct

2. **Environment Variables Not Working**
   - Double-check variable names (must start with `VITE_`)
   - Make sure they're set in Vercel dashboard
   - Redeploy after adding variables

3. **API Calls Failing**
   - Check Vercel function logs
   - Verify Mailchimp credentials are correct
   - Test the API endpoint directly

4. **Styling Issues**
   - Make sure all assets are in the `public` folder
   - Check that Tailwind CSS is building correctly
   - Verify image paths are correct

### Getting Help

1. **Vercel Logs**: Check function logs in Vercel dashboard
2. **Browser Console**: Check for JavaScript errors
3. **Network Tab**: Check for failed API requests
4. **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)

## File Structure After Deployment

```
Vercel automatically handles:
├── Frontend (React app)
│   ├── index.html
│   ├── assets/
│   └── static files
└── API (Serverless functions)
    └── api/subscribe.js
```

## Benefits of This Setup

- 🚀 **Fast**: Global CDN + optimized builds
- 🔒 **Secure**: HTTPS + secure environment variables
- 📈 **Scalable**: Handles traffic spikes automatically
- 🔄 **Automatic**: Deploys on every git push
- 💰 **Free**: No cost for personal projects
- 🌍 **Global**: Fast loading worldwide

## Next Steps

1. **Monitor**: Check Vercel analytics for visitor stats
2. **Optimize**: Use Vercel's performance insights
3. **Backup**: Your code is safely stored in GitHub
4. **Scale**: Upgrade to Pro plan if you need more features

Your Around Apex newsletter landing page is now live and ready to collect subscribers! 🎉
