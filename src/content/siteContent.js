import { assetPath } from '../utils/assetPath';

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const stats = [
  { value: '1997', label: 'building interactive experiences since' },
  { value: '200+', label: 'games and digital experiences delivered' },
  { value: '100+', label: 'organizations served' },
];

export const clients = [
  { name: 'Home Team Academy Singapore',                logo: '/images/clients/hta.png' },
  { name: 'Health Promotion Board',                     logo: '/images/clients/hpb.png' },
  { name: 'Land Transport Authority',                   logo: '/images/clients/lta.svg' },
  { name: 'Ministry of Defence Singapore',              logo: '/images/clients/mindef.png' },
  { name: 'Ministry of Education',                      logo: '/images/clients/moe.svg' },
  { name: 'Ministry of Health',                         logo: '/images/clients/moh.svg' },
  { name: 'National Environment Agency',                logo: '/images/clients/nea.png' },
  { name: 'Ngee Ann Polytechnic',                       logo: '/images/clients/np.png' },
  { name: 'Royal Singapore Air Force',                  logo: '/images/clients/rsaf.svg' },
  { name: 'Singapore General Hospital',                 logo: '/images/clients/sgh.svg' },
  { name: 'Singapore Immigration and Checkpoints Authority', logo: '/images/clients/ica.svg' },
  { name: 'Singapore Prison Service',                   logo: '/images/clients/sps.png' },
  { name: 'Singapore Urban Redevelopment Authority',    logo: '/images/clients/ura.svg' },
  { name: 'Singapore Telecommunications (Singtel)',     logo: '/images/clients/singtel.svg' },
  { name: 'Smart Nation Singapore',                     logo: '/images/clients/smartnation.png' },
  { name: 'StarHub',                                    logo: '/images/clients/starhub.svg' },
  { name: 'Tan Tock Seng Hospital',                     logo: '/images/clients/ttsh.png' },
  { name: 'Workforce Singapore',                        logo: '/images/clients/wsg.png' },
].map((client) => ({
  ...client,
  logo: assetPath(client.logo),
}));

export const sectors = [
  { name: 'Education',   description: 'Universities, polytechnics, schools, and professional training environments.' },
  { name: 'Healthcare',  description: 'Hospitals, health agencies, clinical training, and patient education programs.' },
  { name: 'Government',  description: 'Public sector agencies, defence, and national engagement initiatives.' },
  { name: 'Enterprise',  description: 'Corporate learning, internal communications, and workforce development.' },
];

export const processSteps = [
  {
    title: 'Discover',
    description:
      'Define the audience, objectives, constraints, and the behavior or knowledge change the experience needs to support.',
  },
  {
    title: 'Design',
    description:
      'Shape the learning flow, interaction model, story, interface, and success criteria before production begins.',
  },
  {
    title: 'Build',
    description:
      'Produce the visuals, content, systems, and interactive experience across web, mobile, or immersive platforms.',
  },
  {
    title: 'Validate',
    description:
      'Test with users, refine the experience, and improve clarity, usability, and learning effectiveness.',
  },
  {
    title: 'Launch',
    description:
      'Deploy, support, and evolve the product after release based on audience needs and operational realities.',
  },
];

