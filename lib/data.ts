export const SITE_CONFIG = {
  name: 'Yerbolat Rgalbek',
  title: 'Builder & AI Engineer',
  email: 'rgalbeke@gmail.com',
  github: 'https://github.com/sirteasir1',
  twitter: 'https://twitter.com/yerbolat',
  linkedin: 'https://www.linkedin.com/in/yerbolat-rgalbek-4b524b38b/',
  resume: '/resume.pdf',
}

export const HERO_DATA = {
  available: true,
  availableText: 'Open to opportunities · Almaty, Kazakhstan',
  name: ['YERBOLAT', 'RGALBEK'],
  tagline:
    "16 years old. Building AI products that ship, scale, and win.\nFounder, engineer, and 2× offer holder — out of Almaty, Kazakhstan.",
  stats: [
    { number: 20, prefix: 'TOP ', suffix: '', label: 'nFactorial Demo Day · of 3000+' },
    { number: 2, prefix: '', suffix: '', label: 'Offers from top CA companies' },
    { number: 4, prefix: '', suffix: '×', label: 'Hackathon wins' },
    { number: 1000, prefix: '', suffix: '+', label: 'Users impacted' },
  ],
}

export const ABOUT_DATA = {
  headline: "I don't wait\nto grow up.\nI build now.",
  paragraphs: [
    "I'm a <strong>16-year-old AI engineer and founder</strong> from Almaty, Kazakhstan. In roughly a year I've shipped products used by thousands, earned <strong>two offers from leading Central-Asian companies</strong>, and made it through the region's most competitive startup incubator.",
    "I got into <strong>nFactorial Incubator</strong> — the largest in Central Asia — as one of the <strong>Top 76 of 3000+ applicants</strong>, then pushed my startup <strong>WearIt</strong> all the way to the <strong>Top 20 at Demo Day</strong>. I've also taken <strong>AgroVoice</strong> to the republican stage and founded <strong>Admitly</strong>, an AI admissions ecosystem for students across Eurasia.",
    "Off the keyboard I captain my school's <strong>basketball and volleyball</strong> teams and lead my <strong>debate and hackathon</strong> squads. I move fast, think deep, and build things that matter — the spark doesn't wait.",
  ],
  cards: [
    { number: '5+', label: 'Products shipped' },
    { number: '1yr', label: 'In the industry' },
    { number: '1K+', label: 'Users impacted', color: 'var(--accent-2)' },
    { number: '16', label: 'Years old 🔥' },
  ],
  status: {
    icon: '⚡',
    title: 'Building AI-native products out of Central Asia',
    label: 'Open to internships, collabs & opportunities',
  },
  portrait: '/images/building.jpg',
}

export const PROJECTS_DATA = [
  {
    id: 'wearit',
    number: '01',
    title: 'WearIt',
    description:
      'My nFactorial Incubator startup — pushed from idea to a revenue-generating product and a Top 20 finish at Demo Day (out of 3000+ applicants). $400+ in early revenue, real paying users, built end-to-end.',
    tags: ['Startup', 'AI', 'Next.js', '$400+ revenue'],
    gradient: 'linear-gradient(135deg, #0a0a16, #0d1b2e, #001e45)',
    letterColor: 'rgba(0, 212, 255, 0.18)',
    letters: 'WI',
    href: 'https://github.com/sirteasir1',
    metric: 'Top 20 · Demo Day',
  },
  {
    id: 'agrovoice',
    number: '02',
    title: 'AgroVoice',
    description:
      'Voice-first AI assistant for farmers — bringing agronomy guidance to people in their own language, hands-free. Advanced all the way to the republican stage of national competition.',
    tags: ['AI', 'Voice / NLP', 'AgriTech', 'Republican stage'],
    gradient: 'linear-gradient(135deg, #0a1512, #0e2c1c, #003425)',
    letterColor: 'rgba(0, 212, 150, 0.2)',
    letters: 'AV',
    href: 'https://github.com/sirteasir1',
    metric: '🥇 Republican stage',
  },
  {
    id: 'admitly',
    number: '03',
    title: 'Admitly',
    description:
      'University admissions ecosystem for high schoolers across Eurasia. AI-powered roadmaps, essay coaching, and mentor matching — helping students reach their dream universities faster and smarter.',
    tags: ['EdTech', 'AI', 'React', 'Python'],
    gradient: 'linear-gradient(135deg, #0f0b1c, #1c0c2e, #1d0052)',
    letterColor: 'rgba(124, 58, 237, 0.22)',
    letters: 'AD',
    href: 'https://github.com/sirteasir1',
    metric: '1K+ users',
  },
  {
    id: 'oqu',
    number: '04',
    title: 'Oqu Platform',
    description:
      "EdTech platform for Kazakhstani school students. Deep-dives into the government curriculum, integrated IELTS reading & listening prep, and coding tracks — all in one place.",
    tags: ['EdTech', 'NLP', 'Next.js', 'IELTS'],
    gradient: 'linear-gradient(135deg, #160a0a, #2c0e0e, #460000)',
    letterColor: 'rgba(255, 107, 53, 0.2)',
    letters: 'OQ',
    href: 'https://github.com/sirteasir1',
    metric: 'EdTech',
  },
]

