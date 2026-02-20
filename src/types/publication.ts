export type PublicationType =
    | "book"
    | "article"
    | "book_chapter"

export type ResearchLine =
    | "direito_romano"
    | "direito_administrativo"
    | "direito_constitucional"
    | "direito_digital"
    | "controle_publico"

export interface BasePublication {
    id: string
    title: string
    year: number
    type: PublicationType
    coAuthors?: string[]
    url?: string
}

export interface Book extends BasePublication {
    type: "book"
    publisher: string
    city?: string
    pages?: number
    coverImage?: string
    isbn?: string
    purchaseUrl?: string
    soldOut?: boolean
}

export interface Article extends BasePublication {
    type: "article"
    journal: string
    volume?: string
    pages?: string
    highlighted?: boolean
    researchLine: ResearchLine
}

export interface BookChapter extends BasePublication {
    type: "book_chapter"
    bookTitle: string
    publisher: string
    pages?: string
}

export type Publication = Book | Article | BookChapter;
