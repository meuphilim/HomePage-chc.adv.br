"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionContainer } from '@/components/ui/SectionContainer';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const Skills = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (titleRef.current) {
                gsap.fromTo(titleRef.current, {
                    y: 50,
                    opacity: 0
                }, {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 80%',
                    }
                });
            }

            if (cardsRef.current) {
                gsap.fromTo(cardsRef.current.children, {
                    y: 50,
                    opacity: 0
                }, {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: cardsRef.current,
                        start: 'top 75%',
                    }
                });
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const skills = [
        { name: "Direito Civil", icon: "fas fa-scale-balanced", desc: "Contratos, Responsabilidade Civil e Obrigações." },
        { name: "Direito Empresarial", icon: "fas fa-building", desc: "Societário, Falências e Recuperação Judicial." },
        { name: "Direito de Família", icon: "fas fa-users", desc: "Divórcios, Inventários e Planejamento Sucessório." },
        { name: "Direito do Consumidor", icon: "fas fa-shield-halved", desc: "Defesa em relações de consumo e indenizações." },
        { name: "Direito Imobiliário", icon: "fas fa-house", desc: "Compra e venda, Locações e Regularização." },
        { name: "Consultoria Jurídica", icon: "fas fa-comments", desc: "Pareceres e assessoria preventiva." },
    ];

    return (
        <section id="skills" ref={sectionRef} className="py-20 bg-dark-800/50 relative border-b border-white/5">
            <SectionContainer className="relative z-10">
                <div className="text-center mb-16">
                    <h2 ref={titleRef} className="text-3xl md:text-5xl font-bold font-serif text-white mb-4">
                        <span className="text-gold-500">_</span> Áreas de Atuação
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-gold-600 to-transparent mx-auto mt-4 rounded-full"></div>
                </div>

                <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="glass-panel p-8 rounded-2xl hover:border-gold-500/40 transition-all duration-300 hover:transform hover:-translate-y-2 group shadow-gold-sm hover:shadow-gold-md"
                        >
                            <div className="w-14 h-14 bg-gradient-to-br from-gold-600/20 to-gold-900/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold-600/30 transition-colors">
                                <i className={`${skill.icon} text-2xl text-gold-400 group-hover:text-gold-300`}></i>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 font-serif group-hover:text-gold-400 transition-colors">{skill.name}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{skill.desc}</p>
                        </div>
                    ))}
                </div>
            </SectionContainer>
        </section>
    );
};

export default Skills;
