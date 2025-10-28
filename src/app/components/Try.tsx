"use client";

import React from 'react';
// Assuming you might use external icons for the link later, e.g., from lucide-react
import { ExternalLink } from 'lucide-react'; 

export default function Try() {
  return (
    <section className="bg-blue-50 py-16 lg:py-24"> {/* Light blue background for the section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main white container with shadow and rounded corners */}
        <div className="flex flex-col items-center overflow-hidden rounded-xl bg-white p-8 shadow-xl lg:flex-row lg:p-12">
          
          {/* Left Column: Text and Buttons */}
          <div className="w-full lg:w-1/2 text-center lg:text-left lg:pr-12 mb-12 lg:mb-0">
            <h2 className="mb-6 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
              Try Salesforce for free. No
              <br className="hidden md:inline" /> {/* Line break for desktop */}
              credit card required, no
              <br className="hidden md:inline" /> {/* Line break for desktop */}
              software to install.
            </h2>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center lg:justify-start">
              <button className="rounded-md bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-blue-700">
                Start free trial
              </button>
              <a 
                href="/pricing" 
                className="inline-flex items-center justify-center space-x-2 rounded-md border-2 border-blue-600 px-8 py-4 text-lg font-semibold text-blue-600 transition-colors hover:bg-blue-50 hover:border-blue-700 hover:text-blue-700"
              >
                <span>See pricing</span>
                <ExternalLink size={20} /> {/* Using lucide-react ExternalLink icon */}
              </a>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative w-full lg:w-1/2 lg:mt-0 lg:pl-12 flex justify-center lg:justify-end">
            <img 
              src="/tryimage.webp" // Placeholder for your image
              alt="Salesforce demo on mobile"
              className="w-full max-w-lg h-auto rounded-lg shadow-lg" // Responsive image styling
              onError={(e) => (e.currentTarget.src = 'https://placehold.co/600x400/e0e0e0/333333?text=Image%20Placeholder')} // Fallback
            />
          </div>
        </div>
      </div>
    </section>
  );
}

