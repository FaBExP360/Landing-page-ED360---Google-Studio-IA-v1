import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Results from './components/Results';
import Pillars from './components/Pillars';
import Process from './components/Process';
import CaseStudies from './components/CaseStudies';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Commitments from './components/Commitments';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const AnimatedGradientMesh = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden">
    <div className="absolute inset-0 bg-brand-dark"></div>
    <div className="absolute top-[10vh] left-[5vw] w-[80vh] h-[80vh] bg-radial-gradient from-deep-blue to-transparent blur-3xl animate-blob1"></div>
    <div className="absolute top-[30vh] right-[10vw] w-[70vh] h-[70vh] bg-radial-gradient from-brand-glow-cyan to-transparent blur-3xl animate-blob2"></div>
    <div className="absolute bottom-[5vh] left-[15vw] w-[60vh] h-[60vh] bg-radial-gradient from-purple to-transparent blur-3xl animate-blob3"></div>
    <div className="absolute bottom-[20vh] right-[5vw] w-[80vh] h-[80vh] bg-radial-gradient from-brand-glow-magenta to-transparent blur-3xl animate-blob4"></div>
    <div 
        className="absolute inset-0"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', 
          backgroundSize: '30px 30px' 
        }}
      />
  </div>
);


function App() {
  return (
    <div className="text-brand-light font-sans antialiased relative isolate overflow-hidden">
      <AnimatedGradientMesh />
      
      <Header />
      <main>
        <Hero />
        <Results />
        <Pillars />
        <Process />
        <CaseStudies />
        <Team />
        <Testimonials />
        <Commitments />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
