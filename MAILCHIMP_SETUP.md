# Mailchimp Integration Setup

This guide will help you connect your Apex newsletter landing page to Mailchimp for email collection.

## Prerequisites

1. A Mailchimp account (free tier available)
2. A Mailchimp audience (list) set up for your newsletter

## Step 1: Get Your Mailchimp API Key

1. Log in to your Mailchimp account
2. Go to **Account** → **Extras** → **API keys**
3. Click **Create A Key**
4. Copy the generated API key (it will look like: `xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-us1`)

## Step 2: Find Your Server Prefix

Your server prefix is the part after the last dash in your API key. For example:
- API Key: `abc123def456-us1` → Server Prefix: `us1`
- API Key: `xyz789abc123-us2` → Server Prefix: `us2`

## Step 3: Get Your Audience ID

1. In Mailchimp, go to **Audience** → **All contacts**
2. Click **Settings** → **Audience name and defaults**
3. Scroll down to find your **Audience ID** (it will look like: `a1b2c3d4e5`)

## Step 4: Configure Environment Variables

1. Create a `.env` file in your project root (if it doesn't exist)
2. Add the following variables:

```env
VITE_MAILCHIMP_API_KEY=your_actual_api_key_here
VITE_MAILCHIMP_SERVER_PREFIX=your_server_prefix_here
VITE_MAILCHIMP_AUDIENCE_ID=your_audience_id_here
```

**Important:** Replace the placeholder values with your actual Mailchimp credentials.

## Step 5: Test the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Open your browser and go to `http://localhost:5173`
3. Try subscribing with a test email address
4. Check your Mailchimp audience to confirm the subscription

## Features Included

- ✅ Email validation
- ✅ Duplicate subscription handling
- ✅ Error handling and user feedback
- ✅ Loading states
- ✅ Success/error toast notifications
- ✅ Automatic tagging of subscribers

## Troubleshooting

### Common Issues

1. **"Mailchimp configuration is missing"**
   - Check that your `.env` file exists and has all three variables
   - Make sure variable names start with `VITE_`
   - Restart your development server after adding environment variables

2. **"Invalid API key"**
   - Verify your API key is correct
   - Check that your server prefix matches the API key
   - Ensure your API key is active in Mailchimp

3. **"Audience not found"**
   - Verify your Audience ID is correct
   - Make sure the audience exists and is active

4. **CORS errors**
   - This is normal for development. The integration will work when deployed to production
   - For local testing, you may need to use a CORS proxy or test in production

### Testing in Production

For the best testing experience, deploy your site to a hosting service like:
- Vercel (recommended for Vite projects)
- Netlify
- GitHub Pages

## Security Notes

- Never commit your `.env` file to version control
- The `.env` file is already included in `.gitignore`
- Your API key will be visible in the browser, but this is normal for client-side integrations
- Consider using Mailchimp's server-side integration for production if you need additional security

## Next Steps

Once your integration is working:

1. Customize the email templates in Mailchimp
2. Set up automated welcome emails
3. Configure your newsletter content and schedule
4. Monitor your subscriber growth in Mailchimp's dashboard

## Support

If you encounter issues:
1. Check the browser console for error messages
2. Verify all environment variables are set correctly
3. Test with a simple email address first
4. Check Mailchimp's API documentation for additional troubleshooting
