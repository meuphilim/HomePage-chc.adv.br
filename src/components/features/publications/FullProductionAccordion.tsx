"use client";

import { Publication } from "@/types/publication";
import { useState } from "react";
import { ChevronDown, ChevronUp, FileText, Book } from "lucide-react";
import { SectionContainer } from "@/components/ui/SectionContainer";

interface FullProductionAccordionProps {
    publications: Publication[];
}

export default function FullProductionAccordion({ publications }: FullProductionAccordionProps) {
    const [isOpen, setIsOpen] = useState(false);

    // Grouping
    const books = publications.filter(p => p.type === 'book').sort((a, b) => b.year - a.year);
    const articles = publications.filter(p => p.type === 'article').sort((a, b) => b.year - a.year);
    const chapters = publications.filter(p => p.type === 'book_chapter').sort((a, b) => b.year - a.year);

    const renderCitation = (pub: Publication) => {
        if (pub.type === 'book') {
            return (
                <span>
                    <span className="font-bold">CASTRO, C. H.</span>. <span className="italic">{pub.title}</span>. {pub.city || 'Curitiba'}: {pub.publisher}, {pub.year}. {pub.pages ? `${pub.pages}p.` : ''}
                </span>
            );
        }
        if (pub.type === 'article') {
            return (
                <span>
                    <span className="font-bold">CASTRO, C. H.</span>. {pub.title}. <span className="italic">{pub.journal}</span>, {pub.volume}, {pub.pages ? `p. ${pub.pages},` : ''} {pub.year}.
                </span>
            );
        }
        if (pub.type === 'book_chapter') {
            return (
                <span>
                    <span className="font-bold">CASTRO, C. H.</span>. {pub.title}. In: <span className="italic">{pub.bookTitle}</span>. {pub.publisher}, {pub.year}. {pub.pages ? `p. ${pub.pages}.` : ''}
                </span>
            );
        }
        return null;
    };

    const Section = ({ title, items, icon: Icon }: { title: string, items: Publication[], icon: any }) => (
        items.length > 0 && (
            <div className="mb-12 last:mb-0">
                <h3 className="text-xl text-gold-400 font-serif mb-6 flex items-center gap-2 border-b border-white/10 pb-2">
                    <Icon size={20} />
                    {title}
                </h3>
                <div className="space-y-4">
                    {items.map((pub, idx) => (
                        <div key={pub.id} className="text-gray-300 text-sm md:text-base pl-4 relative">
                            <span className="absolute left-0 top-0 text-gray-600 font-mono text-xs">{idx + 1}.</span>
                            {renderCitation(pub)}
                        </div>
                    ))}
                </div>
            </div>
        )
    );

    const hasPublications = books.length > 0 || articles.length > 0 || chapters.length > 0;

    return (
        <section className="py-20 bg-dark-900 relative border-y border-white/5">
            <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5"></div>
            <SectionContainer className="max-w-4xl relative z-10">
                <div className="mb-16 text-center">
                    <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-2 mb-6">
                        <span className="text-gold-400 text-sm font-medium uppercase tracking-wider">Acervo Completo</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white font-serif mb-6">
                        Produção <span className="text-gradient-gold">Intelectual</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                        Lista integral de obras, artigos e capítulos publicados pelo autor ao longo de sua trajetória.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-gold-600 to-transparent mx-auto rounded-full"></div>
                </div>

                <div className="text-center mb-12">

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        disabled={!hasPublications}
                        className={`inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold transition-all duration-300 group ${!hasPublications
                            ? 'bg-dark-800/50 text-gray-500 cursor-not-allowed border border-white/5'
                            : 'bg-gold-600 hover:bg-gold-500 text-white cursor-pointer shadow-lg shadow-gold-900/20 hover:scale-105 active:scale-95'
                            }`}
                    >
                        {isOpen ? "Ocultar Lista Completa" : "Ver Lista Completa"}
                        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                            <ChevronDown size={20} />
                        </div>
                    </button>
                </div>

                <div className={`transition-all duration-700 overflow-hidden ${isOpen ? 'max-h-[8000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="bg-dark-900/30 p-8 rounded-2xl border border-white/5">
                        {hasPublications ? (
                            <>
                                <Section title="Livros Publicados/Organizados" items={books} icon={Book} />
                                <Section title="Artigos em Periódicos" items={articles} icon={FileText} />
                                <Section title="Capítulos de Livros" items={chapters} icon={Book} />
                            </>
                        ) : (
                            <p className="text-center text-gray-500 py-4">Nenhuma publicação encontrada.</p>
                        )}
                    </div>
                </div>
            </SectionContainer>
        </section>
    );
}
