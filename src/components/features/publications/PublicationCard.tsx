import { Publication, Article, Book } from "@/types/publication";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BookOpen, FileText } from "lucide-react";

interface PublicationCardProps {
    publication: Publication;
}

export default function PublicationCard({ publication }: PublicationCardProps) {
    if (publication.type === 'book') {
        const book = publication as Book;
        return (
            <div className="group relative bg-dark-800 rounded-xl overflow-hidden border border-white/5 hover:border-gold-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-gold-900/10 flex flex-col h-full">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-dark-900">
                    {book.coverImage ? (
                        <Image
                            src={book.coverImage}
                            alt={`Capa do livro ${book.title}`}
                            fill
                            className={`object-cover transition-transform duration-500 ${book.soldOut ? 'grayscale opacity-50' : 'group-hover:scale-105'}`}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    ) : (
                        <div className="flex items-center justify-center h-full bg-gradient-to-br from-dark-700 to-dark-800">
                            <BookOpen className="w-12 h-12 text-gold-500/30" />
                        </div>
                    )}

                    {/* Sold Out Badge */}
                    {book.soldOut && (
                        <div className="absolute inset-0 flex items-center justify-center z-20">
                            <div className="bg-black/80 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                                <span className="text-gray-400 font-medium uppercase tracking-widest text-sm">Esgotado</span>
                            </div>
                        </div>
                    )}

                    {/* Purchase Overlay */}
                    {!book.soldOut && book.purchaseUrl && (
                        <div className="absolute inset-0 bg-dark-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm z-10">
                            <Link
                                href={book.purchaseUrl}
                                target="_blank"
                                className="px-6 py-3 bg-gold-600 text-white rounded-full font-medium hover:bg-gold-500 transition-transform transform hover:scale-105 shadow-lg flex items-center gap-2"
                            >
                                <ArrowUpRight className="w-4 h-4" />
                                Adquirir
                            </Link>
                        </div>
                    )}
                </div>

                <div className="p-6 flex flex-col flex-grow">
                    <div className="text-xs font-mono text-gold-400 mb-2">{book.year}</div>
                    <h3 className="text-lg font-serif text-white font-bold mb-2 leading-tight group-hover:text-gold-200 transition-colors">
                        {book.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-4 flex-grow">
                        {book.publisher} • {book.city}
                    </p>
                    <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                        <span className="text-xs text-gray-500 font-mono">
                            {book.pages ? `${book.pages} páginas` : 'Livro'}
                        </span>
                        {/* Footer Link if available */}
                        {!book.soldOut && book.purchaseUrl && (
                            <Link
                                href={book.purchaseUrl}
                                target="_blank"
                                className="text-gold-500 hover:text-gold-400 text-xs font-medium flex items-center gap-1 group/link"
                            >
                                Comprar
                                <ArrowUpRight className="w-3 h-3 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    const article = publication as Article;
    return (
        <div className="group relative bg-dark-800 rounded-xl p-6 border border-white/5 hover:border-gold-500/30 transition-all duration-300 hover:shadow-lg flex flex-col h-full">
            <div className="flex items-start justify-between mb-4">
                <div className="bg-gold-500/10 text-gold-400 p-2 rounded-lg">
                    <FileText size={20} />
                </div>
                <span className="text-xs font-mono text-gray-500 border border-white/10 px-2 py-1 rounded-full">
                    {article.year}
                </span>
            </div>

            <h3 className="text-xl font-serif text-white font-bold mb-3 leading-snug group-hover:text-gold-200 transition-colors">
                {article.title}
            </h3>

            <div className="mt-auto space-y-4">
                <p className="text-sm text-gray-400 line-clamp-2">
                    {article.journal}
                    {article.volume && ` • ${article.volume}`}
                </p>

                {article.url && (
                    <Link
                        href={article.url}
                        target="_blank"
                        className="inline-flex items-center text-sm font-medium text-gold-400 hover:text-gold-300 transition-colors gap-2 group-hover/link:translate-x-1"
                    >
                        Ler artigo <ArrowUpRight size={14} />
                    </Link>
                )}
            </div>
        </div>
    );
}
