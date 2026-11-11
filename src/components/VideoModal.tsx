import React, { useEffect } from 'react';
import { X, ExternalLink, Film, Clock, User, Camera, Calendar } from 'lucide-react';
import { PortfolioItem, STUDIO_INFO } from '../data/content';

interface VideoModalProps {
  project: PortfolioItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ project, isOpen, onClose }) => {
  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-xl animate-fade-in"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        className="relative w-full max-w-6xl max-h-[92vh] overflow-y-auto bg-[#0e0e0e] border border-[#292929] shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar inside modal */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#292929] bg-[#141414]">
          <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#A5A5A5]">
            <span className="text-[#C49A55] font-semibold">{project.category}</span>
            <span>/</span>
            <span>{project.year}</span>
            <span>/</span>
            <span>{project.duration}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-[#A5A5A5] hover:text-white p-1 hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C49A55]"
            aria-label="Close Cinema Viewer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Area */}
        <div className="relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden border-b border-[#292929]">
          {project.youtubeId ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${project.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
              title={project.title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="relative w-full h-full">
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-6 text-center">
                <Film className="w-12 h-12 text-[#C49A55] mb-4" />
                <h4 className="font-display text-xl text-white uppercase mb-2">
                  Official Studio Release
                </h4>
                <p className="text-sm text-[#A5A5A5] max-w-md mb-6">
                  Experience this project in full 4K resolution on the official R Productions YouTube channel.
                </p>
                <a
                  href={project.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#C49A55] text-black font-display text-xs font-semibold tracking-widest uppercase hover:bg-[#d8b06b] transition-colors"
                >
                  <span>WATCH ON YOUTUBE</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Project Metadata & Specifications Details */}
        <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#0e0e0e]">
          {/* Left: Title, Synopsis, Actions */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-white uppercase mb-3">
                {project.title}
              </h3>
              <p className="text-sm sm:text-base text-[#d0d0d0] leading-relaxed mb-6">
                {project.synopsis}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#292929]">
              <a
                href={STUDIO_INFO.youtubeChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C49A55] text-black font-display text-xs font-bold tracking-widest uppercase hover:bg-[#d8b06b] transition-colors"
              >
                <span>OPEN R PRODUCTIONS CHANNEL</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <span className="text-xs font-mono text-[#A5A5A5]">
                Channel: @contact.rproductions
              </span>
            </div>
          </div>

          {/* Right: Technical Production Credits & Specs */}
          <div className="lg:col-span-4 bg-[#141414] p-5 border border-[#292929] flex flex-col gap-4 text-xs font-mono">
            <span className="text-[#C49A55] font-display text-sm uppercase tracking-widest border-b border-[#292929] pb-2 font-bold">
              PROJECT SPECIFICATIONS
            </span>

            <div className="flex items-center justify-between py-1 border-b border-[#222]">
              <span className="text-[#A5A5A5] flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#C49A55]" /> Client
              </span>
              <span className="text-white text-right font-medium">{project.client}</span>
            </div>

            <div className="flex items-center justify-between py-1 border-b border-[#222]">
              <span className="text-[#A5A5A5] flex items-center gap-1.5">
                <Film className="w-3.5 h-3.5 text-[#C49A55]" /> Direction
              </span>
              <span className="text-white text-right">{project.director}</span>
            </div>

            <div className="flex items-center justify-between py-1 border-b border-[#222]">
              <span className="text-[#A5A5A5] flex items-center gap-1.5">
                <Camera className="w-3.5 h-3.5 text-[#C49A55]" /> Camera / DP
              </span>
              <span className="text-white text-right">{project.cinematographer}</span>
            </div>

            <div className="flex items-center justify-between py-1 border-b border-[#222]">
              <span className="text-[#A5A5A5] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#C49A55]" /> Runtime
              </span>
              <span className="text-white text-right">{project.duration}</span>
            </div>

            <div className="flex items-center justify-between py-1 border-b border-[#222]">
              <span className="text-[#A5A5A5] flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#C49A55]" /> Released
              </span>
              <span className="text-white text-right">{project.year}</span>
            </div>

            <div className="pt-2">
              <span className="text-[#A5A5A5] block mb-1">Optics & Tech Specs:</span>
              <span className="text-[#C49A55] leading-relaxed block">{project.specs}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
