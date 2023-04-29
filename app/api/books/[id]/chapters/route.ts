import createErrorResponse from "@/app/api/common/createErrorResponse";
import prisma from "@/prisma/prismaClient";
import { NextResponse } from 'next/server'

interface Props {
    params: {
        id: string
    }
}

export async function GET(request: Request, { params }: Props) {
    const { searchParams } = new URL(request.url)
    const offset = searchParams.get("offset")
    const limit = searchParams.get("limit")
    const order = searchParams.get("order") || "desc"
    const sort = searchParams.get("sort") || "chapterNumber"
    const include = searchParams.get("include")

    if (!Number(params.id)) {
        return createErrorResponse("id must be a number", 400)
    }

    if (offset && !Number(offset)) {
        return createErrorResponse("offset must be a number", 400)
    }

    if (limit && !Number(limit)) {
        return createErrorResponse("limit must be a number", 400)
    }



    try {
        const chapters = await prisma.chapter.findMany({
            where: {
                bookId: +params.id
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

        return NextResponse.json(chapters || [], { status: 200 })
    } catch (error) {
        console.log(error)
        return createErrorResponse(error)
    }
}