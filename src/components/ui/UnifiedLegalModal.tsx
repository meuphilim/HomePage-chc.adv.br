"use client";

import React, { useState, useEffect } from 'react';
import { X, ShieldAlert, Scale } from 'lucide-react';

const UnifiedLegalModal = () => {
    // State for modal visibility
    // We do NOT use the useModal hook because we need this to show EVERY TIME (for security reasons)
    // but potentially respect a "read" state for the legal part if we wanted to be complex.
    // simpler approach: Show every time, as requested for the security warning.
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show immediately on mount (every time the site is opened/refreshed)
        setIsOpen(true);
        // Small delay for animation
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const close = () => {
        setIsVisible(false);
        setTimeout(() => setIsOpen(false), 300); // 300ms for exit animation
    };

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                onClick={close}
            />

            {/* Modal */}
            <div className={`fixed inset-0 z-[10000] flex items-center justify-center p-4 transition-all duration-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}>
                <div
                    className="bg-dark-800 border-2 border-gold-500/30 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header with Tabs/Title */}
                    <div className="bg-gradient-to-r from-dark-900 to-dark-800 border-b border-white/10 p-4 flex justify-between items-center shrink-0">
                        <div className="flex items-center gap-3">
                            <h2 className="text-lg font-serif font-bold text-white flex items-center gap-2">
                                <Scale className="w-5 h-5 text-gold-500" />
                                Avisos Importantes
                            </h2>
                        </div>
                        <button
                            onClick={close}
                            className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gold-500 rounded-lg p-1"
                            aria-label="Fechar"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Scrollable Content */}
                    <div className="p-6 overflow-y-auto">

                        {/* SECTION 1: SECURITY WARNING (CRITICAL) */}
                        <div className="bg-red-950/20 border border-red-500/30 rounded-xl p-5 mb-8 relative overflow-hidden">
                            {/* Decorative background */}
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <ShieldAlert className="w-24 h-24 text-red-500" />
                            </div>

                            <div className="flex gap-4 relative z-10">
                                <div className="shrink-0">
                                    <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center animate-pulse">
                                        <ShieldAlert className="w-6 h-6 text-red-400" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-red-100 mb-2">Aviso de Segurança</h3>
                                    <div className="space-y-3 text-red-200/90 text-sm leading-relaxed">
                                        <p>
                                            <span className="font-bold text-red-400">⚠️ ATENÇÃO:</span> Não realizamos cobranças por e-mail, redes sociais ou telefone.
                                        </p>
                                        <p>
                                            Qualquer solicitação de pagamento fora do atendimento presencial deve ser considerada <span className="underline decoration-red-500/50 underline-offset-2 font-semibold">tentativa de golpe</span>.
                                        </p>
                                        <p className="text-xs opacity-75">
                                            Em caso de dúvida, utilize exclusivamente os canais oficiais.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* SECTION 2: LEGAL DISCLAIMER */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold text-gold-400 font-serif mb-4 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
                                Aviso Legal
                            </h3>

                            <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
                                <p>
                                    As informações contidas neste site são de <span className="text-gold-200 font-medium">caráter geral e informativo</span>, não constituindo aconselhamento jurídico específico para qualquer situação particular.
                                </p>

                                <p>
                                    A <span className="text-gold-200 font-medium">relação advogado-cliente só é estabelecida mediante contrato formal</span> de prestação de serviços jurídicos, após análise detalhada do caso e aceite mútuo das condições.
                                </p>

                                <p>
                                    <span className="text-gold-200 font-medium">Não envie informações confidenciais</span> através do formulário de contato ou outros meios eletrônicos antes da formalização da relação profissional.
                                </p>

                                <p>
                                    Os <span className="text-gold-200 font-medium">resultados passados não garantem resultados futuros</span>. Cada caso possui particularidades próprias que devem ser analisadas individualmente.
                                </p>
                            </div>
                        </div>

                        {/* Acknowledgement Text */}
                        <div className="mt-8 p-4 bg-dark-900 rounded-lg border border-white/5">
                            <p className="text-xs text-gray-500 text-center italic">
                                Ao continuar navegando neste site, você declara estar ciente dos avisos de segurança e concordar com os termos legais apresentados.
                            </p>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="border-t border-white/5 p-4 bg-dark-900 shrink-0">
                        <button
                            onClick={close}
                            className="w-full py-3 bg-gradient-to-r from-gold-600 to-gold-500 text-white font-bold rounded-full hover:from-gold-500 hover:to-gold-400 transition-all shadow-lg hover:shadow-gold-500/20 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 focus:ring-offset-dark-900"
                        >
                            Li e Compreendi
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UnifiedLegalModal;
