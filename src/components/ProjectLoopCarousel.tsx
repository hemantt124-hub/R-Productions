import React from 'react';
import { Play } from 'lucide-react';
import { PORTFOLIO_PROJECTS, PortfolioItem } from '../data/content';

interface ProjectLoopCarouselProps {
  onSelectProject: (project: PortfolioItem) => void;
}

export const ProjectLoopCarousel: React.FC<ProjectLoopCarouselProps> = ({
  onSelectProject,
}) => {
  // Duplicate projects to create a seamless infinite loop
  const loopItems = [...PORTFOLIO_PROJECTS, ...PORTFOLIO_PROJECTS, ...PORTFOLIO_PROJECTS];

  return (
    <section className="relative py-10 bg-[#0d0d0d] border-y border-[#292929] overflow-hidden">
      {/* Editorial Header Strip */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#A5A5A5] uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C49A55]" />
          <span className="text-white font-semibold">FEATURED REEL</span>
          <span className="text-[#333]">/</span>
          <span>CONTINUOUS PROJECT FEED</span>
        </div>

        <span className="text-[11px] font-mono text-[#777] hidden sm:inline">
          HOVER TO PAUSE · CLICK TO PLAY
        </span>
      </div>

      {/* Infinite Looping Carousel Ribbon */}
      <div className="relative w-full overflow-hidden">
        {/* Left & Right Edge Vignette Fades */}
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-28 bg-gradient-to-r from-[#0d0d0d] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-28 bg-gradient-to-l from-[#0d0d0d] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex gap-6 px-4">
          {loopItems.map((project, index) => (
            <div
              key={`${project.id}-${index}`}
              onClick={() => onSelectProject(project)}
              className="group relative w-72 sm:w-80 md:w-96 shrink-0 bg-[#141414] border border-[#292929] hover:border-[#C49A55] transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Media Thumbnail with Aspect Ratio */}
              <div className="relative aspect-video w-full overflow-hidden bg-black">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />

                {/* Category & Duration Metadata (Unboxed text, strict anti-slop) */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono tracking-widest text-[#e0e0e0] drop-shadow-md">
                  <span className="text-[#C49A55] font-semibold">{project.category}</span>
                  <span>{project.duration}</span>
                </div>

                {/* Center Play Overlay Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#C49A55] text-black flex items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-transform">
                    <Play className="w-4 h-4 fill-black ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Title & Client Snippet */}
              <div className="p-4 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-mono text-[#777] uppercase mb-1">
                    Client: {project.client}
                  </div>
                  <h4 className="font-display text-base sm:text-lg font-bold text-white uppercase truncate group-hover:text-[#C49A55] transition-colors">
                    {project.title}
                  </h4>
                </div>

                <div className="mt-3 pt-3 border-t border-[#222] flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[#A5A5A5]">{project.year}</span>
                  <span className="text-[#C49A55] group-hover:underline">WATCH FILM →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
