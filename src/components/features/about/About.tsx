"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { useGSAPAnimation } from '@/hooks/useGSAPAnimation';
import { ANIMATION } from '@/lib/constants';
import { SectionContainer } from '@/components/ui/SectionContainer';

const About = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);

    useGSAPAnimation(titleRef, {
        from: { y: 30, opacity: 0 },
        to: { y: 0, opacity: 1, duration: ANIMATION.DURATION.NORMAL },
        scrollTrigger: {},
    });

    useGSAPAnimation(contentRef, {
        from: { x: 50, opacity: 0 },
        to: { x: 0, opacity: 1, duration: ANIMATION.DURATION.NORMAL, delay: 0.2 },
        scrollTrigger: {},
    });

    useGSAPAnimation(imageRef, {
        from: { x: -50, opacity: 0 },
        to: { x: 0, opacity: 1, duration: ANIMATION.DURATION.NORMAL },
        scrollTrigger: {}
    });

    return (
        <section ref={sectionRef} className="py-20 bg-dark-900 border-b border-white/5 relative z-10 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-gold-900/5 to-transparent"></div>
            </div>

            <SectionContainer className="relative z-10">
                <div ref={titleRef} className="text-center mb-16 opacity-0">
                    <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-2 mb-6">
                        <span className="text-gold-400 text-sm font-medium uppercase tracking-wider">Nossa Essência</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif text-white leading-tight">
                        A Arte no <span className="text-gradient-gold">Direito</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-gold-600 to-transparent mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Image Content (Left) */}
                    <div ref={imageRef} className="order-1 flex justify-center lg:justify-start">
                        <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-gold-lg group">
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent z-10"></div>
                            <div className="absolute inset-0 bg-gold-900/10 group-hover:bg-transparent transition-colors duration-500 z-20"></div>
                            <Image
                                src="/images/Corpus_Iuris_Civilis.jpeg"
                                alt="Corpus Iuris Civilis - Tradição Jurídica Clássica"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 500px"
                            />
                            <div className="absolute bottom-6 left-6 right-6 z-30">
                                <blockquote className="text-xl font-serif italic text-white/90 border-l-2 border-gold-500 pl-4">
                                    “Ius est ars boni et aequi.“
                                </blockquote>
                                <cite className="block text-gold-400 text-sm mt-2 font-medium">— Publius Juventius Celsus</cite>
                            </div>
                        </div>
                    </div>

                    {/* Text Content (Right) */}
                    <div ref={contentRef} className="order-2">

                        <div className="space-y-6 text-body-lg text-justify">
                            <div className="border-l-4 border-gold-500 pl-6 py-2 mb-8 not-italic">
                                <blockquote className="text-2xl font-serif italic text-white/90">
                                    “A simplicidade é o último grau de sofisticação.”
                                </blockquote>
                                <cite className="block text-gold-400 text-sm mt-2 font-medium not-italic">— Leonardo da Vinci</cite>
                            </div>

                            <p>
                                O trabalho jurídico exige precisão, método e sensibilidade técnica. Cada caso possui nuances próprias que demandam análise minuciosa e construção cuidadosa das teses. É nesse contexto que se adota a compreensão do Direito como <span className="text-gold-400 font-semibold">arte técnica e intelectual</span>.
                            </p>

                            <p>
                                O exercício da advocacia é conduzido como em uma oficina de arte: cada argumento é estruturado com rigor, cada fundamento é examinado com profundidade e cada estratégia é moldada conforme as particularidades concretas da demanda.
                            </p>

                            <p>
                                O estudo diário das decisões dos tribunais integra a rotina profissional. A partir dessa análise constante, são construídos cenários prospectivos, considerando tanto a jurisprudência vinculante quanto a persuasiva, sempre com atenção à evolução interpretativa dos precedentes.
                            </p>

                            <p>
                                A observação da <span className="text-gold-400 font-semibold">jurisprudência comparada</span> — inclusive dos tribunais da União Europeia e da tradição ibérica — amplia o horizonte argumentativo. Essa compreensão encontra fundamento na tradição clássica, influenciando a formulação de teses jurídicas tecnicamente consistentes.
                            </p>
                        </div>


                    </div>

                </div>
            </SectionContainer>
        </section>
    );
};

export default About;
