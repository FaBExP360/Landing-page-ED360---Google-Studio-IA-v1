import React from 'react';

const TeamMemberPhoto: React.FC<{ name: string }> = ({ name }) => (
    <div className="mx-auto h-48 w-48 rounded-full shadow-lg bg-brand-dark-secondary p-1.5 transition-all duration-300 group-hover:scale-105 relative group-hover:p-0">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-glow-magenta to-brand-glow-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative w-full h-full rounded-full bg-brand-dark p-1">
             <div className="w-full h-full rounded-full bg-brand-dark-secondary overflow-hidden">
                <img
                    // Using a placeholder service. Replace with actual professional photos.
                    src={`https://i.pravatar.cc/192?u=${encodeURIComponent(name)}`}
                    alt={`Portrait de ${name}`}
                    className="w-full h-full object-cover rounded-full filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    width="192"
                    height="192"
                />
             </div>
        </div>
    </div>
);


const teamMembers = [
    {
        name: "Vincent Bondoux",
        role: "CEO & Stratégie IA",
        description: "Incarne la vision stratégique et technique, guidant la transformation IA avec clarté, méthode et innovation.",
    },
    {
        name: "Sabine Lefebvre",
        role: "Accompagnement Humain & Structuration",
        description: "Représente la dimension humaine et structurante, reliant la pédagogie IA, la coordination et la cohérence globale.",
    },
    {
        name: "Fabrice Ibog",
        role: "Automatisation & Intégration IA",
        description: "Porte la dimension technique et innovante, alliant rigueur, curiosité et recherche de performance.",
    },
];

const Team: React.FC = () => {
    return (
        <section id="equipe" className="py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl font-black text-white sm:text-5xl">
                        Une équipe complémentaire à votre service
                    </h2>
                    <p className="mt-6 text-xl text-brand-gray">
                        Un système tri-polaire équilibré : Vision – Méthode – Réalisation.
                    </p>
                </div>
                <div className="mt-20 grid gap-16 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                    {teamMembers.map((member) => (
                        <div key={member.name} className="text-center group">
                            <TeamMemberPhoto name={member.name} />
                            <div className="mt-8">
                                <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                                <p className="text-lg font-semibold text-brand-accent-blue">{member.role}</p>
                                <p className="mt-3 text-lg text-brand-gray max-w-xs mx-auto">{member.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
