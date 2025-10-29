"use client";

import React from 'react';
// Imports for Next.js Image and Link are removed.
import { 
  ExternalLink, 
  Globe, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube, 
  type LucideIcon 
} from 'lucide-react';

// --- DATA MOVED INSIDE Footer.tsx ---
// This data was previously in ../data/footerLinks

interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

interface SocialLink {
  href: string;
  icon: LucideIcon;
  label: string;
}

const socialLinks: SocialLink[] = [
  { href: '#', icon: Facebook, label: 'Facebook' },
  { href: '#', icon: Twitter, label: 'Twitter' },
  { href: '#', icon: Linkedin, label: 'LinkedIn' },
  { href: '#', icon: Instagram, label: 'Instagram' },
  { href: '#', icon: Youtube, label: 'YouTube' },
];

const newToSalesforceLinks: NavLink[] = [
  { label: 'Why Salesforce', href: '#' },
  { label: 'What is CRM?', href: '#' },
  { label: 'Explore All Products', href: '#' },
  { label: 'SaaS', href: '#' },
  { label: 'Customer Success', href: '#' },
  { label: 'Product Pricing', href: '#' },
];

const aboutSalesforceLinks: NavLink[] = [
  { label: 'Our Story', href: '#' },
  { label: 'Careers', href: '#' },
  { label: 'Press', href: '#', external: true },
  { label: 'Blog', href: '#', external: true },
  { label: 'Security and Performance', href: '#', external: true },
  { label: 'Salesforce.org', href: '#', external: true },
  { label: 'Best CRM Software', href: '#' },
  { label: 'Sustainability', href: '#', external: true },
  { label: 'Legal', href: '#', external: true },
  { label: 'Give us your Feedback', href: '#' },
];

const popularLinks: NavLink[] = [
  { label: 'New Release Features', href: '#', external: true },
  { label: 'Salesforce Mobile App', href: '#' },
  { label: 'Business App Store', href: '#', external: true },
  { label: 'Dreamforce', href: '#', external: true },
  { label: 'CRM Software', href: '#' },
  { label: 'Salesforce Plus', href: '#', external: true },
  { label: 'Salesforce for startups', href: '#', external: true },
];

const legalLinks: NavLink[] = [
  { label: 'Legal', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Privacy', href: '#' },
  { label: 'Responsible Disclosure', href: '#' },
  { label: 'Trust', href: '#' },
  { label: 'Contact', href: '#' },
  { label: 'Cookie Preferences', href: '#' },
  { label: 'Your Privacy Choices', href: '#' },
];

// --- END OF MOVED DATA ---


// A helper component to render link columns consistently
const FooterLinkColumn: React.FC<{ title: string; links: NavLink[] }> = ({ title, links }) => (
  <div>
    <h3 className="mb-4 text-lg font-semibold text-gray-800">{title}</h3>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.label}>
          {/* Replaced next/link with <a> tag */}
          <a 
            href={link.href} 
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener noreferrer' : undefined}
            className="group inline-flex items-center text-sm text-gray-600 hover:text-blue-600 hover:underline"
          >
            {link.label}
            {link.external && (
              <ExternalLink size={14} className="ml-1 opacity-50 transition-opacity group-hover:opacity-100" />
            )}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-white">
      {/* Top Section: Links Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Column 1: Logo, Social, and Contact */}
          <div className="space-y-6">
            {/* Replaced next/link with <a> tag */}
            <a href="/">
              {/* Replaced next/image with <img> tag */}
              <img 
                src="/salesforce.svg" // Use your logo path
                alt="Salesforce Logo" 
                width={100} 
                height={70}
                className="w-[50px] sm:w-[50px] md:w-[50px] h-auto"
                onError={(e) => (e.currentTarget.src = 'https://placehold.co/100x70/1D9BF0/FFFFFF?text=Logo')}
              />
            </a>
            <div className="flex space-x-4 mt-20">
              {socialLinks.map((social) => (
                // Replaced next/link with <a> tag
                <a 
                  key={social.label} 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-gray-500 hover:text-blue-600"
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
            <div className="text-sm text-gray-600">
              <p>Call us at 1800-420-7332</p>
            </div>
          </div>
          
          {/* Column 2: New to Salesforce? */}
          <FooterLinkColumn title="New to Salesforce?" links={newToSalesforceLinks} />

          {/* Column 3: About Salesforce */}
          <FooterLinkColumn title="About Salesforce" links={aboutSalesforceLinks} />

          {/* Column 4: Popular Links */}
          <FooterLinkColumn title="Popular Links" links={popularLinks} />
          
        </div>
      </div>

      {/* Bottom Section: Legal & Copyright */}
      <div 
        className="py-8 text-white" 
        style={{ backgroundColor: '#032D60' }} // Salesforce dark blue
      >
        <div className="container mx-auto flex flex-col items-center justify-between px-4 sm:px-6 lg:flex-row lg:px-8">
          
          {/* Left Side: Legal Links */}
          <div className="mb-6 flex flex-wrap justify-center gap-x-4 gap-y-2 lg:mb-0 lg:justify-start">
            <button className="flex items-center text-sm text-gray-300 hover:text-white">
              <Globe size={20} className="mr-2" />
              Worldwide
            </button>
            {legalLinks.map((link) => (
              // Replaced next/link with <a> tag
              <a 
                key={link.label}
                href={link.href}
                className="text-sm text-gray-300 hover:text-white hover:underline"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Side: Copyright */}
          <div className="text-center text-xs text-gray-400 lg:text-right">
            <p>&copy; Copyright 2025 Salesforce, Inc. All rights reserved.</p>
            <p>Various trademarks held by their respective owners.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

