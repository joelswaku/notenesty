import React from 'react';
import { Link } from 'react-router-dom';

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-sky-100 dark:from-gray-900 dark:to-gray-950 text-gray-800 dark:text-gray-100 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white/70 dark:bg-gray-900/80 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800">
        <h1 className="text-4xl font-bold text-sky-800 dark:text-sky-300 mb-6 text-center">Privacy Policy</h1>
        
        <p className="mb-4">
          Last updated: July 1, 2025
        </p>

        <p className="mb-6">
          Welcome to Notenesty. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our service.
        </p>

        <h2 className="text-2xl font-semibold text-sky-700 dark:text-sky-300 mb-2">1. Information We Collect</h2>
        <p className="mb-4">
          - <span className="font-semibold">Account Information:</span> Name, email address, and password.
          <br/>
          - <span className="font-semibold">Notes Content:</span> All text and data you save in your notes.
          <br/>
          - <span className="font-semibold">Usage Data:</span> Information about how you use Notesty, such as access times and device info.
        </p>

        <h2 className="text-2xl font-semibold text-sky-700 dark:text-sky-300 mb-2">2. How We Use Your Information</h2>
        <p className="mb-4">
          We use your information to:
          <br/>
          - Provide and maintain our service
          <br/>
          - Communicate with you about updates
          <br/>
          - Improve and personalize your experience
          <br/>
          - Ensure the security of our platform
        </p>

        <h2 className="text-2xl font-semibold text-sky-700 dark:text-sky-300 mb-2">3. Data Storage & Security</h2>
        <p className="mb-4">
          Your notes and personal data are stored securely. We use industry-standard security practices to protect your information from unauthorized access, loss, or misuse.
        </p>

        <h2 className="text-2xl font-semibold text-sky-700 dark:text-sky-300 mb-2">4. Sharing Your Information</h2>
        <p className="mb-4">
          We do not sell or share your notes or personal data with third parties except:
          <br/>
          - When required by law
          <br/>
          - To protect the rights and safety of Notesty or users
          <br/>
          - With trusted service providers who help us run our service (under strict confidentiality agreements)
        </p>

        <h2 className="text-2xl font-semibold text-sky-700 dark:text-sky-300 mb-2">5. Your Rights</h2>
        <p className="mb-4">
          You have the right to:
          <br/>
          - Access, update, or delete your personal information
          <br/>
          - Request a copy of your data
          <br/>
          - Withdraw consent where applicable
        </p>

        <h2 className="text-2xl font-semibold text-sky-700 dark:text-sky-300 mb-2">6. Changes to This Policy</h2>
        <p className="mb-4">
          We may update our Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page.
        </p>

        <h2 className="text-2xl font-semibold text-sky-700 dark:text-sky-300 mb-2">7. Contact Us</h2>
        <p className="mb-6">
          If you have questions or concerns about this Privacy Policy, please contact us at:
          <br/>
            <span >
          <Link to="/contact" className="hover:text-blue-800-600 dark:hover:text-sky-400 text-blue-600">support@notenesty</Link>
          </span>
        </p>

        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Notesty. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
