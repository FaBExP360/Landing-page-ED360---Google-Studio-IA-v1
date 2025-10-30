import React from 'react';

const processSteps = [
    {
        step: "01",
        name: "Comprendre",
        description: "Analyser les besoins réels, la culture d’entreprise et le niveau de maturité numérique pour bâtir un diagnostic partagé et des objectifs clairs."
    },
    {
        step: "02",
        name: "Structurer",
        description: "Définir une stratégie d’intégration de l’IA cohérente avec les priorités métiers, les ressources disponibles et la gouvernance interne."
    },
    {
        step: "03",
        name: "Déployer",
        description: "Mettre en œuvre des solutions IA et des automatisations utiles, mesurables et responsables, en accompagnant les équipes dans l’appropriation des outils."
    },
    {
        step: "04",
        name: "Mesurer",
        description: "Suivre les impacts, ajuster les usages et valoriser les gains humains et opérationnels pour inscrire durablement la démarche dans votre culture."
    }
];

const Process: React.FC = () => {
    return (
        <section id="methodologie" className="py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-base text-brand-accent-blue font-semibold tracking-wide uppercase">Notre méthodologie</h2>
                    <p className="mt-2 text-4xl leading-8 font-black tracking-tight text-white sm:text-5xl">
                        Une démarche à 360° pour une transformation réussie
                    </p>
                    <p className="mt-6 text-xl text-brand-gray">
                        Notre accompagnement continu relie la vision stratégique, l’action opérationnelle et la montée en compétence de vos équipes.
                    </p>
                </div>

                <div className="mt-20 max-w-4xl mx-auto relative">
                     <div className="hidden md:block absolute top-0 left-0 w-full h-full -z-10" aria-hidden="true">
                        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 500 300">
                             <defs>
                                <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                  <stop offset="0%" stopColor="#00E0FF" stopOpacity="0" />
                                  <stop offset="50%" stopColor="#00E0FF" stopOpacity="1" />
                                  <stop offset="100%" stopColor="#00E0FF" stopOpacity="0" />
                                </linearGradient>
                                <style>{`
                                    @keyframes draw {
                                        to {
                                            stroke-dashoffset: 0;
                                        }
                                    }
                                    .drawing-path {
                                        stroke-dasharray: 1000;
                                        stroke-dashoffset: 1000;
                                        animation: draw 3s ease-out forwards;
                                        animation-delay: 0.5s;
                                    }
                                `}</style>
                            </defs>
                            <path d="M 125 75 H 375 V 225 H 125" stroke="url(#path-gradient)" strokeWidth="2" fill="none" className="drawing-path" />
                        </svg>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                        {processSteps.map((item) => (
                            <div key={item.name} className="relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/10">
                                <div className="absolute top-6 left-6 w-16 h-16 rounded-full flex items-center justify-center bg-brand-dark border-2 border-brand-glow-cyan/50">
                                <span className="text-2xl font-black text-brand-glow-cyan">{item.step}</span>
                                </div>
                                <h3 className="pl-20 text-2xl font-bold text-white">{item.name}</h3>
                                <p className="mt-4 text-lg leading-snug tracking-wide text-brand-gray text-opacity-100">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
