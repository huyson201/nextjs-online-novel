import prisma from "@/prisma/prismaClient";
import createErrorResponse from "../../common/createErrorResponse";
import { BookState } from "@/types/Book";
import createPaginationDoc from "../../common/createPaginationDoc";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const bookState: BookState = "completed"

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
        const promiseTotalDoc = prisma.book.count({ where: { state: bookState } })
        const promiseBooks = prisma.book.findMany({
            where: {
                state: bookState
            },
            include: {
                categories: {
                    select: {
                        id: true,
                        slug: true,
                        name: true
                    }
                }
            },
            orderBy: {
                updatedAt: "desc"
            },
            skip: startIndex,
            take: +limit
        })

        const [books, totalDoc] = await Promise.all([promiseBooks, promiseTotalDoc])

        const paginationInfo = createPaginationDoc(totalDoc, +page, +limit)
        return NextResponse.json({ ...paginationInfo, docs: books }, { status: 200 })
    } catch (error) {
        return createErrorResponse(error)
    }

}