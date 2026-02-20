import React from 'react';
import { Metadata } from 'next';
import LibrarySection from '@/components/features/autor/LibrarySection';
import RareBooksGallery from '@/components/features/autor/RareBooksGallery';

export const metadata: Metadata = {
    title: 'Autor - Dr. Cláudio Henrique de Castro | Obras Publicadas',
    description: 'Conheça a produção intelectual do Dr. Cláudio Henrique de Castro. Mais de 2.000 volumes no acervo e obras publicadas em Direito Empresarial e Constitucional.',
    openGraph: {
        title: 'Autor - Dr. Cláudio Henrique de Castro | Obras Publicadas',
        description: 'Conheça a produção intelectual do Dr. Cláudio Henrique de Castro. Mais de 2.000 volumes no acervo e obras publicadas em Direito Empresarial e Constitucional.',
        type: 'profile',
        images: [
            {
                url: '/og_autor.jpg', // Placeholder
                width: 1200,
                height: 630,
                alt: 'Dr. Cláudio Henrique de Castro - Autor',
            },
        ],
    },
};

export default function AutorPage() {


    const personJsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Cláudio Henrique de Castro",
        "jobTitle": "Advogado e Professor Universitário",
        "url": "https://www.drclaudiohenrique.com.br/autor",
        "sameAs": [
            "https://www.linkedin.com/in/claudiohenriquedecastro",
            "http://lattes.cnpq.br/1234567890"
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
            />

            <main className="bg-dark-900 min-h-screen">
                <LibrarySection />
                <RareBooksGallery />
            </main>
        </>
    );
}
