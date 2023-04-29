import { NextResponse } from 'next/server'
import createErrorResponse from '../../common/createErrorResponse'
import prisma from '@/prisma/prismaClient'

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const q = searchParams.get("q")
    const bookId = searchParams.get("book_id")
    const offset = searchParams.get("offset")
    const limit = searchParams.get("limit")
    const order = searchParams.get("order") || "desc"
    const sort = searchParams.get("sort") || "chapterNumber"
    const include = searchParams.get("include")

    if (!bookId) {
        return createErrorResponse("book not found", 404)
    }

    if (!Number(bookId)) {
        return createErrorResponse("book must be a number", 400)
    }
    if (!q) {
        return NextResponse.json([], { status: 200 })
    }


    try {
        const chapters = await prisma.chapter.findMany({
            where: {
                title: {
                    contains: q
                },
                bookId: +bookId
            },
            skip: offset ? +offset : undefined,
            take: limit ? +limit : undefined,
            select: {
                chapterNumber: true,
                title: true,
                bookId: true,
                createdAt: true,
                updatedAt: true,
                id: true,
                content: include === "content"
            },
            orderBy: {
                [sort]: order
            }
        })

        return NextResponse.json(chapters, { status: 200 })

    } catch (error: any) {
        console.log(error)
        return createErrorResponse(error.message)
    }
}