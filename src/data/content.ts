export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  summary: string;
  tags: string[];
  deliverables: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'CORPORATE FILMS' | 'ADVERTISEMENTS' | 'DOCUMENTARIES' | 'MUSIC VIDEOS' | 'SHORT FILMS' | 'EVENT FILMS';
  duration: string;
  year: string;
  client: string;
  director: string;
  cinematographer: string;
  specs: string;
  synopsis: string;
  image: string;
  youtubeId?: string;
  youtubeUrl: string;
  featured?: boolean;
}

export interface ProcessStage {
  step: string;
  title: string;
  timeline: string;
  description: string;
  deliverables: string[];
}

export interface WhyUsPoint {
  number: string;
  title: string;
  description: string;
  metric?: string;
}

export const STUDIO_INFO = {
  name: 'R PRODUCTIONS',
  tagline: 'Creating Stories. Building Brands. Delivering Excellence.',
  category: 'Film Production House | Video Production | Post-Production',
  email: 'contact.rproductions@gmail.com',
  phone: '+91 9631627237',
  phoneRaw: '+919631627237',
  youtubeChannel: 'https://youtube.com/@contact.rproductions?si=M53UT1pvvNospOay',
  location: 'Mumbai & Delhi NCR · Serving Pan-India & Global Projects',
  heroImage: '/src/assets/images/hero_cinema_rig_1794402194957.jpg',
  aboutImage: '/src/assets/images/about_director_set_1794402195990.jpg',
  ctaImage: '/src/assets/images/cta_film_soundstage_1794402197344.jpg',
  showreelVideoId: 'eEW2_m_M1QM', // Official R Productions Film Showreel
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'corporate-films',
    number: '01',
    title: 'Corporate Films & Brand Videos',
    summary: 'Executive profiles, institutional stories, and high-impact corporate cinema that elevates market credibility.',
    tags: ['Brand Storytelling', 'Industrial Films', 'CSR Films', 'Corporate Communication'],
    deliverables: [
      'Corporate profile films & company introductions',
      'Brand narrative & executive thought leadership',
      'Industrial plant & manufacturing process films',
      'Internal communication & employee engagement',
      'Training modules & corporate safety compliance',
      'Corporate Social Responsibility (CSR) impact films'
    ]
  },
  {
    id: 'advertising-commercials',
    number: '02',
    title: 'Advertising Films & Commercials',
    summary: 'Broadcast television spots and digital-first commercials designed to captivate audiences and trigger conversion.',
    tags: ['TV Commercials', 'Digital Ads', 'Brand Campaigns', 'Product Cinema'],
    deliverables: [
      'Television commercials (TVC) broadcast grade',
      'High-conversion digital ad campaigns',
      'Hero product launch & reveal films',
      'Multi-platform 360-degree brand campaigns',
      'Targeted social media performance commercials',
      'Influencer partnership commercials & e-commerce showcases'
    ]
  },
  {
    id: 'documentary-films',
    number: '03',
    title: 'Documentary Films',
    summary: 'In-depth non-fiction storytelling exploring social development, culture, human courage, and historical legacies.',
    tags: ['Social Impact', 'Cultural Heritage', 'Human Interest', 'Industrial Docs'],
    deliverables: [
      'Corporate retrospective & founder legacy documentaries',
      'Social development & NGO field impact films',
      'Industrial heritage & infrastructure milestone films',
      'Cultural preservation & anthropological documentaries',
      'Environmental conservation & sustainability films',
      'Human-interest features & educational long-forms'
    ]
  },
  {
    id: 'government-institutional',
    number: '04',
    title: 'Government, PSU & Institutional Films',
    summary: 'Prestigious public-sector films documenting national progress, civic campaigns, and major infrastructure.',
    tags: ['PSU Profiles', 'Civic Awareness', 'Mega-Projects', 'Public Sector'],
    deliverables: [
      'National & state government initiative documentation',
      'Public Sector Undertaking (PSU) corporate films',
      'Mega infrastructure & industrial corridor showcases',
      'Public awareness & civic welfare campaigns',
      'Institutional retrospectives & anniversary films',
      'Project completion & policy impact documentation'
    ]
  },
  {
    id: 'post-production',
    number: '05',
    title: 'Video Editing & Post-Production',
    summary: 'Pristine offline and online editing, industry-grade color finishing, sound design, and master delivery.',
    tags: ['Offline/Online Edit', 'Color Grading', 'Sound Design', 'Mastering'],
    deliverables: [
      'Narrative & commercial offline editorial',
      'DaVinci Resolve ACES colour grading & look development',
      'Dolby Atmos & 5.1 spatial sound design & audio mixing',
      'Custom title sequences, lower thirds, and credit rolls',
      'Audio restoration, clean-up & dialogue leveling',
      'DCI-compliant cinema DCP & web broadcast master exports'
    ]
  },
  {
    id: 'animation-vfx',
    number: '06',
    title: 'Motion Graphics, Animation & Visual Effects',
    summary: 'State-of-the-art 2D/3D animation, photorealistic CGI, product visualization, and cinematic visual effects.',
    tags: ['2D/3D Animation', 'Photoreal CGI', 'VFX Compositing', 'Explainers'],
    deliverables: [
      '2D vector & character animation for brands',
      '3D photorealistic product modeling & visualization',
      'Dynamic motion design & kinetic typography',
      'Brand logo animation & audio-visual idents',
      'Complex technical explainers & infographics',
      'CGI green screen compositing, cleanup & visual effects'
    ]
  },
  {
    id: 'social-media-digital',
    number: '07',
    title: 'Social Media & Digital Content',
    summary: 'High-retention short-form narratives engineered for viral reach across Instagram, YouTube, and digital feeds.',
    tags: ['Shorts & Reels', 'Podcasts', 'Founder Content', 'Series'],
    deliverables: [
      'Instagram Reels & TikTok vertical cinema (9:16)',
      'YouTube main-feed documentaries & YouTube Shorts',
      'High-production multi-cam studio podcast recording',
      'Founder story bites & executive personal branding',
      'Top-of-funnel brand awareness episodic content',
      'Rapid turnaround content packages for events & launches'
    ]
  },
  {
    id: 'music-videos-entertainment',
    number: '08',
    title: 'Music Videos & Entertainment Content',
    summary: 'Stylized, genre-defining music videos, lyric visuals, and artist promotional cinema that define pop culture.',
    tags: ['Music Cinema', 'Artist Branding', 'Lyric Videos', 'Live Sessions'],
    deliverables: [
      'Narrative & performance-based music video production',
      'Cinematic music video offline and rhythmic editing',
      'Artist EP/Album promotional campaigns & teasers',
      'Creative kinetic lyric videos & visualizer loops',
      'Live in-studio acoustic sessions & tour diaries',
      'Entertainment shorts & web pilot episodes'
    ]
  },
  {
    id: 'event-films-weddings',
    number: '09',
    title: 'Event Films & Wedding Videos',
    summary: 'Epic cinematic capture of global conferences, award galas, product reveals, and luxury destination weddings.',
    tags: ['Summits & Galas', 'Product Reveals', 'Wedding Cinema', 'Highlights'],
    deliverables: [
      'International summit & corporate conference coverage',
      'High-energy product launch & exhibition films',
      'Industry award ceremony & gala night reels',
      'Same-day edit (SDE) highlights for rapid publishing',
      'Luxury destination wedding cinematography & films',
      'Multi-camera 4K live streaming & switchboard recording'
    ]
  },
  {
    id: 'healthcare-medical',
    number: '10',
    title: 'Healthcare & Medical Videos',
    summary: 'Accurate, empathetic medical films, surgical technology demonstrations, and hospital capability profiles.',
    tags: ['Hospital Profiles', 'Doctor Stories', 'Patient Education', 'MedTech'],
    deliverables: [
      'Super-specialty hospital & healthcare center profiles',
      'Doctor & chief surgeon professional documentaries',
      'Patient awareness, disease education & empathy films',
      'Medical device & diagnostic product demonstrations',
      'Surgical protocol & clinical training films',
      'Pharma brand campaigns & institutional accreditations'
    ]
  },
  {
    id: 'video-shoot-production',
    number: '11',
    title: 'Professional Video Shoot & Production',
    summary: 'Heavy-duty cinema equipment, seasoned technical crews, lighting setups, and location logistics pan-India.',
    tags: ['ARRI / RED', 'Cinema Lighting', 'Gimbal & Drone', 'Studio Crew'],
    deliverables: [
      'Large-format cinema camera crews (ARRI Alexa, RED, Sony Venice)',
      'Cinematic prime & anamorphic lens packages',
      'High-powered HMI, Tungsten & wireless Aputure LED lighting',
      'Specialized camera movement: Technocrane, Ronin 2, Steadicam',
      'DGCA-licensed aerial drone filming & FPV cinematography',
      'Location scouting, studio soundstage booking & production logistics'
    ]
  },
  {
    id: 'complete-solutions',
    number: '12',
    title: 'Complete Video Production Solutions',
    summary: 'Full-cycle turnkey filmmaking from initial brainstorming and scriptwriting through final screen master.',
    tags: ['Turnkey Production', 'Script to Screen', 'Concept Design', 'End-to-End'],
    deliverables: [
      'Creative strategy, concept generation & treatment pitch',
      'Professional scriptwriting & visual storyboarding',
      'Casting, location management & pre-production planning',
      'Full principal photography execution with senior directors',
      'Complete post-production, VFX, sound & color pipeline',
      'Multi-format localized delivery & broadcast compliance'
    ]
  }
];

