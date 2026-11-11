import React from 'react';
import { Sparkles, Camera, Layers, Palette, Briefcase, Clock } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/content';

export const WhyChooseUs: React.FC = () => {
  const iconMap = [
    Sparkles,
    Camera,
    Layers,
    Palette,
    Briefcase,
    Clock,
  ];

  return (
    <section className="py-24 md:py-32 bg-[#090909] border-t border-[#292929]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 text-xs tracking-widest font-mono text-[#C49A55] uppercase mb-4">
            <span>THE R PRODUCTIONS ADVANTAGE</span>
            <span className="text-[#292929]">/</span>
            <span>PROVEN EXCELLENCE</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white uppercase mb-4">
            WHY WORK WITH US?
          </h2>

          <p className="text-base sm:text-lg text-[#A5A5A5] leading-relaxed">
            We believe every project deserves a unique creative approach. Our focus is on delivering meaningful visual experiences that connect with audiences and create lasting impressions.
          </p>
        </div>

        {/* 6 Core Strengths Grid (3x2 editorial layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#292929] border border-[#292929]">
          {WHY_CHOOSE_US.map((item, idx) => {
            const Icon = iconMap[idx] || Sparkles;

            return (
              <div
                key={item.number}
                className="bg-[#141414] p-8 md:p-10 flex flex-col justify-between hover:bg-[#181818] transition-colors duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display text-2xl font-bold text-[#C49A55] tabular-nums">
                      {item.number}
                    </span>
                    <Icon className="w-5 h-5 text-[#A5A5A5] group-hover:text-[#C49A55] transition-colors" />
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold tracking-wide text-white uppercase mb-4 leading-snug group-hover:text-[#C49A55] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A5A5A5] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {item.metric && (
                  <div className="pt-6 mt-6 border-t border-[#292929] flex items-center justify-between text-xs font-mono">
                    <span className="text-[#A5A5A5]">Studio Standard</span>
                    <span className="text-[#C49A55] font-semibold">{item.metric}</span>
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
