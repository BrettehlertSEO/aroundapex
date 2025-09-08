#!/bin/bash

# Vercel Deployment Script
echo "🚀 Preparing for Vercel deployment..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📁 Initializing git repository..."
    git init
fi

# Check if files are staged
if [ -z "$(git status --porcelain)" ]; then
    echo "✅ No changes to commit"
else
    echo "📝 Staging changes..."
    git add .
    
    echo "💾 Committing changes..."
    git commit -m "Ready for Vercel deployment - $(date)"
fi

# Check if remote is set
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "⚠️  No GitHub remote set up yet."
    echo "📋 Please run these commands:"
    echo "   git remote add origin https://github.com/yourusername/your-repo-name.git"
    echo "   git push -u origin main"
    echo ""
    echo "Then go to vercel.com and import your repository."
    exit 1
fi

# Push to GitHub
echo "📤 Pushing to GitHub..."
git push

echo "✅ Code pushed to GitHub!"
echo ""
echo "📋 Next steps:"
echo "1. Go to vercel.com"
echo "2. Click 'New Project'"
echo "3. Import your GitHub repository"
echo "4. Add environment variables:"
echo "   - VITE_MAILCHIMP_API_KEY"
echo "   - VITE_MAILCHIMP_SERVER_PREFIX"
echo "   - VITE_MAILCHIMP_AUDIENCE_ID"
echo "5. Click 'Deploy'"
echo ""
echo "📖 See VERCEL_DEPLOYMENT.md for detailed instructions"
