"use client";

import React, { useRef } from 'react';
import { useGSAPAnimation } from '@/hooks/useGSAPAnimation';
import { ANIMATION } from '@/lib/constants';

const ContactForm = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const formRef = useRef<HTMLDivElement>(null);

    useGSAPAnimation(formRef, {
        from: { y: 50, opacity: 0 },
        to: { y: 0, opacity: 1, duration: ANIMATION.DURATION.NORMAL, ease: 'power2.out' },
        scrollTrigger: {}
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Solicitação de consulta enviada! Entraremos em contato em breve.');
    };

    return (
        <div ref={formRef} className="bg-dark-800 rounded-xl shadow-gold-lg overflow-hidden contact-form border border-white/5 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-gray-400 text-sm font-medium mb-2">Nome *</label>
                        <input
                            type="text"
                            className="w-full bg-dark-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/50 transition-colors"
                            placeholder="Seu nome completo"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-400 text-sm font-medium mb-2">Telefone *</label>
                        <input
                            type="tel"
                            className="w-full bg-dark-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/50 transition-colors"
                            placeholder="(11) 99999-9999"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-gray-400 text-sm font-medium mb-2">Área Jurídica *</label>
                    <select
                        className="w-full bg-dark-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/50 transition-colors"
                        required
                    >
                        <option value="">Selecione a área</option>
                        <option>Direito Civil</option>
                        <option>Direito Empresarial</option>
                        <option>Direito de Família</option>
                        <option>Direito Tributário</option>
                        <option>Outros</option>
                    </select>
                </div>

                <div>
                    <label className="block text-gray-400 text-sm font-medium mb-2">Mensagem *</label>
                    <textarea
                        rows={4}
                        className="w-full bg-dark-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/50 transition-colors resize-none"
                        placeholder="Descreva brevemente sua situação jurídica..."
                        required
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-gold-600 to-gold-500 text-white font-bold py-4 rounded-full hover:shadow-2xl hover:shadow-gold-900/40 hover:scale-[1.02] transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:ring-offset-2 focus:ring-offset-dark-800"
                >
                    Enviar Solicitação
                </button>

                <p className="text-xs text-gray-500 text-center">
                    Suas informações são tratadas com total sigilo e confidencialidade.
                </p>
            </form>
        </div>
    );
};

export default ContactForm;
