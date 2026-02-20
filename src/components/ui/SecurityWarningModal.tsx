"use client";

import React, { useState, useEffect } from 'react';
import { X, ShieldAlert } from 'lucide-react';
import { ANIMATION } from '@/lib/constants';

const SecurityWarningModal = () => {
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
                    className="bg-dark-800 border-2 border-red-500/50 rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="bg-gradient-to-r from-red-900/40 to-dark-900 border-b border-red-500/20 p-6">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 animate-pulse">
                                <ShieldAlert className="w-6 h-6 text-red-400" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-bold text-white font-serif mb-1">
                                    Aviso de Segurança
                                </h2>
                                <p className="text-sm text-red-200/80">
                                    Importante: Leia com atenção
                                </p>
                            </div>
                            <button
                                onClick={close}
                                className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 rounded-lg p-1"
                                aria-label="Fechar"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                        <div className="space-y-4 text-gray-200 leading-relaxed">
                            <p className="font-medium text-white">
                                <span className="text-red-400 font-bold">⚠️ ATENÇÃO:</span> Não realizamos cobranças por e-mail, redes sociais ou telefone.
                            </p>

                            <p>
                                Qualquer solicitação de pagamento fora do atendimento presencial deve ser considerada <span className="text-red-400 font-bold underline decoration-red-500/30 underline-offset-4">tentativa de golpe</span>.
                            </p>

                            <div className="bg-dark-900/50 p-4 rounded-lg border border-white/5 mt-4">
                                <p className="text-sm text-gray-400">
                                    Em caso de dúvida, utilize exclusivamente os canais oficiais listados em nosso site.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="border-t border-white/5 p-6 bg-dark-900/50">
                        <button
                            onClick={close}
                            className="w-full py-3 bg-white text-dark-900 font-bold rounded-lg hover:bg-gray-200 transition-all shadow-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-dark-900"
                        >
                            Entendido, Fechar Aviso
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SecurityWarningModal;
