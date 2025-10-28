"use client";

import React from 'react';

export default function Customers() {
  // Define your customer logo data
  // Split into two arrays for distinct row layouts
  const topRowLogos = [
    { name: 'Balaji', src: '/customer-logos/balaji.svg' },
    { name: 'Flame University', src: '/customer-logos/flame-university.svg' },
    { name: 'Genpact', src: '/customer-logos/genpact.svg' },
    { name: 'Godrej', src: '/customer-logos/godrej.svg' },
    { name: 'Mahindra', src: '/customer-logos/mahinda.svg' },
    { name: 'Pepe Jeans', src: '/customer-logos/pepe-jeans.svg' },
  ];

  const bottomRowLogos = [
    { name: 'Razorpay', src: '/customer-logos/razorpay.svg' },
    { name: 'Secutech', src: '/customer-logos/secutech.svg' },
  ];

  const renderLogoCard = (logo: { name: string; src: string }) => (
    <div
      key={logo.name}
      // Adjusted size for slightly bigger cards: h-28 w-48 (or max-w-full with adjusted padding)
      className="flex h-28 w-full max-w-[190px] items-center justify-center rounded-lg bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg"
    >
      <img
        src={logo.src}
        alt={`${logo.name} logo`}
        className="max-h-full max-w-full object-contain"
        onError={(e) => (e.currentTarget.src = 'https://placehold.co/120x60/ffffff/cccccc?text=Logo')} // Fallback
      />
    </div>
  );

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <h2 className="mb-12 text-center text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
          Over 150,000 companies, both big and
          <br />
          small, are growing their business with
          <br />
          Salesforce.
        </h2>

        {/* Customer Logos Grid Container */}
        <div className="flex flex-col items-center space-y-6">
          {/* Top Row: 6 logos */}
          <div className="grid w-full grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6 max-w-fit">
            {topRowLogos.map(renderLogoCard)}
          </div>

          {/* Bottom Row: 2 logos */}
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 max-w-fit">
            {bottomRowLogos.map(renderLogoCard)}
          </div>
        </div>
      </div>
    </section>
  );
}

