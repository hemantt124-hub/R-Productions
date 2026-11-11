import React from 'react';
import { ArrowRight } from 'lucide-react';
import { STUDIO_INFO } from '../data/content';

interface FinalCTAProps {
  onStartConversation: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onStartConversation }) => {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden border-t border-[#292929]">
      {/* Background Soundstage Image with Dark Scrims */}
      <div className="absolute inset-0 z-0">
        <img
          src={STUDIO_INFO.ctaImage}
          alt="R Productions Soundstage Lighting and Production Setup"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/80 to-[#090909]/80" />
        <div className="absolute inset-0 film-grain opacity-40 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-3 text-xs tracking-widest font-mono text-[#C49A55] uppercase mb-6">
          <span>START YOUR PRODUCTION</span>
          <span className="text-[#333]">/</span>
          <span>PAN-INDIA & WORLDWIDE</span>
        </div>

        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white uppercase leading-[0.95] mb-6 text-balance">
          HAVE A STORY <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#C49A55]">
            WORTH TELLING?
          </span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-[#A5A5A5] leading-relaxed max-w-2xl mb-10 text-balance">
          Whether you need a corporate film, advertisement, documentary, music video, or complete video production solution, R Productions is ready to bring your vision to life.
        </p>

        <button
          type="button"
          onClick={onStartConversation}
          className="px-8 sm:px-10 py-4 sm:py-5 text-xs sm:text-sm font-bold tracking-widest text-black bg-[#C49A55] hover:bg-[#d8b06b] active:scale-95 transition-all duration-200 font-display uppercase inline-flex items-center gap-3 group shadow-2xl"
        >
          <span>LET'S CREATE SOMETHING EXCEPTIONAL</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
        </button>
      </div>
    </section>
  );
};
