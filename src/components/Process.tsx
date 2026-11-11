import React, { useState } from 'react';
import { Check, Clock, ChevronRight } from 'lucide-react';
import { PROCESS_STAGES, ProcessStage } from '../data/content';

export const Process: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<number>(0);
  const activeStage: ProcessStage = PROCESS_STAGES[selectedStep];

  return (
    <section id="process" className="py-24 md:py-32 bg-[#090909] border-t border-[#292929]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 text-xs tracking-widest font-mono text-[#C49A55] uppercase mb-4">
            <span>OUR METHODOLOGY</span>
            <span className="text-[#292929]">/</span>
            <span>8-STAGE PRODUCTION PIPELINE</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white uppercase mb-4">
            FROM CONCEPT TO SCREEN
          </h2>

          <p className="text-base sm:text-lg text-[#A5A5A5] leading-relaxed">
            Every masterpiece is born through meticulous preparation, creative boldness, and technical discipline.
          </p>
        </div>

        {/* Desktop Interactive Stepper Navigation (Horizontal Timeline) */}
        <div className="hidden lg:grid grid-cols-8 gap-2 mb-12 border-b border-[#292929] pb-4">
          {PROCESS_STAGES.map((stage, idx) => {
            const isActive = selectedStep === idx;
            const isCompleted = selectedStep > idx;

            return (
              <button
                key={stage.step}
                type="button"
                onClick={() => setSelectedStep(idx)}
                className={`text-left p-3 border-t-2 transition-all duration-200 focus-visible:outline-none ${
                  isActive
                    ? 'border-[#C49A55] bg-[#141414]'
                    : isCompleted
                    ? 'border-white/40 hover:border-white/80'
                    : 'border-[#292929] hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-display text-lg font-bold tabular-nums ${
                      isActive ? 'text-[#C49A55]' : 'text-[#A5A5A5]'
                    }`}
                  >
                    {stage.step}
                  </span>
                  {isCompleted && <Check className="w-3.5 h-3.5 text-[#C49A55]" />}
                </div>
                <div
                  className={`text-xs font-display tracking-wide uppercase line-clamp-2 leading-tight ${
                    isActive ? 'text-white font-bold' : 'text-[#A5A5A5]'
                  }`}
                >
                  {stage.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Spotlight Box (Desktop) */}
        <div className="hidden lg:block bg-[#141414] border border-[#292929] p-8 md:p-12 mb-16 relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-radial from-[#C49A55]/10 to-transparent pointer-events-none" />

          <div className="grid grid-cols-12 gap-8 items-start">
            <div className="col-span-7">
              <div className="flex items-center gap-4 text-xs font-mono text-[#C49A55] mb-3">
                <span className="font-bold text-lg tabular-nums">STAGE {activeStage.step} OF 08</span>
                <span className="text-[#333]">|</span>
                <span className="flex items-center gap-1.5 text-[#A5A5A5]">
                  <Clock className="w-3.5 h-3.5 text-[#C49A55]" />
                  Typical Timeline: {activeStage.timeline}
                </span>
              </div>

              <h3 className="font-display text-3xl font-bold tracking-wide text-white uppercase mb-4">
                {activeStage.title}
              </h3>

              <p className="text-base text-[#d0d0d0] leading-relaxed mb-6">
                {activeStage.description}
              </p>

              {/* Prev / Next Stepper Controls */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  disabled={selectedStep === 0}
                  onClick={() => setSelectedStep((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 text-xs font-mono tracking-wider uppercase border border-[#292929] text-[#A5A5A5] hover:text-white hover:border-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
                >
                  ← PREVIOUS STAGE
                </button>
                <button
                  type="button"
                  disabled={selectedStep === PROCESS_STAGES.length - 1}
                  onClick={() => setSelectedStep((prev) => Math.min(PROCESS_STAGES.length - 1, prev + 1))}
                  className="px-4 py-2 text-xs font-mono tracking-wider uppercase bg-[#C49A55] text-black font-semibold hover:bg-[#d8b06b] disabled:opacity-30 disabled:pointer-events-none transition-colors flex items-center gap-1"
                >
                  <span>NEXT STAGE</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="col-span-5 bg-[#090909] p-6 border border-[#292929]">
              <span className="font-mono text-xs tracking-widest text-[#C49A55] uppercase block mb-4">
                STAGE DELIVERABLES
              </span>
              <ul className="space-y-3">
                {activeStage.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-xs text-[#d0d0d0]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C49A55] mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Vertical Timeline */}
        <div className="lg:hidden space-y-6">
          {PROCESS_STAGES.map((stage) => (
            <div
              key={stage.step}
              className="bg-[#141414] border border-[#292929] p-6 relative"
            >
              <div className="flex items-center justify-between text-xs font-mono text-[#C49A55] mb-2">
                <span className="font-bold text-base tabular-nums">STAGE {stage.step}</span>
                <span className="text-[#A5A5A5]">{stage.timeline}</span>
              </div>
              <h3 className="font-display text-xl font-bold text-white uppercase mb-2">
                {stage.title}
              </h3>
              <p className="text-xs text-[#A5A5A5] leading-relaxed mb-4">
                {stage.description}
              </p>
              <div className="pt-3 border-t border-[#292929]">
                <span className="text-[10px] font-mono tracking-widest text-[#C49A55] uppercase block mb-2">
                  DELIVERABLES:
                </span>
                <div className="flex flex-wrap gap-2 text-[11px] text-[#A5A5A5]">
                  {stage.deliverables.map((item, idx) => (
                    <span key={item}>
                      {item}
                      {idx < stage.deliverables.length - 1 && ' · '}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
