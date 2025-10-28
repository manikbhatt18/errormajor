"use client";

import React from 'react';

// --- ProductCard Component ---
interface ProductCardProps {
  title: string;
  description: string;
  link: string;
  bgImageSrc: string; // Path to the unique background image for the card header
}

function ProductCard({ title, description, link, bgImageSrc }: ProductCardProps) {
  return (
    <div className="relative overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Card Header with Background Image */}
      <div
        className="h-40 w-full rounded-t-lg bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImageSrc})` }}
        role="img"
        aria-label={`${title} background illustration`}
      >
        {/* Potentially add an SVG icon here if it overlays the background image */}
        {/* For now, it's just the background image itself */}
      </div>

      {/* Card Content */}
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold text-gray-900">{title}</h3>
        <p className="mb-4 text-gray-700">{description}</p>
        <a href={link} className="text-blue-600 hover:text-blue-800 text-sm font-semibold transition-colors">
          Learn more &rarr;
        </a>
      </div>
    </div>
  );
}

// --- End of ProductCard Component ---


export default function ProductsGrid() {
  // Define your product data
  const products = [
    {
      title: 'Small Business',
      description: 'Sales, service, and email outreach tools in a single app.',
      link: '/small-business',
      // Placeholder: Replace with paths to your actual background images for each card
      bgImageSrc: '/shopiconbg.webp', 
    },
    {
      title: 'Sales Cloud',
      description: 'Close more deals and speed up growth with the #1 CRM.',
      link: '/sales-cloud',
      bgImageSrc: '/saleiconbg.webp',
    },
    {
      title: 'Service Cloud',
      description: 'Make customers happy faster and build loyalty with Service Cloud.',
      link: '/service-cloud',
      bgImageSrc: '/hearticonbg.webp',
    },
    {
      title: 'Marketing Cloud',
      description: 'Build customer relationships for life with data-first digital marketing.',
      link: '/marketing-cloud',
      bgImageSrc: '/marketingiconbg.webp',
    },
  ];

  return (
    <section className="bg-gray-50 py-16 lg:py-24"> {/* Changed background to a subtle gray */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <h2 className="mb-12 text-center text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
          Learn what Salesforce products can do for 
          <br />
          you.
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.title}
              title={product.title}
              description={product.description}
              link={product.link}
              bgImageSrc={product.bgImageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}