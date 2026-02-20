"use client";

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { Book, FileText, Newspaper, ArrowRight, Quote } from 'lucide-react';
import { SectionContainer } from "@/components/ui/SectionContainer";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const PublicationsSummary = ({ books, chapters, articlesCount, mediaCount }: {
    books: { year: number; items: string[] }[],
    chapters: { year: number; items: { title: string }[] }[],
    articlesCount: number,
    mediaCount: number
}) => {
    const containerRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const leftColRef = useRef<HTMLDivElement>(null);
    const rightColRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);
        }

        const ctx = gsap.context(() => {
            // Header Animation
            gsap.fromTo(headerRef.current,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                    }
                }
            );

            // Left Column (Books) Animation
            gsap.fromTo(leftColRef.current,
                { x: -30, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.2,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 70%",
                    }
                }
            );

            // Right Column (Stats) Animation
            gsap.fromTo(rightColRef.current,
                { x: 30, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.4,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 70%",
                    }
                }
            );

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="pb-24 pt-12 bg-dark-900 relative border-y border-white/5">
            <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5"></div>
            <SectionContainer className="max-w-7xl relative z-10">

                {/* Header */}
                <div ref={headerRef} className="text-center mb-20 opacity-0">
                    <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-2 mb-6">
                        <span className="text-gold-400 text-sm font-medium uppercase tracking-wider">Dr. Cláudio Henrique de Castro</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold font-serif text-white mb-6">
                        Produção <span className="text-gradient-gold">Intelectual</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-gold-600 to-transparent mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* Left Column: Books & Chapters */}
                    <div ref={leftColRef} className="lg:col-span-7 space-y-16 opacity-0">

                        {/* Livros */}
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <span className="p-3 bg-gold-500/10 rounded-lg text-gold-500">
                                    <Book size={24} />
                                </span>
                                <h3 className="text-2xl font-serif text-white font-bold">Livros Publicados</h3>
                            </div>

                            <div className="space-y-8 border-l border-white/10 pl-8 ml-3">
                                {books.map((group, idx) => (
                                    <div key={idx} className="relative">
                                        <span className="absolute -left-[45px] top-1 text-xs font-mono text-gold-500 bg-dark-900 px-2 py-0.5 border border-gold-500/20 rounded-full">
                                            {group.year}
                                        </span>
                                        <ul className="space-y-3">
                                            {group.items.map((item, i) => (
                                                <li key={i} className="text-gray-300 text-sm leading-relaxed">
                                                    <span className="text-white font-medium">Livro</span> — <span dangerouslySetInnerHTML={{ __html: item.replace(/(.*?)(\.|$)/, "<i>$1</i>$2") }}></span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Capítulos */}
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <h3 className="text-xl font-serif text-white font-bold pl-14">Capítulos de Livro</h3>
                            </div>
                            <div className="space-y-6 border-l border-white/10 pl-8 ml-3">
                                {chapters.map((block, idx) => (
                                    <div key={idx} className="relative">
                                        <span className="absolute -left-[45px] top-1 text-xs font-mono text-gray-500 bg-dark-900 px-2 py-0.5 border border-white/10 rounded-full">
                                            {block.year}
                                        </span>
                                        <div className="space-y-2">
                                            {block.items.map((item, i) => (
                                                <p key={i} className="text-gray-400 text-sm">
                                                    <span className="text-gray-300">Capítulo</span> — <span dangerouslySetInnerHTML={{ __html: item.title.replace(/(.*?)\.\s*$/, "<i>$1</i>.") }}></span>
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Articles & Stats */}
                    <div ref={rightColRef} className="lg:col-span-5 space-y-12 opacity-0">

                        {/* Artigos Científicos Box */}
                        <div className="bg-dark-800 rounded-2xl p-8 border border-white/5 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-32 bg-gold-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-gold-500/10 transition-colors duration-1000"></div>

                            <div className="flex items-center gap-3 mb-6 relative z-10">
                                <span className="p-2 bg-gold-500/10 rounded-lg text-gold-500">
                                    <FileText size={20} />
                                </span>
                                <h3 className="text-xl font-serif text-white font-bold">Artigos completos publicados</h3>
                            </div>

                            <p className="text-gray-400 text-sm leading-relaxed mb-6 relative z-10">
                                A produção acadêmica do Dr. Cláudio constitui um dos pilares centrais de sua trajetória, com artigos que refletem aprofundamento teórico e rigor metodológico, especialmente em Direito Constitucional e Administrativo.
                            </p>

                            <div className="mb-8 relative z-10">
                                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Temas de Relevância</h4>
                                <ul className="text-sm text-gray-300 space-y-2">
                                    <li className="flex items-start gap-2"><Quote size={12} className="text-gold-500 mt-1 shrink-0" /> Teoria da Constituição e supremacia</li>
                                    <li className="flex items-start gap-2"><Quote size={12} className="text-gold-500 mt-1 shrink-0" /> Controle de constitucionalidade</li>
                                    <li className="flex items-start gap-2"><Quote size={12} className="text-gold-500 mt-1 shrink-0" /> Direitos e garantias fundamentais</li>
                                    <li className="flex items-start gap-2"><Quote size={12} className="text-gold-500 mt-1 shrink-0" /> Hermenêutica jurídica</li>
                                </ul>
                            </div>

                            <div className="border-t border-white/10 pt-6 relative z-10">
                                <div className="flex items-baseline gap-2 mb-1">
                                    <span className="text-4xl font-bold text-white">+{articlesCount}</span>
                                    <span className="text-sm text-gray-500">artigos publicados</span>
                                </div>
                                <p className="text-xs text-gray-500 mt-2">
                                    Refletem décadas de continuidade e consistência temática.
                                </p>
                            </div>
                        </div>

                        {/* Jornais e Portais Box */}
                        <div className="bg-dark-800 rounded-2xl p-8 border border-white/5 relative overflow-hidden group">
                            <div className="flex items-center gap-3 mb-6 relative z-10">
                                <span className="p-2 bg-white/5 rounded-lg text-gray-300">
                                    <Newspaper size={20} />
                                </span>
                                <h3 className="text-xl font-serif text-white font-bold">Jornais e Portais</h3>
                            </div>

                            <p className="text-gray-400 text-sm leading-relaxed mb-6 relative z-10">
                                Atuação recorrente em veículos de comunicação, contribuindo para o debate público qualificado sobre temas centrais do Direito e transformações institucionais.
                            </p>

                            <div className="border-t border-white/10 pt-6 relative z-10">
                                <div className="flex items-baseline gap-2 mb-1">
                                    <span className="text-4xl font-bold text-white">+{mediaCount}</span>
                                    <span className="text-sm text-gray-500">publicações em mídia</span>
                                </div>
                                <p className="text-xs text-gray-500 mt-2">
                                    Entrevistas, mesas-redondas, participações em programas e comentários na mídia evidenciam uma trajetória marcada por continuidade, coerência temática e compromisso permanente com o debate jurídico qualificado.
                                </p>
                            </div>
                        </div>

                        {/* CTA Box */}
                        <div className="text-center md:text-left mt-8">
                            <p className="text-gray-400 text-sm mb-4">
                                Consulte o acervo detalhado, organizado por linhas de pesquisa e com links para leitura.
                            </p>
                            <Link
                                href="/autor/publicacoes"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-gold-600 text-white rounded-full font-medium hover:bg-gold-500 transition-all shadow-lg hover:shadow-gold-500/20 group"
                            >
                                Produção Acadêmica
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                    </div>

                </div>
            </SectionContainer>
        </section>
    );
};

export default PublicationsSummary;
