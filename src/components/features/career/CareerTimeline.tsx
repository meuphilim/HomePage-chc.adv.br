"use client";

import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { careerData } from '@/data/career';
import { cn } from '@/lib/utils';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const ConsentModal = ({ isOpen, onClose, onConfirm }: { isOpen: boolean; onClose: () => void; onConfirm: () => void }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-900/80 backdrop-blur-sm">
            <div className="bg-dark-800 border border-gold-500/30 rounded-xl p-8 max-w-md w-full shadow-2xl relative animate-in fade-in zoom-in duration-300">
                <h3 className="text-xl font-bold text-white mb-4 font-serif">Redirecionamento Externo</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                    Você está sendo redirecionado para a plataforma Lattes (CNPq). Deseja continuar?
                </p>
                <div className="flex justify-end gap-4">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-gray-400 hover:text-white transition-colors text-sm font-medium"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-6 py-2 bg-gold-600 hover:bg-gold-500 text-white rounded-lg text-sm font-medium transition-colors shadow-lg shadow-gold-900/20"
                    >
                        Continuar
                    </button>
                </div>
            </div>
        </div>
    );
};

const CareerTimeline = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [targetLink, setTargetLink] = useState<string | null>(null);

    const handleLinkClick = (link: string) => {
        setTargetLink(link);
        setIsModalOpen(true);
    };

    const handleConfirmRedirect = () => {
        if (targetLink) {
            window.open(targetLink, '_blank', 'noopener,noreferrer');
        }
        setIsModalOpen(false);
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (titleRef.current) {
                gsap.fromTo(titleRef.current, { y: 50, opacity: 0 }, {
                    y: 0, opacity: 1, duration: 1,
                    scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
                });
            }

            if (timelineRef.current) {
                const items = timelineRef.current.querySelectorAll('.timeline-item');
                items.forEach((item, index) => {
                    gsap.fromTo(item, {
                        x: index % 2 === 0 ? -50 : 50,
                        opacity: 0
                    }, {
                        x: 0, opacity: 1, duration: 0.8,
                        scrollTrigger: {
                            trigger: item,
                            start: 'top 85%',
                        }
                    });
                });
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="career" ref={sectionRef} className="py-20 bg-dark-900 relative border-b border-white/5 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                <div className="text-center mb-16">
                    <h2 ref={titleRef} className="text-3xl md:text-5xl font-bold font-serif text-white mb-4">
                        <span className="text-gold-500">_</span> Trajetória Profissional
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Uma jornada dedicada à excelência jurídica e ao aprimoramento constante.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-gold-600 to-transparent mx-auto mt-4 rounded-full"></div>
                </div>

                <div ref={timelineRef} className="relative max-w-5xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-600/50 to-transparent hidden md:block"></div>

                    {careerData.map((item, index) => (
                        <div key={item.id} className={cn(
                            "timeline-item flex flex-col md:flex-row items-center mb-12 md:mb-24 relative",
                            index % 2 === 0 ? "md:flex-row-reverse" : ""
                        )}>
                            {/* Date Bubble (Desktop) */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-dark-900 border-2 border-gold-500 rounded-full z-20 hidden md:flex items-center justify-center shadow-gold-glow">
                                <i className={cn(item.icon, "text-gold-400 text-sm")}></i>
                            </div>

                            {/* Content Side */}
                            <div className="w-full md:w-1/2 px-4 md:px-12">
                                <div
                                    onClick={() => item.type === 'link' && item.link ? handleLinkClick(item.link) : undefined}
                                    className={cn(
                                        "bg-dark-800 p-6 rounded-xl border border-white/5 hover:border-gold-500/30 transition-all duration-300 shadow-lg relative group",
                                        index % 2 === 0 ? "md:text-right" : "md:text-left",
                                        item.type === 'link' ? "border-gold-500/40 bg-gold-900/10 cursor-pointer hover:bg-gold-900/20" : ""
                                    )}
                                >
                                    <div className={cn(
                                        "inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3",
                                        item.type === 'education' ? "bg-dark-700/50 text-gray-300 border border-white/10" :
                                            item.type === 'link' ? "bg-gold-500/20 text-gold-400 border border-gold-500/40" :
                                                "bg-gold-600/20 text-gold-400 border border-gold-500/20"
                                    )}>
                                        {item.type === 'education' ? 'Formação' : item.type === 'link' ? 'Plataforma Lattes' : 'Experiência'}
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-1 font-serif group-hover:text-gold-400 transition-colors">
                                        {item.title}
                                        {item.type === 'link' && <span className="inline-block ml-2 opacity-70 text-sm">↗</span>}
                                    </h3>

                                    <h4 className="text-gray-300 font-medium mb-2">{item.company}</h4>
                                    <span className="text-gray-500 text-sm mb-4 block font-mono">{item.year}</span>
                                    <p className="text-body-base">
                                        {item.description}
                                    </p>

                                    {/* Connector Line (Mobile) */}
                                    <div className="absolute md:hidden left-1/2 top-full h-12 w-px bg-white/10 -translate-x-1/2"></div>
                                </div>
                            </div>

                            {/* Empty Side for layout balance */}
                            <div className="w-full md:w-1/2"></div>
                        </div>
                    ))}
                </div>
            </div>

            <ConsentModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={handleConfirmRedirect}
            />
        </section>
    );
};

export default CareerTimeline;
