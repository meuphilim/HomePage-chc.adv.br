"use client";

import React from 'react';
import { X, AlertTriangle } from 'lucide-react';
import { useModal } from '@/hooks/useModal';
import { ANIMATION } from '@/lib/constants';

const LegalDisclaimerModal = () => {
    const { isOpen, close } = useModal('legal-disclaimer-accepted', ANIMATION.MODAL_DELAY);

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9998] animate-fadeIn"
                onClick={close}
            />

            {/* Modal */}
            <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 animate-fadeIn">
                <div
                    className="bg-dark-800 border border-gold-500/30 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden animate-slideUp"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="bg-gradient-to-r from-gold-500/20 to-gold-600/10 border-b border-gold-500/20 p-6">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center flex-shrink-0">
                                <AlertTriangle className="w-6 h-6 text-gold-400" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold text-white font-serif mb-2">
                                    Aviso Legal Importante
                                </h2>
                                <p className="text-sm text-gray-400">
                                    Por favor, leia atentamente antes de continuar
                                </p>
                            </div>
                            <button
                                onClick={close}
                                className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gold-500 rounded-lg p-1"
                                aria-label="Fechar"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
                        <div className="space-y-4 text-gray-300 leading-relaxed">
                            <p className="text-base">
                                As informações contidas neste site são de <span className="text-gold-400 font-semibold">caráter geral e informativo</span>, não constituindo aconselhamento jurídico específico para qualquer situação particular.
                            </p>

                            <p className="text-base">
                                A <span className="text-gold-400 font-semibold">relação advogado-cliente só é estabelecida mediante contrato formal</span> de prestação de serviços jurídicos, após análise detalhada do caso e aceite mútuo das condições.
                            </p>

                            <p className="text-base">
                                <span className="text-gold-400 font-semibold">Não envie informações confidenciais</span> através do formulário de contato ou outros meios eletrônicos antes da formalização da relação profissional e assinatura de acordo de confidencialidade.
                            </p>

                            <p className="text-base">
                                Os <span className="text-gold-400 font-semibold">resultados passados não garantem resultados futuros</span>. Cada caso possui particularidades próprias que devem ser analisadas individualmente.
                            </p>

                            <div className="mt-6 p-4 bg-gold-500/10 border-l-4 border-gold-500 rounded-r-lg">
                                <p className="text-sm text-gray-400 italic">
                                    Ao continuar navegando neste site, você reconhece ter lido e compreendido este aviso legal, concordando com seus termos.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="border-t border-white/5 p-6 bg-dark-900">
                        <div className="flex flex-col sm:flex-row gap-3 justify-end">
                            <button
                                onClick={close}
                                className="px-8 py-3 bg-gradient-to-r from-gold-600 to-gold-500 text-white font-semibold rounded-lg hover:from-gold-500 hover:to-gold-400 transition-all duration-300 shadow-lg hover:shadow-gold-500/50 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 focus:ring-offset-dark-800"
                            >
                                Li e Compreendi
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default LegalDisclaimerModal;
