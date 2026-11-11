import React, { useState } from 'react';
import { Play, ExternalLink, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_PROJECTS, PortfolioItem, STUDIO_INFO } from '../data/content';

interface PortfolioProps {
  onSelectProject: (project: PortfolioItem) => void;
}

type CategoryFilter =
  | 'ALL'
  | 'CORPORATE FILMS'
  | 'ADVERTISEMENTS'
  | 'DOCUMENTARIES'
  | 'MUSIC VIDEOS'
  | 'SHORT FILMS'
  | 'EVENT FILMS';

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('ALL');

  const categories: CategoryFilter[] = [
    'ALL',
    'CORPORATE FILMS',
    'ADVERTISEMENTS',
    'DOCUMENTARIES',
    'MUSIC VIDEOS',
    'SHORT FILMS',
    'EVENT FILMS',
  ];

  const filteredProjects =
    activeCategory === 'ALL'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="py-24 md:py-32 bg-[#090909] border-t border-[#292929]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-xs tracking-widest font-mono text-[#C49A55] uppercase mb-4">
              <span>PORTFOLIO & SHOWCASE</span>
              <span className="text-[#292929]">/</span>
              <span>CINEMATIC ARCHIVE</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white uppercase mb-4">
              SELECTED WORK
            </h2>

            <p className="text-base sm:text-lg text-[#A5A5A5] leading-relaxed">
              Every frame tells a story. Explore our creative world through films, campaigns, and visual productions.
            </p>
          </div>

          {/* Quick link out to official YouTube Channel */}
          <a
            href={STUDIO_INFO.youtubeChannel}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#C49A55] hover:text-white uppercase font-display shrink-0 group transition-colors"
          >
            <span>OFFICIAL YOUTUBE CHANNEL</span>
            <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Category Filters (Clean functional buttons without garish candy badges) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none border-b border-[#292929]">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2.5 text-xs font-semibold tracking-wider uppercase font-display whitespace-nowrap shrink-0 transition-colors duration-200 border ${
                activeCategory === cat
                  ? 'bg-[#C49A55] text-black border-[#C49A55]'
                  : 'bg-transparent text-[#A5A5A5] border-[#292929] hover:border-white/40 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project: PortfolioItem) => (
            <div
              key={project.id}
              className="group relative flex flex-col bg-[#141414] border border-[#292929] hover:border-[#C49A55]/60 transition-all duration-300 overflow-hidden"
            >
              {/* Media Thumbnail Container with Play Overlay */}
              <div
                className="relative aspect-video w-full overflow-hidden bg-black cursor-pointer"
                onClick={() => onSelectProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Floating Category & Duration Metadata (Unboxed text) */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono tracking-widest text-[#d0d0d0] drop-shadow-md">
                  <span className="text-[#C49A55] font-semibold">{project.category}</span>
                  <span>{project.duration}</span>
                </div>

                {/* Center Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-14 h-14 rounded-full bg-black/70 border border-[#C49A55]/60 text-[#C49A55] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#C49A55] group-hover:text-black transition-all duration-300 shadow-xl">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Corner Technical Indicator */}
                <div className="absolute bottom-3 right-3 text-[10px] font-mono text-[#A5A5A5] bg-black/70 px-2 py-0.5 border border-white/10">
                  {project.year}
                </div>
              </div>

              {/* Card Information */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="text-xs font-mono text-[#A5A5A5] mb-1">
                    Client: {project.client}
                  </div>
                  <h3
                    onClick={() => onSelectProject(project)}
                    className="font-display text-xl sm:text-2xl font-bold tracking-wide text-white uppercase hover:text-[#C49A55] transition-colors cursor-pointer mb-3 leading-snug"
                  >
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A5A5A5] line-clamp-2 leading-relaxed mb-4">
                    {project.synopsis}
                  </p>
                </div>

                {/* Card Footer Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-[#292929] text-xs">
                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className="font-display tracking-widest uppercase text-[#C49A55] hover:text-white font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>PLAY FILM</span>
                    <span>→</span>
                  </button>

                  <a
                    href={project.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#A5A5A5] hover:text-white flex items-center gap-1 transition-colors"
                    title="Watch on YouTube"
                  >
                    <span className="font-mono text-[11px]">YouTube</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action for YouTube Channel */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-6 p-8 bg-[#141414] border border-[#292929] max-w-3xl mx-auto">
            <div className="text-left">
              <h4 className="font-display text-xl font-bold text-white uppercase mb-1">
                WANT TO SEE MORE CLIENT PRODUCTIONS?
              </h4>
              <p className="text-xs sm:text-sm text-[#A5A5A5]">
                Browse our entire video catalog, behind-the-scenes reels, and full-length films.
              </p>
            </div>
            <a
              href={STUDIO_INFO.youtubeChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 text-xs font-bold tracking-widest text-black bg-[#C49A55] hover:bg-[#d8b06b] active:scale-95 transition-all duration-200 font-display uppercase whitespace-nowrap shrink-0 inline-flex items-center gap-2"
            >
              <span>EXPLORE MORE ON YOUTUBE</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
