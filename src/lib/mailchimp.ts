// Mailchimp API service for newsletter subscription
export interface MailchimpResponse {
  success: boolean;
  message: string;
  error?: string;
}

export interface SubscriptionData {
  email: string;
  firstName?: string;
  lastName?: string;
}

// Get Mailchimp configuration from environment variables
const getMailchimpConfig = () => {
  const apiKey = import.meta.env.VITE_MAILCHIMP_API_KEY;
  const serverPrefix = import.meta.env.VITE_MAILCHIMP_SERVER_PREFIX;
  const audienceId = import.meta.env.VITE_MAILCHIMP_AUDIENCE_ID;

  console.log('Environment variables loaded:');
  console.log('API Key:', apiKey ? `${apiKey.substring(0, 10)}...` : 'MISSING');
  console.log('Server Prefix:', serverPrefix || 'MISSING');
  console.log('Audience ID:', audienceId || 'MISSING');

  if (!apiKey || !serverPrefix || !audienceId) {
    throw new Error('Mailchimp configuration is missing. Please check your environment variables.');
  }

  return { apiKey, serverPrefix, audienceId };
};

// Subscribe email to Mailchimp audience via Vercel serverless function
export const subscribeToNewsletter = async (data: SubscriptionData): Promise<MailchimpResponse> => {
  try {
    console.log('Subscribing with data:', data);

    // Use Vercel API endpoint (works for both local development and production)
    const apiUrl = '/api/subscribe';

    // Make request to our API
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log('Server response:', result);

    return result;

  } catch (error) {
    console.error('Subscription error:', error);
    return {
      success: false,
      message: 'Unable to subscribe at this time. Please try again later.',
      error: 'NETWORK_ERROR'
    };
  }
};

// Validate email format
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
