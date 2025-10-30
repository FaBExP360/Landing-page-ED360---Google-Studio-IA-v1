import React from 'react';

const QuoteIcon = () => (
    <svg className="h-12 w-12 text-brand-accent-blue/20" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M9.352 4C4.456 4 0 8.456 0 13.352c0 4.224 2.752 8.128 7.04 9.312l.224.064.064.224C6.4 25.856 4.96 28.256 4 29.536V28c0-2.208 1.792-4 4-4h.352c.256.032.512.032.736.032 4.896 0 9.344-3.936 9.344-8.832C18.432 8.456 13.984 4 9.352 4zM25.352 4C20.456 4 16 8.456 16 13.352c0 4.224 2.752 8.128 7.04 9.312l.224.064.064.224c-.928 2.848-2.4 5.248-3.328 6.528V28c0-2.208 1.792-4 4-4h.352c.256.032.512.032.736.032 4.896 0 9.344-3.936 9.344-8.832C34.432 8.456 29.984 4 25.352 4z" />
    </svg>
);

const testimonials = [
    {
        quote: "L'approche d'ED360 nous a permis de démystifier l'IA et de lancer des projets concrets avec l'adhésion de toutes nos équipes. Un vrai partenaire de transformation.",
        author: "Directeur Général",
        company: "PME Industrielle",
    },
    {
        quote: "Leur expertise en automatisation a révolutionné nos processus internes. Nous avons gagné en efficacité et en clarté, ce qui nous permet de nous concentrer sur notre cœur de métier.",
        author: "Directrice des Opérations",
        company: "Secteur Services",
    },
];

const Testimonials: React.FC = () => {
    return (
        <section className="py-32 overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-4xl font-black text-white sm:text-5xl">Ce que nos clients disent de nous</h2>
                        <p className="mt-6 text-xl text-brand-gray">Des partenariats fondés sur la confiance et les résultats.</p>
                    </div>
                    <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-2">
                        {testimonials.map((testimonial) => (
                           <blockquote key={testimonial.author} className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl shadow-2xl flex flex-col">
                                <div className="flex-1">
                                    <div className="relative">
                                        <QuoteIcon />
                                    </div>
                                    <p className="mt-5 text-lg leading-relaxed text-brand-light">"{testimonial.quote}"</p>
                                </div>
                                <footer className="mt-6 border-t border-white/10 pt-5">
                                    <p className="text-lg font-bold text-white">{testimonial.author}</p>
                                    <p className="text-base text-brand-gray">{testimonial.company}</p>
                                </footer>
                            </blockquote>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;