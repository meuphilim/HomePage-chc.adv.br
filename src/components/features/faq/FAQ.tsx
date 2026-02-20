"use client";

import React, { useRef } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { useGSAPAnimation } from '@/hooks/useGSAPAnimation';
import { ANIMATION } from '@/lib/constants';

const faqs = [
    {
        question: "Em quais áreas o escritório atua?",
        answer: "Atuamos em Direito Administrativo, Direito Privado, Direito Penal, Direitos Humanos, Direito Internacional e Compliance & Integridade. Cada demanda é conduzida com rigor acadêmico e estratégia processual, respeitando as particularidades de cada ramo. Para saber mais, entre em contato e agende uma consulta."
    },
    {
        question: "Como funciona a assessoria em Compliance e programas de integridade?",
        answer: "Estruturamos e revisamos programas de integridade corporativa, adequação à LGPD, mapeamento de riscos regulatórios e implantação de políticas de governança. A abordagem é preventiva e integrada ao controle público, visando proteger a instituição e seus gestores."
    },
    {
        question: "É possível resolver disputas sem recorrer ao Judiciário?",
        answer: "Sim. Sempre que adequado, priorizamos mediação, conciliação e arbitragem como vias extrajudiciais, por serem mais ágeis, econômicas e capazes de preservar patrimônio e relações institucionais."
    },
    {
        question: "O escritório atua na defesa de direitos fundamentais perante órgãos internacionais?",
        answer: "Sim, atuamos na proteção de direitos fundamentais perante instâncias nacionais e organismos internacionais, assegurando o cumprimento de tratados e a dignidade da pessoa humana em casos de alta complexidade."
    },
    {
        question: "Como é garantido o sigilo das informações?",
        answer: "O sigilo profissional é absoluto, conforme o Código de Ética da OAB. Todas as informações são tratadas com total confidencialidade, e adotamos medidas rigorosas de segurança em conformidade com a LGPD."
    },
    {
        question: "O atendimento é realizado em todo o território nacional?",
        answer: "Sim. Realizamos atendimento direto e personalizado em todo o Brasil, inclusive em colaboração com outros escritórios quando a demanda exige alta especialização técnica. Agende uma reunião para discutir seu caso."
    }
];

const FAQ = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [openIndex, setOpenIndex] = React.useState<number | null>(null);

    useGSAPAnimation(containerRef, {
        from: { y: 30, opacity: 0 },
        to: { y: 0, opacity: 1, duration: ANIMATION.DURATION.FAST, ease: 'power2.out' },
        scrollTrigger: {
            trigger: sectionRef.current as HTMLElement,
        },
        stagger: ANIMATION.STAGGER.FAST,
        useChildren: true
    });

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div ref={containerRef} className="space-y-4">
            {faqs.map((faq, index) => (
                <div
                    key={index}
                    className="faq-item bg-dark-800 rounded-xl border border-white/5 overflow-hidden"
                >
                    <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:ring-inset"
                    >
                        <span className="text-lg font-semibold text-white pr-4">
                            {faq.question}
                        </span>
                        <ChevronDown
                            className={`w-5 h-5 text-gold-400 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                }`}
                        />
                    </button>
                    <div
                        className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                            }`}
                    >
                        <div className="px-6 pb-5 text-gray-300 leading-relaxed boundary-top border-white/5">
                            {faq.answer}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FAQ;
