"use client";

import React, { useRef } from 'react';
import { SectionContainer } from '@/components/ui/SectionContainer';
import FAQ from '@/components/features/faq/FAQ';
import ContactForm from '@/components/features/contact/ContactForm';
import ContactChannels from '@/components/features/contact/ContactChannels';
import { useGSAPAnimation } from '@/hooks/useGSAPAnimation';
import { ANIMATION } from '@/lib/constants';

const ContactSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);

    useGSAPAnimation(titleRef, {
        from: { y: 30, opacity: 0 },
        to: { y: 0, opacity: 1, duration: ANIMATION.DURATION.NORMAL },
        scrollTrigger: {},
    });

    return (
        <section id="contact" ref={sectionRef} className="py-20 bg-dark-900 border-b border-white/5 relative z-10">
            <SectionContainer>
                {/* Section Header */}
                <div ref={titleRef} className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-2 mb-4">
                        <span className="text-gold-400 text-sm font-medium uppercase tracking-wider">Contato & Dúvidas</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif text-white">
                        Entre em contato <span className="text-gradient-gold">conosco</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-gold-600 to-transparent mx-auto mt-4 rounded-full"></div>
                </div>
                <ContactChannels />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Left Column: FAQ */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-serif font-bold text-white mb-4 flex items-center gap-3">
                                <span className="w-1 h-8 bg-gold-500 rounded-full"></span>
                                Dúvidas Frequentes
                            </h3>
                            <p className="text-gray-400 mb-8">
                                Confira as respostas para as perguntas mais comuns de nossos clientes.
                            </p>
                        </div>
                        <FAQ />
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="relative">

                        {/* Decorative background element for the form column */}
                        <div className="absolute -inset-4 bg-gradient-to-b from-gold-500/5 to-transparent rounded-2xl blur-xl -z-10"></div>

                        <div>
                            <h3 className="text-2xl font-serif font-bold text-white mb-4 flex items-center gap-3">
                                <span className="w-1 h-8 bg-gold-500 rounded-full"></span>
                                Envie sua Mensagem
                            </h3>
                            <p className="text-gray-400 mb-8">
                                Preencha o formulário e nossa equipe entrará em contato em breve.
                            </p>
                        </div>
                        <ContactForm />
                    </div>
                </div>
            </SectionContainer>
        </section>
    );
};

export default ContactSection;
