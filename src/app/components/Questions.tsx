"use client";

import React from 'react';
import { ExternalLink } from 'lucide-react'; // For the external link icon

interface QuestionsProps {
  backgroundImageSrc?: string; // Optional prop for the background illustration
  peopleImageSrc?: string;     // Optional prop for the people image
}

export default function Questions({ 
  backgroundImageSrc = '/backgrounds/mountain-landscape.svg', // Default or you provide
  peopleImageSrc = '/people/support-team.png'                 // Default or you provide
}: QuestionsProps) {
  return (
    <section className="bg-slate-50 py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-xl bg-white shadow-xl">
          {/* Background Illustration */}
          <div 
            className="absolute inset-0 bg-cover bg-bottom-left bg-no-repeat"
            style={{ 
              backgroundImage: `url(${backgroundImageSrc})`,
              // This is a rough estimation for the left part of the background.
              // You might need to adjust background-size, background-position,
              // or use a separate <img> for more control.
              backgroundSize: '80% auto', // Adjust as needed
              backgroundPosition: 'left bottom -50px' // Adjust to place it correctly
            }}
            aria-hidden="true"
          ></div>

          <div className="relative z-10 flex flex-col items-center p-8 text-center lg:flex-row lg:justify-between lg:p-16 lg:text-left">
            {/* Left Column: Text and Buttons */}
            <div className="mb-10 lg:mb-0 lg:w-3/5 lg:pr-12">
              <h2 
                className="mb-4 text-3xl font-extrabold sm:text-4xl" 
                style={{ color: '#032D60' }} // Salesforce dark blue
              >
                Questions? We&apos;ll put you on the
                <br className="hidden sm:inline" /> right path.
              </h2>
              <p className="mb-8 max-w-lg text-lg text-gray-700">
                Ask about Salesforce products, pricing, implementation, or anything else.
                Our highly trained reps are standing by, ready to help.
              </p>
              
              <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 lg:justify-start">
                <a 
                  href="#" 
                  className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Contact us
                  <ExternalLink size={16} className="ml-2" />
                </a>
                <a 
                  href="#" 
                  className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Editions & pricing
                </a>
              </div>
            </div>

            {/* Right Column: People Image */}
            <div className="lg:w-2/5">
              <img 
                src={peopleImageSrc} 
                alt="Salesforce support team" 
                className="h-auto w-full max-w-sm lg:max-w-none mx-auto" // Adjust max-w as needed
                onError={(e) => (e.currentTarget.src = 'https://placehold.co/400x300/e0e0e0/333333?text=Support+Team')}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
