import { Article } from "@/types/publication";
import PublicationCard from "./PublicationCard";
import { SectionContainer } from "@/components/ui/SectionContainer";

interface HighlightedArticlesProps {
    articles: Article[];
}

export default function HighlightedArticles({ articles }: HighlightedArticlesProps) {
    if (!articles || articles.length === 0) return null;

    return (
        <section className="py-20 bg-dark-900 relative border-y border-white/5">
            <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5"></div>
            <SectionContainer className="relative z-10">
                <div className="mb-16 text-center">
                    <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-2 mb-6">
                        <span className="text-gold-400 text-sm font-medium uppercase tracking-wider">Produção Recente</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white font-serif mb-6">
                        Destaques em Periódicos <br />
                        <span className="text-gray-500">2023 — 2025</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles.map((article) => (
                        <PublicationCard key={article.id} publication={article} />
                    ))}
                </div>
            </SectionContainer>
        </section>
    );
}
