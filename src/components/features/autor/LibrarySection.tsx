"use client";

import React, { useRef, useEffect } from 'react';
import { Library } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { SectionContainer } from '@/components/ui/SectionContainer';

const LibrarySection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);
        }

        const ctx = gsap.context(() => {
            gsap.fromTo(contentRef.current,
                { x: -50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%",
                    }
                }
            );

            gsap.fromTo(imageRef.current,
                { x: 50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.2,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%",
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="pt-32 pb-24 relative overflow-hidden bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900 border-b border-white/5">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-dark-900/95 z-10"></div>
                <div
                    className="absolute inset-0 bg-[url('/images/books/bibliotecaBG.jpg')] bg-cover bg-center bg-no-repeat opacity-30 mix-blend-overlay"
                    aria-hidden="true"
                ></div>
            </div>

            <SectionContainer className="relative z-10">
                {/* Header at the top */}
                <div className="text-center mb-16 px-4">
                    <div className="inline-flex items-center gap-3 mb-6 bg-gold-500/10 px-4 py-2 rounded-full border border-gold-500/20">
                        <Library className="w-5 h-5 text-gold-500" />
                        <span className="text-gold-500 font-medium tracking-widest uppercase text-sm">
                            Acervo Pessoal
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold font-serif text-white mb-4 leading-tight">
                        Biblioteca <span className="text-gradient-gold">Jurídica</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-gold-600 to-transparent mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Text Content */}
                    <div ref={contentRef} className="order-2 lg:order-1">
                        <div className="space-y-6 text-lg text-gray-300 leading-relaxed text-justify">
                            <p>
                                O conhecimento jurídico não se constrói exclusivamente na prática forense, mas sobre uma <span className="text-gold-400 font-semibold">sólida formação doutrinária e histórica</span>. A biblioteca pessoal do Dr. Cláudio Henrique de Castro é resultado de décadas de dedicação contínua à pesquisa acadêmica, reunindo mais de <span className="text-gold-400 font-semibold">5.000 exemplares</span>, entre obras clássicas, edições históricas e títulos raros de elevado valor intelectual.
                            </p>
                            <p>
                                Com especialização em <span className="text-gold-400 font-semibold">Direito Romano, Direito Privado e Teoria do Estado</span>, o acervo constitui fonte primária de estudo e reflexão, servindo de base para a elaboração de teses jurídicas complexas, pareceres estratégicos e construções argumentativas fundamentadas na tradição e na evolução do pensamento jurídico.
                            </p>
                            <p>
                                Mais do que coleção, trata-se de instrumento permanente de aprofundamento técnico e maturidade intelectual, refletindo o compromisso com a <span className="text-gold-400 font-semibold">excelência e a densidade teórica</span> na prática da advocacia.
                            </p>
                        </div>
                    </div>

                    {/* Image Content */}
                    <div ref={imageRef} className="order-1 lg:order-2 flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent z-10"></div>
                            {/* Using a representative image from the 'raras' collection */}
                            <Image
                                src="/images/raras/CHC_0000001.jpeg"
                                alt="Obra rara do acervo jurídico do Dr. Cláudio Henrique de Castro"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 500px"
                            />
                            <div className="absolute bottom-6 left-6 right-6 z-20">
                                <div className="h-0.5 w-12 bg-gold-500 mb-2"></div>
                                <p className="text-white/90 text-sm font-serif italic">
                                    Exemplar do acervo de obras raras
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </SectionContainer>
        </section>
    );
};

export default LibrarySection;
