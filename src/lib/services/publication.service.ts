import { Publication, Article, BasePublication, ResearchLine, Book } from "@/types/publication";
import { PUBLICATIONS_DATA } from "@/data/publications";

export interface PublicationService {
    getAll(): Promise<Publication[]>;
    getBooks(): Promise<Book[]>;
    getHighlightedArticles(): Promise<Article[]>;
    getByResearchLine(line: ResearchLine): Promise<Article[]>;
    getGroupedByYear(): Promise<Record<number, Publication[]>>;
}

export class MockPublicationService implements PublicationService {

    async getAll(): Promise<Publication[]> {
        // Simulating network delay
        return new Promise((resolve) => {
            setTimeout(() => resolve(PUBLICATIONS_DATA), 100);
        });
    }

    async getBooks(): Promise<Book[]> {
        const all = await this.getAll();
        return all
            .filter((pub): pub is Book => pub.type === "book")
            .sort((a, b) => b.year - a.year);
    }

    async getHighlightedArticles(): Promise<Article[]> {
        const all = await this.getAll();
        return all
            .filter((pub): pub is Article => pub.type === "article" && !!pub.highlighted)
            .sort((a, b) => b.year - a.year)
            .slice(0, 6);
    }

    async getByResearchLine(line: ResearchLine): Promise<Article[]> {
        const all = await this.getAll();
        return all
            .filter((pub): pub is Article => pub.type === "article" && pub.researchLine === line)
            .sort((a, b) => b.year - a.year);
    }

    async getGroupedByYear(): Promise<Record<number, Publication[]>> {
        const all = await this.getAll();
        return all.reduce((acc, pub) => {
            if (!acc[pub.year]) {
                acc[pub.year] = [];
            }
            acc[pub.year].push(pub);
            return acc;
        }, {} as Record<number, Publication[]>);
    }
}

export const publicationService = new MockPublicationService();
