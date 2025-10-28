"use client";

import React, { useState } from "react";
import { Play } from "lucide-react";

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative overflow-hidden bg-blue-50 py-10 lg:py-24">
      {/* Content Container */}
      <div className="container relative z-10 mx-auto flex flex-col items-center px-4 sm:px-6 lg:flex-row lg:justify-between lg:gap-15 lg:px-8">
        {/* Left Column: Text Content */}
        <div className="mb-12 text-center lg:mb-0 lg:w-1/2 lg:text-left">
          <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 md:text-5xl lg:text-5xl">
            Salesforce for SMBs
            <br />
            <span className="text-blue-500">Now at Special </span>
            <br />
            <span className="text-blue-500">Pricing</span>
          </h1>
          <p className="mb-6 text-lg text-gray-700">
            For the first time, Salesforce India is making it easier than ever
            for Indian SMBs to compete – and win.
          </p>
          <p className="mb-8 text-lg text-gray-700">
            For a limited time, get{" "}
            <span className="font-bold">40% off our flagship solutions</span> –
            Sales Cloud, Service Cloud, and Marketing Cloud – along with
            fast-track implementation packages, to go live in just 2 weeks.
          </p>
          <a
            href="/learn-more"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-8 py-3 text-lg font-semibold text-white shadow-md transition-colors hover:bg-blue-700"
          >
            Know more
          </a>
        </div>

        {/* Right Column: Video/Image Container */}
        <div className="w-full lg:w-1/2">
          <div className="relative overflow-hidden rounded-lg bg-white p-6 shadow-2xl">
            {!isPlaying ? (
              <>
                {/* Thumbnail image */}
                <img
                  src="https://placehold.co/700x400/0070d2/white?text=Video+Thumbnail&font=inter"
                  alt="Salesforce offer video thumbnail"
                  width={700}
                  height={400}
                  className="rounded-md w-full h-auto"
                />

                {/* Overlay with Play Button */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="group flex h-16 w-16 items-center justify-center rounded-full bg-white/30 text-white backdrop-blur-sm transition-all hover:bg-white/50 hover:scale-105"
                    aria-label="Play video"
                  >
                    <Play className="h-8 w-8 fill-current text-white group-hover:text-blue-500" />
                  </button>
                </div>
              </>
            ) : (
              // Video replaces the thumbnail once play is clicked
              <video
                controls
                autoPlay
                className="rounded-md w-full h-auto"
                poster="https://placehold.co/700x400/0070d2/white?text=Video+Thumbnail&font=inter"
              >
                <source src="/videos/salesforce-offer.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
