import React, { useState, useEffect, useRef } from 'react';

// A custom hook for animating number count up
const useCountUp = (end: number, duration: number = 2) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        observer.current = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    let start = 0;
                    const startTime = performance.now();
                    const animate = (currentTime: number) => {
                        const elapsedTime = currentTime - startTime;
                        const progress = Math.min(elapsedTime / (duration * 1000), 1);
                        start = Math.floor(progress * end);
                        setCount(start);
                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        }
                    };
                    requestAnimationFrame(animate);
                    if(node) observer.current?.unobserve(node); // Animate only once
                }
            },
            { threshold: 0.5 }
        );

        observer.current.observe(node);

        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, [end, duration]);

    return { count, ref };
};

const GraphIcon = () => (
    <svg className="w-16 h-16 text-brand-glow-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <style>{`.path-anim{stroke-dasharray:1000;stroke-dashoffset:1000;animation:dash 2s ease-in-out forwards;}@keyframes dash{to{stroke-dashoffset:0;}}`}</style>
        <path className="path-anim" d="M3 17l6-6 4 4 8-8" />
        <path d="M17 7h4v4" />
    </svg>
);
const RocketIcon = () => (
    <svg className="w-16 h-16 text-brand-glow-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <style>{`@keyframes rocket-move { 0% { transform: translate(0, 4px); } 100% { transform: translate(6px, -6px); opacity: 0; } } .rocket { animation: rocket-move 1.5s ease-in-out infinite; }`}</style>
        <path className="rocket" d="M6 18 L18 6" />
        <path d="M12 12l6-6" />
    </svg>
);
const ConnectIcon = () => (
    <svg className="w-16 h-16 text-brand-glow-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
       <style>{`@keyframes pulse { 0%, 100% { transform: scale(0.9); opacity: 0.7; } 50% { transform: scale(1.1); opacity: 1; } } .pulse-circle { animation: pulse 2s ease-in-out infinite; transform-origin: center; }`}</style>
        <circle cx="12" cy="12" r="3" className="pulse-circle" />
        <path d="M12 2a10 10 0 00-9.9 9" />
        <path d="M2.1 12a10 10 0 009.9 9" />
        <path d="M12 22a10 10 0 009.9-9" />
        <path d="M21.9 12a10 10 0 00-9.9-9" />
    </svg>
);


const statIcons: { [key: string]: React.ReactNode } = {
    "%": <GraphIcon />,
    "x": <RocketIcon />,
    "100%": <ConnectIcon />
};

const StatCard: React.FC<{ value: number; label: string; symbol: string }> = ({ value, label, symbol }) => {
    const { count, ref } = useCountUp(value);
    const iconKey = symbol === "%" && value === 100 ? "100%" : symbol;
    return (
        <div className="text-center flex flex-col items-center">
            {statIcons[iconKey]}
            <p className="mt-4 text-5xl md:text-6xl font-black text-white tracking-tighter">
                <span ref={ref}>{count}</span>{symbol}
            </p>
            <p className="mt-2 text-lg text-brand-gray">{label}</p>
        </div>
    );
};

const clientLogos = [
    { name: "Innovatech", path: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" },
    { name: "Quantum Leap", path: "M13.26 18.23a4.5 4.5 0 01-6.52 0 4.5 4.5 0 010-6.52 4.5 4.5 0 016.52 0 4.5 4.5 0 010 6.52zM4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24M4.93 19.07l4.24-4.24M14.83 9.17l4.24-4.24" },
    { name: "Apex Solutions", path: "M12 2L22 8.5 12 15 2 8.5 12 2zM12 16.5l10-6.5L12 23 2 10l10 6.5z" },
    { name: "Synergy Corp", path: "M20 12c0-2.2-1.8-4-4-4s-4 1.8-4 4 1.8 4 4 4 4-1.8 4-4zM4 12c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4zm8 8c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" },
    { name: "Future Proof Inc.", path: "M19 12h-2V8h-2v4h-2V8h-2v4H9V8H7v4H5v2h2v4h2v-4h2v4h2v-4h2v4h2v-4h2v-2z" }
];

const Results: React.FC = () => {
    return (
        <section id="resultats-cles" className="py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-black text-white sm:text-5xl">
                    Simplifiez, automatisez, respirez.
                </h2>
                <p className="mt-6 max-w-3xl mx-auto text-xl text-brand-gray">
                    Nos solutions transforment vos processus chronophages en avantage concurrentiel. Des gains mesurables dès 3 mois, sans bouleverser vos outils actuels.
                </p>

                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-16">
                    <StatCard value={40} symbol="%" label="de performance opérationnelle moyenne" />
                    <StatCard value={2} symbol="x" label="déploiements IA plus rapides" />
                    <StatCard value={100} symbol="%" label="d'adoption par les équipes accompagnées" />
                </div>

                <div className="mt-24">
                    <p className="text-lg text-brand-gray">Ils nous font confiance</p>
                    <div className="mt-8 flex justify-center items-center gap-x-8 md:gap-x-12 flex-wrap">
                        {clientLogos.map(logo => (
                            <svg key={logo.name} className="h-10 text-gray-500 hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <title>{logo.name}</title>
                                <path d={logo.path}></path>
                            </svg>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Results;
