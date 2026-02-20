import CareerTimeline from '@/components/features/career/CareerTimeline';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Trajetória Profissional | Dr. Cláudio Henrique de Castro',
    description: 'Conheça a trajetória acadêmica e profissional do Dr. Cláudio Henrique de Castro: Pós-Doutor em Ciências Histórico Jurídicas, Professor, Advogado e Auditor do TCEPR.',
};

export default function CareerPage() {
    return (
        <div className="pt-24 min-h-screen bg-dark-900">
            <CareerTimeline />
        </div>
    );
}
