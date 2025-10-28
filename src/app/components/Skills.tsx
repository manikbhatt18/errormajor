"use client";

import React from 'react';
// import LearningCard from './LearningCard'; // Removed import, component is now in this file

// --- LearningCard Component ---
interface LearningCardProps {
  title: string;
  description: string;
  link: string;
  iconSrc: string; // Path to the module's icon image
}

function LearningCard({ title, description, link, iconSrc }: LearningCardProps) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Icon */}
      <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50">
        <img
          src={iconSrc}
          alt={`${title} icon`}
          width={48}
          height={48}
          className="h-12 w-12 object-contain"
          onError={(e) => (e.currentTarget.src = 'https://placehold.co/48x48/ddeeff/333333?text=Icon')}
        />
      </div>

      {/* "Module" Tag */}
      <span className="mb-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase text-blue-800">
        Module
      </span>

      {/* Title */}
      <h3 className="mb-2 text-xl font-bold text-gray-900">{title}</h3>

      {/* Description */}
      <p className="mb-4 text-gray-700 text-sm">{description}</p>

      {/* Start Learning Link */}
      <a href={link} className="text-blue-600 hover:text-blue-800 text-sm font-semibold transition-colors">
        Start learning &rarr;
      </a>
    </div>
  );
}
// --- End of LearningCard Component ---


export default function Skills() {
  // Define your learning module data
  const learningModules = [
    {
      title: 'Salesforce Values: Quick Look',
      description: 'Learn how Salesforce helps your business build stronger relationships with your customers.',
      link: '/trailhead/salesforce-values',
      iconSrc: '/quicklookicon.webp', // Placeholder, replace with your icon
    },
    {
      title: 'Salesforce CRM',
      description: 'Learn how to use customer relationship management (CRM) software to grow your business.',
      link: '/trailhead/salesforce-crm',
      iconSrc: '/crmicon.webp', // Placeholder
    },
    {
      title: 'Sales Cloud Basics',
      description: 'Grow your business, boost productivity, and make smart decisions with Sales Cloud.',
      link: '/trailhead/sales-cloud-basics',
      iconSrc: '/cloudbasicsicon.webp', // Placeholder
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <h2 className="mb-4 text-center text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
          Learn valuable skills for free, with Trailhead.
        </h2>

        {/* Description */}
        <p className="mb-12 max-w-2xl text-center text-lg text-gray-700 mx-auto">
          Follow guided learning paths and get hands-on to learn Salesforce, digital, and soft
          skills from anywhere.
        </p>

        {/* Learning Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {learningModules.map((module) => (
            <LearningCard
              key={module.title} // Unique key for list rendering
              title={module.title}
              description={module.description}
              link={module.link}
      iconSrc={module.iconSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