export const services = [
  {
    slug: 'vr-ar',
    shortLabel: 'VR/AR',
    title: 'VR/AR Experiences',
    heroImage: '/images/case-studies/smart-nation-cityscape.png',
    tagline: 'Immersive experiences that make complex ideas easier to understand.',
    summary:
      'Playtivate designs immersive experiences that help people visualize, explore, and practice in ways that traditional formats cannot support effectively.',
    problems: [
      'Explaining structures, systems, or environments in 3D.',
      'Helping learners practice in safer simulated settings.',
      'Increasing engagement in museums, exhibitions, or public spaces.',
      'Guiding users through interactive, place-based experiences.',
    ],
    offerings: [
      'VR training simulations',
      'AR learning applications',
      'Immersive guided experiences',
      'Interactive installations',
      'Unity-based cross-device experiences',
    ],
    platforms:
      'We build VR/AR experiences for devices such as Meta Quest, mobile platforms, and custom interactive setups depending on audience and deployment requirements.',
    cta: 'Discuss a VR/AR Project',
  },
  {
    slug: 'e-learning',
    shortLabel: 'E-Learning',
    title: 'E-Learning Solutions',
    heroImage: '/images/case-studies/secondary-school-chinese-digital-interactive-resources.png',
    tagline: 'Digital learning experiences built for clarity, participation, and scale.',
    summary:
      'Playtivate creates e-learning content that moves beyond passive screens, using interaction, media, and structure to keep learners engaged and help key concepts stick.',
    problems: [
      'Low engagement in conventional online lessons.',
      'Need for curriculum-aligned digital learning content.',
      'Self-paced learning across web and tablet environments.',
      'Richer digital support for classroom or blended learning.',
    ],
    offerings: [
      'Interactive learning modules',
      'Animated learning content',
      'HTML5 learning activities',
      'Scenario-based lessons',
      'LMS-ready digital resources',
    ],
    platforms:
      'Outputs can be delivered for web, tablet, LMS environments, and blended learning programs that need scalable digital content.',
    cta: 'Discuss an E-Learning Project',
  },
  {
    slug: 'serious-games',
    shortLabel: 'Serious Games',
    title: 'Serious Games',
    heroImage: '/images/case-studies/gallery/captains-of-lives-super-challenge-2.png',
    tagline: 'Applied games designed to improve learning, practice, and decision-making.',
    summary:
      'Playtivate develops serious games that turn formal content into active participation, helping people learn through challenge, feedback, progression, and consequence.',
    problems: [
      'Improving knowledge retention in training environments.',
      'Creating safe practice for real-world scenarios.',
      'Increasing motivation and completion.',
      'Reinforcing concepts through challenge and feedback.',
    ],
    offerings: [
      'Training games',
      'Simulation games',
      'Curriculum-aligned educational games',
      'Challenge-based learning journeys',
      'Gamified systems with milestones, badges, and progression',
    ],
    platforms:
      'Experiences can be designed for web, desktop, mobile, and blended training environments with analytics and progression built in where needed.',
    cta: 'Discuss a Serious Game',
  },
];

const buildCaseStudyGallery = (slug, count, extension = 'png') =>
  Array.from(
    { length: count },
    (_, index) => `/images/case-studies/gallery/${slug}-${index + 1}.${extension}`,
  );