export const PORTFOLIO_PROJECTS: PortfolioItem[] = [
  {
    id: 'apex-hypercar-commercial',
    title: 'The Velocity Within — Apex Electric',
    category: 'ADVERTISEMENTS',
    duration: '01:45',
    year: '2026',
    client: 'Apex Automotive Global',
    director: 'Creative Lead, R Productions',
    cinematographer: 'DP Crew, R Productions',
    specs: 'ARRI Alexa Mini LF · Cooke Anamorphic · 4K Master',
    synopsis: 'A high-octane commercial film capturing the raw acceleration, silence, and nocturnal aerodynamic beauty of an electric hypercar navigating wet city boulevards.',
    image: '/src/assets/images/portfolio_commercial_auto_1794402196501.jpg',
    youtubeId: 'eEW2_m_M1QM',
    youtubeUrl: 'https://youtube.com/@contact.rproductions?si=M53UT1pvvNospOay',
    featured: true
  },
  {
    id: 'iron-forge-documentary',
    title: 'Tempered in Fire: The Master Blacksmiths',
    category: 'DOCUMENTARIES',
    duration: '14:20',
    year: '2025',
    client: 'Heritage Arts Foundation',
    director: 'Creative Lead, R Productions',
    cinematographer: 'DP Crew, R Productions',
    specs: 'RED V-Raptor 8K · Leica Summicron-C · ACES Grade',
    synopsis: 'An intimate, visceral documentary celebrating fourth-generation metalworkers preserving centuries-old forging techniques against rapid industrial automation.',
    image: '/src/assets/images/portfolio_documentary_story_1794402197714.jpg',
    youtubeId: 'W0LHTWG-UmQ',
    youtubeUrl: 'https://youtube.com/@contact.rproductions?si=M53UT1pvvNospOay',
    featured: true
  },
  {
    id: 'titan-corporate-anthem',
    title: 'Foundations of Tomorrow — Titan Infrastructure',
    category: 'CORPORATE FILMS',
    duration: '03:15',
    year: '2026',
    client: 'Titan Heavy Industries & Logistics',
    director: 'Senior Director, R Productions',
    cinematographer: 'DP Crew, R Productions',
    specs: 'Sony FX9 + FX3 Multi-Cam · Sony G-Master Primes',
    synopsis: 'A sweeping corporate anthem documenting 20,000 employees, automated container ports, and high-speed rail corridors shaping the nation’s supply chain backbone.',
    image: '/src/assets/images/cta_film_soundstage_1794402197344.jpg',
    youtubeId: 'aqz-KE-bpKQ',
    youtubeUrl: 'https://youtube.com/@contact.rproductions?si=M53UT1pvvNospOay',
    featured: true
  },
  {
    id: 'nocturne-music-video',
    title: 'Midnight Reverie — Studio Live Session',
    category: 'MUSIC VIDEOS',
    duration: '04:12',
    year: '2025',
    client: 'Soundwave Indie Records',
    director: 'Visual Director, R Productions',
    cinematographer: 'DP Crew, R Productions',
    specs: 'Blackmagic URSA 12K · Vintage Atlas Anamorphic',
    synopsis: 'A moody, neon-bathed performance visual capturing an indie ensemble performing live amidst haze, warm tube amplifiers, and dynamic camera choreography.',
    image: '/src/assets/images/about_director_set_1794402195990.jpg',
    youtubeId: 'e-ORhEE9VVg',
    youtubeUrl: 'https://youtube.com/@contact.rproductions?si=M53UT1pvvNospOay'
  },
  {
    id: 'silent-current-short-film',
    title: 'Echoes at Dawn — Narrative Short',
    category: 'SHORT FILMS',
    duration: '09:40',
    year: '2025',
    client: 'Cinema Guild Showcase',
    director: 'R Productions Studio Directorial Team',
    cinematographer: 'DP Crew, R Productions',
    specs: 'ARRI Amira · Zeiss Master Primes · 2.39:1 Scope',
    synopsis: 'An evocative drama about two estranged lighthouse keepers forced to confront unspoken grief during an isolated winter storm off the southern coastline.',
    image: '/src/assets/images/hero_cinema_rig_1794402194957.jpg',
    youtubeId: 'ysz5S6PUM-U',
    youtubeUrl: 'https://youtube.com/@contact.rproductions?si=M53UT1pvvNospOay'
  },
  {
    id: 'global-tech-summit-film',
    title: 'Converge 2026 — World Innovation Gala',
    category: 'EVENT FILMS',
    duration: '02:30',
    year: '2026',
    client: 'International Tech Forum',
    director: 'Live Event Unit, R Productions',
    cinematographer: '6-Camera Field Crew',
    specs: '4K Multi-cam · Ronin 4D Stedicam · Same-Day Cut',
    synopsis: 'Electrifying 3-day highlight reel celebrating 8,000 delegates, visionary keynotes, interactive holograms, and the closing ceremonial gala.',
    image: '/src/assets/images/cta_film_soundstage_1794402197344.jpg',
    youtubeId: 'kJQP7kiw5Fk',
    youtubeUrl: 'https://youtube.com/@contact.rproductions?si=M53UT1pvvNospOay'
  }
];

