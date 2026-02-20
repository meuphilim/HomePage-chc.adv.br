import { generateLegalServiceSchema, generateAttorneySchema, generateFAQSchema } from '@/lib/schema';
import Hero from '@/components/features/hero/Hero';
import About from '@/components/features/about/About';
import PracticeAreas from '@/components/features/practice-areas/PracticeAreas';

import ContactSection from '@/components/features/contact/ContactSection';


const faqs = [
  {
    question: "Em quais áreas o escritório atua?",
    answer: "Atuamos em Direito Administrativo, Direito Privado, Direito Penal, Direitos Humanos, Direito Internacional e Compliance & Integridade. Cada demanda é conduzida com rigor acadêmico e estratégia processual, respeitando as particularidades de cada ramo."
  },
  {
    question: "Como funciona a assessoria em Compliance e programas de integridade?",
    answer: "Estruturamos e revisamos programas de integridade corporativa, adequação à LGPD, mapeamento de riscos regulatórios e implantação de políticas de governança. A abordagem é preventiva e integrada ao controle público, visando proteger a instituição e seus gestores."
  },
  {
    question: "É possível resolver disputas sem recorrer ao Judiciário?",
    answer: "Sim. Sempre que adequado, priorizamos mediação, conciliação e arbitragem como vias extrajudiciais, por serem mais ágeis, econômicas e capazes de preservar patrimônio e relações institucionais."
  },
  {
    question: "O escritório atua na defesa de direitos fundamentais perante órgãos internacionais?",
    answer: "Sim, atuamos na proteção de direitos fundamentais perante instâncias nacionais e organismos internacionais, assegurando o cumprimento de tratados e a dignidade da pessoa humana em casos de alta complexidade."
  },
  {
    question: "Como é garantido o sigilo das informações?",
    answer: "O sigilo profissional é absoluto, conforme o Código de Ética da OAB. Todas as informações são tratadas com total confidencialidade, e adotamos medidas rigorosas de segurança em conformidade com a LGPD."
  },
  {
    question: "O atendimento é realizado em todo o território nacional?",
    answer: "Sim. Realizamos atendimento direto e personalizado em todo o Brasil, inclusive em colaboração com outros escritórios quando a demanda exige alta especialização técnica."
  }
];

export default function Home() {
  const legalServiceSchema = generateLegalServiceSchema();
  const attorneySchema = generateAttorneySchema();
  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      {/* Structured Data - JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(attorneySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Hero />
      <About />
      <PracticeAreas />
      <ContactSection />
    </>
  );
}
