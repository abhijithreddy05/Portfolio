import { motion } from 'framer-motion';
import { ChevronDown, Github as GitHub, Linkedin, Mail, FileText } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-16"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 py-12 flex flex-col items-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="block">Hi, I'm</span>
            <span className="text-blue-600 dark:text-blue-400 mt-2 block">Anugu Abhijith Reddy</span>
          </h1>
        </motion.div>

        <motion.h2 
          className="text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="typing-text">Full-Stack Developer & Exploring AI & ML</span>
        </motion.h2>

        <motion.p 
          className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          BTech student with a focus on AI, and Full-Stack development. Enthusiastic about building impactful projects that blend smart technology with real-world applications.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a 
            href="#contact" 
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition duration-300 shadow-lg hover:shadow-xl"
          >
            Get in Touch
          </a>
          <a 
            href="#projects" 
            className="px-8 py-3 border-2 border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 text-gray-800 dark:text-gray-200 rounded-full transition duration-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            View My Work
          </a>
        </motion.div>

        <motion.div 
          className="flex space-x-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <a 
            href="https://github.com/abhijithreddy05" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
            aria-label="GitHub"
          >
            <GitHub size={24} />
          </a>
          <a 
            href="https://linkedin.com/in/anugu-abhijith-reddy-a38a65293/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="mailto:anuguabhijithreddy0202@gmail.com" 
            className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
          <a 
            href="/resume.pdf" 
            download
            className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
            aria-label="Resume"
          >
            <FileText size={24} />
          </a>
        </motion.div>

        <motion.a 
          href="#about"
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 animate-bounce"
          aria-label="Scroll down"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <ChevronDown size={32} />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;