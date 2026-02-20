import { Metadata } from "next";
import { publicationService } from "@/lib/services/publication.service";
import PublicationsHero from "@/components/features/publications/PublicationsHero";
import PublicationsSummary from "@/components/features/autor/PublicationsSummary";
import BooksSection from "@/components/features/publications/BooksSection";
import HighlightedArticles from "@/components/features/publications/HighlightedArticles";
import ResearchLines from "@/components/features/publications/ResearchLines";
import FullProductionAccordion from "@/components/features/publications/FullProductionAccordion";
import { Book, BookChapter } from "@/types/publication";

export const metadata: Metadata = {
    title: "Produção Acadêmica | Dr. Cláudio Henrique de Castro",
    description: "Conheça os livros, artigos e linhas de pesquisa do Dr. Cláudio Henrique de Castro. Mais de 30 anos de contribuição ao pensamento jurídico.",
    keywords: ["livros jurídicos", "artigos direito administrativo", "produção acadêmica", "direito romano", "dragão do mar"],
};

export default async function PublicationsPage() {
    const [highlightedArticles, allArticles] = await Promise.all([
        publicationService.getHighlightedArticles(),
        publicationService.getAll()
    ]);

    const books = allArticles.filter(p => p.type === 'book') as Book[];
    const chapters = allArticles.filter(p => p.type === 'book_chapter') as BookChapter[];
    const articlesOnly = allArticles.filter(p => p.type === 'article') as any[];

    // Group Books by Year
    const booksByYearMap = new Map<number, string[]>();
    books.forEach(book => {
        const citation = `${book.title}. ${book.city || 'Curitiba'}: ${book.publisher}, ${book.year}.`;
        if (!booksByYearMap.has(book.year)) {
            booksByYearMap.set(book.year, []);
        }
        booksByYearMap.get(book.year)?.push(citation);
    });

    const booksByYear = Array.from(booksByYearMap.entries())
        .sort((a, b) => b[0] - a[0])
        .map(([year, items]) => ({ year, items }));

    // Group Chapters by Year
    const chaptersByYearMap = new Map<number, { title: string }[]>();
    chapters.forEach(chapter => {
        const citation = `${chapter.title}. In: ${chapter.bookTitle}. ${chapter.year}.`;
        if (!chaptersByYearMap.has(chapter.year)) {
            chaptersByYearMap.set(chapter.year, []);
        }
        chaptersByYearMap.get(chapter.year)?.push({ title: citation });
    });

    const chaptersByYear = Array.from(chaptersByYearMap.entries())
        .sort((a, b) => b[0] - a[0])
        .map(([year, items]) => ({ year, items }));

    return (
        <main className="min-h-screen bg-dark-900">
            <PublicationsHero />


            <HighlightedArticles articles={highlightedArticles} />

            <ResearchLines articles={articlesOnly} />

            <PublicationsSummary
                books={booksByYear}
                chapters={chaptersByYear}
                articlesCount={2290}
                mediaCount={187}
            />
            {/* <FullProductionAccordion publications={allArticles} /> */}
        </main>
    );
}
