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

// Note: Mailchimp API key is now handled server-side in the Vercel function
// This prevents the API key from being exposed in the browser

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