// nFactorial Incubator funnel — 3000+ → Top 76 → Top 20 Demo Day
export const ACHIEVEMENTS_DATA = {
  funnel: [
    { value: '3000+', label: 'Applicants', note: 'Central Asia' },
    { value: 'TOP 76', label: 'Selected', note: 'Incubator cohort' },
    { value: 'TOP 20', label: 'Demo Day', note: 'Final stage' },
  ],
  offers: [
    {
      role: 'Offer',
      org: 'Largest resale company in Central Asia',
      note: 'Recruited for engineering before finishing high school.',
      color: 'var(--accent)',
    },
    {
      role: 'Offer',
      org: 'Major fitness company',
      note: 'A second offer from a leading regional brand.',
      color: 'var(--accent-2)',
    },
  ],
  awards: [
    {
      title: 'nFactorial Incubator — Demo Day',
      detail: 'Top 20 of 3000+ · largest incubator in Central Asia',
      image: '/images/nfactorial-demoday.jpg',
      tag: 'Incubator',
    },
    {
      title: 'GDG AI Hackathon — 1st place',
      detail: 'Winner, Google Developer Group spring challenge',
      image: '/images/gdg-certificate.jpg',
      tag: 'Hackathon',
    },
    {
      title: 'Decentrathon 4.0 — Top 15',
      detail: 'Out of hundreds of teams across the region',
      image: '/images/hackathon-team.jpg',
      tag: 'Hackathon',
    },
  ],
}

// Beyond the screen — sport & leadership
export const BEYOND_DATA = {
  headline: "More than\na builder.",
  image: '/images/basketball.jpg',
  items: [
    {
      icon: '🏀',
      title: 'Basketball — Team Captain',
      detail: "Captain of the school's basketball squad. Leading plays, setting the tempo, owning the floor.",
    },
    {
      icon: '🏐',
      title: 'Volleyball — Team Captain',
      detail: 'Captain on the volleyball court too — communication, chemistry, and clutch points.',
    },
    {
      icon: '🎤',
      title: 'Debate — Team Captain',
      detail: 'Leading the debate team: structured argument, fast thinking, and persuasion under pressure.',
    },
    {
      icon: '💻',
      title: 'Hackathons — Team Captain',
      detail: 'Captaining hackathon teams — turning 48 hours and caffeine into shipped, award-winning products.',
    },
  ],
}

export const SKILLS_DATA = [
  {
    category: 'Languages',
    color: 'var(--accent)',
    skills: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'Solidity'],
  },
  {
    category: 'Frontend',
    color: 'var(--accent-2)',
    skills: ['React / Next.js', 'Tailwind CSS', 'Framer Motion', 'HTML / CSS', 'Figma'],
  },
  {
    category: 'Backend',
    color: 'var(--accent)',
    skills: ['Node.js', 'FastAPI', 'PostgreSQL', 'REST APIs', 'Firebase'],
  },
  {
    category: 'AI / ML',
    color: 'var(--accent-warm)',
    skills: ['PyTorch', 'OpenCV', 'NLP / LLMs', 'Computer Vision', 'Scikit-learn'],
  },
  {
    category: 'Tools & Infra',
    color: 'var(--accent-2)',
    skills: ['Git / GitHub', 'Docker', 'Vercel', 'Linux', 'Figma'],
  },
]

export const EXPERIENCE_DATA = [
  {
    period: '2026',
    title: 'Founder · WearIt',
    company: 'nFactorial Incubator',
    location: 'Almaty, Kazakhstan',
    description:
      'Selected Top 76 of 3000+ applicants into the largest incubator in Central Asia, then took WearIt to the Top 20 at Demo Day. Shipped a real product with $400+ in early revenue and paying users.',
    badges: ['🚀 Top 20 Demo Day', 'Founder', '$400+ revenue', 'AI'],
    accentColor: 'var(--accent)',
    glowColor: 'var(--glow)',
  },
  {
    period: '2026',
    title: '2× Offer Holder',
    company: 'Resale leader + Fitness brand',
    location: 'Central Asia',
    description:
      'Received two offers from leading Central-Asian companies — the largest resale company in the region and a major fitness brand — recruited for engineering while still in high school.',
    badges: ['💼 Offer #1', '💼 Offer #2', 'Engineering'],
    accentColor: 'var(--accent-2)',
    glowColor: 'var(--glow-2)',
  },
  {
    period: '2025 — Present',
    title: 'Founder & Builder',
    company: 'Admitly',
    location: 'Almaty, Kazakhstan',
    description:
      'Founded and building Admitly — an AI-powered university admissions ecosystem for high schoolers across Eurasia. Personalized roadmaps, mentors, and resources. 1000+ users in early access.',
    badges: ['Founder', 'AI', 'EdTech', 'Eurasia'],
    accentColor: 'var(--accent)',
    glowColor: 'var(--glow)',
  },
  {
    period: '2024 — 2026',
    title: 'Hackathon Champion',
    company: 'GDG · Decentrathon · Republican',
    location: 'Kazakhstan',
    description:
      'Won the Spring GDG AI Hackathon (1st place). Reached Top 15 at Decentrathon 4.0 out of hundreds of teams. Took AgroVoice to the republican stage. Real AI/ML/NLP products — not demos.',
    badges: ['🏆 GDG 1st', 'TOP 15 Decentrathon', '🥇 Republican'],
    accentColor: 'var(--accent-warm)',
    glowColor: 'rgba(255, 107, 53, 0.35)',
  },
  {
    period: '2024',
    title: 'IT Department Intern',
    company: 'Jana Post LLP',
    location: 'Kazakhstan',
    description:
      'Interned in the IT department at Jana Post LLP — hands-on experience with real enterprise systems, internal tooling, and software workflows, all at 15 years old.',
    badges: ['Internship', 'IT Systems', 'Enterprise'],
    accentColor: 'var(--accent)',
    glowColor: 'var(--glow)',
  },
]
