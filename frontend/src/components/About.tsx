import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="about"
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
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="[Your Name] headshot"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Who I Am
            </h3>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border">
              <p className="text-gray-800 dark:text-gray-200 mb-4">
              I'm a BTech student (class of 2026) at B V Raju Institute of Technology, maintaining a CGPA of 7.41. I'm passionate about full-stack development, exploring AI & ML and tackling complex challenges through creative problem solving, with an interest in building user-focused tech solutions.
              </p>
              <ul className="text-gray-800 dark:text-gray-300 space-y-2">
                <li><b>Location:</b> Hyderabad, India</li>
                <li><b>Education:</b> BTech in Computer Science (Data Science)</li>
                <li><b>Interests:</b> Web Development, Problem Solving</li>
              </ul>
            </div>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transition duration-300"
            >
              View Resume
            </a>
            <Link
              to="/video-resume"
              className="inline-block mt-4 px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full shadow-lg transition duration-300"
            >
              View Video Resume
            </Link>
            {/* <p className="text-gray-700 dark:text-gray-300 mb-8">
              Based in Hyderabad, India, I'm pursuing a BTech in Computer Science (Data Science), and I'm excited to explore innovative ways to create impactful software.
            </p> */}

            {/* <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  Interests
                </h4>
                <ul className="text-gray-700 dark:text-gray-300">
                  <li>Full-Stack Development</li>
                  <li>Problem Solving</li>
                  <li>Software Innovation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  Education
                </h4>
                <ul className="text-gray-700 dark:text-gray-300">
                  <li>BTech in CSE (Data Science)</li>
                  <li>B V Raju Institute of Technology</li>
                </ul>
              </div>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;