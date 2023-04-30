export type BookState = "in progress" | "completed"
export type PersonState = string | "updating"

export interface Slide {
    id: number,
    bookId: number,
    bannerImg: string,
    createdAt: string,
    updatedAt: string,
    book: {
        id: number,
        slug: string
    }
}

export interface Book {
    id: number,
    title: string,
    slug: string,
    image: string
    state: BookState
    createdAt: string
    updatedAt: string
    author: PersonState
    translator: PersonState
    content: string
    desc: string
    view_counts: number,
    categories: ICategory[]
    vip: 0 | 1
}