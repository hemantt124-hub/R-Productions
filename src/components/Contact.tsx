import React, { useState, useEffect } from 'react';
import { Mail, Phone, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { STUDIO_INFO } from '../data/content';

interface ContactProps {
  selectedServicePreFill?: string;
}

export const Contact: React.FC<ContactProps> = ({ selectedServicePreFill }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectType: 'Corporate Films & Brand Videos',
    details: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedServicePreFill) {
      setFormData((prev) => ({
        ...prev,
        projectType: selectedServicePreFill,
      }));
    }
  }, [selectedServicePreFill]);

  const projectTypes = [
    'Corporate Films & Brand Videos',
    'Advertising Films & Commercials',
    'Documentary Films',
    'Government, PSU & Institutional Films',
    'Video Editing & Post-Production',
    'Motion Graphics, Animation & Visual Effects',
    'Social Media & Digital Content',
    'Music Videos & Entertainment Content',
    'Event Films & Wedding Videos',
    'Healthcare & Medical Videos',
    'Professional Video Shoot & Production',
    'Complete Video Production Solutions',
    'Other / Custom Production Inquiry',
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required.';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required.';
    } else if (formData.phone.trim().length < 7) {
      errs.phone = 'Please enter a valid phone number.';
    }
    if (!formData.details.trim()) {
      errs.details = 'Please briefly describe your project scope or vision.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate frontend validation response
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      projectType: 'Corporate Films & Brand Videos',
      details: '',
    });
    setErrors({});
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#090909] border-t border-[#292929]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Information & Direct Triggers */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 text-xs tracking-widest font-mono text-[#C49A55] uppercase mb-4">
              <span>GET IN TOUCH</span>
              <span className="text-[#292929]">/</span>
              <span>COMMERCIAL & CREATIVE INQUIRIES</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white uppercase mb-4 leading-[1.05]">
              LET'S START A <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#C49A55]">
                CONVERSATION.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#A5A5A5] leading-relaxed mb-8">
              Have a project in mind? Let's discuss how we can turn your ideas into impactful visual stories.
            </p>

            {/* Two Prominent Direct Contact Buttons as requested */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href={`mailto:${STUDIO_INFO.email}`}
                className="flex-1 px-6 py-4 bg-[#141414] hover:bg-[#1f1f1f] border border-[#292929] hover:border-[#C49A55] text-white transition-all flex items-center justify-center gap-3 font-display uppercase tracking-wider text-xs font-semibold group"
              >
                <Mail className="w-4 h-4 text-[#C49A55] group-hover:scale-110 transition-transform" />
                <span>EMAIL US</span>
              </a>

              <a
                href={`tel:${STUDIO_INFO.phoneRaw}`}
                className="flex-1 px-6 py-4 bg-[#141414] hover:bg-[#1f1f1f] border border-[#292929] hover:border-[#C49A55] text-white transition-all flex items-center justify-center gap-3 font-display uppercase tracking-wider text-xs font-semibold group"
              >
                <Phone className="w-4 h-4 text-[#C49A55] group-hover:scale-110 transition-transform" />
                <span>CALL US</span>
              </a>
            </div>

            {/* Direct details cards */}
            <div className="space-y-4 pt-6 border-t border-[#292929] text-sm">
              <div className="flex items-center justify-between py-2 border-b border-[#1c1c1c]">
                <span className="text-xs font-mono text-[#A5A5A5] uppercase">Direct Email</span>
                <a
                  href={`mailto:${STUDIO_INFO.email}`}
                  className="text-white hover:text-[#C49A55] font-mono text-xs transition-colors"
                >
                  {STUDIO_INFO.email}
                </a>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-[#1c1c1c]">
                <span className="text-xs font-mono text-[#A5A5A5] uppercase">Direct Phone</span>
                <a
                  href={`tel:${STUDIO_INFO.phoneRaw}`}
                  className="text-white hover:text-[#C49A55] font-mono text-xs transition-colors"
                >
                  {STUDIO_INFO.phone}
                </a>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-[#1c1c1c]">
                <span className="text-xs font-mono text-[#A5A5A5] uppercase">Headquarters</span>
                <span className="text-[#A5A5A5] text-xs font-mono">{STUDIO_INFO.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Project Enquiry Form */}
          <div className="lg:col-span-7 bg-[#141414] border border-[#292929] p-8 md:p-10 relative">
            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#C49A55]/10 border border-[#C49A55] text-[#C49A55] flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold tracking-wide text-white uppercase mb-2">
                  ENQUIRY RECEIVED
                </h3>
                <p className="text-sm text-[#A5A5A5] max-w-md leading-relaxed mb-6">
                  Thank you, <span className="text-white font-medium">{formData.fullName}</span>. Your project brief for{' '}
                  <span className="text-[#C49A55] font-medium">{formData.projectType}</span> has been reviewed by our production desk.
                </p>
                <div className="text-xs font-mono text-[#777] bg-[#090909] p-4 border border-[#292929] max-w-md w-full text-left mb-8 space-y-1">
                  <div>Status: <span className="text-white">Validation Passed (Frontend Mockup)</span></div>
                  <div>Direct dispatch: <span className="text-white">{formData.email} · {formData.phone}</span></div>
                  <div>Direct response guaranteed within 24 business hours.</div>
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-3 bg-[#090909] hover:bg-black border border-[#292929] text-xs font-display tracking-widest text-[#A5A5A5] hover:text-white uppercase transition-colors"
                >
                  SEND ANOTHER ENQUIRY
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="border-b border-[#292929] pb-4 mb-6">
                  <h3 className="font-display text-2xl font-bold tracking-wide text-white uppercase">
                    PROJECT ENQUIRY
                  </h3>
                  <span className="text-xs text-[#A5A5A5]">
                    Tell us about your upcoming visual campaign or film requirement.
                  </span>
                </div>

                {/* Full Name */}
                <div>
                  <label className="block text-xs font-mono tracking-wider text-[#A5A5A5] uppercase mb-2">
                    Full Name <span className="text-[#C49A55]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Vikram Malhotra"
                    className="w-full bg-[#090909] border border-[#292929] focus:border-[#C49A55] text-white text-sm px-4 py-3 outline-none transition-colors"
                  />
                  {errors.fullName && (
                    <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" /> {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono tracking-wider text-[#A5A5A5] uppercase mb-2">
                      Email Address <span className="text-[#C49A55]">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="vikram@enterprise.com"
                      className="w-full bg-[#090909] border border-[#292929] focus:border-[#C49A55] text-white text-sm px-4 py-3 outline-none transition-colors"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono tracking-wider text-[#A5A5A5] uppercase mb-2">
                      Phone Number <span className="text-[#C49A55]">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#090909] border border-[#292929] focus:border-[#C49A55] text-white text-sm px-4 py-3 outline-none transition-colors"
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" /> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Type of Project (Dropdown) */}
                <div>
                  <label className="block text-xs font-mono tracking-wider text-[#A5A5A5] uppercase mb-2">
                    Type of Project
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-[#090909] border border-[#292929] focus:border-[#C49A55] text-white text-sm px-4 py-3 outline-none transition-colors cursor-pointer"
                  >
                    {projectTypes.map((type) => (
                      <option key={type} value={type} className="bg-[#141414] text-white">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Project Details */}
                <div>
                  <label className="block text-xs font-mono tracking-wider text-[#A5A5A5] uppercase mb-2">
                    Project Details / Vision <span className="text-[#C49A55]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    placeholder="Briefly describe your objectives, intended runtime, timeline, or reference videos..."
                    className="w-full bg-[#090909] border border-[#292929] focus:border-[#C49A55] text-white text-sm p-4 outline-none transition-colors resize-none"
                  />
                  {errors.details && (
                    <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" /> {errors.details}
                    </p>
                  )}
                </div>

                {/* Submit Enquiry Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#C49A55] hover:bg-[#d8b06b] active:scale-98 text-black font-display text-xs sm:text-sm font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="font-mono">VALIDATING ENQUIRY...</span>
                  ) : (
                    <>
                      <span>SUBMIT ENQUIRY</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
