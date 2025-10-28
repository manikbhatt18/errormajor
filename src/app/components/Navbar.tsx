"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Globe,
  User,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

// Reusable component for Nav Links
const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition-colors"
  >
    {children}
  </Link>
);

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Products", href: "/products" },
    { name: "Industries", href: "/industries" },
    { name: "Customers", href: "/customers" },
    { name: "Learning", href: "/learning" },
    { name: "Support", href: "/support" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-10 lg:py-4">
        <div className="flex h-16 items-center justify-between">
          {/* ====== Left Side: Logo & Nav Links ====== */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <Image
                src="/salesforce.svg"
                alt="Salesforce Logo"
                width={120}
                height={80}
                className="w-[50px] sm:w-[50px] md:w-[50px] h-auto"
                priority
                />
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden items-center space-x-6 lg:flex font-semibold">
              {navItems.map((item) => (
                <NavLink key={item.name} href={item.href}>
                  {item.name}
                </NavLink>
              ))}
              <button className="flex items-center text-lg font-semibold text-gray-700 hover:text-blue-600">
                More
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
          </div>

          {/* ====== Right Side: Actions ====== */}
          <div className="flex items-center space-x-5">
            {/* Agentforce Search Box */}
            {/* <button className="hidden items-center space-x-2 rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-600 shadow-sm hover:border-gray-400 lg:flex">
              <Sparkles className="h-5 w-5 text-purple-500" />
              <span>Ask Agentforce anything</span>
            </button> */}

            {/* Contact Info */}
            <div className="hidden text-right text-xs text-gray-600 md:block">
              <div className="font-semibold text-lg text-gray-700 hover:text-blue-600">
                <a href="tel:18004207332">Contact Us</a>
              </div>
              <div>1800-420-7332</div>
            </div>

            {/* Globe Icon */}
            <button className="hidden p-2 text-gray-600 hover:text-blue-600 sm:block">
              <span className="sr-only">Change Region</span>
              <Globe className="h-5 w-5" />
            </button>

            {/* Login */}
            <Link
              href="/login"
              className="hidden items-center space-x-1 text-lg font-semibold text-gray-600 hover:text-blue-600 sm:flex"
            >
              <User className="h-5 w-5" />
              <span>Login</span>
            </Link>

            {/* Try for free Button */}
            <Link
              href="/signup"
              className="ml-2 rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700 hover:text-white!"
            >
              Try for free
            </Link>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-600"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ====== Mobile Menu Dropdown ====== */}
      {isMobileMenuOpen && (
        <div
          className="absolute w-full border-t border-gray-200 bg-white shadow-lg lg:hidden"
          id="mobile-menu"
        >
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/more"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
            >
              More
            </Link>
          </div>
          {/* Mobile-specific action links */}
          <div className="border-t border-gray-200 px-2 pb-3 pt-3">
            <Link
              href="/login"
              className="flex w-full items-center space-x-2 rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
            >
              <User className="h-5 w-5" />
              <span>Login</span>
            </Link>
            <div className="mt-2 px-3 text-xs text-gray-600">
              <div className="font-medium text-black">
                <a href="tel:18004207332">Contact Us</a>
              </div>
              <div>1800-420-7332</div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
