import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 mb-4">
                Around Apex ("we," "our," or "us") operates the website aroundapex.com (the "Service"). 
                This page informs you of our policies regarding the collection, use, and disclosure of 
                personal data when you use our Service and the choices you have associated with that data.
              </p>
              <p className="text-gray-700">
                We are committed to protecting your privacy and ensuring the security of your personal 
                information. This Privacy Policy explains how we collect, use, and safeguard your 
                information when you visit our website or subscribe to our newsletter.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">2.1 Personal Information</h3>
              <p className="text-gray-700 mb-4">
                When you subscribe to our newsletter, we collect the following information:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Email address</li>
                <li>First name (optional)</li>
                <li>Last name (optional)</li>
                <li>Source information (how you found us)</li>
                <li>IP address and browser information</li>
                <li>Subscription date and time</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">2.2 Automatically Collected Information</h3>
              <p className="text-gray-700 mb-4">
                We may automatically collect certain information about your device and usage patterns:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Device information (type, operating system, browser)</li>
                <li>Usage data (pages visited, time spent, click patterns)</li>
                <li>Location data (general geographic location based on IP address)</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Newsletter Delivery:</strong> Send you our local newsletter about Apex, North Carolina</li>
                <li><strong>Communication:</strong> Respond to your inquiries and provide customer support</li>
                <li><strong>Personalization:</strong> Customize content and recommendations based on your interests</li>
                <li><strong>Analytics:</strong> Analyze website usage and newsletter engagement to improve our services</li>
                <li><strong>Marketing:</strong> Send you relevant updates, promotions, and announcements (with your consent)</li>
                <li><strong>Legal Compliance:</strong> Comply with applicable laws and regulations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Legal Basis for Processing</h2>
              <p className="text-gray-700 mb-4">
                We process your personal information based on the following legal grounds:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Consent:</strong> You have given clear consent for us to process your personal data for newsletter subscription</li>
                <li><strong>Legitimate Interest:</strong> We have a legitimate interest in providing local news and information to Apex residents</li>
                <li><strong>Contract Performance:</strong> Processing is necessary for the performance of our newsletter service</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Information Sharing and Disclosure</h2>
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties, except in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and newsletter (e.g., BeeHiiv for email delivery)</li>
                <li><strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights and safety</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction</li>
                <li><strong>Consent:</strong> We may share information with your explicit consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Security</h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Unauthorized access, use, or disclosure</li>
                <li>Accidental loss or destruction</li>
                <li>Malicious attacks and data breaches</li>
              </ul>
              <p className="text-gray-700">
                However, no method of transmission over the internet or electronic storage is 100% secure. 
                While we strive to protect your personal information, we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Data Retention</h2>
              <p className="text-gray-700 mb-4">
                We retain your personal information for as long as necessary to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Provide our newsletter service</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes and enforce our agreements</li>
              </ul>
              <p className="text-gray-700">
                When you unsubscribe from our newsletter, we will delete your email address and personal 
                information from our active mailing lists within 30 days, unless we are required to retain 
                it for legal or regulatory purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Your Rights</h2>
              <p className="text-gray-700 mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Rectification:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Erasure:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request a copy of your data in a structured format</li>
                <li><strong>Objection:</strong> Object to processing of your personal information</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent for newsletter subscription at any time</li>
              </ul>
              <p className="text-gray-700">
                To exercise these rights, please contact us at the information provided in the "Contact Us" section below.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 mb-4">
                We use cookies and similar tracking technologies to enhance your experience on our website:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Essential Cookies:</strong> Necessary for website functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                <li><strong>Marketing Cookies:</strong> Used for targeted advertising and marketing purposes</li>
              </ul>
              <p className="text-gray-700">
                You can control cookie settings through your browser preferences. However, disabling 
                certain cookies may affect website functionality.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Third-Party Services</h2>
              <p className="text-gray-700 mb-4">
                Our website integrates with the following third-party services:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>BeeHiiv:</strong> Email marketing and newsletter delivery service</li>
                <li><strong>Facebook Pixel:</strong> Analytics and advertising tracking</li>
                <li><strong>Vercel:</strong> Website hosting and analytics</li>
              </ul>
              <p className="text-gray-700">
                These services have their own privacy policies. We encourage you to review their 
                privacy practices before providing any personal information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Children's Privacy</h2>
              <p className="text-gray-700">
                Our Service is not intended for children under 13 years of age. We do not knowingly 
                collect personal information from children under 13. If you are a parent or guardian 
                and believe your child has provided us with personal information, please contact us 
                immediately so we can delete such information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Changes to This Privacy Policy</h2>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. We will notify you of any changes 
                by posting the new Privacy Policy on this page and updating the "Last updated" date. 
                We encourage you to review this Privacy Policy periodically for any changes. Changes 
                to this Privacy Policy are effective when they are posted on this page.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> newsletter@aroundapex.com</p>
                <p className="text-gray-700 mb-2"><strong>Website:</strong> aroundapex.com</p>
                <p className="text-gray-700"><strong>Address:</strong> Apex, North Carolina, United States</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Newsletter Subscription</h2>
              <p className="text-gray-700 mb-4">
                By subscribing to our newsletter, you acknowledge that:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>You are providing your email address voluntarily</li>
                <li>You consent to receive newsletters and marketing communications from us</li>
                <li>You can unsubscribe at any time using the unsubscribe link in our emails</li>
                <li>We may use your email address to send you relevant local news and information about Apex, NC</li>
                <li>Your email address will be stored securely and used only for newsletter purposes</li>
              </ul>
            </section>

            <div className="border-t pt-8 mt-8">
              <p className="text-sm text-gray-500 text-center">
                This Privacy Policy is effective as of {new Date().toLocaleDateString()} and will remain in effect 
                except with respect to any changes in its provisions in the future, which will be in effect 
                immediately after being posted on this page.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
