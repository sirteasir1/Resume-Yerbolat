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
  tagline: "16 years old. Building products that change lives.\nAI engineer, founder, and relentless problem-solver from Kazakhstan.",
  stats: [
    { number: '3+', label: 'Products shipped' },
    { number: '1K+', label: 'Users impacted' },
    { number: '4×', label: 'Hackathon wins' },
  ],
}

export const ABOUT_DATA = {
  headline: "I don't wait\nto grow up.\nI build now.",
  paragraphs: [
    "I'm a <strong>16-year-old AI engineer and founder</strong> from Almaty, Kazakhstan — 1 year into the industry, already shipping products used by thousands across Eurasia. I move fast, think deep, and build things that matter.",
    "I founded <strong>Admitly</strong>, an ecosystem helping high schoolers across Eurasia navigate university admissions, and built <strong>Oqu</strong>, an EdTech platform making Kazakhstan's school curriculum actually learnable — with IELTS prep and coding built right in.",
    "I've won <strong>republic-level hackathons, GDG AI challenges</strong>, reached TOP 15 at Decentrathon 4.0, and interned at Jana Post LLP — all before finishing high school. The spark doesn't wait.",
  ],
  cards: [
    { number: '3+', label: 'Products shipped' },
    { number: '1yr', label: 'In the industry' },
    { number: '1K+', label: 'Users impacted', color: 'var(--accent-2)' },
    { number: '16', label: 'Years old 🔥' },
  ],
  status: {
    icon: '⚡',
    title: 'Building AI-native EdTech for Eurasia',
    label: 'Open to internships, collabs & opportunities',
  },
}

export const PROJECTS_DATA = [
  {
    id: 'admitly',
    number: '01',
    title: 'Admitly',
    description: 'University admissions ecosystem for high schoolers across Eurasia. AI-powered roadmaps, essay coaching, and mentor matching — helping students reach their dream universities faster and smarter.',
    tags: ['EdTech', 'AI', 'React', 'Python'],
    gradient: 'linear-gradient(135deg, #0a0a16, #0d1b2e, #001e45)',
    letterColor: 'rgba(0, 212, 255, 0.18)',
    letters: 'AD',
    href: '#',
  },
  {
    id: 'oqu',
    number: '02',
    title: 'Oqu Platform',
    description: 'EdTech platform for Kazakhstani school students. Deep-dives into the government curriculum, integrated IELTS reading & listening prep, and coding language tracks — all in one place. 1000+ active learners.',
    tags: ['EdTech', 'NLP', 'Next.js', 'IELTS'],
    gradient: 'linear-gradient(135deg, #0f0b1c, #1c0c2e, #1d0052)',
    letterColor: 'rgba(124, 58, 237, 0.22)',
    letters: 'OQ',
    href: '#',
  },
  {
    id: 'cv-vision',
    number: '03',
    title: 'Vision AI',
    description: 'Dual computer vision system: real-time car condition detection for fleet diagnostics, and room cleanliness scoring using ML image segmentation. Built with PyTorch + OpenCV, deployed on edge hardware.',
    tags: ['Computer Vision', 'PyTorch', 'OpenCV', 'ML'],
    gradient: 'linear-gradient(135deg, #0a1512, #0e2c1c, #003425)',
    letterColor: 'rgba(0, 212, 150, 0.2)',
    letters: 'CV',
    href: 'https://github.com/sirteasir1',
  },
  {
    id: 'hackathon',
    number: '04',
    title: 'Hackathon Builds',
    description: 'TOP 15 at Decentrathon 4.0. Winner of Spring GDG AI Hackathon. Multiple republic-level hackathon champion. Each project shipped with real AI/ML/NLP stacks — not demos, actual products.',
    tags: ['AI/ML', 'NLP', 'Blockchain', 'GDG'],
    gradient: 'linear-gradient(135deg, #160a0a, #2c0e0e, #460000)',
    letterColor: 'rgba(255, 107, 53, 0.2)',
    letters: 'HK',
    href: 'https://github.com/sirteasir1',
  },
]

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
    period: '2025 — Present',
    title: 'Founder & Builder',
    company: 'Admitly',
    location: 'Almaty, Kazakhstan',
    description: 'Founded and building Admitly — an AI-powered university admissions ecosystem for high schoolers across Eurasia. Connecting students with mentors, resources, and personalized roadmaps to reach their dream universities. 1000+ users in early access.',
    badges: ['Founder', 'AI', 'EdTech', 'Eurasia'],
    accentColor: 'var(--accent)',
    glowColor: 'var(--glow)',
  },
  {
    period: '2024 — Present',
    title: 'Builder',
    company: 'Oqu EdTech Platform',
    location: 'Almaty, Kazakhstan',
    description: 'Built Oqu from scratch — an EdTech platform for Kazakhstani school students covering government curriculum, IELTS preparation (reading & listening), and coding language tracks. Designed for depth, not just surface-level test prep.',
    badges: ['Next.js', 'Python', 'NLP', 'IELTS Prep'],
    accentColor: 'var(--accent-2)',
    glowColor: 'var(--glow-2)',
  },
  {
    period: '2024',
    title: 'IT Department Intern',
    company: 'Jana Post LLP',
    location: 'Kazakhstan',
    description: 'Interned in the IT department at Jana Post LLP. Gained hands-on industry experience with real enterprise systems, internal tooling, and software workflows — all at 15 years old.',
    badges: ['Internship', 'IT Systems', 'Enterprise'],
    accentColor: 'var(--accent)',
    glowColor: 'var(--glow)',
  },
  {
    period: '2024 — 2025',
    title: 'Hackathon Champion',
    company: 'GDG · Decentrathon · Republic Level',
    location: 'Kazakhstan',
    description: 'Won Spring GDG AI Hackathon. Reached TOP 15 at Decentrathon 4.0 out of hundreds of teams. Won multiple republic-level hackathons — all building real products with AI, ML, NLP, and blockchain technologies.',
    badges: ['🏆 GDG AI', '🥇 Republic', 'TOP 15 Decentrathon'],
    accentColor: 'var(--accent-warm)',
    glowColor: 'rgba(255, 107, 53, 0.35)',
  },
]
