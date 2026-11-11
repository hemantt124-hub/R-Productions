import React from 'react';
import { ExternalLink, ArrowUp } from 'lucide-react';
import { STUDIO_INFO } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Our Work', href: '#work' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#090909] border-t border-[#292929] text-[#A5A5A5] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-[#292929]">
          {/* Brand & Tagline */}
          <div className="md:col-span-5 flex flex-col items-start">
            <span className="font-display text-3xl font-bold tracking-widest text-white mb-3">
              {STUDIO_INFO.name}
            </span>
            <p className="text-sm text-[#C49A55] font-display uppercase tracking-widest mb-4">
              {STUDIO_INFO.tagline}
            </p>
            <p className="text-xs text-[#777] max-w-sm leading-relaxed mb-6">
              {STUDIO_INFO.category}. High-impact visual narratives engineered for brands, institutions, and visionary creators across India and globally.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <span className="font-mono text-xs tracking-widest text-[#C49A55] uppercase block mb-4">
              QUICK NAVIGATION
            </span>
            <ul className="space-y-2.5 text-xs font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors uppercase tracking-wider font-display"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & Official Channel */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs tracking-widest text-[#C49A55] uppercase block mb-4">
                STUDIO INQUIRIES
              </span>
              <div className="space-y-2 text-xs font-mono">
                <div>
                  <a
                    href={`mailto:${STUDIO_INFO.email}`}
                    className="text-white hover:text-[#C49A55] transition-colors"
                  >
                    {STUDIO_INFO.email}
                  </a>
                </div>
                <div>
                  <a
                    href={`tel:${STUDIO_INFO.phoneRaw}`}
                    className="text-white hover:text-[#C49A55] transition-colors"
                  >
                    {STUDIO_INFO.phone}
                  </a>
                </div>
                <div className="text-[#777] pt-1">
                  {STUDIO_INFO.location}
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a
                href={STUDIO_INFO.youtubeChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-[#C49A55] hover:text-white transition-colors"
              >
                <span>YouTube: @contact.rproductions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#666]">
          <div>
            © 2026 R Productions. All Rights Reserved.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[#A5A5A5] hover:text-[#C49A55] transition-colors uppercase tracking-wider text-[11px]"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
