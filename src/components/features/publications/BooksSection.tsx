import { Book } from "@/types/publication";
import PublicationCard from "./PublicationCard";
import { SectionContainer } from "@/components/ui/SectionContainer";

interface BooksSectionProps {
    books: Book[];
}

export default function BooksSection({ books }: BooksSectionProps) {
    if (!books || books.length === 0) return null;

    return (
        <section className="py-20 bg-dark-900 relative">
            <SectionContainer>
                <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mb-4">
                            Livros Publicados
                        </h2>
                        <p className="text-gray-400 max-w-xl">
                            Obras essenciais para compreender o Direito Público e Administrativo contemporâneo.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {books.map((book) => (
                        <PublicationCard key={book.id} publication={book} />
                    ))}
                </div>
            </SectionContainer>
        </section>
    );
}
