# Around Apex - Local Newsletter Landing Page

A beautiful, responsive landing page for collecting email subscriptions for the Around Apex newsletter, serving the Apex, North Carolina community.

## Features

- 🎨 Modern, responsive design with Apex-themed branding
- 📧 Mailchimp integration for email collection
- ✅ Form validation and error handling
- 🎯 Local community focus with Apex-specific content
- 📱 Mobile-optimized experience
- 🎉 Success feedback and loading states

## Project info

**URL**: https://lovable.dev/projects/e5d0d244-caf7-4945-81e1-fc015f12a4c4

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/e5d0d244-caf7-4945-81e1-fc015f12a4c4) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## Quick Start

### Local Development

1. **Clone and install dependencies:**
   ```bash
   git clone <YOUR_GIT_URL>
   cd apex-buzz-drop-main
   npm install
   ```

2. **Set up Mailchimp integration:**
   - Follow the detailed guide in [MAILCHIMP_SETUP.md](./MAILCHIMP_SETUP.md)
   - Create a `.env` file with your Mailchimp credentials
   - Get your API key, server prefix, and audience ID from Mailchimp

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Test the email subscription:**
   - Open `http://localhost:5173`
   - Try subscribing with a test email
   - Check your Mailchimp audience to confirm the subscription

### Deploy to Vercel

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables (see [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md))
   - Click Deploy!

3. **Your site is live!** 🎉

## What technologies are used for this project?

This project is built with:

- **Vite** - Fast build tool and dev server
- **TypeScript** - Type-safe JavaScript
- **React** - UI library
- **shadcn-ui** - Beautiful, accessible components
- **Tailwind CSS** - Utility-first CSS framework
- **Mailchimp API** - Email marketing integration

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/e5d0d244-caf7-4945-81e1-fc015f12a4c4) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
