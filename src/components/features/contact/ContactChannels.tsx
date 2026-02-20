"use client";

import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactChannels = () => {
    return (
        <div className="w-full bg-gradient-to-br from-gold-600 to-gold-700 p-8 rounded-xl shadow-gold-lg relative overflow-hidden mb-8 border border-white/10">
            <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.1]"></div>
            <h3 className="text-xl text-center font-bold mb-6 font-serif text-white relative z-10">Canais de Atendimento</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                <div className="flex items-center group">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3 group-hover:bg-white/30 transition-colors flex-shrink-0">
                        <Mail size={18} className="text-white" />
                    </div>
                    <div>
                        <h4 className="font-medium text-gold-100 text-sm">Email</h4>
                        <p className="text-white font-medium text-sm truncate">contato@chc.adv.br</p>
                    </div>
                </div>
                <div className="flex items-center group">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3 group-hover:bg-white/30 transition-colors flex-shrink-0">
                        <Phone size={18} className="text-white" />
                    </div>
                    <div>
                        <h4 className="font-medium text-gold-100 text-sm">Telefone</h4>
                        <p className="text-white font-medium text-sm">+55 (11) 3333-4444</p>
                    </div>
                </div>
                <div className="flex items-center group">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3 group-hover:bg-white/30 transition-colors flex-shrink-0">
                        <MapPin size={18} className="text-white" />
                    </div>
                    <div>
                        <h4 className="font-medium text-gold-100 text-sm">Escritório</h4>
                        <p className="text-white font-medium text-sm">Av. Paulista, 1000</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactChannels;
