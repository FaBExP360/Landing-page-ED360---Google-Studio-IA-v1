import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-dark/80 shadow-2xl shadow-brand-glow-cyan/10 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0">
             <a href="#" className="flex items-center space-x-2">
                <span className="text-3xl font-black text-white">Expertise Digitale 360</span>
             </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-8">
                <a href="#approche" className="text-lg font-semibold text-brand-gray hover:text-white transition-colors duration-300 relative group">
                    Approche
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-glow-cyan scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                </a>
                <a href="#methodologie" className="text-lg font-semibold text-brand-gray hover:text-white transition-colors duration-300 relative group">
                    Méthode
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-glow-cyan scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                </a>
                <a href="#resultats-cles" className="text-lg font-semibold text-brand-gray hover:text-white transition-colors duration-300 relative group">
                    Résultats
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-glow-cyan scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                </a>
                <a href="#equipe" className="text-lg font-semibold text-brand-gray hover:text-white transition-colors duration-300 relative group">
                    Équipe
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-glow-cyan scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                </a>
            </nav>
            <a
              href="#contact"
              className="relative px-6 py-3 text-base font-semibold text-white bg-brand-accent-blue rounded-lg shadow-md hover:bg-brand-glow-cyan hover:text-brand-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-glow-cyan transition-all duration-300 group"
            >
             <span className="absolute -inset-0.5 bg-gradient-to-r from-brand-glow-magenta to-brand-glow-cyan rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-300"></span>
              <span className="relative">Réserver un diagnostic</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;