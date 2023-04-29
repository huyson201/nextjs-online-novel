
interface Slide {
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

interface Book {
    id: number,
    title: string,
    slug: string,
    image: string
    state: string
    createdAt: string
    updatedAt: string
    author: string
    content: string
    desc: string
    view_counts: number,
    categories: ICategory[]
    vip: 0 | 1
}