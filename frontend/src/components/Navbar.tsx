import { useState, useEffect, useContext } from 'react';
import { navItems } from '../data';
import { Menu, X, Moon, Sun, Home, User, Code, Briefcase, Award, GraduationCap, FileCode, MailIcon } from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [active, setActive] = useState<string>("#home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      setActive(window.location.hash || "#home");
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Map nav items to appropriate icons
  const navIcons = {
    'Home': <Home size={18} className="mr-2" />,
    'About': <User size={18} className="mr-2" />,
    'Projects': <Briefcase size={18} className="mr-2" />,
    'Skills': <Code size={18} className="mr-2" />,
    'Achievements': <Award size={18} className="mr-2" />,
    'Experience & Education': <GraduationCap size={18} className="mr-2" />,
    'Certificates': <FileCode size={18} className="mr-2" />,
    'Contact': <MailIcon size={18} className="mr-2" />
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-gray-900/80 backdrop-blur-md shadow-lg py-2'
          : 'bg-white/70 dark:bg-gray-900/60 py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* <a
            href="#home"
            className="text-2xl font-extrabold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-400 bg-clip-text text-transparent tracking-tight"
            style={{ letterSpacing: '0.01em' }}
            onClick={() => setActive('#home')}
          >
            Anugu Abhijith Reddy
          </a> */}

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setActive(item.href)}
                className={`px-4 py-2 rounded-lg text-base font-semibold transition-all duration-200 flex items-center
                  ${active === item.href
                    ? 'bg-white shadow text-blue-600 dark:bg-gray-800 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400'}
                `}
                style={{ minWidth: '120px', justifyContent: 'center' }}
              >
                {navIcons[item.label as keyof typeof navIcons]}
                {item.label}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="ml-2 p-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow hover:shadow-md transition duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun size={20} className="text-yellow-400" />
              ) : (
                <Moon size={20} className="text-gray-700" />
              )}
            </button>
          </nav>

          {/* Mobile Navigation Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 mr-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow hover:shadow-md transition duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun size={20} className="text-yellow-400" />
              ) : (
                <Moon size={20} className="text-gray-700" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg md:hidden flex flex-col"
          >
            <div className="flex justify-end p-4">
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-300"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>
            <nav className="flex flex-col items-center space-y-2 mt-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={() => { setActive(item.href); setIsOpen(false); }}
                  className={`w-11/12 px-4 py-3 rounded-lg text-lg font-semibold transition-all duration-200 flex items-center justify-center
                    ${active === item.href
                      ? 'bg-white shadow text-blue-600 dark:bg-gray-800 dark:text-blue-400'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400'}
                  `}
                >
                  {navIcons[item.label as keyof typeof navIcons]}
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;