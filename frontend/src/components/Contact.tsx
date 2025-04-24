import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSayHello = () => {
    // Open the user's default email client with a pre-filled email
    window.location.href = 'mailto:anuguabhijithreddy0202@gmail.com?subject=Hello%20from%20Portfolio&body=Hi%20Abhijith,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect!';
  };

  return (
    <section 
      id="contact" 
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
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="text-gray-700 dark:text-gray-300">
            Have a project in mind or want to discuss potential collaborations? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="rounded-full bg-blue-100 dark:bg-blue-900 p-3 mr-4">
                  <Mail className="text-blue-600 dark:text-blue-400" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">Email</h4>
                  <a href="mailto:anuguabhijithreddy0202@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                    anuguabhijithreddy0202@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="rounded-full bg-blue-100 dark:bg-blue-900 p-3 mr-4">
                  <Phone className="text-blue-600 dark:text-blue-400" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">Phone</h4>
                  <a href="tel:+919398976700" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                    +91 9398976700
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="rounded-full bg-blue-100 dark:bg-blue-900 p-3 mr-4">
                  <MapPin className="text-blue-600 dark:text-blue-400" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">Location</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Hyderabad, India
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Connect With Me
              </h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/abhijithreddy05" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://linkedin.com/in/anugu-abhijith-reddy-a38a65293/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col justify-center items-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Let’s Collaborate
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 text-center">
              I’m excited to connect and explore how we can work together on innovative projects!
            </p>
            <button
              onClick={handleSayHello}
              className="px-6 py-3 bg-black dark:bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              Say Hello
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;