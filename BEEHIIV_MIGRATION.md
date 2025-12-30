# Migrating from Mailchimp to BeeHiiv

This guide will help you transition your Around Apex newsletter from Mailchimp to BeeHiiv.

## Why BeeHiiv?

✅ **Free welcome emails** - No extra charges  
✅ **Better analytics** - Detailed subscriber insights  
✅ **Modern interface** - Clean, intuitive design  
✅ **Affordable pricing** - Much cheaper than Mailchimp  
✅ **Better deliverability** - Higher inbox rates  
✅ **Advanced features** - Segmentation, automation, etc.  

## Step 1: Set Up BeeHiiv Account

### 1.1 Create BeeHiiv Account
1. Go to [beehiiv.com](https://beehiiv.com)
2. Sign up for a free account
3. Create your publication (newsletter)

### 1.2 Get API Credentials
1. In BeeHiiv dashboard, go to **Settings** → **API**
2. Click **Create New API Key**
3. Name it "Around Apex Website Integration"
4. Copy the API key (you won't see it again!)
5. Note your **Publication ID** (also in the API section)

## Step 2: Update Vercel Environment Variables

### 2.1 Remove Old Mailchimp Variables
In Vercel dashboard → Project → Settings → Environment Variables:
- **Delete** these old variables:
  - `MAILCHIMP_API_KEY`
  - `MAILCHIMP_SERVER_PREFIX`
  - `MAILCHIMP_AUDIENCE_ID`

### 2.2 Add New BeeHiiv Variables
Add these new variables:
- `BEEHIIV_API_KEY` = your BeeHiiv API key
- `BEEHIIV_PUBLICATION_ID` = your publication ID

## Step 3: Deploy the Updated Code

The code has already been updated! Just push to deploy:

```bash
git add -A
git commit -m "Migrate from Mailchimp to BeeHiiv"
git push
```

## Step 4: Test the Integration

### 4.1 Test Email Subscription
1. Visit your live site
2. Try subscribing with a test email
3. Check your BeeHiiv dashboard to confirm the subscription

### 4.2 Verify Welcome Email
- BeeHiiv will automatically send a welcome email
- Check your test email inbox
- Customize the welcome email in BeeHiiv dashboard

## Step 5: Migrate Existing Subscribers (Optional)

### 5.1 Export from Mailchimp
1. In Mailchimp, go to **Audience** → **All contacts**
2. Click **Export** → **Export contacts**
3. Download the CSV file

### 5.2 Import to BeeHiiv
1. In BeeHiiv, go to **Subscribers** → **Import**
2. Upload your CSV file
3. Map the fields (email, first name, last name)
4. Import the subscribers

## Step 6: Customize Your BeeHiiv Setup

### 6.1 Welcome Email
1. Go to **Settings** → **Email Templates**
2. Customize your welcome email
3. Add your branding and messaging

### 6.2 Publication Settings
1. **Settings** → **Publication**
2. Update your publication name, description
3. Add your logo and branding
4. Set up your domain (optional)

### 6.3 Automation (Optional)
1. **Automation** → **Create Workflow**
2. Set up email sequences
3. Create subscriber journeys

## Benefits You'll Get

### 🎯 **Better Analytics**
- Subscriber growth tracking
- Open rates and click rates
- Geographic data
- Device analytics

### 💰 **Cost Savings**
- Free welcome emails
- More affordable pricing tiers
- No hidden fees

### 🚀 **Better Features**
- Advanced segmentation
- A/B testing
- Better email editor
- Mobile app

### 📧 **Improved Deliverability**
- Better inbox placement
- Less likely to be marked as spam
- Higher engagement rates

## Troubleshooting

### Common Issues

1. **API Key Not Working**
   - Double-check the API key in Vercel
   - Make sure it's the correct publication ID
   - Redeploy after adding environment variables

2. **Subscribers Not Appearing**
   - Check Vercel function logs
   - Verify API credentials are correct
   - Test the API endpoint directly

3. **Welcome Emails Not Sending**
   - Check BeeHiiv email settings
   - Verify your domain authentication
   - Check spam folder

### Testing Commands

Test your API endpoint:
```bash
curl -X POST https://your-vercel-url.vercel.app/api/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'
```

## Next Steps

1. **Monitor Performance** - Check analytics in BeeHiiv
2. **Optimize Content** - Use BeeHiiv's insights to improve
3. **Grow Subscribers** - Leverage BeeHiiv's growth tools
4. **Automate** - Set up email sequences and workflows

## Support

- **BeeHiiv Help Center**: [help.beehiiv.com](https://help.beehiiv.com)
- **API Documentation**: [developers.beehiiv.com](https://developers.beehiiv.com)
- **Community**: BeeHiiv Discord and Facebook groups

Your Around Apex newsletter is now powered by BeeHiiv! 🎉
