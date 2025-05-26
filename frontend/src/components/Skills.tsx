import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data';
import { 
  Code, 
  Database, 
  FileCode, 
  Coffee, 
  Terminal, 
  Cpu, 
  FileJson,
  Globe, 
  Layers, 
  Server, 
  PackageCheck,
  Database as DatabaseIcon,
  Codepen,
  GitBranch,
  Github,
  SendHorizonal,
  BarChart4,
  Paintbrush,
  Brain,
  Zap,
  BookOpen
} from 'lucide-react';

const iconComponents: Record<string, React.FC<{ className?: string }>> = {
  JavaIcon: Coffee,
  PythonIcon: Cpu,
  CIcon: Terminal,
  JavaScriptIcon: Zap,
  DataStructuresIcon: Brain,
  HTMIIcon: Globe,
  CSSIcon: Paintbrush,
  ReactIcon: Code,
  NodeIcon: Server,
  ExpressIcon: PackageCheck,
  MongoDBIcon: Database,
  MongooseIcon: BookOpen,
  MySQLIcon: DatabaseIcon,
  VSCodeIcon: FileCode,
  GitIcon: GitBranch,
  GitHubIcon: Github,
  PostmanIcon: SendHorizonal,
  PowerBIIcon: BarChart4,
};

// Color map for each icon
const iconColors: Record<string, string> = {
  JavaIcon: 'text-[#f89820]', // Java orange
  PythonIcon: 'text-[#3776AB]', // Python blue
  CIcon: 'text-[#A8B9CC]', // C blue
  JavaScriptIcon: 'text-[#f7df1e]', // JS yellow
  DataStructuresIcon: 'text-[#4ade80]', // Green
  HTMIIcon: 'text-[#e34c26]', // HTML orange
  CSSIcon: 'text-[#264de4]', // CSS blue
  ReactIcon: 'text-[#61dafb]', // React cyan
  NodeIcon: 'text-[#3c873a]', // Node green
  ExpressIcon: 'text-[#000000]', // Express black
  MongoDBIcon: 'text-[#47A248]', // MongoDB green
  MongooseIcon: 'text-[#800000]', // Mongoose maroon
  MySQLIcon: 'text-[#00758F]', // MySQL blue
  VSCodeIcon: 'text-[#007ACC]', // VSCode blue
  GitIcon: 'text-[#f34f29]', // Git orange
  GitHubIcon: 'text-[#333333]', // GitHub dark
  PostmanIcon: 'text-[#ff6c37]', // Postman orange
  PowerBIIcon: 'text-[#f2c811]', // Power BI yellow
};

// Map skill names to SVG logo URLs or emoji/icon fallback
const skillLogos: Record<string, { src: string; alt: string } | undefined> = {
  'Java': { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', alt: 'Java' },
  'Python': { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', alt: 'Python' },
  'C': { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg', alt: 'C' },
  'JavaScript': { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', alt: 'JavaScript' },
  'HTML': { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', alt: 'HTML5' },
  'CSS': { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', alt: 'CSS3' },
  'React.js': { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', alt: 'React' },
  'Node.js': { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', alt: 'Node.js' },
  'Express.js': { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', alt: 'Express.js' },
  'MongoDB': { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', alt: 'MongoDB' },
  'MySQL': { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', alt: 'MySQL' },
  'VS Code': { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', alt: 'VS Code' },
  'Git': { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', alt: 'Git' },
  'GitHub': { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', alt: 'GitHub' },
  'Postman': { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg', alt: 'Postman' },
  'Power BI': { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powerbi/powerbi-original.svg', alt: 'Power BI' },
  'Mongoose': { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', alt: 'Mongoose (MongoDB)' },
  'Data Structures and Algorithms': { src: '', alt: 'DSA' }, // fallback
};

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categorizedSkills = {
    'Programming Languages': skills.filter(s => ['Java', 'Python', 'C', 'JavaScript', 'DSA'].includes(s.name)),
    'Web Development': skills.filter(s => ['HTML', 'CSS', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'MySQL'].includes(s.name)),
    'Tools & Software': skills.filter(s => ['VS Code', 'Git', 'GitHub', 'Postman', 'Power BI'].includes(s.name)),
  };

  return (
    <section 
      id="skills" 
      className="py-20 bg-white dark:bg-gray-900"
      ref={ref}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="text-gray-700 dark:text-gray-300">
            I've developed expertise in various technologies and methodologies to deliver complete solutions.
          </p>
        </motion.div>

        <div className="space-y-12">
          {Object.entries(categorizedSkills).map(([category, skillsList], index) => (
            <div key={index}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                {category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                {skillsList.map((skill, skillIndex) => {
                  const logo = skillLogos[skill.name];
                  return (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                      className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center hover:shadow-2xl transition-all duration-300"
                    >
                      {logo && skill.name === 'Power BI' ? (
                        <span className="mb-3">
                          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
                            <rect width="32" height="32" rx="6" fill="#F2C811"/>
                            <rect x="7" y="13" width="3" height="10" rx="1.5" fill="#393939"/>
                            <rect x="13" y="9" width="3" height="14" rx="1.5" fill="#393939"/>
                            <rect x="19" y="17" width="3" height="6" rx="1.5" fill="#393939"/>
                            <rect x="25" y="7" width="3" height="16" rx="1.5" fill="#393939"/>
                          </svg>
                        </span>
                      ) : logo && logo.src ? (
                        <img src={logo.src} alt={logo.alt} className="w-10 h-10 mb-3 object-contain" loading="lazy" />
                      ) : (
                        <span className="text-4xl mb-3">🧠</span> // fallback emoji for DSA
                      )}
                      <span className="text-lg text-gray-900 dark:text-white text-center">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;