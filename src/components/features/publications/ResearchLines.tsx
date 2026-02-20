import { Article, ResearchLine } from "@/types/publication";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { SectionContainer } from "@/components/ui/SectionContainer";

interface ResearchLinesProps {
    // This could be improved to accept grouped articles from server
    articles: Article[];
}

const RESEARCH_LINES: { id: ResearchLine; label: string; description: string }[] = [
    {
        id: "direito_administrativo",
        label: "Direito Administrativo Sancionador",
        description: "Estudos sobre improbidade, PAD e responsabilidade de agentes públicos."
    },
    {
        id: "direito_digital",
        label: "Direito Digital e Novas Tecnologias",
        description: "Impactos da IA, LGPD e digitalização no serviço público."
    },
    {
        id: "controle_publico",
        label: "Controle da Administração Pública",
        description: "O papel dos Tribunais de Contas e mecanismos de accountability."
    },
    {
        id: "direito_romano",
        label: "Direito Romano",
        description: "A base histórica dos institutos jurídicos modernos."
    },
];

export default function ResearchLines({ articles }: ResearchLinesProps) {

    return (
        <section className="py-20 bg-dark-900 relative border-y border-white/5">
            <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5"></div>
            <SectionContainer className="relative z-10">
                <div className="mb-16 text-center">
                    <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-2 mb-6">
                        <span className="text-gold-400 text-sm font-medium uppercase tracking-wider">Investigação Acadêmica</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white font-serif mb-6">
                        Linhas de Pesquisa
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-gold-600 to-transparent mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {RESEARCH_LINES.map((line) => {
                        const lineArticles = articles
                            .filter(a => a.researchLine === line.id)
                            .slice(0, 3); // Show max 3

                        if (lineArticles.length === 0) return null;

                        return (
                            <div key={line.id} className="bg-dark-800 rounded-xl p-8 border border-white/5 hover:border-gold-500/20 transition-colors">
                                <h3 className="text-xl font-bold text-white mb-2">{line.label}</h3>
                                <p className="text-sm text-gray-400 mb-6">{line.description}</p>

                                <ul className="space-y-4 mb-6">
                                    {lineArticles.map(article => (
                                        <li key={article.id} className="group flex items-start gap-3">
                                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold-500/50 group-hover:bg-gold-400 transition-colors" />
                                            <div>
                                                <h4 className="text-gray-300 font-medium group-hover:text-gold-200 transition-colors text-sm">
                                                    {article.title}
                                                </h4>
                                                <span className="text-xs text-gray-500">
                                                    {article.journal}, {article.year}
                                                </span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>

                                <Link href="#" className="inline-flex items-center text-sm text-gold-500 font-medium hover:text-gold-400 transition-colors group">
                                    Ver linha completa <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </SectionContainer>
        </section>
    );
}
