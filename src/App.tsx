import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FinalCTA } from './components/FinalCTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { ProjectLoopCarousel } from './components/ProjectLoopCarousel';
import { PortfolioItem, STUDIO_INFO } from './data/content';

export default function App() {
  const [activeProject, setActiveProject] = useState<PortfolioItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [servicePreFill, setServicePreFill] = useState<string>('');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePlayShowreel = () => {
    // Open the official 2026 Showreel in the Cinema Modal
    setActiveProject({
      id: 'rproductions-showreel-2026',
      title: 'R Productions 2026 Master Showreel',
      category: 'ADVERTISEMENTS',
      duration: '01:45',
      year: '2026',
      client: 'R Productions Studio',
      director: 'Creative Directorial Desk',
      cinematographer: 'DP Ensemble',
      specs: 'ARRI Alexa Mini LF · RED V-Raptor · ACES Color Master',
      synopsis: 'A high-impact montage of commercial campaigns, corporate anthems, industrial narratives, and music visuals filmed across India and international soundstages.',
      image: STUDIO_INFO.heroImage,
      youtubeId: STUDIO_INFO.showreelVideoId,
      youtubeUrl: STUDIO_INFO.youtubeChannel,
      featured: true,
    });
    setIsModalOpen(true);
  };

  const handleSelectProject = (project: PortfolioItem) => {
    setActiveProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setActiveProject(null);
  };

  const handleSelectServiceForInquiry = (serviceTitle: string) => {
    setServicePreFill(serviceTitle);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#090909] text-white flex flex-col font-sans selection:bg-[#C49A55] selection:text-black">
      {/* Sticky Top Navigation */}
      <Navbar onContactClick={() => scrollToSection('contact')} />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onPlayShowreel={handlePlayShowreel}
          onExploreWork={() => scrollToSection('work')}
          onStartProject={() => scrollToSection('contact')}
        />

        {/* 2. Continuous Looping Projects Carousel */}
        <ProjectLoopCarousel onSelectProject={handleSelectProject} />

        {/* 3. About R Productions */}
        <About onDiscoverApproach={() => scrollToSection('process')} />

        {/* 3. Our Services (Numbered Editorial List with Expandable Drawers) */}
        <Services onSelectServiceForInquiry={handleSelectServiceForInquiry} />

        {/* 4. Featured Work / Portfolio with Filters & YouTube Integration */}
        <Portfolio onSelectProject={handleSelectProject} />

        {/* 5. Production Methodology / Timeline */}
        <Process />

        {/* 6. Why Choose R Productions */}
        <WhyChooseUs />

        {/* 7. Dramatic Final Call To Action */}
        <FinalCTA onStartConversation={() => scrollToSection('contact')} />

        {/* 8. Contact Section & Project Enquiry Form */}
        <Contact selectedServicePreFill={servicePreFill} />
      </main>

      {/* 9. Minimalist Studio Footer */}
      <Footer />

      {/* Dark Cinema Modal for Video Playback & Specs */}
      <VideoModal
        project={activeProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
