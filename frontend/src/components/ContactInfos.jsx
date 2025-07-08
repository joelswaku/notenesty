import React from "react";

function ContactInfos() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
      <h2 className="text-2xl font-bold text-blue-800 mb-4">Contact Information</h2>

      <div className="space-y-4 text-gray-700">
        <p>
          <span className="font-semibold">Email:</span>{" "}
          <a href="mailto:contact@yourcompany.com" className="text-blue-600 hover:underline">
            contact@yourcompany.com
          </a>
        </p>

        <p>
          <span className="font-semibold">Phone:</span>{" "}
          <a href="tel:+1234567890" className="text-blue-600 hover:underline">
            +1 (234) 567-890
          </a>
        </p>

        <p>
          <span className="font-semibold">Address:</span><br />
          1234 Omega Street,<br />
          Cityville, Countryland 45678
        </p>

        <p>
          <span className="font-semibold">Business Hours:</span><br />
          Monday – Friday: 9:00 AM – 6:00 PM<br />
          Saturday – Sunday: Closed
        </p>
      </div>
    </div>
  );
}

export default ContactInfos;
