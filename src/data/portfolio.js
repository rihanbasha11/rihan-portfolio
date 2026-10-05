// ─── CANDIDATE DATA ──────────────────────────────────────────────────────────
// All factual content lives here — separated from UI components for easy updates.

export const personal = {
  name: 'Shaik Rihan Basha',
  nameShort: 'Rihan',
  initials: 'SRB',
  location: 'Kurnool, Andhra Pradesh, India',
  email: 'rihanshaik545@gmail.com',
  phone: '+91 91006 32391',
  linkedin: 'https://linkedin.com/in/shaik-rihan-basha-9341b42b6',
  github: 'https://github.com/rihanbasha11',
  resume: '/resume.pdf',
};

export const headline = {
  eyebrow: 'Final-Year B.Tech · CSBS',
  h1Part1: 'AI. Automation.',
  h1Part2: 'Measurable impact.',
  subhead:
    'Building practical AI agents, RAG pipelines and data workflows that create real-world outcomes — not just academic demos.',
  status: 'Open to internships & entry-level roles',
};

export const stats = [
  { value: '50+',   label: 'Healthcare documents', context: 'processed in RAG pipeline' },
  { value: '1,135', label: 'RAG chunks',            context: 'for semantic retrieval' },
  { value: '35%',   label: 'Sales increase',        context: 'via PPC campaign management' },
  { value: '18%',   label: 'CTR improvement',       context: 'across Amazon campaigns' },
  { value: '60%',   label: 'Manual work reduced',   context: 'through n8n AI automation' },
  { value: 'Top 5', label: 'Hackathon finish',      context: 'of 100+ teams · Quantum Valley 2025' },
  { value: '200+',  label: 'Student records',       context: 'analyzed in Power BI dashboard' },
];

export const about = {
  intro: `I'm a final-year B.Tech Computer Science and Business Systems student combining technical depth with real business exposure. My work spans AI/ML, automation, and data analytics — applied to actual problems, not just coursework.`,
  body: `During my internship at Infosys Springboard, I contributed to a RAG pipeline that retrieved context from healthcare documents using Pinecone and Ollama. At Craftscy Innovation, I built n8n automation workflows with Claude and ChatGPT that cut manual effort by 60%, while also managing PPC campaigns that grew sales by 35%.`,
  close: `I'm drawn to roles where technology, automation, and data intersect with measurable outcomes. CGPA: 8.23/10.`,
};

export const experience = [
  {
    id: 'infosys',
    role: 'AI-ML Intern',
    org: 'Infosys Springboard',
    location: 'Remote',
    dates: 'Jun 2025 – Aug 2026',
    type: 'Internship',
    context:
      'Joined a team building a healthcare communication platform that uses AI to generate context-based responses from medical documents.',
    teamNote:
      'This was a collaborative team project. My individual contribution was focused on the RAG pipeline component.',
    myContribution: [
      'Processed 50+ healthcare documents into 1,135 semantic chunks for retrieval',
      'Implemented Pinecone vector search for context retrieval',
      'Integrated retrieved context with Ollama LLMs for response generation',
      'Worked with the team to deliver the complete RAG component',
    ],
    stack: ['Python', 'RAG', 'Pinecone', 'Ollama', 'LLMs', 'Vector Search'],
    metrics: [
      { value: '50+',   label: 'Healthcare docs processed' },
      { value: '1,135', label: 'Semantic chunks created' },
    ],
  },
  {
    id: 'craftscy',
    role: 'Digital Marketing & E-Commerce Intern',
    org: 'Craftscy Innovation Pvt. Ltd.',
    location: 'Kurnool',
    dates: 'Nov 2025 – Jun 2026',
    type: 'Internship',
    context:
      'Worked across digital marketing, Amazon e-commerce operations, and AI-driven workflow automation.',
    myContribution: [
      'Managed 20+ Amazon PPC campaigns for 100+ products',
      'Increased sales by 35% and CTR by 18% through campaign optimisation',
      'Built n8n automation workflows using Claude and ChatGPT APIs',
      'Reduced manual operational work by 60% through AI automation',
      'Strengthened offline sales through partnerships with 15+ shop owners and business partners',
    ],
    stack: ['n8n', 'Claude', 'ChatGPT', 'Amazon PPC', 'Workflow Automation'],
    metrics: [
      { value: '35%', label: 'Sales increase' },
      { value: '18%', label: 'CTR improvement' },
      { value: '60%', label: 'Manual work cut' },
    ],
  },
];

