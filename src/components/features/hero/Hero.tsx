"use client";

import React, { useRef } from 'react';
import { scrollToSection } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';
import { useGSAPAnimation } from '@/hooks/useGSAPAnimation';
import { ANIMATION } from '@/lib/constants';
import { SectionContainer } from '@/components/ui/SectionContainer';

const Hero = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useGSAPAnimation(textRef, {
        from: { y: 60, opacity: 0 },
        to: { y: 0, opacity: 1, duration: ANIMATION.DURATION.SLOW, ease: 'power3.out' }
    });

    useGSAPAnimation(imageRef, {
        from: { y: 60, opacity: 0, scale: 0.8 },
        to: {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: ANIMATION.DURATION.SLOW,
            delay: ANIMATION.DELAY.SHORT,
            ease: 'back.out(1.2)'
        }
    });

    return (
        <section id="home" ref={heroRef} className="min-h-screen flex items-center pt-20 perspective relative border-b border-white/5">
            <SectionContainer className="py-20 md:py-32 flex flex-col md:flex-row items-center relative z-10">
                {/* Text Content */}
                <div
                    ref={textRef}
                    className="md:w-1/2 mb-12 md:mb-0 hero-text opacity-0"
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-serif text-white tracking-tight">
                        <span className="text-gradient-gold">
                            Excelência Jurídica
                        </span>
                        <br />
                        & Visão Estratégica
                    </h1>

                    <p className="text-body-lg mb-8 max-w-lg">
                        Advocacia de alto rigor técnico, orientada por uma compreensão ampla dos
                        contextos institucionais, humanos e patrimoniais de cada demanda.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={() => scrollToSection('#contact')}
                            className="group relative px-8 py-4 bg-gradient-to-r from-gold-600 to-gold-500 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-gold-900/40 hover:scale-105 transition-all duration-300 overflow-hidden"
                        >
                            <span className="relative z-10">Agendar Consulta</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-gold-500 to-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>

                        <button
                            onClick={() => scrollToSection('#areas-de-atuacao')}
                            className="px-8 py-4 border-2 border-gold-600/40 text-gold-400 rounded-full font-semibold hover:bg-gold-600/10 hover:border-gold-500 hover:text-gold-300 hover:scale-105 transition-all duration-300 backdrop-blur-sm text-center"
                        >
                            Áreas de Atuação
                        </button>
                    </div>
                </div>


                {/* Avatar Image */}
                <div ref={imageRef} className="md:w-1/2 flex justify-center hero-image opacity-0 mt-8 md:mt-0">
                    <div className="relative w-72 h-[24rem] md:w-80 md:h-[26.6rem] lg:w-96 lg:h-[32rem]">
                        {/* Gradient Background Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gold-500/20 to-gold-900/10 rounded-2xl blur-3xl animate-pulse"></div>

                        {/* Avatar Container - 3:4 Aspect Ratio */}
                        <div className="absolute inset-0 bg-dark-800 rounded-2xl shadow-2xl border border-white/10 overflow-hidden hover:scale-105 transition-transform duration-500 group">
                            <Image
                                src="/images/portrait-hero.png"
                                alt="Advogado profissional - Dr. Cláudio Henrique de Castro"
                                fill
                                sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                                className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </section>
    );
};

export default Hero;
