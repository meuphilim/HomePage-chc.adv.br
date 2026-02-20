"use client";

import React from 'react';
import { X, Cookie, Shield, Settings } from 'lucide-react';
import { useCookieConsent } from '@/hooks/useCookieConsent';

const CookieConsent = () => {
    const {
        showBanner,
        showSettings,
        preferences,
        setShowSettings,
        setPreferences,
        acceptAll,
        rejectAll,
        savePreferences
    } = useCookieConsent();

    if (!showBanner) return null;

    return (
        <>
            {/* Cookie Banner */}
            <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-dark-900/95 backdrop-blur-lg border-t border-white/10 shadow-2xl">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div className="flex items-start gap-4 flex-1">
                            <Cookie className="w-6 h-6 text-gold-400 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-2">
                                    🍪 Este site usa cookies
                                </h3>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    Utilizamos cookies para melhorar sua experiência, analisar o tráfego do site e personalizar conteúdo.
                                    Ao clicar em "Aceitar Todos", você concorda com o uso de cookies conforme nossa{' '}
                                    <a href="/politica-privacidade" className="text-gold-400 hover:underline">
                                        Política de Privacidade
                                    </a>.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-3 w-full md:w-auto">
                            <button
                                onClick={() => setShowSettings(true)}
                                className="px-4 py-2 text-sm border border-gray-600 text-gray-300 rounded-lg hover:bg-white/5 transition-colors flex items-center gap-2"
                            >
                                <Settings className="w-4 h-4" />
                                Preferências
                            </button>
                            <button
                                onClick={rejectAll}
                                className="px-4 py-2 text-sm border border-gray-600 text-gray-300 rounded-lg hover:bg-white/5 transition-colors"
                            >
                                Rejeitar Todos
                            </button>
                            <button
                                onClick={acceptAll}
                                className="px-6 py-2 text-sm bg-gold-600 text-white rounded-lg hover:bg-gold-500 transition-colors font-semibold"
                            >
                                Aceitar Todos
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Settings Modal */}
            {showSettings && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
                    <div className="bg-dark-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/10 shadow-2xl">
                        <div className="p-6 border-b border-white/10 flex items-center justify-between sticky top-0 bg-dark-800 z-10">
                            <div className="flex items-center gap-3">
                                <Shield className="w-6 h-6 text-gold-400" />
                                <h2 className="text-2xl font-bold text-white">Preferências de Cookies</h2>
                            </div>
                            <button
                                onClick={() => setShowSettings(false)}
                                className="p-2 hover:bg-white/5 rounded-lg transition-colors"
                            >
                                <X className="w-5 h-5 text-gray-400" />
                            </button>
                        </div>

                        <div className="p-6 space-y-6">
                            {/* Necessary Cookies */}
                            <div className="flex items-start justify-between gap-4 pb-6 border-b border-white/5">
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-white mb-2">Cookies Necessários</h3>
                                    <p className="text-sm text-gray-400">
                                        Essenciais para o funcionamento do site. Não podem ser desativados.
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={true}
                                        disabled
                                        className="w-5 h-5 rounded bg-gold-600 cursor-not-allowed"
                                    />
                                </div>
                            </div>

                            {/* Analytics Cookies */}
                            <div className="flex items-start justify-between gap-4 pb-6 border-b border-white/5">
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-white mb-2">Cookies de Análise</h3>
                                    <p className="text-sm text-gray-400">
                                        Nos ajudam a entender como os visitantes interagem com o site, coletando informações de forma anônima.
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={preferences.analytics}
                                        onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                                        className="w-5 h-5 rounded accent-gold-600 cursor-pointer"
                                    />
                                </div>
                            </div>

                            {/* Marketing Cookies */}
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-white mb-2">Cookies de Marketing</h3>
                                    <p className="text-sm text-gray-400">
                                        Usados para rastrear visitantes em sites e exibir anúncios relevantes e envolventes.
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={preferences.marketing}
                                        onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                                        className="w-5 h-5 rounded accent-gold-600 cursor-pointer"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="p-6 border-t border-white/10 flex gap-3 justify-end sticky bottom-0 bg-dark-800">
                            <button
                                onClick={() => setShowSettings(false)}
                                className="px-6 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-white/5 transition-colors"
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={savePreferences}
                                className="px-6 py-2 bg-gold-600 text-white rounded-lg hover:bg-gold-500 transition-colors font-semibold"
                            >
                                Salvar Preferências
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CookieConsent;