export const projects = [
  {
    id: 'inventory-agent',
    num: '01',
    title: 'AI-Powered Inventory Management Agent',
    type: 'AI Agent · Automation',
    tagline: 'Natural language → n8n workflow → real-time inventory',
    description:
      'A conversational AI agent that lets users manage inventory through natural language. Built in n8n with GPT-5-mini, it connects to Google Sheets for real-time stock operations and supports hands-free voice commands via Wispr Flow.',
    myContribution:
      'Designed and built the conversational agent, connected real-time stock operations to Google Sheets, and enabled voice command support with Wispr Flow.',
    flow: [
      'Voice / text input',
      'GPT-5-mini intent parsing',
      'n8n workflow execution',
      'Google Sheets API',
      'Inventory updated',
    ],
    capabilities: [
      'Natural-language stock additions & reductions',
      'Product creation and monitoring',
      'Real-time Google Sheets sync',
      'Hands-free voice commands via Wispr Flow',
    ],
    stack: ['n8n', 'GPT-5-mini', 'Google Sheets API', 'Wispr Flow'],
    projectLink: '[ADD PROJECT LINK]',
    featured: true,
  },
  {
    id: 'rag-pipeline',
    num: '02',
    title: 'Healthcare RAG Pipeline',
    type: 'Team Project · My Contribution',
    tagline: 'Documents → chunks → semantic retrieval → LLM response',
    description:
      'A Retrieval-Augmented Generation component for a healthcare communication platform, enabling context-accurate responses from medical documents. This was a team project at Infosys Springboard.',
    myContribution:
      'My individual work: processed 50+ healthcare documents into 1,135 semantic chunks, implemented Pinecone vector search, and integrated retrieved context with Ollama LLMs for response generation.',
    flow: [
      '50+ healthcare docs',
      'Document chunking (1,135)',
      'Pinecone vector index',
      'Semantic retrieval',
      'Ollama LLM response',
    ],
    capabilities: [
      '50+ healthcare document processing',
      '1,135 chunks for semantic retrieval',
      'Pinecone vector search implementation',
      'Ollama LLM context integration',
    ],
    stack: ['Python', 'RAG', 'Pinecone', 'Ollama', 'LLMs'],
    projectLink: '[ADD PROJECT LINK]',
    featured: true,
    isTeamProject: true,
  },
  {
    id: 'analytics-dashboard',
    num: '03',
    title: 'Student Performance Analysis Dashboard',
    type: 'Data Analytics',
    tagline: '200+ records → Python + SQL → Power BI insights',
    description:
      'An interactive Power BI dashboard for monitoring student performance across attendance, marks and subject-wise trends. Analyzed 200+ student records using Python and SQL to surface actionable insights.',
    myContribution:
      'Analyzed 200+ student records using Python and SQL, identified attendance and marks trends, and built the interactive Power BI dashboard with KPIs and dynamic filters.',
    flow: [
      '200+ student records',
      'Python + SQL analysis',
      'Trend identification',
      'Power BI dashboard',
      'KPI insights',
    ],
    capabilities: [
      '200+ student records analyzed',
      'Attendance and marks trend analysis',
      'Subject-wise performance breakdown',
      'Interactive KPIs and filters in Power BI',
    ],
    stack: ['Power BI', 'Python', 'SQL'],
    projectLink: '[ADD PROJECT LINK]',
    featured: false,
  },
];

export const skillGroups = [
  {
    label: 'Programming',
    skills: ['Python', 'Java', 'SQL', 'JavaScript', 'HTML5', 'CSS3'],
    accent: false,
  },
  {
    label: 'AI & Automation',
    skills: ['RAG', 'n8n', 'Claude', 'ChatGPT', 'Pinecone', 'Ollama'],
    accent: true,
  },
  {
    label: 'Data & Analytics',
    skills: ['Power BI', 'Python', 'SQL'],
    accent: false,
  },
  {
    label: 'Developer Tools',
    skills: ['Git', 'GitHub', 'VS Code'],
    accent: false,
  },
];

export const achievements = [
  {
    id: 'quantum',
    label: 'TOP 5 / 100+',
    sublabel: 'TEAMS',
    title: 'Quantum Valley Hackathon 2025',
    role: 'Finalist',
    description:
      'Finished in the top 5 of 100+ competing teams at Quantum Valley Hackathon 2025.',
    highlight: true,
  },
  {
    id: 'sih',
    label: 'National',
    sublabel: 'COMPETITION',
    title: 'Smart India Hackathon 2024',
    role: 'Participant',
    description:
      'Participated in Smart India Hackathon 2024, a national-level student competition.',
    highlight: false,
  },
  {
    id: 'amazon',
    label: 'ML',
    sublabel: 'CHALLENGE',
    title: 'Amazon ML Challenge 2026',
    role: 'Participant',
    description:
      'Participated in the Amazon ML Challenge 2026, a real-world machine learning competition.',
    highlight: false,
  },
];

export const education = [
  {
    degree: 'B.Tech — Computer Science and Business Systems',
    institution: 'G. Pulla Reddy Engineering College',
    location: 'Kurnool',
    period: '2023 – 2027',
    score: 'CGPA 8.23 / 10.0',
    current: true,
  },
  {
    degree: 'Senior Secondary — Science (MPC)',
    institution: 'Hyderabad Institute of Excellence Jr. College',
    location: 'Hyderabad',
    period: '2021 – 2023',
    score: '93.7%',
    current: false,
  },
];

export const certifications = [
  { title: 'Soft Skills Certification', issuer: 'TCS iON', year: '2025' },
  { title: 'AI Fundamentals', issuer: 'IBM SkillsBuild', year: '2026' },
  { title: 'Entrepreneurship', issuer: 'NPTEL', year: '2025' },
];

export const activities = [
  {
    title: 'ISTE Student Chapter Volunteer',
    description:
      'Organized 10+ technical workshops and events. Coordinated with faculty, volunteers and guest speakers. Managed registrations and event activities for 200+ students.',
  },
  {
    title: 'College Cricket Team Member',
    description:
      'Represented the college in inter-college cricket tournaments, demonstrating teamwork, discipline and sportsmanship.',
  },
];

export const navItems = [
  { label: 'About',        id: 'about' },
  { label: 'Experience',   id: 'experience' },
  { label: 'Projects',     id: 'projects' },
  { label: 'Skills',       id: 'skills' },
  { label: 'Achievements', id: 'achievements' },
  { label: 'Contact',      id: 'contact' },
];
