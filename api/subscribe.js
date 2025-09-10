// Vercel serverless function for BeeHiiv subscription
export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email, firstName, lastName } = req.body;
    
    // Get BeeHiiv configuration from environment variables
    const apiKey = process.env.BEEHIIV_API_KEY;
    const publicationId = process.env.BEEHIIV_PUBLICATION_ID;

    console.log('Environment check:');
    console.log('API Key exists:', !!apiKey);
    console.log('Publication ID exists:', !!publicationId);
    console.log('Publication ID:', publicationId);

    if (!apiKey || !publicationId) {
      return res.status(500).json({
        success: false,
        message: 'BeeHiiv configuration is missing'
      });
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    // Create subscriber data for BeeHiiv
    const subscriberData = {
      email: email,
      publication_id: publicationId,
      send_welcome_email: true,
      utm_source: 'website',
      utm_medium: 'landing_page',
      utm_campaign: 'around_apex_newsletter',
      custom_fields: {
        first_name: firstName || '',
        last_name: lastName || '',
        source: 'Around Apex Website'
      }
    };

    // Make request to BeeHiiv API
    const apiUrl = 'https://api.beehiiv.com/v2/publications/' + publicationId + '/subscriptions';
    console.log('Making request to:', apiUrl);
    console.log('Subscriber data:', subscriberData);

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(subscriberData),
    });

    const result = await response.json();
    console.log('BeeHiiv response status:', response.status);
    console.log('BeeHiiv response:', result);

    if (!response.ok) {
      if (result.message && result.message.includes('already exists')) {
        return res.status(400).json({
          success: false,
          message: 'This email is already subscribed to our newsletter.'
        });
      }
      
      return res.status(400).json({
        success: false,
        message: result.message || 'Failed to subscribe. Please try again.'
      });
    }

    res.json({
      success: true,
      message: 'Successfully subscribed to Around Apex newsletter!'
    });

  } catch (error) {
    console.error('Subscription error:', error);
    res.status(500).json({
      success: false,
      message: 'Unable to subscribe at this time. Please try again later.'
    });
  }
}
