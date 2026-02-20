"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useAnimationControls } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SectionContainer } from "@/components/ui/SectionContainer";

// Generate image paths
const RARE_BOOKS = Array.from({ length: 56 }, (_, i) => {
    const num = i + 1;
    // Skip video (2) and missing files (10, 26)
    if ([2, 10, 26].includes(num)) return null;
    const formattedNum = String(num).padStart(7, '0');
    return `/images/raras/CHC_${formattedNum}.jpeg`;
}).filter(Boolean) as string[];

const RareBooksGallery = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);
    const controls = useAnimationControls();
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        if (containerRef.current) {
            setWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth);
        }
    }, []);

    // Infinite Marquee setup
    // We duplicate the list to create seamless loop
    const doubledBooks = [...RARE_BOOKS, ...RARE_BOOKS];

    const MARQUEE_DURATION = 240; // Slower for better viewing

    useEffect(() => {
        const startAnimation = async () => {
            await controls.start({
                x: "-50%",
                transition: {
                    duration: MARQUEE_DURATION,
                    ease: "linear",
                    repeat: Infinity,
                }
            });
        };

        if (!isHovering) {
            startAnimation();
        } else {
            controls.stop();
        }
    }, [controls, isHovering]);


    // Modal Navigation Handlers
    const handleModalNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((prev) => (prev === null || prev === RARE_BOOKS.length - 1 ? 0 : prev + 1));
        }
    };

    const handleModalPrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((prev) => (prev === null || prev === 0 ? RARE_BOOKS.length - 1 : prev - 1));
        }
    };

    return (
        <section className="bg-dark-900 border-b border-white/5 relative -mt-12 mb-12 overflow-hidden group/section">
            <SectionContainer className="mb-6 z-10">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-serif text-white font-bold flex items-center gap-3">
                        <span className="w-8 h-[1px] bg-gold-500 inline-block"></span>
                        Algumas Raridades do Acervo
                    </h3>
                    <div className="flex items-center gap-4">
                        <div className="text-xs text-gray-500 uppercase tracking-widest hidden sm:block">
                            Arraste ou passe o mouse para pausar
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={() => setSelectedImageIndex(0)}
                                className="text-gray-600 hover:text-gold-500 transition-colors cursor-pointer"
                                title="Abrir Galeria"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button
                                onClick={() => setSelectedImageIndex(0)}
                                className="text-gray-600 hover:text-gold-500 transition-colors cursor-pointer"
                                title="Abrir Galeria"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>
                {/* Marquee Container */}
                <div
                    className="relative flex overflow-hidden select-none"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    {/* Gradient Masks */}
                    <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-dark-900 to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-dark-900 to-transparent z-10 pointer-events-none"></div>

                    <motion.div
                        className="flex gap-4"
                        animate={controls}
                        style={{ x: 0 }} // Reset
                        drag="x"
                        dragConstraints={containerRef} // Constraint isn't perfect for infinite loop
                    // For infinite loop, drag is tricky. We'll rely on auto-scroll + hover pause.
                    >
                        {/* Render Double List for Loop */}
                        {[...doubledBooks, ...doubledBooks].map((src, index) => ( // 4x for safety on large screens
                            <div
                                key={index}
                                className="relative min-w-[200px] h-[300px] rounded-lg overflow-hidden group border border-white/10 hover:border-gold-500/50 transition-colors cursor-pointer shrink-0"
                                onClick={() => setSelectedImageIndex(index % RARE_BOOKS.length)}
                            >
                                <Image
                                    src={src}
                                    alt={`Obra rara do acervo`}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    sizes="(max-width: 768px) 200px, 300px"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="p-3 bg-gold-500/20 backdrop-blur-sm rounded-full text-gold-500 border border-gold-500/30">
                                        <ZoomIn size={20} />
                                    </span>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Lightbox Modal */}
                <AnimatePresence>
                    {selectedImageIndex !== null && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedImageIndex(null)}
                            className="fixed inset-0 z-[10001] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
                        >
                            {/* Close Button */}
                            <button
                                className="absolute top-6 right-6 text-white bg-white/10 hover:bg-red-500/20 hover:text-red-500 border border-white/20 p-3 rounded-full transition-all duration-300 z-[70] backdrop-blur-md group"
                                onClick={() => setSelectedImageIndex(null)}
                                title="Fechar visualização"
                            >
                                <X size={28} className="group-hover:scale-110 transition-transform" />
                            </button>

                            {/* Prev Button */}
                            <button
                                className="absolute left-6 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-gold-600 border border-white/10 hover:border-gold-500 p-4 rounded-full transition-all duration-300 z-[70] hidden md:flex backdrop-blur-sm group"
                                onClick={handleModalPrev}
                            >
                                <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
                            </button>

                            {/* Next Button */}
                            <button
                                className="absolute right-6 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-gold-600 border border-white/10 hover:border-gold-500 p-4 rounded-full transition-all duration-300 z-[70] hidden md:flex backdrop-blur-sm group"
                                onClick={handleModalNext}
                            >
                                <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
                            </button>

                            <motion.div
                                key={selectedImageIndex}
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                className="relative w-full max-w-5xl h-[85vh] flex items-center justify-center pointer-events-none"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="relative w-full h-full pointer-events-auto">
                                    <Image
                                        src={RARE_BOOKS[selectedImageIndex]}
                                        alt="Visualização ampliada"
                                        fill
                                        className="object-contain"
                                        sizes="100vw"
                                        priority
                                    />
                                </div>
                            </motion.div>

                            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/50 backdrop-blur-md rounded-full border border-white/10 text-white/80 text-sm font-mono tracking-widest z-[70]">
                                {selectedImageIndex + 1} / {RARE_BOOKS.length}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </SectionContainer>

        </section>
    );
};

export default RareBooksGallery;
