"use client";

import React, { useRef } from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '@/schemas';
import { useGSAPAnimation } from '@/hooks/useGSAPAnimation';
import { ANIMATION } from '@/lib/constants';

const Testimonials = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useGSAPAnimation(cardsRef, {
        from: { y: 60, opacity: 0, rotateX: 10 },
        to: { y: 0, opacity: 1, rotateX: 0, duration: ANIMATION.DURATION.NORMAL, ease: 'power2.out' },
        scrollTrigger: {},
        stagger: ANIMATION.STAGGER.SLOW,
        useChildren: true
    });

    const testimonials: Testimonial[] = [
        {
            id: 1,
            name: "Roberto Mendes",
            role: "Diretor, Grupo Mendes",
            content: "A assessoria jurídica do escritório foi fundamental para a segurança jurídica da nossa expansão internacional. Profissionalismo impecável.",
            rating: 5
        },
        {
            id: 2,
            name: "Carla Venâncio",
            role: "CEO, StartTech",
            content: "Excelente atuação na elaboração dos nossos contratos societários. O Dr. Cláudio Henrique demonstra profundo conhecimento técnico e visão estratégica.",
            rating: 5
        },
        {
            id: 3,
            name: "Construtora Horizonte",
            role: "Departamento Jurídico",
            content: "Parceria sólida e resultados consistentes em nossas demandas contenciosas. Recomendamos pela agilidade e transparência.",
            rating: 4.5
        }
    ];

    return (
        <section id="testimonials" ref={sectionRef} className="py-20 bg-dark-800 relative z-10 border-b border-white/5">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif text-white">
                        O Que Dizem Nossos <span className="text-gradient-gold">Clientes</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        A confiança é a base do nosso trabalho.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-gold-600 to-transparent mx-auto mt-4 rounded-full"></div>
                </div>

                <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((item, index) => (
                        <div key={item.id} className={`testimonial-card p-8 rounded-xl bg-dark-900 border border-white/5 shadow-lg backdrop-blur-sm hover:border-gold-500/30 transition-all duration-300 opacity-0 ${index === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 rounded-full bg-gold-600/20 flex items-center justify-center mr-4 flex-shrink-0 text-gold-500 font-bold border border-gold-500/30">
                                    {item.name.charAt(0)}
                                </div>
                                <div className="min-w-0">
                                    <h4 className="font-bold text-white font-serif">{item.name}</h4>
                                    <p className="text-gray-500 text-sm">{item.role}</p>
                                </div>
                            </div>
                            <p className="text-gray-300 italic mb-6 leading-relaxed">
                                &quot;{item.content}&quot;
                            </p>
                            <div className="flex text-gold-400">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={18}
                                        fill={i < Math.floor(item.rating) ? "currentColor" : i < item.rating ? "url(#half)" : "none"} // Simplifying for full stars or empty, lucide doesn't support half fill natively easily without defs
                                        className={i < item.rating ? "text-gold-400" : "text-gray-700"}
                                        strokeWidth={1}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
