import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements'; // Add this import
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Certificates from './components/Certificates';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VideoResume from './components/VideoResume';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <About />
                  <Projects />
                  <Skills />
                  <Achievements />
                  <Experience />
                  <Certificates />
                  <Contact />
                </>
              } />
              <Route path="/video-resume" element={<VideoResume />} />
            </Routes>
          </main>
          <Footer />

          <style>{`
            @keyframes typing {
              from { width: 0 }
              to { width: 100% }
            }
            .typing-text {
              display: inline-block;
              overflow: hidden;
              white-space: nowrap;
              animation: typing 3.5s steps(40, end);
            }
            .bg-grid-pattern {
              background-image: 
                linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
              background-size: 24px 24px;
            }
            .dark .bg-grid-pattern {
              background-image: 
                linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
            }
          `}</style>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;