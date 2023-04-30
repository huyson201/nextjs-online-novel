
interface PaginationResponse<T> {
    totalDoc: number,
    totalPages: number,
    currentPage: number,
    limit: number,
    next: boolean,
    previous: number,
    docs: T
}