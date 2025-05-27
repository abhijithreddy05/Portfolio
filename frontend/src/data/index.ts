export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  icon: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  githubLink?: string;
  website?: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string[];
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  description: string;
}

export interface Certificate {
  issuer: string;
  name: string;
  year: string;
  file: string;
}

export interface Achievement {
  title: string;
  description: string;
}

export interface SocialLink {
  name: string;
  icon: string;
  url: string;
}

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Experience & Education', href: '#experience' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
];

export const skills = [
  { name: 'Java', description: 'Proficient in Java for object-oriented programming.', icon: 'JavaIcon' },
  { name: 'Python', description: 'Skilled in Python for AI and scripting.', icon: 'PythonIcon' },
  { name: 'C', description: 'Knowledgeable in C for system-level programming.', icon: 'CIcon' },
  { name: 'JavaScript', description: 'Expert in JavaScript for dynamic web applications.', icon: 'JavaScriptIcon' },
  { name: 'DSA', description: 'Strong foundation in DSA.', icon: 'DataStructuresIcon' },
  { name: 'HTML', description: 'Expert in HTML for web structure.', icon: 'HTMIIcon' },
  { name: 'CSS', description: 'Expert in CSS for web styling.', icon: 'CSSIcon' },
  { name: 'React.js', description: 'Experienced in building UIs with React.js.', icon: 'ReactIcon' },
  { name: 'Node.js', description: 'Proficient in server-side development with Node.js.', icon: 'NodeIcon' },
  { name: 'Express.js', description: 'Experienced in building APIs with Express.js.', icon: 'ExpressIcon' },
  { name: 'MongoDB', description: 'Skilled in NoSQL database management.', icon: 'MongoDBIcon' },
  { name: 'Mongoose', description: 'Experienced with Mongoose for MongoDB.', icon: 'MongooseIcon' },
  { name: 'MySQL', description: 'Knowledgeable in relational database management.', icon: 'MySQLIcon' },
  { name: 'VS Code', description: 'Familiar with VS Code for development.', icon: 'VSCodeIcon' },
  { name: 'Git', description: 'Proficient in version control with Git.', icon: 'GitIcon' },
  { name: 'GitHub', description: 'Experienced with GitHub for collaboration.', icon: 'GitHubIcon' },
  { name: 'Postman', description: 'Skilled in API testing with Postman.', icon: 'PostmanIcon' },
  { name: 'Power BI', description: 'Knowledgeable in data visualization with Power BI.', icon: 'PowerBIIcon' },
];

export const experiences = [
  {
    id: 1,
    role: 'AI Intern',
    company: 'Swecha Summer of AI',
    duration: '2024',
    description: [
      'Built and assessed an Automatic Speech Recognition (ASR) model for Telugu language.',
      'Collected a varied dataset of Telugu audio and video samples to strengthen project results.',
    ],
  },
];

export const education = [
  {
    id: 1,
    degree: 'BTech in Computer Science and Engineering (Data Science)',
    institution: 'B V Raju Institute of Technology',
    duration: '2022 - 2026',
    description: 'CGPA: 7.41/10. Focused on Data Science, AI, and full-stack development.',
  },
  {
    id: 2,
    degree: 'Intermediate (MPC)',
    institution: 'Narayana College',
    duration: '2020 - 2022',
    description: 'Score: 89.8%. Studied Mathematics, Physics, and Chemistry.',
  },
  {
    id: 3,
    degree: 'SSC',
    institution: 'Megha High School',
    duration: '2019 - 2020',
    description: 'CGPA: 10/10. Excelled in all subjects.',
  },
];

export const certifications = [
  { name: 'Programming in Java', issuer: 'NPTEL', year: '2024', file: 'java nptel.pdf' },
  { name: 'Programming Essentials in Python', issuer: 'Cisco', year: '2024', file: 'PCAP: Programming Essentials in Python.pdf' },
  { name: 'Java Fundamentals', issuer: 'Oracle', year: '2024', file: 'java oracle.pdf' },
  // { name: 'Java Foundations', issuer: 'Oracle', year: '2024' },
  { name: 'The Joy of Computing Using Python', issuer: 'NPTEL', year: '2024', file: 'Nptel py.pdf' },
  { name: 'Programming with Python 3.X', issuer: 'SKILLUP', year: '2024', file: 'skill up.pdf' },
  { name: 'Summer of AI', issuer: 'Swecha', year: '2024', file: 'swetch.pdf' },
  { name: 'Java (Basic)', issuer: 'HackerRank', year: '2024', file: 'hacker rank java.pdf' },
];

export const achievements = [
  {
    title: '4th Place Overall & 2nd Prize in Domain',
    description: 'Secured 4th Place Overall and Domain-wise 2nd Prize in the Healthcare domain for the project HealthSphere atHackWithinfinity, a national-level hackathon with participation from 129 teams.',
  },
  {
    title: 'Academic Excellence',
    description: '10/10 GPA in 10th, 89.8% in Intermediate, B.Tech CGPA of 7.41 (up to 3-1 semester).',
  },
];

export const projects = [
  {
    id: 1,
    title: 'HealthSphere',
    description: 'Developed a full-stack healthcare platform that streamlines patient care management. Features include electronic health records, appointment scheduling, prescription management, and secure data sharing between healthcare providers. Implemented role-based access control and HIPAA-compliant data storage.',
    image: 'https://marketplace.canva.com/EAE8fLYOzrA/1/0/1600w/canva-health-care-bO8TgMWVszg.jpg',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Flask', 'AI', 'JWT'],
    githubLink: 'https://github.com/jaishnaviinturi/HealthSphere_Full_Stack_Project',
    website: 'https://health-sphere-frontend.vercel.app/',
  },
  {
    id: 2,
    title: 'Career Catalyst',
    description: 'A web platform for resume analysis, job search, institutional hiring, and organizational GitHub stats with salary suggestions.',
    image: 'https://files.selar.co/product-images/2024/products/rita-babalola1/career-gps-a-career-clari-selar.co-6664142cc9386.jpeg',
    tags: ['Python', 'FastAPI', 'React.js', 'MongoDB', 'Hugging Face', 'Scikit-Learn'],
    githubLink: 'https://github.com/sriraghavi22/careerCatalyst',
    website: 'https://career-catalyst-six.vercel.app',
  },
];