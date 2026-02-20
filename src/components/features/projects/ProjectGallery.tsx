"use client";

import React, { useState, useRef, useEffect } from 'react';
import { ProjectItem } from '@/schemas';
import { projectsData } from '@/data/projects';
import ProjectModal from './ProjectModal';
import { SectionContainer } from '@/components/ui/SectionContainer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plus } from 'lucide-react';
import Image from 'next/image';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const ProjectsGallery = () => {
    const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (titleRef.current) {
                gsap.fromTo(titleRef.current, { y: 50, opacity: 0 }, {
                    y: 0, opacity: 1, duration: 1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 80%',
                    }
                });
            }

            if (gridRef.current) {
                gsap.fromTo(gridRef.current.children, {
                    y: 50, opacity: 0
                }, {
                    y: 0, opacity: 1, duration: 0.8, stagger: 0.2,
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: 'top 75%',
                    }
                });
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleProjectClick = (project: ProjectItem) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    return (
        <section id="projects" ref={sectionRef} className="py-20 bg-dark-800/30 relative border-b border-white/5">
            <SectionContainer className="relative z-10">
                <div className="text-center mb-16">
                    <h2 ref={titleRef} className="text-3xl md:text-5xl font-bold font-serif text-white mb-4">
                        Casos de <span className="text-gradient-gold">Sucesso</span>
                    </h2>
                    <p className="text-body-lg text-gray-400 max-w-2xl mx-auto">
                        Resultados expressivos em litígios complexos e consultoria estratégica.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-gold-600 to-transparent mx-auto mt-4 rounded-full"></div>
                </div>

                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project) => (
                        <div
                            key={project.id}
                            className="group relative h-96 rounded-xl overflow-hidden cursor-pointer shadow-gold-sm border border-white/5 hover:border-gold-500/30 hover:shadow-gold-lg transition-all duration-500 hover:scale-[1.02]"
                            onClick={() => handleProjectClick(project)}
                        >
                            <div className="absolute inset-0 bg-dark-900">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                                />
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent opacity-90"></div>

                            <div className="absolute bottom-0 left-0 p-6 w-full transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                                <span className={`${project.categoryColor || 'bg-gold-600'} text-white text-xs font-bold px-3 py-1 rounded mb-3 inline-block uppercase tracking-wider shadow-lg`}>
                                    {project.category}
                                </span>
                                <h3 className="text-2xl font-bold text-white mb-2 font-serif group-hover:text-gold-400 transition-colors">{project.title}</h3>
                                <p className="text-gray-400 text-sm line-clamp-2 mb-4 group-hover:text-gray-200 transition-colors">
                                    {project.description}
                                </p>
                                <div className="flex items-center text-gold-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                    <span>Ver detalhes</span>
                                    <Plus size={16} className="ml-2" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </SectionContainer>

            <ProjectModal project={selectedProject} onClose={handleCloseModal} />
        </section>
    );
};

export default ProjectsGallery;