export const caseStudies = [
  {
    slug: 'sinus-vrse',
    title: 'Sinus VRse',
    category: 'VR/AR',
    sector: 'Healthcare',
    serviceSlug: 'vr-ar',
    client: 'Singapore General Hospital',
    image: '/images/case-studies/sinus-vrse.png',
    gallery: buildCaseStudyGallery('sinus-vrse', 5),
    summary:
      'An immersive VR training experience that helps healthcare personnel understand complex sinus anatomy in 3D.',
    challenge:
      'Healthcare personnel needed a more intuitive way to study paranasal sinus anatomy and identify difficult structures and anatomical variants beyond traditional 2D references.',
    solution:
      'Playtivate developed a Unity-based VR learning environment for Meta Quest devices that allows users to explore anatomy spatially and reinforce theoretical understanding through immersion.',
    highlights: [
      'Immersive anatomy exploration in 3D',
      'Designed for Otorhinolaryngology doctors and healthcare personnel',
      'Supports multi-resolution delivery on Meta Quest devices',
    ],
    platforms: 'Unity 3D, Meta Quest VR',
    outcome:
      'The experience makes complex anatomical relationships easier to grasp and gives healthcare learners a more engaging virtual environment for understanding spatial detail.',
    featured: true,
  },
  {
    slug: 'ar-heart',
    title: 'AR Heart',
    category: 'VR/AR',
    sector: 'Healthcare',
    serviceSlug: 'vr-ar',
    client: 'Ngee Ann Polytechnic',
    image: '/images/case-studies/ar-heart.png',
    gallery: buildCaseStudyGallery('ar-heart', 6),
    summary:
      'An AR learning application that helps nursing students visualize the cardiovascular system and connect theory with clinical understanding.',
    challenge:
      'Students needed a clearer way to visualize the internal structure of the heart, blood flow, and physiological processes in the anatomy and physiology curriculum.',
    solution:
      'Playtivate built an augmented reality application with guided learning activities around coronary circulation and heart cycle concepts to support applied understanding.',
    highlights: [
      'Two structured learning activities',
      'Three levels in each activity',
      'Supports understanding of anatomy, physiology, ECG correlation, and auscultation landmarks',
    ],
    platforms: 'Mobile AR application',
    outcome:
      'The application helps students connect theoretical teaching to visual practice and increases interest in a complex healthcare topic.',
  },
  {
    slug: 'location-based-learning-journey',
    title: 'Location-Based Learning Journey',
    category: 'E-Learning',
    sector: 'Education',
    serviceSlug: 'e-learning',
    client: 'Ministry of Education',
    image: '/images/case-studies/location-based-learning-journey.png',
    gallery: buildCaseStudyGallery('location-based-learning-journey', 10),
    summary:
      'A place-based interactive journey that combines cultural learning, exploration, and puzzle solving.',
    challenge:
      'The project needed to help students engage more deeply with Chinatown and its heritage through an experience that felt exploratory rather than instructional.',
    solution:
      'Playtivate designed a self-guided interactive learning journey where students unlock clues, solve puzzles, and progress through physical locations as they learn.',
    highlights: [
      'Self-guided location-based gameplay',
      'Puzzle and clue progression',
      'Built around cultural and historical discovery',
    ],
    platforms: 'Interactive mobile learning journey',
    outcome:
      'Students engage more actively with heritage content through movement, interaction, and discovery.',
  },
  {
    slug: 'secondary-school-chinese-digital-interactive-resources',
    title: 'Secondary School Chinese Digital Interactive Resources',
    category: 'E-Learning',
    sector: 'Education',
    serviceSlug: 'e-learning',
    client: 'Ministry of Education',
    image: '/images/case-studies/secondary-school-chinese-digital-interactive-resources.png',
    gallery: buildCaseStudyGallery('secondary-school-chinese-digital-interactive-resources', 10),
    summary:
      'A large-scale digital learning library with more than 90 interactive Chinese learning resources for secondary students.',
    challenge:
      'The Ministry of Education needed engaging digital resources to help secondary students improve reading and writing skills in ways that were accessible and motivating.',
    solution:
      'Playtivate created a broad library of activities using animation, voice, role-play, map-based tasks, and interactive exercises for use on desktop and mobile through the Student Learning Space.',
    highlights: [
      'More than 90 learning resources',
      'Interactive games, lessons, and animations',
      'Supports reading, writing, vocabulary, and creative expression',
    ],
    platforms: 'Desktop and mobile web, Student Learning Space',
    outcome:
      'Students receive more flexible and varied practice through digital resources that support classroom and self-paced learning.',
    featured: true,
  },
  {
    slug: 'pre-university-chinese-subjects-animation',
    title: 'Pre-University Chinese Subjects Animations',
    category: 'E-Learning',
    sector: 'Education',
    serviceSlug: 'e-learning',
    client: 'Ministry of Education',
    image: '/images/case-studies/pre-university-chinese-subjects-animation.png',
    gallery: buildCaseStudyGallery('pre-university-chinese-subjects-animation', 8),
    summary:
      'Animated educational content designed to deepen understanding of advanced Chinese language concepts and culture.',
    challenge:
      'Pre-university learners required richer media content that could support A-Level Chinese study while making advanced topics easier to absorb.',
    solution:
      'Playtivate handled storyboarding, visual creation, animation, and voice-over production to build engaging animated content tailored to pre-university learners.',
    highlights: [
      'End-to-end animation production',
      'Designed for advanced Chinese language learning',
      'Combines concept explanation with cultural appreciation',
    ],
    platforms: 'Digital learning content and animation',
    outcome:
      'The content supports deeper subject understanding through structured, high-quality visual storytelling.',
  },
  {
    slug: 'english-html5-games',
    title: 'Primary and Secondary School English Learning Games',
    category: 'E-Learning',
    sector: 'Education',
    serviceSlug: 'e-learning',
    client: 'Ministry of Education',
    image: '/images/case-studies/english-html5-games.png',
    gallery: buildCaseStudyGallery('english-html5-games', 7),
    summary:
      'A collection of curriculum-aligned HTML5 learning games designed to make English learning more interactive and memorable.',
    challenge:
      'The content needed to help students practice literacy, grammar, vocabulary, and comprehension in more engaging digital formats.',
    solution:
      'Playtivate developed a series of browser-based learning games covering storytelling, spelling, vocabulary, decision-making, and practical concept reinforcement.',
    highlights: [
      'HTML5 browser-based accessibility',
      'Curriculum-aligned learning game formats',
      'Supports desktop and tablet use',
    ],
    platforms: 'HTML5 web applications',
    outcome:
      'Students can access flexible, repeatable learning activities that make English concepts more active and accessible.',
  },
  {
    slug: 'science-gallery-tour',
    title: 'Science Gallery Tour',
    category: 'E-Learning',
    sector: 'Education',
    serviceSlug: 'e-learning',
    client: 'Ministry of Education',
    image: '/images/case-studies/science-gallery-tour.png',
    gallery: buildCaseStudyGallery('science-gallery-tour', 6),
    summary:
      'An HTML5 virtual gallery walkthrough that turns historical content into an interactive role-playing learning experience for secondary students.',
    challenge:
      'The project needed a more immersive format for helping Secondary One students explore historical figures and content beyond static classroom presentation.',
    solution:
      'Playtivate developed an isometric virtual gallery experience where students navigate the environment, uncover learning content through exploration, and record narrated walkthroughs as part of the activity.',
    highlights: [
      'HTML5 virtual gallery walkthrough',
      'Interactive role-playing structure for historical discovery',
      'On-screen narration activity that encourages creative reflection',
    ],
    platforms: 'HTML5 web experience',
    outcome:
      'The experience makes history content more participatory and gives students a stronger sense of agency as they explore, interpret, and present what they learn.',
  },
  {
    slug: 'city-planning-game',
    title: 'City Planning Game',
    category: 'Serious Games',
    sector: 'Education',
    serviceSlug: 'serious-games',
    client: 'Ministry of Education',
    image: '/images/case-studies/city-planning-game.png',
    gallery: buildCaseStudyGallery('city-planning-game', 9),
    summary:
      'A game-based learning experience where students build virtual cities, justify planning decisions, and present their thinking.',
    challenge:
      'The project needed to blend language learning with reflection, decision-making, and creative expression in a format that secondary students would actively engage with.',
    solution:
      'Playtivate built an HTML5 city-building game where students customize maps, place amenities, and explain the reasoning behind their decisions as part of class learning.',
    highlights: [
      'Drag-and-drop city planning interactions',
      'Decision-making and reflection built into gameplay',
      'Integrated with Chinese language classroom presentation',
    ],
    platforms: 'HTML5 web game',
    outcome:
      'The game encourages active participation and helps students turn abstract learning goals into visible choices and discussion.',
  },
  {
    slug: 'interprofessional-collaborative-practice',
    title: 'Interprofessional Collaborative Practice',
    category: 'Serious Games',
    sector: 'Healthcare',
    serviceSlug: 'serious-games',
    client: 'Ngee Ann Polytechnic',
    image: '/images/case-studies/interprofessional-collaborative-practice.png',
    gallery: buildCaseStudyGallery('interprofessional-collaborative-practice', 6),
    summary:
      'A healthcare training game that prepares nursing students to work effectively in interprofessional teams and patient-centered environments.',
    challenge:
      'Nursing students needed practice in collaborative communication and problem-solving before entering real clinical teams where coordination across professions is critical.',
    solution:
      'Playtivate built a scenario-based game for diploma nursing students, supported by a backend CMS that allows lecturers to manage dialogue content and monitor learner performance data.',
    highlights: [
      'Focused on interprofessional teamwork and communication',
      'Backend CMS for lecturer-managed dialogue content',
      'Student records and play data tracked for monitoring',
    ],
    platforms: 'Interactive healthcare training game with CMS backend',
    outcome:
      'The project gives nursing students a more practical way to rehearse collaborative care behaviors while providing educators with visibility into learner progress.',
  },
  {
    slug: 'virtual-hospital-3',
    title: 'Virtual Hospital 3',
    category: 'Serious Games',
    sector: 'Healthcare',
    serviceSlug: 'serious-games',
    client: 'Ngee Ann Polytechnic',
    image: '/images/case-studies/virtual-hospital-3.png',
    gallery: buildCaseStudyGallery('virtual-hospital-3', 6),
    summary:
      'A nursing simulation game that applies theory to virtual practice and tracks learner performance over time.',
    challenge:
      'Nursing students needed a more interactive way to practice diagnosis, response, and decision-making before applying those skills in real environments.',
    solution:
      'Playtivate developed a courseware game that simulates patient conditions, tracks player records in the backend, and encourages repeated practice through competition and bonus modes.',
    highlights: [
      'Virtual nursing practice scenarios',
      'Backend registration of student data and play records',
      'Leaderboards and bonus modes to encourage repeat participation',
    ],
    platforms: 'Interactive courseware application',
    outcome:
      'Students gain a more engaging route into clinical decision-making while educators benefit from trackable performance data.',
  },
  {
    slug: 'captains-of-lives-super-challenge',
    title: 'Captains of Lives Super Challenge',
    category: 'Serious Games',
    sector: 'Government',
    serviceSlug: 'serious-games',
    client: 'Singapore Prison Service',
    image: '/images/case-studies/captains-of-lives-super-challenge.png',
    gallery: buildCaseStudyGallery('captains-of-lives-super-challenge', 6),
    summary:
      'A scenario-based training game that improves knowledge retention for officers in training through challenge, milestones, and rewards.',
    challenge:
      'The Prison Officer Course needed a stronger training format to improve engagement and help officers retain policies and procedures more effectively.',
    solution:
      'Playtivate built a training game structured around seven challenges and three milestones, using multiple game genres, progression, and badges to reinforce learning.',
    highlights: [
      'Scenario-based learning design',
      'Seven challenges and three milestones',
      'Badge unlocking tied to learner achievement',
    ],
    platforms: 'Interactive training game',
    outcome:
      'The game creates a more active learning environment that supports retention and repeated exposure to critical operational content.',
    featured: true,
  },
  {
    slug: 'smart-nation-cityscape',
    title: 'Smart Nation Cityscape',
    category: 'VR/AR',
    sector: 'Government',
    serviceSlug: 'vr-ar',
    client: 'Smart Nation Singapore',
    image: '/images/case-studies/smart-nation-cityscape.png',
    gallery: buildCaseStudyGallery('smart-nation-cityscape', 9),
    summary:
      'A series of augmented reality interactives that helps visitors explore Smart Nation technologies across a physical city model.',
    challenge:
      'The exhibit needed a clearer way to explain multiple national digital initiatives in a format that would remain intuitive and engaging for public audiences.',
    solution:
      'Playtivate created an iPad-based AR experience for the URA City Gallery where visitors scan parts of the Central Area Model, reveal hotspots, and open guided interactive maps tied to each location.',
    highlights: [
      'AR hotspot discovery across a physical city model',
      'Interactive maps explaining initiatives such as PayNow, SafeEntry, TraceTogether, Healthy 365, and myResponder',
      'Installed as a public-facing exhibit at the URA City Gallery',
    ],
    platforms: 'iPad augmented reality exhibit, interactive map experience',
    outcome:
      'The installation turns abstract Smart Nation programs into a more tangible public experience and gives visitors a practical way to understand how the technologies appear across the city.',
  },
  {
    slug: 'super-soldier-challenge',
    title: 'Super Soldier Challenge',
    category: 'Serious Games',
    sector: 'Government',
    serviceSlug: 'serious-games',
    client: 'Ministry of Defence Singapore',
    image: '/images/case-studies/super-soldier-challenge.png',
    gallery: buildCaseStudyGallery('super-soldier-challenge', 6),
    summary:
      'A gamified learning title that helps full-time national servicemen learn key NS policies and processes before ORD.',
    challenge:
      'The training content needed a more engaging format that could help servicemen review administrative policies and processes without relying on static materials alone.',
    solution:
      'Playtivate built a Unity 3D serious game that combines comic-style presentation, embedded quizzes, and competitive progression mechanics to reinforce policy knowledge through play.',
    highlights: [
      'Integrated quizzes on NS policies and processes',
      'Full-color comic-style visual presentation',
      'Leaderboards to encourage repeat participation and competition',
    ],
    platforms: 'Unity 3D, cross-platform deployment',
    outcome:
      'The project gives military learners a more interactive way to review policy content and improves repeat exposure through game-based motivation.',
  },
  {
    slug: 'one-force-reloaded',
    title: 'One Force: Reloaded',
    category: 'Serious Games',
    sector: 'Government',
    serviceSlug: 'serious-games',
    client: 'Royal Singapore Air Force',
    image: '/images/case-studies/one-force-reloaded.jpg',
    gallery: buildCaseStudyGallery('one-force-reloaded', 4, 'jpg'),
    summary:
      'A strategy-driven military game where players build an air force, manage assets, and engage in combat using RSAF-themed systems and scenarios.',
    challenge:
      'The experience needed to turn defense themes and force-building concepts into an engaging digital format that would sustain attention and encourage repeat play.',
    solution:
      'Playtivate created a 3D strategy game with multiplayer combat, airbase and weapons management, mini-games, leaderboards, and campaign-style progression, plus promotional AR-style bonus credit mechanics tied to public media.',
    highlights: [
      '3D strategic force-building gameplay',
      'Multiplayer combat with airbase and weapons management',
      'Leaderboards, mini-games, and bonus credit mechanics linked to campaign media',
    ],
    platforms: '3D game experience with mobile-linked promotional interactions',
    outcome:
      'The project packages defense engagement into a deeper game loop that rewards replay, strategic thinking, and sustained interaction with the RSAF theme.',
  },
  {
    slug: 'starhub-virtual-play',
    title: 'StarHub Immersive Virtual Play',
    category: 'VR/AR',
    sector: 'Enterprise',
    serviceSlug: 'vr-ar',
    client: 'StarHub',
    image: '/images/case-studies/starhub-virtual-play-lead.jpg',
    gallery: buildCaseStudyGallery('starhub-virtual-play', 3, 'jpg'),
    summary:
      'An immersive AR-powered learning experience that blends technology into classroom learning for preschoolers aged 4–6.',
    challenge:
      'StarHub needed an engaging way to integrate technology meaningfully into early childhood learning, moving beyond passive screen time toward participatory, discovery-driven experiences.',
    solution:
      'Playtivate built an augmented reality experience where a Mini Robot Teacher guides preschoolers through a Paris-themed exploration using iPad Minis and a physical learning map. AR markers trigger 3D pop-ups of Parisian landmarks — the Eiffel Tower, Arc de Triomphe, and Louvre Museum — with interactive activities unlocked at each location.',
    highlights: [
      'AR-triggered 3D landmark pop-ups on iPad Mini',
      'Physical map combined with digital interaction',
      'Mini Robot Teacher guides the learning journey',
    ],
    platforms: 'iPad AR application with physical learning materials',
    outcome:
      'Preschoolers experience a playful blend of physical and virtual learning, with exploration and interactivity keeping engagement high throughout the session.',
  },
  {
    slug: 'ops-battleforce-2',
    title: 'Ops Battleforce 2',
    category: 'Serious Games',
    sector: 'Government',
    serviceSlug: 'serious-games',
    client: 'Nexus (MINDEF)',
    image: '/images/case-studies/ops-battleforce-2-lead.jpg',
    gallery: buildCaseStudyGallery('ops-battleforce-2', 4, 'jpg'),
    summary:
      'A 3D action strategy mobile game where players command SAF air, land, and sea assets to defend Singapore against invaders in multiplayer battles and single-player campaigns.',
    challenge:
      'MINDEF needed an engaging mobile game to build awareness of SAF capabilities and attract pre-enlistees and the public to national defence themes through active, replayable gameplay.',
    solution:
      'Playtivate developed Ops Battleforce 2, a real-time 3D strategy game featuring multiplayer battles and single-player campaigns. Players direct modern SAF combat units, earn medals and experience, rise through the ranks, and unlock new weapons — all within an accessible mobile format available on iPhone and Android.',
    highlights: [
      '3D real-time action strategy with SAF air, land, and sea units',
      'Multiplayer battles and single-player campaign modes',
      'Rank progression, medals, and unlockable weapons system',
    ],
    platforms: 'Mobile (iPhone and Android)',
    outcome:
      'The game delivers an engaging, replayable experience that connects players with SAF themes and builds sustained interest in national defence through competitive and campaign gameplay.',
  },
  {
    slug: 'nea-mace-genesis',
    title: 'MACE Genesis',
    category: 'Serious Games',
    sector: 'Government',
    serviceSlug: 'serious-games',
    client: 'National Environment Agency',
    image: '/images/case-studies/nea-mace-genesis.jpg',
    gallery: [
      '/images/case-studies/gallery/mace-screen1.png',
      '/images/case-studies/gallery/mace-screen2.png',
      '/images/case-studies/gallery/mace-screen3.png',
      '/images/case-studies/gallery/nea-mace-genesis-2.jpg',
    ],
    summary:
      'A 3D multiplayer first-person shooter designed to educate students on dengue prevention through competitive team-based gameplay.',
    challenge:
      'NEA needed a format that could make dengue prevention messages more memorable and engaging for students than conventional awareness materials alone.',
    solution:
      'Playtivate created MACE Genesis as a 5 versus 5 multiplayer game that ties gameplay objectives directly to dengue knowledge, including clearing stagnant water and helping feverish students, so prevention concepts are reinforced through action and repetition.',
    highlights: [
      '3D multiplayer first-person shooter format',
      'Gameplay objectives built around dengue prevention behaviours',
      'Used in annual inter-school competitions',
    ],
    platforms: '3D multiplayer game experience for student competitions',
    outcome:
      'The project turns public-health education into a higher-engagement competitive format, helping students absorb dengue prevention practices through active play.',
  },
  {
    slug: 'moh-lively-silver',
    title: 'Lively Silver',
    category: 'Serious Games',
    sector: 'Healthcare',
    serviceSlug: 'serious-games',
    client: 'Supported by Ministry of Health',
    image: '/images/case-studies/moh-lively-silver.jpg',
    gallery: buildCaseStudyGallery('moh-lively-silver', 4, 'jpg'),
    summary:
      'A mobile training game series designed for people with mild dementia, memory, and cognitive disorders, using familiar daily-life interactions to support engagement and recall.',
    challenge:
      'The project needed to translate cognitive training into a form that would feel accessible, relevant, and usable for patients with dementia rather than abstract or overly clinical.',
    solution:
      'Playtivate partnered with Dr Dennis Seow from Singapore General Hospital’s Department of Geriatric Medicine to research patient needs and develop a series of interactive mobile games centered on recognizable daily-life items and activities. The initiative was supported by the Ministry of Health and co-funded by the Economic Development Board.',
    highlights: [
      'Mobile training games for mild dementia patients',
      'Developed with clinical input from geriatric medicine',
      'Gameplay built around familiar everyday associations',
    ],
    platforms: 'iPad mobile game experience',
    outcome:
      'The games create a more approachable way for patients to engage in cognitive training through familiar, interactive experiences designed around their needs.',
  },
].map((caseStudy) => ({
  ...caseStudy,
  image: assetPath(caseStudy.image),
  gallery: caseStudy.gallery?.map((image) => assetPath(image)) ?? [],
}));

export const featuredCaseStudies = caseStudies.filter((caseStudy) => caseStudy.featured);

const serviceDetailCaseStudySlugs = {
  'serious-games': [
    'captains-of-lives-super-challenge',
    'virtual-hospital-3',
    'moh-lively-silver',
  ],
  'vr-ar': [
    'sinus-vrse',
    'ar-heart',
    'smart-nation-cityscape',
  ],
  'e-learning': [
    'secondary-school-chinese-digital-interactive-resources',
    'location-based-learning-journey',
    'english-html5-games',
  ],
};

export function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug);
}

export function getCaseStudyBySlug(slug) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}

export function getCaseStudiesByService(serviceSlug) {
  const curatedSlugs = serviceDetailCaseStudySlugs[serviceSlug];

  if (curatedSlugs) {
    return curatedSlugs
      .map((slug) => getCaseStudyBySlug(slug))
      .filter(Boolean);
  }

  return caseStudies.filter((caseStudy) => caseStudy.serviceSlug === serviceSlug);
}