"use client";

import React, { useRef, useEffect } from 'react';
import { Book } from '@/data/books';
import BookCard from './BookCard';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface BookGalleryProps {
    books: Book[];
}

const BookGallery = ({ books }: BookGalleryProps) => {
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);
        }

        const ctx = gsap.context(() => {
            if (gridRef.current) {
                gsap.fromTo(
                    gridRef.current.children,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.2,
                        scrollTrigger: {
                            trigger: gridRef.current,
                            start: "top 80%",
                        },
                    }
                );
            }
        }, gridRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="py-24 bg-dark-900 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-2 mb-6">
                        <span className="text-gold-400 text-sm font-medium uppercase tracking-wider">Produção Intelectual</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold font-serif text-white mb-6">
                        Publicações do <span className="text-gradient-gold">Autor</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Obras fundamentais que refletem décadas de pesquisa acadêmica e prática jurídica aplicada.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-gold-600 to-transparent mx-auto mt-6 rounded-full"></div>
                </div>

                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {books.map((book) => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BookGallery;
