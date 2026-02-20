"use client";

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { trackWhatsAppClick } from '@/lib/analytics';

interface WhatsAppButtonProps {
    phoneNumber: string;
    message?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
    phoneNumber,
    message = "Olá! Gostaria de saber mais sobre os serviços jurídicos."
}) => {
    const handleClick = () => {
        trackWhatsAppClick(); // Track conversion
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <button
            onClick={handleClick}
            className="fixed bottom-6 right-6 z-50 group"
            aria-label="Contato via WhatsApp"
        >
            {/* Pulse Animation Ring */}
            <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>

            {/* Main Button */}
            <div className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110">
                <MessageCircle className="w-6 h-6" />
            </div>

            {/* Tooltip */}
            <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-dark-800 text-white text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                Fale conosco no WhatsApp
                <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-dark-800"></div>
            </div>
        </button>
    );
};

export default WhatsAppButton;
