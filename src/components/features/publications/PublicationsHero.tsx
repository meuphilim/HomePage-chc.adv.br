"use client";

import { useGSAPAnimation } from "@/hooks/useGSAPAnimation";
import { useRef } from "react";
import { BookOpen, GraduationCap, PenTool } from "lucide-react";

export default function PublicationsHero() {
    const heroRef = useRef<HTMLDivElement>(null);

    useGSAPAnimation(heroRef, {
        from: { opacity: 0, y: 30 },
        to: { opacity: 1, y: 0, duration: 1 },
    });

    return (
        <section ref={heroRef} className="relative pt-32 pb-20 overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold-900/10 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
                    <div className="md:w-2/3">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-sm font-medium mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
                            </span>
                            Produção Acadêmica & Intelectual
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold font-serif text-white mb-6 leading-tight">
                            Uma Vida Dedicada ao <span className="text-gradient-gold">Pensamento Jurídico.</span>
                        </h1>

                        <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                            Mais de três décadas combinando rigor acadêmico com prática jurídica de excelência. Conheça as obras, artigos e pesquisas que fundamentam nossa atuação estratégica.
                        </p>
                    </div>

                    <div className="md:w-1/3 flex flex-col gap-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-dark-800 p-4 rounded-xl border border-white/5">
                                <div className="text-3xl font-bold text-white mb-1">29</div>
                                <div className="text-xs text-gray-400 uppercase tracking-wider flex items-center gap-2">
                                    <BookOpen size={14} className="text-gold-500" /> Livros
                                </div>
                            </div>
                            <div className="bg-dark-800 p-4 rounded-xl border border-white/5">
                                <div className="text-3xl font-bold text-white mb-1">+2288</div>
                                <div className="text-xs text-gray-400 uppercase tracking-wider flex items-center gap-2">
                                    <PenTool size={14} className="text-gold-500" /> Artigos
                                </div>
                            </div>
                        </div>
                        <div className="bg-dark-800 p-4 rounded-xl border border-white/5">
                            <div className="text-3xl font-bold text-white mb-1">+30 Anos</div>
                            <div className="text-xs text-gray-400 uppercase tracking-wider flex items-center gap-2">
                                <GraduationCap size={14} className="text-gold-500" /> De Pesquisa e Docência
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
