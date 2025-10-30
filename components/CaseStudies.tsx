import React from 'react';

const AuditAnimation = () => (
    <svg viewBox="0 0 100 60" className="w-full h-auto">
      <defs>
          <style>{`
              .doc-stack { animation: stack-to-line 4s ease-in-out infinite; transform-origin: center bottom; }
              .check-mark { stroke-dasharray: 100; stroke-dashoffset: 100; animation: draw-check 4s ease-in-out infinite; opacity: 0; }
              @keyframes stack-to-line { 0%, 20% { transform: scaleY(1); opacity: 1; } 40% { transform: scaleY(0.1) translateY(40px); opacity: 0; } 100% { transform: scaleY(0.1) translateY(40px); opacity: 0; } }
              @keyframes draw-check { 40% { opacity: 0; stroke-dashoffset: 100; } 60% { opacity: 1; stroke-dashoffset: 0; } 80%, 100% { opacity: 1; stroke-dashoffset: 0; } }
          `}</style>
      </defs>
      <g className="doc-stack">
        <rect x="25" y="45" width="50" height="4" fill="#4A5568" rx="2"/>
        <rect x="25" y="35" width="50" height="4" fill="#4A5568" rx="2"/>
        <rect x="25" y="25" width="50" height="4" fill="#4A5568" rx="2"/>
        <rect x="25" y="15" width="50" height="4" fill="#4A5568" rx="2"/>
      </g>
      <polyline className="check-mark" points="35,30 45,40 65,20" stroke="#00E0FF" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
const DataMatchAnimation = () => (
    <svg viewBox="0 0 100 60" className="w-full h-auto">
        <defs>
            <style>{`
                .matcher { animation: match-highlight 4s ease-in-out infinite; }
                @keyframes match-highlight { 
                    0%, 40% { stroke: #4A5568; } 
                    60%, 100% { stroke: #00E0FF; } 
                }
            `}</style>
        </defs>
        <g opacity="0.8">
            <rect x="10" y="10" width="30" height="4" fill="#4A5568"/><rect x="10" y="20" width="30" height="4" fill="#4A5568"/><rect x="10" y="30" width="30" height="4" fill="#4A5568"/><rect x="10" y="40" width="30" height="4" fill="#4A5568"/>
        </g>
        <g opacity="0.8">
            <rect x="60" y="10" width="30" height="4" fill="#4A5568"/><rect x="60" y="20" width="30" height="4" fill="#4A5568"/><rect x="60" y="30" width="30" height="4" fill="#4A5568"/><rect x="60" y="40" width="30" height="4" fill="#4A5568"/>
        </g>
        <path className="matcher" d="M40 12 L60 32" strokeWidth="2" fill="none" />
        <path className="matcher" d="M40 32 L60 12" strokeWidth="2" fill="none" />
    </svg>
);
const LogisticsAnimation = () => (
    <svg viewBox="0 0 100 60" className="w-full h-auto">
        <defs>
             <style>{`
                .chaotic-path { animation: path-morph 4s ease-in-out infinite alternate; }
                @keyframes path-morph { 
                    from { d: path("M10 50 C 30 10, 70 60, 90 20"); }
                    to { d: path("M10 30 L 90 30"); }
                }
            `}</style>
        </defs>
        <circle cx="10" cy="50" r="3" fill="#00E0FF"/>
        <circle cx="90" cy="20" r="3" fill="#00E0FF"/>
        <path className="chaotic-path" stroke="#00E0FF" strokeWidth="2" fill="none" strokeDasharray="4 4" />
        <path d="M10 30 L 90 30" stroke="#00E0FF" strokeWidth="2" fill="none" opacity="0.3"/>
    </svg>
);


const caseStudiesData = [
    {
        sector: "Cabinet comptable",
        title: "Audit automatisé",
        result: "-70%",
        metric: "de temps d'audit",
        animation: <AuditAnimation />
    },
    {
        sector: "Société immobilière",
        title: "Rapprochement automatique",
        result: "20h/mois",
        metric: "économisées",
        animation: <DataMatchAnimation />
    },
    {
        sector: "PME logistique",
        title: "Planification intelligente",
        result: "-50%",
        metric: "de retards de livraison",
        animation: <LogisticsAnimation />
    },
];

const CaseStudies: React.FC = () => {
    return (
        <section id="cas-clients" className="py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl font-black text-white sm:text-5xl">
                        Des transformations mesurables, dans tous les secteurs.
                    </h2>
                    <p className="mt-6 text-xl text-brand-gray">
                        Voici quelques exemples de l'impact direct de nos interventions sur la performance de nos clients.
                    </p>
                </div>
                <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {caseStudiesData.map((study) => (
                        <div key={study.title} className="relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/10 text-center flex flex-col justify-between">
                            <div>
                                <p className="text-lg font-semibold text-brand-accent-blue">{study.sector}</p>
                                <h3 className="mt-2 text-2xl font-bold text-white">{study.title}</h3>
                                <div className="mt-6 h-20 flex items-center justify-center">
                                    {study.animation}
                                </div>
                            </div>
                            <div className="mt-6">
                                <p className="text-6xl font-black text-brand-glow-cyan tracking-tighter">{study.result}</p>
                                <p className="mt-2 text-lg text-brand-gray">{study.metric}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
