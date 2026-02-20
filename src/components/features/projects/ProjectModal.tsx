"use client";

import React, { useEffect } from 'react';
import { ProjectItem } from '@/schemas';
import { X, Check } from 'lucide-react';
import Image from 'next/image';

interface ProjectModalProps {
    project: ProjectItem | null;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
    // Close modal with ESC key
    useEffect(() => {
        if (!project) return;

        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscKey);
        return () => document.removeEventListener('keydown', handleEscKey);
    }, [project, onClose]);

    if (!project) return null;

    // Close modal when clicking outside
    const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={handleBackdropClick}
        >
            <div className="bg-dark-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/10 shadow-2xl animate-fade-in relative scrollbar-thin scrollbar-thumb-gold-600/50 scrollbar-track-dark-800">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 bg-dark-900/80 rounded-full p-2 hover:bg-gold-600 transition-all text-white border border-white/10 z-10"
                >
                    <X size={20} />
                </button>

                <div className="relative h-64 md:h-80 w-full">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 896px"
                        className="object-cover rounded-t-2xl opacity-80"
                    />
                    <div className="absolute bottom-4 left-6 z-10">
                        <span className={`${project.categoryColor || 'bg-gold-600'} text-white text-sm font-bold px-3 py-1 rounded shadow-lg uppercase tracking-wider`}>
                            {project.category}
                        </span>
                    </div>
                </div>

                <div className="p-8 text-gray-200">
                    <h2 className="text-3xl font-bold font-serif mb-4 text-white">{project.title}</h2>
                    <p className="text-lg text-gray-400 mb-6 font-light leading-relaxed">{project.description}</p>

                    <div className="grid md:grid-cols-2 gap-8 mb-8 border-t border-b border-white/5 py-6">
                        <div>
                            <h3 className="text-xl font-semibold mb-4 text-gold-500 font-serif">Detalhes do Caso</h3>
                            <div className="space-y-3">
                                {project.duration && (
                                    <div className="flex justify-between border-b border-white/5 pb-2">
                                        <span className="font-medium text-gray-400">Duração:</span>
                                        <span className="text-white">{project.duration}</span>
                                    </div>
                                )}
                                {project.role && (
                                    <div className="flex justify-between border-b border-white/5 pb-2">
                                        <span className="font-medium text-gray-400">Atuação:</span>
                                        <span className="text-white">{project.role}</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-4 text-gold-500 font-serif">Áreas Envolvidas</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="bg-dark-800 border border-white/10 text-gray-300 px-3 py-1 rounded-full text-sm hover:border-gold-500/50 transition-colors"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {project.features && (
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-4 text-gold-500 font-serif">Estratégias Implementadas</h3>
                            <ul className="grid md:grid-cols-2 gap-3">
                                {project.features.map((feature, index) => (
                                    <li key={index} className="flex items-start">
                                        <Check className="text-gold-600 mt-1 mr-3 flex-shrink-0" size={16} />
                                        <span className="text-gray-400">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-6">
                        {project.challenges && (
                            <div className="bg-dark-800 p-6 rounded-xl border border-white/5">
                                <h3 className="text-lg font-bold mb-2 text-white font-serif">Desafio</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{project.challenges}</p>
                            </div>
                        )}
                        {project.results && (
                            <div className="bg-gradient-to-br from-gold-600/20 to-gold-900/10 p-6 rounded-xl border border-gold-600/20">
                                <h3 className="text-lg font-bold mb-2 text-gold-400 font-serif">Resultado</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">{project.results}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