export const PROCESS_STAGES: ProcessStage[] = [
  {
    step: '01',
    title: 'Concept Development & Creative Planning',
    timeline: 'Week 1',
    description: 'We decode your brand objective, target audience, and core message. Our creative team formulates unique visual concepts, thematic angles, and director treatment decks.',
    deliverables: ['Creative Brief Analysis', 'Director Treatment Deck', 'Moodboards & Visual Style', 'Production Budgeting']
  },
  {
    step: '02',
    title: 'Scriptwriting & Storyboarding',
    timeline: 'Week 1 - 2',
    description: 'Transforming ideas into compelling narrative arcs. We write screenplays, character dialogues, voiceover scripts, and draw frame-by-frame visual storyboards.',
    deliverables: ['Master Screenplay', 'Voiceover Script', 'Visual Storyboard Frames', 'Shot List & Camera Angles']
  },
  {
    step: '03',
    title: 'Pre-Production & Scheduling',
    timeline: 'Week 2 - 3',
    description: 'Comprehensive logistical precision. We cast talent, secure filming permits, scout real locations or build sets, book cinema gear, and create call sheets.',
    deliverables: ['Casting & Audition Tapes', 'Location Scouting & Permits', 'Camera & Grip Equipment Packages', 'Master Shooting Schedule']
  },
  {
    step: '04',
    title: 'Professional Video Shoot',
    timeline: 'Production Days',
    description: 'The magic on set. Directed by experienced cinematographers and commercial directors using large-format cinema cameras, precision gimbals, and cinema lighting.',
    deliverables: ['Full Principal Photography', 'Multi-Angle 4K/8K Footage', 'On-Set Audio Multi-Track Recording', 'DIT Data Redundancy Backups']
  },
  {
    step: '05',
    title: 'Video Editing & Post-Production',
    timeline: 'Week 4',
    description: 'Crafting the rhythm. Our editorial team selects the best takes, establishes pace and emotion, synchronizes dialogue, and constructs the narrative cut.',
    deliverables: ['Assembly Cut Review', 'Rough Cut Iteration', 'Client Feedback Revisions', 'Picture Lock Signoff']
  },
  {
    step: '06',
    title: 'Motion Graphics, Animation & VFX',
    timeline: 'Week 4 - 5',
    description: 'Elevating visuals with cutting-edge motion design, CGI assets, 3D product integration, cleanups, screen replacements, and visual impact effects.',
    deliverables: ['2D/3D Motion Graphics', 'Visual Effects Compositing', 'Product Render Integration', 'Animated Lower Thirds & Titles']
  },
  {
    step: '07',
    title: 'Colour Grading & Sound Design',
    timeline: 'Week 5',
    description: 'Giving the film its emotional soul. DaVinci Resolve color grading creates rich cinematic contrast, while sound engineers mix Foley, music, and spatial audio.',
    deliverables: ['ACES Cinematic Look LUT', 'Shot-by-Shot Color Matching', 'Custom Sound Design & Foley', 'Dolby 5.1 & Stereo Master Audio']
  },
  {
    step: '08',
    title: 'Final Review & Delivery',
    timeline: 'Week 6',
    description: 'Final quality assurance and multi-format delivery. We render broadcast-ready ProRes files, web-optimized versions, social aspect ratios (16:9, 9:16, 1:1), and archives.',
    deliverables: ['Uncompressed ProRes 4444XQ Master', 'Optimized Web MP4 Deliverables', 'Vertical 9:16 Reels / Shorts Cuts', 'Permanent Project Archive Cloud Link']
  }
];

