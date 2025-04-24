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
  BarChart4
} from 'lucide-react';

const iconComponents: Record<string, React.FC<{ className?: string }>> = {
  JavaIcon: Coffee,
  PythonIcon: Cpu,
  CIcon: Terminal,
  JavaScriptIcon: FileJson,
  DataStructuresIcon: Layers,
  HTMIIcon: Globe,
  CSSIcon: Codepen,
  ReactIcon: Code,
  NodeIcon: Server,
  ExpressIcon: PackageCheck,
  MongoDBIcon: Database,
  MongooseIcon: Database,
  MySQLIcon: DatabaseIcon,
  VSCodeIcon: FileCode,
  GitIcon: GitBranch,
  GitHubIcon: Github,
  PostmanIcon: SendHorizonal,
  PowerBIIcon: BarChart4,
};

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categorizedSkills = {
    'Programming Languages': skills.filter(s => ['Java', 'Python', 'C', 'JavaScript', 'Data Structures and Algorithms'].includes(s.name)),
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
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                {category}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {skillsList.map((skill, skillIndex) => {
                  const IconComponent = iconComponents[skill.icon] || Code;
                  return (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                      className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-center space-x-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:translate-y-[-5px]"
                    >
                      <div className="text-blue-600 dark:text-blue-400">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-gray-900 dark:text-white font-medium">
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