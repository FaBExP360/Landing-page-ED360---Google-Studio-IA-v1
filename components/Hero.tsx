import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
          poster="https://assets.mixkit.co/videos/preview/mixkit-futuristic-scrolling-digital-data-screen-4122-0.jpg"
        >
          {/* NOTE: Using a placeholder video. Replace with a custom, high-quality, compressed video. */}
          <source src="https://assets.mixkit.co/videos/download/mixkit-futuristic-scrolling-digital-data-screen-4122.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-brand-dark opacity-70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="text-center md:text-left">
             <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter">
              Automatisez l'Avenir.
            </h1>
            <p className="mt-8 text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto md:mx-0">
              <span className="font-bold text-white">3 experts, 3 piliers, une approche 360°</span> pour structurer, automatiser et piloter la <span className="text-brand-glow-cyan font-bold">performance</span> de votre entreprise.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="relative inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-white bg-brand-accent-blue rounded-lg shadow-lg hover:bg-brand-glow-cyan hover:text-brand-dark transform hover:-translate-y-1 transition-all duration-300 group"
              >
                 <span className="absolute -inset-1 bg-gradient-to-r from-brand-glow-magenta to-brand-glow-cyan rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-300"></span>
                 <span className="relative">Réserver un diagnostic</span>
              </a>
            </div>
          </div>
          {/* The other column is empty to let the video background be more visible */}
        </div>
      </div>
    </section>
  );
};

export default Hero;