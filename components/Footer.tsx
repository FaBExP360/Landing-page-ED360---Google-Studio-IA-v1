import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark-secondary border-t border-white/10">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-white">Expertise Digitale 360</h3>
            <p className="mt-2 text-base text-brand-gray">
              Rendre les organisations plus claires, efficaces et cohérentes grâce à une IA alignée sur leur culture.
            </p>
          </div>
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-8">
             <div>
                <h4 className="text-lg font-semibold text-white">Vincent Bondoux</h4>
                <p className="text-sm text-brand-gray">CEO & Stratégie</p>
                <a href="mailto:v.bondoux@expertisedigitale360.com" className="text-sm text-brand-accent-blue hover:text-brand-glow-cyan">v.bondoux@expertisedigitale360.com</a>
             </div>
             <div>
                <h4 className="text-lg font-semibold text-white">Sabine Lefebvre</h4>
                <p className="text-sm text-brand-gray">Accompagnement & Structuration</p>
                <a href="mailto:sabine@expertisedigitale360.com" className="text-sm text-brand-accent-blue hover:text-brand-glow-cyan">sabine@expertisedigitale360.com</a>
             </div>
             <div>
                <h4 className="text-lg font-semibold text-white">Fabrice Ibog</h4>
                <p className="text-sm text-brand-gray">Automatisation & R&D</p>
                <a href="mailto:fabrice@expertisedigitale360.com" className="text-sm text-brand-accent-blue hover:text-brand-glow-cyan">fabrice@expertisedigitale360.com</a>
             </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-8 text-center">
          <p className="text-base text-brand-gray">&copy; {new Date().getFullYear()} Expertise Digitale 360. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;