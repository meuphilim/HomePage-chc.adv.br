"use client";

import React from 'react';
import Image from 'next/image';
import { Book } from '@/data/books';
import { ExternalLink, ShoppingCart } from 'lucide-react';
import { trackCTAClick } from '@/lib/analytics';

interface BookCardProps {
    book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
    const handlePurchaseClick = () => {
        trackCTAClick(`purchase_book_${book.title}`, 'autor_page');
    };

    return (
        <div className="group relative bg-dark-800 rounded-xl border border-white/5 overflow-hidden transition-all duration-300 hover:border-gold-500/30 hover:shadow-gold-md shadow-gold-sm flex flex-col h-full">
            {/* Image Container with Aspect Ratio */}
            <div className="relative aspect-[3/4] overflow-hidden bg-dark-900 w-full border-b border-white/5">
                {book.coverImage.startsWith('/') ? (
                    <Image
                        src={book.coverImage}
                        alt={`Capa do livro: ${book.title}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                ) : (
                    // Fallback for placeholder
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-dark-800 to-dark-900">
                        <span className="text-gray-600 font-serif text-4xl opacity-20">WeAdv</span>
                    </div>
                )}

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-dark-900/60 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                    <a
                        href={book.purchaseUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handlePurchaseClick}
                        className="px-6 py-3 bg-gold-600 text-white rounded-full font-medium hover:bg-gold-500 transition-transform transform hover:scale-105 shadow-lg flex items-center gap-2"
                    >
                        <ShoppingCart className="w-4 h-4" />
                        Adquirir
                    </a>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                    <span className="text-xs font-semibold text-gold-500 uppercase tracking-widest border border-gold-500/20 px-2 py-1 rounded">
                        {book.year}
                    </span>
                </div>

                <h3 className="text-xl font-bold font-serif text-white mb-2 group-hover:text-gold-400 transition-colors">
                    {book.title}
                </h3>

                {book.subtitle && (
                    <h4 className="text-sm font-medium text-gray-400 mb-3 italic border-l-2 border-gold-500/30 pl-3">
                        {book.subtitle}
                    </h4>
                )}

                <p className="text-gray-400 text-sm line-clamp-4 mb-6 flex-grow leading-relaxed">
                    {book.description}
                </p>

                <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center">
                    <span className="text-xs text-gray-500 uppercase tracking-wider">Editora Jurídica</span>
                    <a
                        href={book.purchaseUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gold-500 hover:text-gold-400 text-sm font-medium flex items-center gap-1 group/link"
                        onClick={handlePurchaseClick}
                    >
                        Ver detalhes
                        <ExternalLink className="w-3 h-3 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BookCard;
