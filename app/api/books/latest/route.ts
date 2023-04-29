import { NextResponse } from "next/server";
import createErrorResponse from "../../common/createErrorResponse";
import prisma from "@/prisma/prismaClient";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const page = searchParams.get("page") || 1
    const limit = searchParams.get("limit") || 10

    if (!Number(page)) {
        return createErrorResponse("page must be a number", 400)
    }

    if (!Number(limit)) {
        return createErrorResponse("limit must be a number", 400)
    }

    const startIndex = ((+page) - 1) * (+limit)

    try {
        const promiseTotalDoc = prisma.book.count()
        const promiseBooks = prisma.book.findMany({
            skip: startIndex,
            take: +limit,
            orderBy: {
                updatedAt: "desc"
            },
            include: {
                categories: {
                    select: {
                        id: true,
                        name: true,
                        slug: true
                    }
                }
            }
        })

        const [books, totalDoc] = await Promise.all([promiseBooks, promiseTotalDoc])

        const paginationInfo = getPaginationInfo(totalDoc, +page, +limit)


        return NextResponse.json({ ...paginationInfo, docs: books }, { status: 200 })
    } catch (error) {
        return createErrorResponse(error)
    }
}

/**
 *  
 * @param totalDoc 
 * @param page 
 * @param limit 
 * @returns {totalDoc, totalPages, currentPage, next, previous}
 */
const getPaginationInfo = (totalDoc: number, page: number, limit: number) => {
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
        previous,
        next
    }
}