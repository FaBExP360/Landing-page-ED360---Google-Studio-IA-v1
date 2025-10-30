import React from 'react';

const commitmentsData = [
    { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "Support 6 mois inclus" },
    { icon: "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-3.75-2.25M16.5 18.75l-3.75 2.25m0 0l3.75 2.25M12 18.75l3.75 2.25M12 18.75l-3.75 2.25m3.75-2.25V5.25", text: "ROI mesurable" },
    { icon: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75", text: "Réponse sous 24h" },
    { icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z", text: "Certifications Make & n8n" },
    { icon: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0011.667 0l3.182-3.182m0 0a8.25 8.25 0 00-11.667 0l-3.182 3.182m0 0l-3.182-3.182m3.182 3.182L6 12", text: "Évolutions incluses" },
];

const Commitments: React.FC = () => {
    return (
        <section id="engagements" className="py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl font-black text-white sm:text-5xl">
                        Votre sérénité, notre engagement.
                    </h2>
                    <p className="mt-6 text-xl text-brand-gray">
                        Nous nous engageons sur des résultats concrets et un accompagnement de qualité, fondé sur la confiance et la transparence.
                    </p>
                </div>
                <div className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {commitmentsData.map((commitment) => (
                        <div key={commitment.text} className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/10">
                            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-brand-glow-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d={commitment.icon} />
                            </svg>
                            <p className="mt-4 font-semibold text-white">{commitment.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Commitments;
