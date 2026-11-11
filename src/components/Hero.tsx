import React, { useState } from 'react';
import { ArrowRight, Volume2, VolumeX, Maximize2 } from 'lucide-react';
import { STUDIO_INFO } from '../data/content';

interface HeroProps {
  onPlayShowreel: () => void;
  onExploreWork: () => void;
  onStartProject: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onPlayShowreel,
  onExploreWork,
  onStartProject,
}) => {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 px-6 md:px-12 bg-black"
    >
      {/* Background Video Layer with YouTube Embed (eEW2_m_M1QM) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Poster Fallback Image */}
        <img
          src={STUDIO_INFO.heroImage}
          alt="R Productions Background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 filter brightness-50"
        />

        {/* Scaled YouTube Iframe Background */}
        <div className="absolute inset-0 flex items-center justify-center">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/eEW2_m_M1QM?autoplay=1&mute=${
              isMuted ? '1' : '0'
            }&loop=1&playlist=eEW2_m_M1QM&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&disablekb=1&fs=0`}
            title="R Productions Hero Video"
            className="w-[125vw] h-[125vh] min-w-[177.77vh] min-h-[56.25vw] object-cover scale-110 pointer-events-none opacity-85"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>

        {/* Cinematic Scrim & Vignette Overlays for Maximum Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-black/40 to-black/70 pointer-events-none" />
        <div className="absolute inset-0 bg-radial from-transparent via-black/30 to-[#090909]/90 pointer-events-none" />
        <div className="absolute inset-0 film-grain opacity-40 pointer-events-none" />
      </div>

      {/* Cinematic Viewfinder Technical Framing */}
      <div className="absolute inset-8 md:inset-14 border border-white/5 pointer-events-none z-10 hidden sm:block">
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#C49A55]/40" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#C49A55]/40" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#C49A55]/40" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#C49A55]/40" />

        <div className="absolute top-4 left-6 flex items-center gap-3 text-[11px] font-mono tracking-widest text-[#A5A5A5]/80">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-ping inline-block" />
          <span>REC</span>
          <span className="text-white/40">|</span>
          <span>eEW2_m_M1QM</span>
          <span className="text-white/40">|</span>
          <span>4K CINEMA</span>
        </div>
      </div>

      {/* Hero Video Controls (Audio Toggle & Full Theater Mode) */}
      <div className="absolute bottom-8 right-8 z-20 flex items-center gap-3">
        <button
          type="button"
          onClick={() => setIsMuted(!isMuted)}
          className="p-3 bg-[#141414]/80 hover:bg-[#1a1a1a] border border-[#292929] hover:border-[#C49A55] text-white transition-colors backdrop-blur-md flex items-center gap-2 text-xs font-mono"
          title={isMuted ? 'Unmute video audio' : 'Mute video audio'}
        >
          {isMuted ? (
            <>
              <VolumeX className="w-4 h-4 text-[#A5A5A5]" />
              <span className="hidden sm:inline text-[10px] uppercase tracking-wider text-[#A5A5A5]">
                UNMUTE
              </span>
            </>
          ) : (
            <>
              <Volume2 className="w-4 h-4 text-[#C49A55]" />
              <span className="hidden sm:inline text-[10px] uppercase tracking-wider text-[#C49A55]">
                AUDIO ON
              </span>
            </>
          )}
        </button>

        <button
          type="button"
          onClick={onPlayShowreel}
          className="p-3 bg-[#141414]/80 hover:bg-[#1a1a1a] border border-[#292929] hover:border-[#C49A55] text-white transition-colors backdrop-blur-md flex items-center gap-2 text-xs font-mono"
          title="Open Theater Cinema Mode"
        >
          <Maximize2 className="w-4 h-4 text-[#C49A55]" />
          <span className="hidden sm:inline text-[10px] uppercase tracking-wider">
            THEATER MODE
          </span>
        </button>
      </div>

      {/* Minimalist Hero Content: Headline + Exactly 2 Buttons */}
      <div className="relative z-20 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Minimalist Studio Brand Kicker */}
        <div className="text-xs md:text-sm font-mono tracking-[0.3em] text-[#C49A55] uppercase mb-4">
          R PRODUCTIONS · FILM HOUSE
        </div>

        {/* Minimalist Large Cinematic Title */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white uppercase leading-[0.95] text-balance mb-10">
          WE CREATE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#C49A55]">
            VISUAL STORIES.
          </span>
        </h1>

        {/* Exactly 2 Buttons: Explore Our Work & Start a Project */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            type="button"
            onClick={onExploreWork}
            className="w-full sm:w-auto px-8 md:px-10 py-4 text-xs md:text-sm font-semibold tracking-widest text-black bg-[#C49A55] hover:bg-[#d8b06b] active:scale-95 transition-all duration-200 font-display uppercase flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>EXPLORE OUR WORK</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            type="button"
            onClick={onStartProject}
            className="w-full sm:w-auto px-8 md:px-10 py-4 text-xs md:text-sm font-semibold tracking-widest text-white bg-transparent hover:bg-white/10 border border-white/30 hover:border-white active:scale-95 transition-all duration-200 font-display uppercase flex items-center justify-center cursor-pointer"
          >
            START A PROJECT
          </button>
        </div>
      </div>
    </section>
  );
};
