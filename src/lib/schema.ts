export function generateLegalServiceSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'LegalService',
        name: 'Dr. Cláudio Henrique de Castro - Advocacia & Consultoria',
        description: 'Advocacia especializada com excelência acadêmica: Pós-Doutor em Ciências Histórico Jurídicas, Professor Universitário e Auditor do TCEPR.',
        url: 'https://web-adv-mu.vercel.app',
        logo: 'https://web-adv-mu.vercel.app/logo.png',
        image: 'https://web-adv-mu.vercel.app/og-image.jpg',
        telephone: '+55-11-3333-4444',
        email: 'contato@advocacia.com',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Av. Paulista, 1000',
            addressLocality: 'São Paulo',
            addressRegion: 'SP',
            postalCode: '01310-100',
            addressCountry: 'BR'
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: -23.5505,
            longitude: -46.6333
        },
        areaServed: {
            '@type': 'State',
            name: 'São Paulo'
        },
        priceRange: '$$',
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '09:00',
                closes: '18:00'
            }
        ],
        sameAs: [
            'https://www.linkedin.com/in/claudio-castro',
            'https://www.instagram.com/claudio.advocacia'
        ]
    };
}

export function generateAttorneySchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Dr. Cláudio Henrique de Castro',
        jobTitle: 'Advogado, Professor Universitário e Auditor do TCEPR',
        description: 'Pós-Doutor em Ciências Histórico Jurídicas pela Universidade de Lisboa, Professor Adjunto, Advogado desde 1996 e Auditor de Controle Externo do TCEPR. Expertise em Direito Administrativo, Civil, Penal e Tributário.',
        url: 'https://web-adv-mu.vercel.app',
        image: '/portrait.png',
        telephone: '+55-11-3333-4444',
        email: 'contato@advocacia.com',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Av. Paulista, 1000',
            addressLocality: 'São Paulo',
            addressRegion: 'SP',
            postalCode: '01310-100',
            addressCountry: 'BR'
        },
        worksFor: {
            '@type': 'LegalService',
            name: 'Dr. Cláudio Henrique de Castro - Advocacia & Consultoria'
        },
        alumniOf: [
            {
                '@type': 'EducationalOrganization',
                name: 'Faculdade de Direito da Universidade de Lisboa',
                description: 'Pós-Doutorado em Ciências Histórico Jurídicas'
            },
            {
                '@type': 'EducationalOrganization',
                name: 'Universidade Federal de Santa Catarina',
                description: 'Doutorado em Direito'
            },
            {
                '@type': 'EducationalOrganization',
                name: 'Universidade Federal do Paraná',
                description: 'Mestrado em Direito das Relações Sociais e Graduação em Direito'
            }
        ],
        memberOf: [
            {
                '@type': 'Organization',
                name: 'Ordem dos Advogados do Brasil'
            },
            {
                '@type': 'Organization',
                name: 'Universidade Tuiuti do Paraná',
                description: 'Professor Adjunto'
            },
            {
                '@type': 'Organization',
                name: 'Tribunal de Contas do Estado do Paraná',
                description: 'Auditor de Controle Externo - Área Jurídica'
            }
        ],
        knowsAbout: [
            'Ciências Histórico Jurídicas',
            'Direito Administrativo',
            'Direito Civil',
            'Direito Penal e Criminologia',
            'Direito das Relações Sociais',
            'Controle Externo',
            'Direito Tributário',
            'Direito de Família',
            'Direito Empresarial',
            'Direitos Humanos',
            'Direito Internacional',
            'Compliance e Integridade',
            'Governança Corporativa'
        ],
        sameAs: [
            'https://www.linkedin.com/in/claudio-castro',
            'https://www.instagram.com/claudio.advocacia'
        ]
    };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer
            }
        }))
    };
}
