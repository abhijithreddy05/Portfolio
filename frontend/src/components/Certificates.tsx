import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { certifications } from '../data';

const Certificates = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="certificates"
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center">
            <span className="mr-3 text-blue-600 dark:text-blue-400">●</span>
            Certificates
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {certifications.map((certificate, index) => (
            <motion.a
              key={index}
              href={`/certificates/${certificate.file}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-lg border-l-4 border-blue-500 dark:border-blue-400 block cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="mb-2">
                <span className="text-lg font-bold text-gray-900 dark:text-white uppercase">
                  {certificate.issuer}
                </span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                {certificate.name}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Issued by {certificate.issuer} in {certificate.year}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;