export const WHY_CHOOSE_US: WhyUsPoint[] = [
  {
    number: '01',
    title: 'Creative Storytelling & Visual Excellence',
    description: 'We don’t just capture footage; we craft compelling visual narratives that evoke emotion, establish prestige, and leave unforgettable impressions on audiences.',
    metric: 'Award-Grade Visuals'
  },
  {
    number: '02',
    title: 'Professional Production Capabilities',
    description: 'State-of-the-art cinema camera systems (ARRI, RED, Sony Venice), anamorphic glass, heavy gimbals, drones, and elite lighting soundstages at our fingertips.',
    metric: 'Cinema-Grade Tech'
  },
  {
    number: '03',
    title: 'Complete End-to-End Solutions',
    description: 'From the initial napkin sketch and screenplay to editing, VFX, color grading, and final broadcast delivery — a single seamless creative partner.',
    metric: 'Turnkey Simplicity'
  },
  {
    number: '04',
    title: 'Customized Creative Approaches',
    description: 'No cookie-cutter templates. Every brand, PSU, corporation, and artist receives a bespoke visual treatment engineered for their specific objectives.',
    metric: '100% Bespoke'
  },
  {
    number: '05',
    title: 'Experienced Corporate & Commercial Production',
    description: 'Deep understanding of enterprise compliance, brand guidelines, executive communication, and high-stakes advertising campaign requirements.',
    metric: 'Enterprise Trusted'
  },
  {
    number: '06',
    title: 'Commitment to Quality & Timely Delivery',
    description: 'Rigorous production milestones, transparent scheduling, and an uncompromising dedication to delivering polished masterpieces on schedule.',
    metric: 'On-Time Guaranteed'
  }
];
