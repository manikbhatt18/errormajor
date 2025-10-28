"use client";

import React from 'react';
import { 
  LucideIcon, 
  Bird, 
  LineChart, 
  Heart, 
  Search,
  Users, // Using Users as a person-like icon
  Tablet, // Using Tablet as a device icon
  Laptop, // Using Laptop as a device icon
  BarChart4 // Using BarChart4 as a chart icon
} from 'lucide-react';

// --- GrowCard Component (now inside GrowBusiness.tsx) ---

// Define the props for the GrowCard
interface GrowCardProps {
  card: {
    overlayText: string;
    description: string;
    learnMoreLink: string;
    MainIcon: LucideIcon; // Main icon (e.g., Users, Tablet)
    overlayIcon: LucideIcon; // Small illustrative icon (e.g., bird, graph)
    circleBgColor: string; // e.g., 'bg-blue-500'
    overlayIconBgColor: string; // e.g., 'bg-blue-400'
    overlayIconPosition: string; // e.g., 'top-4 right-4'
  };
}

/**
 * A reusable card component for the "Grow Your Business" section.
 * This logic is now included directly in GrowBusiness.tsx to avoid import errors.
 */
const GrowCard: React.FC<GrowCardProps> = ({ card }) => {
  const MainIcon = card.MainIcon;
  const OverlayIcon = card.overlayIcon;

  return (
    <div className="flex w-full max-w-sm flex-col items-center text-center">
      {/* Top circular image/icon area */}
      <div 
        className={`relative mb-6 flex h-56 w-56 items-center justify-center rounded-full shadow-lg ${card.circleBgColor} overflow-hidden`}
      >
        {/* Main Icon (replaces the image) */}
        <MainIcon size={96} className="text-white opacity-70" strokeWidth={1} />
        
        {/* Overlay Text (e.g., "20hrs") */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span 
            className="text-5xl font-extrabold text-white" 
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.4)' }}
          >
            {card.overlayText}
          </span>
        </div>

        {/* Small Overlay Icon (e.g., bird, graph) */}
        <div 
          className={`absolute flex h-12 w-12 items-center justify-center rounded-full shadow-md ${card.overlayIconBgColor} ${card.overlayIconPosition}`}
        >
          <OverlayIcon size={24} className="text-white" strokeWidth={1.5} />
        </div>
      </div>

      {/* Description Text */}
      <p className="mb-4 text-lg text-gray-700" style={{ minHeight: '3.5rem' }}>
        {card.description}
      </p>

      {/* Learn More Link */}
      <a 
        href={card.learnMoreLink} 
        className="font-semibold text-blue-600 hover:underline"
      >
        Learn more
      </a>
    </div>
  );
};

// --- Main GrowBusiness Component ---

// Define the data for the cards
const growCardsData = [
  {
    overlayText: '20hrs',
    description: 'Save 20 hours per week in manual tasks',
    learnMoreLink: '#',
    MainIcon: Users,
    overlayIcon: Bird,
    circleBgColor: 'bg-blue-500',
    overlayIconBgColor: 'bg-blue-400',
    overlayIconPosition: 'top-4 right-4'
  },
  {
    overlayText: '+29%',
    description: 'Boost productivity by 29%',
    learnMoreLink: '#',
    MainIcon: Tablet,
    overlayIcon: LineChart,
    circleBgColor: 'bg-green-500',
    overlayIconBgColor: 'bg-green-400',
    overlayIconPosition: 'top-4 left-4'
  },
  {
    overlayText: '+26%',
    description: 'Increase win rates by 26%',
    learnMoreLink: '#',
    MainIcon: Laptop,
    overlayIcon: Heart,
    circleBgColor: 'bg-red-500',
    overlayIconBgColor: 'bg-red-400',
    overlayIconPosition: 'bottom-4 left-4'
  },
  {
    overlayText: '+25%',
    description: 'Increase marketing ROI by 25%',
    learnMoreLink: '#',
    MainIcon: BarChart4,
    overlayIcon: Search,
    circleBgColor: 'bg-yellow-500',
    overlayIconBgColor: 'bg-yellow-400',
    overlayIconPosition: 'bottom-4 right-4'
  },
];

/**
 * The main component for the "Grow Your Business" section.
 */
export default function GrowBusiness() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            How can we help grow your business?
          </h2>
        </div>

        {/* Responsive Grid for Cards */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-4">
          {growCardsData.map((card, index) => (
            <GrowCard key={index} card={card} />
          ))}
        </div>

      </div>
    </section>
  );
}

