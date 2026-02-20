
export interface Book {
    id: string;
    title: string;
    subtitle?: string;
    description: string;
    coverImage: string;
    year: number;
    purchaseUrl: string;
}

export const books: Book[] = [
    {
        id: '1',
        title: "Teoria Geral do Estado e da Constituição",
        subtitle: "Uma análise contemporânea das estruturas de poder",
        description: "Obra fundamental que revisita os conceitos clássicos da Teoria do Estado à luz das transformações sociais e tecnológicas do século XXI. Indispensável para acadêmicos e constitucionalistas.",
        coverImage: "/images/books/TeoriaGeraldoEstadodaConstituição.jpg", // Placeholder until real image
        year: 2024,
        purchaseUrl: "https://amazon.com.br"
    },
    {
        id: '2',
        title: "Direito Empresarial Aplicado",
        subtitle: "Governança, Compliance e M&A",
        description: "Um manual prático e teórico sobre os desafios jurídicos das grandes corporações. Aborda desde a constituição societária até complexas operações de fusões e aquisições.",
        coverImage: "/images/books/direito-empresarial.jpg", // Placeholder
        year: 2023,
        purchaseUrl: "https://amazon.com.br"
    },
    {
        id: '3',
        title: "Hermenêutica Jurídica Avançada",
        subtitle: "Diálogo com os cânones da ciência do direito",
        description: "Estudo aprofundado sobre os métodos de interpretação do Direito, com foco na jurisprudência dos tribunais superiores e na segurança jurídica.",
        coverImage: "/images/books/hermeneutica.jpg", // Placeholder
        year: 2021,
        purchaseUrl: "https://amazon.com.br"
    }
];
