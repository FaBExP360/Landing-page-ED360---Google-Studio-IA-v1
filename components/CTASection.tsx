import React from 'react';

const WaveDivider = () => (
    <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -mt-px" aria-hidden="true">
        <svg
            className="relative block w-[calc(100%+1.3px)] h-[100px] animate-wave"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
        >
            <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="fill-brand-dark"
            ></path>
        </svg>
    </div>
);


const CTASection: React.FC = () => {
  return (
    <section id="contact" className="bg-brand-dark relative">
      <WaveDivider />
      <div className="relative max-w-4xl mx-auto text-center py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-black text-white sm:text-5xl">
          <span className="block">Prêt à transformer votre entreprise ?</span>
        </h2>
        <p className="mt-6 text-xl leading-8 text-brand-gray">
          Parce que l’IA ne transforme rien sans vision, accompagnement et action, nous faisons de la technologie un levier de clarté, de performance et de sérénité.
        </p>
        <a
          href="mailto:v.bondoux@expertisedigitale360.com"
          className="mt-12 w-full inline-flex items-center justify-center px-10 py-5 border border-transparent rounded-md shadow-sm text-xl font-bold text-brand-dark bg-white hover:bg-brand-glow-cyan sm:w-auto transition-all duration-300 group relative"
        >
          <span className="absolute -inset-1 bg-gradient-to-r from-brand-glow-magenta to-brand-glow-cyan rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-300"></span>
          <span className="relative">Réservez votre diagnostic offert (15 min)</span>
        </a>
      </div>
    </section>
  );
};

export default CTASection;
