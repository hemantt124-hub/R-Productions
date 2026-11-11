import React, { useState } from 'react';
import { ChevronDown, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/content';

interface ServicesProps {
  onSelectServiceForInquiry: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForInquiry }) => {
  // Allow toggling an expanded service drawer (first service open by default)
  const [expandedId, setExpandedId] = useState<string | null>('corporate-films');

  const toggleService = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-[#090909] border-t border-[#292929]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 text-xs tracking-widest font-mono text-[#C49A55] uppercase mb-4">
            <span>OUR EXPERTISE</span>
            <span className="text-[#292929]">/</span>
            <span>12 FULL-SPECTRUM DISCIPLINES</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white uppercase mb-4">
            WHAT WE DO
          </h2>

          <p className="text-base sm:text-lg text-[#A5A5A5] leading-relaxed">
            Complete creative production solutions, from the first idea to the final frame.
          </p>
        </div>

        {/* Editorial Numbered List with Expandable Drawers */}
        <div className="border-t border-[#292929] divide-y divide-[#292929]">
          {SERVICES.map((service: ServiceItem) => {
            const isExpanded = expandedId === service.id;

            return (
              <div
                key={service.id}
                className={`transition-colors duration-300 ${
                  isExpanded ? 'bg-[#141414]/70' : 'hover:bg-[#141414]/30'
                }`}
              >
                {/* Main Row / Header Button */}
                <button
                  type="button"
                  onClick={() => toggleService(service.id)}
                  className="w-full py-7 px-4 md:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4 text-left group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C49A55]"
                  aria-expanded={isExpanded}
                >
                  {/* Left: Large Editorial Number + Service Title */}
                  <div className="flex items-baseline md:items-center gap-6 md:gap-10">
                    <span className="font-display text-2xl md:text-3xl font-bold text-[#C49A55] tabular-nums">
                      {service.number}
                    </span>
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold tracking-wide text-white group-hover:text-[#C49A55] transition-colors">
                        {service.title}
                      </h3>
                      {/* Quiet Unboxed Metadata Tags */}
                      <div className="flex flex-wrap items-center gap-2 text-xs text-[#A5A5A5] mt-1.5 font-sans">
                        {service.tags.map((tag, idx) => (
                          <React.Fragment key={tag}>
                            <span>{tag}</span>
                            {idx < service.tags.length - 1 && (
                              <span className="text-[#3a3a3a]" aria-hidden="true">
                                ·
                              </span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Summary Preview & Accordion Indicator */}
                  <div className="flex items-center justify-between md:justify-end gap-6 md:max-w-md shrink-0">
                    <p className="hidden lg:block text-xs text-[#A5A5A5] text-right line-clamp-2">
                      {service.summary}
                    </p>
                    <div
                      className={`w-9 h-9 border border-[#292929] flex items-center justify-center text-[#A5A5A5] group-hover:text-white group-hover:border-[#C49A55] transition-transform duration-300 ${
                        isExpanded ? 'rotate-180 text-[#C49A55] border-[#C49A55]' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </button>

                {/* Expanded Drawer Details */}
                {isExpanded && (
                  <div className="px-4 md:px-8 pb-8 pt-2">
                    <div className="pl-0 md:pl-16 border-l-0 md:border-l border-[#C49A55]/30">
                      <p className="text-sm md:text-base text-[#d0d0d0] leading-relaxed mb-6 max-w-3xl">
                        {service.summary}
                      </p>

                      <div className="mb-6">
                        <span className="text-xs font-mono tracking-widest text-[#C49A55] uppercase block mb-3">
                          KEY DELIVERABLES & CAPABILITIES
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                          {service.deliverables.map((item) => (
                            <div
                              key={item}
                              className="flex items-start gap-2 text-xs md:text-sm text-[#A5A5A5] bg-[#090909] p-3 border border-[#292929]"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#C49A55] shrink-0 mt-0.5" />
                              <span className="leading-snug">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Inquire CTA */}
                      <button
                        type="button"
                        onClick={() => onSelectServiceForInquiry(service.title)}
                        className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#C49A55] hover:text-white uppercase font-display group transition-colors"
                      >
                        <span>INQUIRE ABOUT THIS SERVICE</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
