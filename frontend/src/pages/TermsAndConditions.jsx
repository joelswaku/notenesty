import React from 'react';
import { Link } from 'react-router-dom';

function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-sky-100 dark:from-gray-900 dark:to-gray-950 text-gray-800 dark:text-gray-100 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white/70 dark:bg-gray-900/80 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800">
        <h1 className="text-4xl font-bold text-sky-800 dark:text-sky-300 mb-6 text-center">
          Terms and Conditions
        </h1>
        
        <p className="mb-4">
          Last updated: July 1, 2025
        </p>

        <p className="mb-6">
          Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the Notenesty application (the "Service") operated by Notesty ("us", "we", or "our").
        </p>

        <h2 className="text-2xl font-semibold text-sky-700 dark:text-sky-300 mb-2">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the Terms, then you may not access the Service.
        </p>

        <h2 className="text-2xl font-semibold text-sky-700 dark:text-sky-300 mb-2">2. Use of Service</h2>
        <p className="mb-4">
          Notenesty allows you to create, store, and manage personal notes. You are responsible for maintaining the confidentiality of your account and password and for all activities that occur under your account.
        </p>

        <h2 className="text-2xl font-semibold text-sky-700 dark:text-sky-300 mb-2">3. User Content</h2>
        <p className="mb-4">
          You retain ownership of any notes or content you submit to the Service. By using Notenesty, you grant us the right to store and process this content solely to provide and improve the Service. We do not sell your data.
        </p>

        <h2 className="text-2xl font-semibold text-sky-700 dark:text-sky-300 mb-2">4. Prohibited Activities</h2>
        <p className="mb-4">
          You agree not to use the Service to:
          <br/>
          - Violate any laws
          <br/>
          - Distribute harmful or offensive content
          <br/>
          - Attempt to gain unauthorized access to other accounts or systems
        </p>

        <h2 className="text-2xl font-semibold text-sky-700 dark:text-sky-300 mb-2">5. Termination</h2>
        <p className="mb-4">
          We may suspend or terminate your access to the Service immediately, without prior notice or liability, for any reason, including if you breach these Terms.
        </p>

        <h2 className="text-2xl font-semibold text-sky-700 dark:text-sky-300 mb-2">6. Disclaimer</h2>
        <p className="mb-4">
          The Service is provided "as is" and "as available" without warranties of any kind. We do not guarantee that the Service will be uninterrupted or error-free.
        </p>

        <h2 className="text-2xl font-semibold text-sky-700 dark:text-sky-300 mb-2">7. Limitation of Liability</h2>
        <p className="mb-4">
          In no event shall Notenesty, nor its directors or employees, be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Service.
        </p>

        <h2 className="text-2xl font-semibold text-sky-700 dark:text-sky-300 mb-2">8. Changes to Terms</h2>
        <p className="mb-4">
          We reserve the right to modify these Terms at any time. We will notify you of changes by posting the new Terms on this page. Your continued use of the Service after changes means you accept the new Terms.
        </p>

        <h2 className="text-2xl font-semibold text-sky-700 dark:text-sky-300 mb-2">9. Contact Us</h2>
        <p className="mb-6">
          If you have any questions about these Terms, please contact us at:
          <br/>
          <span >
          <Link to="/contact" className="hover:text-blue-800-600 dark:hover:text-sky-400 text-blue-600">support@notenesty</Link>
          </span>
        </p>

        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Notenesty. All rights reserved.
        </div>
      </div>
    </div>
  );  
}

export default TermsAndConditions;
