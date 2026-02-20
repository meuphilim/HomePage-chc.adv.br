"use client";

import React, { useRef } from 'react';
import { Scale, Users, Award, TrendingUp } from 'lucide-react';
import { useGSAPAnimation } from '@/hooks/useGSAPAnimation';
import { ANIMATION } from '@/lib/constants';

const stats = [
    {
        icon: Scale,
        number: "500+",
        label: "Casos Atendidos",
        description: "Com sucesso em diversas áreas"
    },
    {
        icon: Users,
        number: "300+",
        label: "Clientes Satisfeitos",
        description: "Empresas e pessoas físicas"
    },
    {
        icon: Award,
        number: "15+",
        label: "Anos de Experiência",
        description: "Atuação em direito civil e empresarial"
    },
    {
        icon: TrendingUp,
        number: "95%",
        label: "Taxa de Sucesso",
        description: "Em processos judiciais"
    }
];

const Stats = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const statsRef = useRef<HTMLDivElement>(null);

    useGSAPAnimation(statsRef, {
        from: { y: 50, opacity: 0 },
        to: { y: 0, opacity: 1, duration: ANIMATION.DURATION.NORMAL, ease: 'power2.out' },
        scrollTrigger: {},
        stagger: ANIMATION.STAGGER.NORMAL,
        useChildren: true
    });

    return (
        <section ref={sectionRef} className="py-20 bg-dark-800 border-b border-white/5 relative z-10">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif text-white">
                        Resultados que <span className="text-gradient-gold">Falam por Si</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Números que refletem nosso compromisso com a excelência jurídica
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-gold-600 to-transparent mx-auto mt-4 rounded-full"></div>
                </div>

                <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={index}
                                className="stat-item bg-dark-900 rounded-xl p-8 text-center border border-white/5 hover:border-gold-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-gold-500/10 opacity-0"
                            >
                                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-gold-500/20 to-gold-600/20 rounded-full flex items-center justify-center">
                                    <Icon className="w-8 h-8 text-gold-400" />
                                </div>
                                <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-serif">
                                    {stat.number}
                                </div>
                                <div className="text-lg font-semibold text-gold-400 mb-2">
                                    {stat.label}
                                </div>
                                <p className="text-sm text-gray-500">
                                    {stat.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Trust Badge */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-3 bg-dark-900 border border-gold-500/20 rounded-full px-6 py-3">
                        <Award className="w-5 h-5 text-gold-400" />
                        <span className="text-gray-300 text-sm">
                            OAB/PR 23.743 | Excelência Jurídica
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
