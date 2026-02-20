import { ProjectItem } from '@/schemas';

export const projectsData: ProjectItem[] = [
    {
        id: 1,
        title: "Reestruturação Societária Complexa",
        category: "Direito Empresarial",
        description: "Assessoria jurídica na fusão de dois grandes grupos empresariais do setor de tecnologia, envolvendo due diligence, elaboração de contratos e planejamento tributário.",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1600",
        technologies: ["Fusões & Aquisições", "Due Diligence", "Compliance"],
        categoryColor: "bg-gold-600",
        duration: "12 Meses",
        role: "Advogado Líder",
        features: [
            "Auditoria jurídica completa",
            "Redação de Acordo de Acionistas",
            "Planejamento Sucessório",
            "Negociação com Stakeholders"
        ],
        challenges: "Harmonizar interesses divergentes entre os sócios majoritários e garantir a conformidade regulatória em tempo recorde.",
        results: "Fusão concluída com sucesso, sem passivos ocultos e com estrutura societária otimizada para novos investimentos."
    },
    {
        id: 2,
        title: "Defesa em Ação Civil Pública",
        category: "Direito Civil",
        description: "Atuação estratégica na defesa de construtora em Ação Civil Pública envolvendo alegações de impacto ambiental e urbanístico.",
        image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1600",
        technologies: ["Direito Ambiental", "Urbanístico", "Processo Coletivo"],
        categoryColor: "bg-dark-700",
        duration: "18 Meses",
        role: "Defensor Principal",
        features: [
            "Análise técnica pericial",
            "Sustentação Oral no Tribunal",
            "Negociação de TAC",
            "Gestão de Crise"
        ],
        challenges: "Reverter liminar que paralisava a obra e demonstrar a regularidade do empreendimento perante o Ministério Público.",
        results: "Liminar revogada, obra entregue no prazo e celebração de acordo vantajoso para a empresa e a comunidade."
    },
    {
        id: 3,
        title: "Consultoria Patrimonial Familiar",
        category: "Direito de Família",
        description: "Planejamento sucessório e blindagem patrimonial para família empresária, visando a perenidade dos negócios e a proteção dos herdeiros.",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1600",
        technologies: ["Holding Familiar", "Testamentos", "Doações"],
        categoryColor: "bg-gold-800",
        duration: "6 Meses",
        role: "Consultor Jurídico",
        features: [
            "Criação de Holding",
            "Acordo de Sócios",
            "Governança Corporativa",
            "Planejamento Tributário"
        ],
        challenges: "Organizar patrimônio disperso e mediar conflitos geracionais sobre a gestão dos ativos.",
        results: "Estrutura de Holding implementada, reduzindo carga tributária em 40% e garantindo a sucessão pacífica."
    }
];
