import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © {currentYear} Designed & Built by Anugu Abhijith Reddy
            </p>
            {/* <div className="flex items-center space-x-2">
              <span className="text-gray-400">Built with</span>
              <Heart size={16} className="text-red-500 fill-current" />
              <span className="text-gray-400">using React & Tailwind CSS</span>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;