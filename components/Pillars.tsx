import React from 'react';

const CultureIllustration = () => (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-brand-glow-cyan group-hover:scale-110 transition-transform duration-300">
        <path d="M24 10C29.5228 10 34 14.4772 34 20C34 25.5228 29.5228 30 24 30C18.4772 30 14 25.5228 14 20C14 14.4772 18.4772 10 24 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24 30V38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 38H30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 20C10 16.6863 12.6863 14 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M38 20C38 23.3137 35.3137 26 32 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24 10V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 6H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const StrategyIllustration = () => (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-brand-glow-cyan group-hover:rotate-12 transition-transform duration-300">
        <path d="M6 34.5V42H13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 42L16.5 31.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M34.5 6H42V13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M42 6L31.5 16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 6H18V18H6V6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M30 30H42V42H30V30Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const AutomationIllustration = () => (
     <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-brand-glow-cyan group-hover:animate-spin" style={{ animationDuration: '4s' }}>
        <path d="M42 24C42 33.9411 33.9411 42 24 42C14.0589 42 6 33.9411 6 24C6 14.0589 14.0589 6 24 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24 14V24H34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M40.9998 11.0002L34.9998 15.0002" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M36.3428 5.65685L31.0908 9.90888" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const pillarsData = [
    {
        icon: <CultureIllustration />,
        title: "Culture IA & Acculturation",
        description: "Faire comprendre, partager et ancrer la <span class='text-brand-glow-cyan font-semibold'>culture IA</span> au sein de votre organisation pour mieux décider et agir. Un <span class='text-brand-glow-cyan font-semibold'>socle culturel et humain</span> pour toute démarche IA.",
        lead: "Porté par Sabine Lefebvre"
    },
    {
        icon: <StrategyIllustration />,
        title: "Stratégie & Gouvernance IA",
        description: "Aligner votre <span class='text-brand-glow-cyan font-semibold'>stratégie IA</span> sur les objectifs et la gouvernance globale de l'entreprise. Transformer la vision IA en un <span class='text-brand-glow-cyan font-semibold'>plan d'action structuré</span>, mesurable et conforme.",
        lead: "Porté par Vincent Bondoux"
    },
    {
        icon: <AutomationIllustration />,
        title: "IA Opérationnelle & Automatisation",
        description: "Transformer la stratégie IA en <span class='text-brand-glow-cyan font-semibold'>gains concrets de performance</span>. Automatiser, connecter et optimiser les processus métiers grâce à des <span class='text-brand-glow-cyan font-semibold'>outils IA utiles et mesurables</span>.",
        lead: "Porté par Fabrice Ibog"
    }
];

const Pillars: React.FC = () => {
    return (
        <section id="approche" className="py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-base font-semibold text-brand-accent-blue tracking-wide uppercase">Notre approche</h2>
                    <p className="mt-2 text-4xl font-black text-white tracking-tight sm:text-5xl">
                        Une expertise complète, du concept à la réalité
                    </p>
                    <p className="mt-6 text-xl text-brand-gray">
                        Notre offre repose sur trois piliers interdépendants qui couvrent l'ensemble du cycle de maturité IA d'une organisation.
                    </p>
                </div>
                <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {pillarsData.map((pillar) => (
                        <div key={pillar.title} className="relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/10 transform hover:-translate-y-2 transition-all duration-300 group">
                             <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-glow-cyan to-brand-glow-magenta opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                            <div className="relative">
                                <div className="flex items-center justify-center h-24 w-24 rounded-full bg-brand-dark shadow-md">
                                    {pillar.icon}
                                </div>
                                <h3 className="mt-8 text-2xl font-bold text-white">{pillar.title}</h3>
                                <p className="mt-4 text-lg text-brand-gray" dangerouslySetInnerHTML={{ __html: pillar.description }}></p>
                                <p className="mt-5 text-base font-semibold text-brand-accent-blue">{pillar.lead}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pillars;
