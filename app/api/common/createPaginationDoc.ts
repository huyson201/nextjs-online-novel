

/**
 *  
 * @param totalDoc 
 * @param page 
 * @param limit 
 * @returns {totalDoc, totalPages, currentPage, next, previous}
 */
const createPaginationDoc = (totalDoc: number, page: number, limit: number) => {
    let previous: boolean = false
    let next: boolean = false
    const totalPages = Math.ceil(totalDoc / limit)

    if (page > 1) {
        previous = true
    }

    if (page < totalPages) {
        next = true
    }

    return {
        totalDoc,
        totalPages,
        currentPage: page,
        limit,
        previous,
        next
    }
}

export default createPaginationDoc