"use client";

import React from 'react';

// --- StatCard Component (defined inside BetterJobs.tsx) ---

// Define the props for the StatCard (decorations removed)
interface StatCardProps {
  mainContent: React.ReactNode;
  caption: string;
}

/**
 * A reusable card component for the "Better Jobs" statistics section.
 * SIMPLIFIED VERSION: Decorations have been removed.
 */
const StatCard: React.FC<StatCardProps> = ({ mainContent, caption }) => {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Card with relative positioning for decorations */}
      <div className="mb-6 rounded-lg bg-white shadow-xl">
        {/* Main Content Box - fixed height for alignment */}
        <div className="flex h-56 w-full max-w-xs items-center justify-center p-8 sm:w-72">
          {mainContent}
        </div>

        {/* Decorations have been removed from here */}
      </div>

      {/* Caption */}
      <p className="max-w-xs text-base text-gray-700">
        {caption}
      </p>
    </div>
  );
};

// --- Main BetterJobs Component ---

// Define the data for the cards (decorations removed)
const cardData = [
  {
    mainContent: (
      // Large statistic
      <span className="text-6xl font-extrabold" style={{ color: '#032D60' }}>
        $1.5B
      </span>
    ),
    caption: 'Technology given for free or discounted',
  },
  {
    mainContent: (
      // Fortune logo
      <img
        src="/logos/fortune-logo.svg" // You will provide this
        alt="Fortune Logo"
        className="h-12 w-auto"
        onError={(e) => (e.currentTarget.src = 'https://placehold.co/200x50/ffffff/333333?text=FORTUNE')}
      />
    ),
    caption: 'Fortune 100 Best Companies to Work For 2024 (16 years in a row)',
  },
  {
    mainContent: (
      // Fortune logo
      <img
        src="/logos/fortune-logo.svg" // You will provide this
        alt="Fortune Logo"
        className="h-12 w-auto"
        onError={(e) => (e.currentTarget.src = 'https://placehold.co/200x50/ffffff/333333?text=FORTUNE')}
      />
    ),
    caption: 'Fortune World’s Most Admired Companies 2024',
  },
];

/**
 * The main component for the "Better Jobs" section.
 */
export default function BetterJobs() {
  return (
    // Section with the light blue-gray background
    <section className="bg-slate-50 py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 max-w-4xl mx-auto text-center">
          <h2 
            className="text-3xl font-extrabold sm:text-4xl" 
            style={{ color: '#032D60' }} // Matching the Salesforce dark blue
          >
            Our technology helps people create better
            <br className="hidden sm:inline" />
            jobs, lives, companies, and communities.
          </h2>
        </div>

        {/* Responsive Grid for Cards */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-3">
          {cardData.map((card, index) => (
            <StatCard
              key={index}
              mainContent={card.mainContent}
              caption={card.caption}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

