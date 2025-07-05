
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Full Stack Developer";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Your Name
            </span>
          </h1>
          
          <div className="text-2xl md:text-3xl text-gray-300 mb-8 h-12 flex items-center justify-center">
            <span className="border-r-2 border-blue-400 pr-2 animate-pulse">
              {displayText}
            </span>
          </div>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            I craft beautiful, functional, and user-centered digital experiences that bring ideas to life through clean code and innovative design.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              View My Work
            </button>
            <button className="border-2 border-gray-600 hover:border-white text-gray-300 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Download CV
            </button>
          </div>
          
          <div className="flex justify-center space-x-6 mb-16">
            <a
              href="https://github.com"
              className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={28} />
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
        
        <button
          onClick={scrollToAbout}
          className="animate-bounce text-gray-400 hover:text-white transition-colors duration-200"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
