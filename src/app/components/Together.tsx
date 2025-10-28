import React from 'react';
import Link from 'next/link'; // Replaced with <a> for preview

export default function Together() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <h2 className="mb-6 text-center text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
          We bring companies and customers
          <br />
          together
        </h2>

        {/* Description */}
        <p className="mb-8 max-w-3xl text-center text-lg text-gray-700">
          Salesforce is the world’s most trusted customer relationship management (CRM)
          platform. We help your marketing, sales, commerce, service and IT teams work as one
          from anywhere – so you can keep your customers happy everywhere.
        </p>

        {/* Button Group */}
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          {/* Primary Button */}
          <a
            href="/free-trial"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-md transition-colors hover:bg-blue-700"
          >
            Start free trial
          </a>

          {/* Secondary Button */}
          <a
            href="/demos"
            className="inline-flex items-center justify-center rounded-md border-2 border-blue-600 bg-white px-6 py-3 text-base font-semibold text-blue-600 shadow-md transition-colors hover:bg-blue-50"
          >
            Watch demos
          </a>
        </div>
      </div>
    </section>
  );
}
