"use client";

import React, { useRef } from 'react';
import { useGSAPAnimation } from '@/hooks/useGSAPAnimation';
import { ANIMATION } from '@/lib/constants';
import { SectionContainer } from '@/components/ui/SectionContainer';

const PracticeAreas = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useGSAPAnimation(titleRef, {
        from: { y: 50, opacity: 0 },
        to: { y: 0, opacity: 1, duration: ANIMATION.DURATION.NORMAL },
        scrollTrigger: {}
    });

    useGSAPAnimation(contentRef, {
        from: { y: 30, opacity: 0 },
        to: { y: 0, opacity: 1, duration: ANIMATION.DURATION.NORMAL },
        scrollTrigger: {},
        stagger: ANIMATION.STAGGER.SLOW,
        useChildren: true
    });

    return (
        <section id="areas-de-atuacao" ref={sectionRef} className="py-20 bg-dark-900 border-b border-white/5 relative z-10">
            <SectionContainer>
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-2 mb-4">
                        <span className="text-gold-400 text-sm font-medium">ATUAÇÃO JURÍDICA</span>
                    </div>
                    <h2 ref={titleRef} className="text-3xl md:text-5xl font-bold mb-4 font-serif text-white">
                        Áreas de <span className="text-gradient-gold">Atuação</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-gold-600 to-transparent mx-auto mt-4 rounded-full"></div>
                </div>

                {/* Main Content */}
                <div ref={contentRef} className="max-w-5xl mx-auto space-y-12">

                    <div className="text-body-lg text-justify">
                        <p>
                            A atuação jurídica concentra-se no Direito Público e no Direito Privado, com formação generalista e abordagem estratégica, permitindo a condução de demandas complexas tanto na assessoria direta quanto na colaboração com outros escritórios.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Direito Administrativo */}
                        <div className="space-y-4 bg-dark-800/50 p-6 rounded-xl border border-white/5 hover:border-gold-500/30 transition-all duration-300">
                            <h3 className="text-xl font-serif font-bold text-white border-l-4 border-gold-500 pl-4">
                                Direito Administrativo
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-sm text-justify">
                                Atuação em compliance e integridade institucional, auditorias corporativas, detecção e apuração de irregularidades, due diligence, direito regulatório, contratos administrativos, licitações, concessões e instrumentos correlatos.
                            </p>
                            <p className="text-gold-400/60 text-xs italic">
                                Por princípio institucional, não há atuação em face do TCEPR nem do Estado do Paraná.
                            </p>
                        </div>

                        {/* Direito Privado */}
                        <div className="space-y-4 bg-dark-800/50 p-6 rounded-xl border border-white/5 hover:border-gold-500/30 transition-all duration-300">
                            <h3 className="text-xl font-serif font-bold text-white border-l-4 border-gold-500 pl-4">
                                Direito Privado
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-sm text-justify">
                                Atuação ampla no direito civil, com ênfase em contratos, relações familiares, posse e propriedade, direito do consumidor e demandas consumeristas, sempre com análise técnica aprofundada e estratégia processual consistente.
                            </p>
                        </div>

                        {/* Direito Penal */}
                        <div className="space-y-4 bg-dark-800/50 p-6 rounded-xl border border-white/5 hover:border-gold-500/30 transition-all duration-300">
                            <h3 className="text-xl font-serif font-bold text-white border-l-4 border-gold-500 pl-4">
                                Direito Penal
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-sm text-justify">
                                Consultoria e defesa em matéria criminal, com foco em crimes contra a ordem econômica, administração pública e infrações complexas, aliando técnica processual a uma visão estratégica da justiça.
                            </p>
                        </div>

                        {/* Direitos Humanos */}
                        <div className="space-y-4 bg-dark-800/50 p-6 rounded-xl border border-white/5 hover:border-gold-500/30 transition-all duration-300">
                            <h3 className="text-xl font-serif font-bold text-white border-l-4 border-gold-500 pl-4">
                                Direitos Humanos
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-sm text-justify">
                                Atuação especializada na proteção e promoção dos direitos fundamentais, com acompanhamento de casos perante instâncias nacionais e organismos internacionais, assegurando a dignidade e a justiça.
                            </p>
                        </div>

                        {/* Direito Internacional */}
                        <div className="space-y-4 bg-dark-800/50 p-6 rounded-xl border border-white/5 hover:border-gold-500/30 transition-all duration-300">
                            <h3 className="text-xl font-serif font-bold text-white border-l-4 border-gold-500 pl-4">
                                Direito Internacional
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-sm text-justify">
                                Assessoria jurídica em relações transnacionais, abrangendo contratos internacionais, cooperação jurídica multilateral, arbitragem e questões de soberania e direitos em contexto global.
                            </p>
                        </div>

                        {/* Compliance & Integridade */}
                        <div className="space-y-4 bg-dark-800/50 p-6 rounded-xl border border-white/5 hover:border-gold-500/30 transition-all duration-300">
                            <h3 className="text-xl font-serif font-bold text-white border-l-4 border-gold-500 pl-4">
                                Compliance & Integridade
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-sm text-justify">
                                Estruturação e revisão de programas de integridade, governança corporativa, adequação à LGPD, mitigação de riscos regulatórios e fomento à cultura ética empresarial, com visão integrada ao controle público.
                            </p>
                        </div>
                    </div>

                    {/* Método de Trabalho */}
                    <div className="bg-dark-800 rounded-xl p-8 border border-white/5 shadow-2xl">
                        <h3 className="text-2xl font-serif font-bold text-gold-400 mb-6 flex items-center gap-3">
                            Metodologia de Trabalho
                        </h3>
                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed text-justify">
                            <p>
                                Os casos são conduzidos com atendimento direto, reservado e personalizado, sem pulverização de demandas que comprometa a qualidade técnica. Cada cliente recebe acompanhamento individual, com estudo minucioso da matéria, definição estratégica clara e atuação focada na solução jurídica mais adequada.
                            </p>
                            <p>
                                A proposta é unir rigor acadêmico, experiência prática e dedicação exclusiva, preservando a confidencialidade e a excelência em cada etapa do trabalho.
                            </p>
                        </div>
                    </div>

                </div>
            </SectionContainer>
        </section>
    );
};

export default PracticeAreas;
