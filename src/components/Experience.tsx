import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experiences, education, certifications } from '../data';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      id="experience" 
      className="py-20 bg-gray-50 dark:bg-gray-800"
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
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="text-gray-700 dark:text-gray-300">
            My professional journey and educational background.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center mb-8">
              <Briefcase className="text-blue-600 dark:text-blue-400 mr-3" size={24} />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Work Experience</h3>
            </div>

            <div className="relative border-l-2 border-gray-300 dark:border-gray-600 pl-8 pb-6 space-y-10">
              {experiences.map((exp, index) => (
                <div key={exp.id} className="relative">
                  <div className="absolute -left-10 top-0 w-5 h-5 rounded-full bg-blue-600 dark:bg-blue-400 border-4 border-white dark:border-gray-800"></div>
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.role}</h4>
                    <div className="flex flex-col sm:flex-row sm:justify-between mb-3">
                      <span className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</span>
                      <span className="text-gray-500 dark:text-gray-400">{exp.duration}</span>
                    </div>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center mb-8">
              <GraduationCap className="text-blue-600 dark:text-blue-400 mr-3" size={24} />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
            </div>

            <div className="relative border-l-2 border-gray-300 dark:border-gray-600 pl-8 pb-6 space-y-10">
              {education.map((edu, index) => (
                <div key={edu.id} className="relative">
                  <div className="absolute -left-10 top-0 w-5 h-5 rounded-full bg-blue-600 dark:bg-blue-400 border-4 border-white dark:border-gray-800"></div>
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{edu.degree}</h4>
                    <div className="flex flex-col sm:flex-row sm:justify-between mb-3">
                      <span className="text-blue-600 dark:text-blue-400 font-medium">{edu.institution}</span>
                      <span className="text-gray-500 dark:text-gray-400">{edu.duration}</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Certifications</h3>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 mr-3"></div>
                      <div>
                        <span className="font-medium block">{cert.name}</span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">{cert.issuer}, {cert.year}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;