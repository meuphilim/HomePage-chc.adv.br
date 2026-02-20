import { Metadata } from "next";
import { publicationService } from "@/lib/services/publication.service";
import BooksSection from "@/components/features/publications/BooksSection";
import PublicationsHero from "@/components/features/publications/PublicationsHero";

export const metadata: Metadata = {
    title: "Livros Publicados | Dr. Cláudio Henrique de Castro",
    description: "Conheça os livros publicados pelo Dr. Cláudio Henrique de Castro, obras essenciais para o Direito Público e Administrativo.",
};

export default async function BooksPage() {
    const books = await publicationService.getBooks();

    return (
        <main className="min-h-screen bg-dark-900">
            <PublicationsHero />
            <BooksSection books={books} />
        </main>
    );
}
