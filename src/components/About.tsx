import React from 'react';
import { ArrowRight, Film, Sliders, Sparkles } from 'lucide-react';
import { STUDIO_INFO } from '../data/content';

interface AboutProps {
  onDiscoverApproach: () => void;
}

export const About: React.FC<AboutProps> = ({ onDiscoverApproach }) => {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#090909] border-t border-[#292929]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Subtle Section Pre-Kicker */}
        <div className="flex items-center gap-3 text-xs tracking-widest font-mono text-[#C49A55] uppercase mb-4">
          <span>ABOUT R PRODUCTIONS</span>
          <span className="text-[#292929]">/</span>
          <span>ESTABLISHED FILM HOUSE</span>
        </div>

        {/* 2-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Cinematic Production Photograph */}
          <div className="lg:col-span-6 relative group">
            <div className="relative overflow-hidden border border-[#292929] bg-[#141414]">
              <img
                src={STUDIO_INFO.aboutImage}
                alt="R Productions Film Director and Cinematographer on Set"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Cinematic Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              {/* Editorial Technical Stamp */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono tracking-widest text-[#A5A5A5] bg-black/60 backdrop-blur-md px-3 py-2 border border-white/10">
                <span className="text-[#C49A55]">R·PROD ON-SET DISCIPLINE</span>
                <span>ACES COLOR · RAW CAPTURE</span>
              </div>
            </div>

            {/* Subtle Gold Accent Corner Marker */}
            <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#C49A55] pointer-events-none" />
          </div>

          {/* Right Column: Heading, Introduction, Philosophy */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Visual Highlight Quote */}
            <div className="mb-4">
              <span className="font-display text-sm md:text-base tracking-widest text-[#C49A55] uppercase font-bold">
                IDEAS INTO STORIES. STORIES INTO IMPACT.
              </span>
            </div>

            {/* Gold Accent Line */}
            <div className="w-16 h-[2px] bg-[#C49A55] mb-6" />

            {/* Section Heading */}
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase leading-[1.05] text-balance mb-6">
              MORE THAN JUST VIDEO. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#C49A55]">
                WE CREATE EXPERIENCES.
              </span>
            </h2>

            {/* Editorial Body Content */}
            <div className="space-y-4 text-[#A5A5A5] text-base md:text-lg leading-relaxed mb-8">
              <p>
                R Productions is a professional video production and post-production company dedicated to creating impactful visual content for brands, businesses, institutions, and organizations.
              </p>
              <p>
                We combine creative storytelling, technical expertise, and cinematic visuals to deliver high-quality content that communicates effectively and strengthens brand identity.
              </p>
              <p>
                From concept development and production to editing and final delivery, we provide comprehensive video solutions tailored to our clients' needs.
              </p>
            </div>

            {/* 3 Pillar Micro Badges without pills (clean unboxed typographic markers) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full py-6 border-y border-[#292929] mb-8">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-white font-display text-sm uppercase">
                  <Film className="w-4 h-4 text-[#C49A55]" />
                  <span>Cinematic Vision</span>
                </div>
                <span className="text-xs text-[#A5A5A5]">High-concept direction & cinematography</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-white font-display text-sm uppercase">
                  <Sliders className="w-4 h-4 text-[#C49A55]" />
                  <span>Master Post-Prod</span>
                </div>
                <span className="text-xs text-[#A5A5A5]">In-house editorial, VFX & ACES grading</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-white font-display text-sm uppercase">
                  <Sparkles className="w-4 h-4 text-[#C49A55]" />
                  <span>Pan-India Reach</span>
                </div>
                <span className="text-xs text-[#A5A5A5]">Full-crew deployments nationwide</span>
              </div>
            </div>

            {/* Discover Our Approach CTA */}
            <button
              type="button"
              onClick={onDiscoverApproach}
              className="inline-flex items-center gap-3 px-6 py-3.5 text-xs font-semibold tracking-widest text-black bg-[#C49A55] hover:bg-[#d8b06b] active:scale-95 transition-all duration-200 font-display uppercase group"
            >
              <span>DISCOVER OUR APPROACH</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
